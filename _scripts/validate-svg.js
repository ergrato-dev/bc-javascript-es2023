#!/usr/bin/env node

/**
 * SVG Text Bounds Validator
 *
 * Validates that text elements in SVG files don't overflow
 * the viewBox boundaries. Uses character width estimation.
 *
 * Usage:
 *   node validate-svg.js                    # Validate all SVGs in bootcamp
 *   node validate-svg.js path/to/file.svg   # Validate specific file
 *   node validate-svg.js --week 08          # Validate specific week
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, basename, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
  // Character width estimates (in pixels)
  charWidth: {
    monospace: 7.2, // For code text
    sansSerif: 7.5, // For labels
    sansSerifBold: 8.0, // For bold text
  },
  // Default font size if not specified
  defaultFontSize: 14,
  // Margin of error (pixels) - some tolerance for edge cases
  margin: 5,
  // Colors for terminal output
  colors: {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    dim: '\x1b[2m',
  },
};

// ============================================
// SVG PARSING
// ============================================

/**
 * Extract viewBox dimensions from SVG
 */
const parseViewBox = svgContent => {
  const match = svgContent.match(/viewBox=["']([^"']+)["']/);
  if (!match) return null;

  const [minX, minY, width, height] = match[1].split(/\s+/).map(Number);
  return { minX, minY, width, height };
};

/**
 * Extract all text elements with their attributes
 */
const parseTextElements = svgContent => {
  const textRegex = /<text([^>]*)>([^<]*)<\/text>/g;
  const texts = [];
  let match;

  while ((match = textRegex.exec(svgContent)) !== null) {
    const [fullMatch, attributes, content] = match;
    const text = {
      content: content.trim(),
      x: extractAttr(attributes, 'x', 0),
      y: extractAttr(attributes, 'y', 0),
      fontSize: extractFontSize(attributes),
      textAnchor: extractAttr(attributes, 'text-anchor', 'start'),
      fontFamily: extractFontFamily(attributes),
      fontWeight: extractAttr(attributes, 'font-weight', 'normal'),
      line: getLineNumber(svgContent, match.index),
    };
    texts.push(text);
  }

  return texts;
};

/**
 * Extract attribute value from attribute string
 */
const extractAttr = (attrs, name, defaultValue) => {
  const regex = new RegExp(`${name}=["']([^"']+)["']`);
  const match = attrs.match(regex);
  if (!match) return defaultValue;

  const value = match[1];
  return isNaN(Number(value)) ? value : Number(value);
};

/**
 * Extract font-size (handles inline and class-based)
 */
const extractFontSize = attrs => {
  // Check inline font-size
  const inlineMatch = attrs.match(/font-size=["'](\d+)/);
  if (inlineMatch) return Number(inlineMatch[1]);

  // Check class for common sizes
  const classMatch = attrs.match(/class=["']([^"']+)["']/);
  if (classMatch) {
    const className = classMatch[1];
    if (className.includes('title')) return 24;
    if (className.includes('subtitle')) return 14;
    if (className.includes('code')) return 12;
    if (className.includes('label')) return 13;
  }

  return CONFIG.defaultFontSize;
};

/**
 * Determine font family from attributes
 */
const extractFontFamily = attrs => {
  const classMatch = attrs.match(/class=["']([^"']+)["']/);
  if (classMatch && classMatch[1].includes('code')) {
    return 'monospace';
  }
  return 'sans-serif';
};

/**
 * Get line number for error reporting
 */
const getLineNumber = (content, index) => {
  const lines = content.substring(0, index).split('\n');
  return lines.length;
};

// ============================================
// VALIDATION
// ============================================

/**
 * Estimate text width based on content and font
 */
const estimateTextWidth = text => {
  const { content, fontSize, fontFamily, fontWeight } = text;

  // Remove emojis for width calculation (they're roughly square)
  const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]/gu;
  const emojis = (content.match(emojiRegex) || []).length;
  const textWithoutEmoji = content.replace(emojiRegex, '');

  let charWidth;
  if (fontFamily === 'monospace') {
    charWidth = CONFIG.charWidth.monospace;
  } else if (fontWeight === 'bold') {
    charWidth = CONFIG.charWidth.sansSerifBold;
  } else {
    charWidth = CONFIG.charWidth.sansSerif;
  }

  // Scale by font size ratio (base 12px)
  const scale = fontSize / 12;
  const textWidth = textWithoutEmoji.length * charWidth * scale;
  const emojiWidth = emojis * fontSize; // Emojis are roughly 1em

  return textWidth + emojiWidth;
};

/**
 * Calculate text bounds based on position and anchor
 */
const calculateTextBounds = text => {
  const width = estimateTextWidth(text);
  const { x, textAnchor } = text;

  let left, right;
  switch (textAnchor) {
    case 'middle':
      left = x - width / 2;
      right = x + width / 2;
      break;
    case 'end':
      left = x - width;
      right = x;
      break;
    default: // 'start'
      left = x;
      right = x + width;
  }

  return { left, right, width };
};

/**
 * Validate a single SVG file
 */
const validateSvg = (filePath, content) => {
  const viewBox = parseViewBox(content);
  if (!viewBox) {
    return [{ type: 'error', message: 'No viewBox found' }];
  }

  const texts = parseTextElements(content);
  const issues = [];

  for (const text of texts) {
    if (!text.content) continue; // Skip empty text

    const bounds = calculateTextBounds(text);
    const margin = CONFIG.margin;

    // Check right overflow
    if (bounds.right > viewBox.width + margin) {
      const overflow = Math.round(bounds.right - viewBox.width);
      issues.push({
        type: 'overflow-right',
        line: text.line,
        text: truncate(text.content, 40),
        x: text.x,
        textAnchor: text.textAnchor,
        estimatedRight: Math.round(bounds.right),
        viewBoxWidth: viewBox.width,
        overflow,
      });
    }

    // Check left overflow
    if (bounds.left < viewBox.minX - margin) {
      const overflow = Math.round(viewBox.minX - bounds.left);
      issues.push({
        type: 'overflow-left',
        line: text.line,
        text: truncate(text.content, 40),
        x: text.x,
        textAnchor: text.textAnchor,
        estimatedLeft: Math.round(bounds.left),
        overflow,
      });
    }
  }

  return issues;
};

/**
 * Truncate text for display
 */
const truncate = (str, maxLen) => {
  if (str.length <= maxLen) return str;
  return str.substring(0, maxLen - 3) + '...';
};

// ============================================
// FILE DISCOVERY
// ============================================

/**
 * Find all SVG files in a directory recursively
 */
const findSvgFiles = (dir, files = []) => {
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      findSvgFiles(fullPath, files);
    } else if (entry.endsWith('.svg')) {
      files.push(fullPath);
    }
  }

  return files;
};

