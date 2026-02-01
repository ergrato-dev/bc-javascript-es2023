#!/bin/bash

# ============================================
# Autocommit Script with Conventional Commits
# ============================================
# What: Automatically commits changes every 5 minutes
# For: Keep track of incremental progress during bootcamp development
# Impact: Ensures no work is lost and provides detailed commit history
# ============================================

# Configuration
REPO_PATH="/home/epti/Documents/epti-dev/bc-channel/bc-javascript-es2023"
LOGFILE="${REPO_PATH}/_scripts/autocommit.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to log messages
log_message() {
    echo "[${TIMESTAMP}] $1" | tee -a "${LOGFILE}"
}

# Function to detect commit type based on changes
detect_commit_type() {
    local changes="$1"

    # Check for new files (feat)
    if echo "$changes" | grep -q "^??"; then
        echo "feat"
        return
    fi

    # Check for documentation changes
    if echo "$changes" | grep -qi "README\|\.md\|docs/"; then
        echo "docs"
        return
    fi

    # Check for configuration files
    if echo "$changes" | grep -qi "\.json\|\.yml\|\.yaml\|\.config\|\.vscode"; then
        echo "chore"
        return
    fi

    # Check for test files
    if echo "$changes" | grep -qi "test\|spec\.js"; then
        echo "test"
        return
    fi

    # Check for asset files
    if echo "$changes" | grep -qi "\.svg\|\.png\|\.jpg\|_assets/"; then
        echo "style"
        return
    fi

    # Default to update
    echo "chore"
}

# Function to detect scope based on file paths
detect_scope() {
    local changes="$1"

    # Check for week-specific changes
    if echo "$changes" | grep -q "bootcamp/week-"; then
        local week=$(echo "$changes" | grep -o "week-[0-9]\+" | head -1)
        echo "$week"
        return
    fi

    # Check for scripts
    if echo "$changes" | grep -q "_scripts/"; then
        echo "scripts"
        return
    fi

    # Check for docs
    if echo "$changes" | grep -q "_docs/"; then
        echo "docs"
        return
    fi

    # Check for config files in root
    if echo "$changes" | grep -q "^[^/]*\.\(json\|yml\|yaml\|md\)$"; then
        echo "config"
        return
    fi

    echo "general"
}

# Function to generate commit message
generate_commit_message() {
    local type="$1"
    local scope="$2"
    local file_count="$3"
    local changes_summary="$4"

    # Main commit message
    local message="${type}(${scope}): update ${file_count} files"

    # Add body with what, for, impact
    local body="What: ${changes_summary}
For: Track incremental development progress
Impact: Ensures continuous backup and detailed history"

    echo -e "${message}\n\n${body}"
}

# Function to get changes summary
get_changes_summary() {
    local status_output="$1"
    local modified=$(echo "$status_output" | grep "^ M" | wc -l)
    local added=$(echo "$status_output" | grep "^??" | wc -l)
    local deleted=$(echo "$status_output" | grep "^ D" | wc -l)

    local summary=""
    [ $modified -gt 0 ] && summary="${modified} modified"
    [ $added -gt 0 ] && summary="${summary:+${summary}, }${added} added"
    [ $deleted -gt 0 ] && summary="${summary:+${summary}, }${deleted} deleted"

    echo "$summary"
}

# ============================================
# Main Script
# ============================================

log_message "Starting autocommit process..."

# Change to repository directory
cd "${REPO_PATH}" || {
    log_message "${RED}ERROR: Cannot access repository at ${REPO_PATH}${NC}"
    exit 1
}

# Check if it's a git repository
if [ ! -d ".git" ]; then
    log_message "${RED}ERROR: Not a git repository${NC}"
    exit 1
fi

# Check for changes
STATUS_OUTPUT=$(git status --porcelain)

if [ -z "$STATUS_OUTPUT" ]; then
    log_message "${YELLOW}No changes to commit${NC}"
    exit 0
fi

# Count files
FILE_COUNT=$(echo "$STATUS_OUTPUT" | wc -l)

# Detect commit type and scope
COMMIT_TYPE=$(detect_commit_type "$STATUS_OUTPUT")
COMMIT_SCOPE=$(detect_scope "$STATUS_OUTPUT")

# Get changes summary
CHANGES_SUMMARY=$(get_changes_summary "$STATUS_OUTPUT")

# Generate commit message
COMMIT_MESSAGE=$(generate_commit_message "$COMMIT_TYPE" "$COMMIT_SCOPE" "$FILE_COUNT" "$CHANGES_SUMMARY")

# Stage all changes
git add -A

# Commit with generated message
if git commit -m "$COMMIT_MESSAGE"; then
    log_message "${GREEN}Successfully committed ${FILE_COUNT} files${NC}"
    log_message "Type: ${COMMIT_TYPE}, Scope: ${COMMIT_SCOPE}"
    log_message "Summary: ${CHANGES_SUMMARY}"
else
    log_message "${RED}ERROR: Commit failed${NC}"
    exit 1
fi

# Optional: Push to remote (uncomment if desired)
# if git push origin main 2>&1 | tee -a "${LOGFILE}"; then
#     log_message "${GREEN}Successfully pushed to remote${NC}"
# else
#     log_message "${YELLOW}WARNING: Push failed or no remote configured${NC}"
# fi

log_message "Autocommit process completed"
exit 0
