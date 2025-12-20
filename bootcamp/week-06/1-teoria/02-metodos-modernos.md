# Métodos Modernos de String

## 🎯 Objetivos
- Manejar métodos ES6+ útiles para limpieza y formato.
- Aplicar replace/replaceAll con seguridad básica.

![replace vs replaceAll](../0-assets/02-replace-vs-replaceall.svg)

## 📋 Contenido
### Presencia y prefijos/sufijos
- `includes(sub, pos=0)`
- `startsWith(prefix, pos=0)`
- `endsWith(suffix, length=str.length)`

### Espacios y padding
- `trim`, `trimStart`, `trimEnd`
- `padStart(len, fill?)`, `padEnd(len, fill?)`

### Repetición y división
- `repeat(n)`
- `split(sep, limit?)` (usa RegExp para separadores complejos)

### Reemplazo
- `replace(busqueda, reemplazo)`
- `replaceAll(busqueda, reemplazo)` (usa literal string o RegExp con flag g)
- Reemplazo con función: `str.replaceAll(/foo/g, (match, ...groups) => ...)`

### Normalización y casing
- `normalize(form='NFC')` para tildes combinadas
- `toLowerCase`/`toUpperCase`; para sensibilidad a idioma, `localeCompare`

## ⚠️ Cuidados
- `replace` solo reemplaza primera coincidencia con string literal.
- Si usas RegExp en replaceAll, requiere flag `g`.
- Cuidado con datos de usuario en patrones: escapa o usa alternativas seguras.

## ✅ Checklist
- [ ] Uso correcto de replace vs replaceAll
- [ ] Padding aplicado para formateo
- [ ] Trim aplicado antes de validar
- [ ] Normalize considerado para tildes