// ============================================
// OUTPUT
// ============================================

const { colors } = CONFIG;

const log = {
  info: msg => console.log(`${colors.cyan}ℹ${colors.reset} ${msg}`),
  success: msg => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warning: msg => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: msg => console.log(`${colors.red}✗${colors.reset} ${msg}`),
};

const formatIssue = (issue, filePath) => {
  const file = basename(filePath);
  const loc = `${file}:${issue.line}`;

  if (issue.type === 'overflow-right') {
    return `  ${colors.dim}L${issue.line}${colors.reset} "${issue.text}"
       x=${issue.x}, anchor=${issue.textAnchor}
       ${colors.red}→ Desborda ${issue.overflow}px a la derecha${colors.reset} (estimado: ${issue.estimatedRight}px, viewBox: ${issue.viewBoxWidth}px)`;
  }

  if (issue.type === 'overflow-left') {
    return `  ${colors.dim}L${issue.line}${colors.reset} "${issue.text}"
       x=${issue.x}, anchor=${issue.textAnchor}
       ${colors.red}← Desborda ${issue.overflow}px a la izquierda${colors.reset}`;
  }

  return `  ${issue.message}`;
};

// ============================================
// MAIN
// ============================================

const main = () => {
  const args = process.argv.slice(2);
  const bootcampDir = join(__dirname, '..', 'bootcamp');

  let svgFiles = [];

  // Parse arguments
  if (args.length === 0) {
    // Validate all SVGs
    svgFiles = findSvgFiles(bootcampDir);
  } else if (args[0] === '--week') {
    // Validate specific week
    const week = args[1]?.padStart(2, '0');
    if (!week) {
      console.error('Usage: node validate-svg.js --week 08');
      process.exit(1);
    }
    const weekDir = join(bootcampDir, `week-${week}`);
    svgFiles = findSvgFiles(weekDir);
  } else {
    // Validate specific file(s)
    svgFiles = args.filter(f => f.endsWith('.svg'));
  }

  if (svgFiles.length === 0) {
    log.warning('No SVG files found');
    process.exit(0);
  }

  console.log(
    `\n${colors.cyan}🔍 Validando ${svgFiles.length} archivo(s) SVG...${colors.reset}\n`
  );

  let totalIssues = 0;
  let filesWithIssues = 0;

  for (const filePath of svgFiles) {
    const relativePath = relative(join(__dirname, '..'), filePath);
    const content = readFileSync(filePath, 'utf-8');
    const issues = validateSvg(filePath, content);

    if (issues.length > 0) {
      filesWithIssues++;
      totalIssues += issues.length;
      log.error(relativePath);
      issues.forEach(issue => console.log(formatIssue(issue, filePath)));
      console.log();
    } else {
      log.success(relativePath);
    }
  }

  // Summary
  console.log(`\n${'─'.repeat(50)}`);
  if (totalIssues === 0) {
    log.success(`Todos los SVGs válidos ✨`);
  } else {
    log.warning(`${totalIssues} problema(s) en ${filesWithIssues} archivo(s)`);
    console.log(
      `\n${colors.dim}Nota: Las estimaciones de ancho son aproximadas.`
    );
    console.log(`Verifica visualmente los archivos reportados.${colors.reset}`);
  }
  console.log();

  process.exit(totalIssues > 0 ? 1 : 0);
};

main();
