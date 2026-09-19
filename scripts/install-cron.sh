#!/bin/bash

# ============================================
# Install Autocommit Cron Job
# ============================================
# What: Automated installer for the autocommit cron job
# For: Quick setup on any Linux with cron (WSL2, Debian/Ubuntu, Fedora)
# Impact: Enables automatic commits every 5 minutes
# ============================================

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
AUTOCOMMIT_SCRIPT="${SCRIPT_DIR}/autocommit.sh"
CRON_LINE="*/5 * * * * ${AUTOCOMMIT_SCRIPT} >> ${SCRIPT_DIR}/autocommit.log 2>&1"

echo "╔════════════════════════════════════════════════════════╗"
echo "║   Autocommit Cron Job Installer                       ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Check if crontab is available
if ! command -v crontab &> /dev/null; then
    echo "❌ ERROR: crontab is not installed"
    echo "Install it with: sudo apt install cron   (Debian/Ubuntu/WSL2)"
    echo "             or: sudo dnf install cronie (Fedora)"
    exit 1
fi

# Check if the cron daemon is running (cron on Debian/Ubuntu/WSL2, crond on Fedora)
if ! pgrep -x cron >/dev/null && ! pgrep -x crond >/dev/null; then
    echo "⚠️  WARNING: cron daemon is not running"
    echo "   WSL2 / Debian / Ubuntu: sudo service cron start"
    echo "   Fedora / systemd:       sudo systemctl enable --now crond"
    echo "   The cron job will be installed anyway and will run once the daemon starts."
else
    echo "✅ cron daemon is running"
fi

# Make autocommit script executable
if [ ! -x "$AUTOCOMMIT_SCRIPT" ]; then
    echo "Making autocommit.sh executable..."
    chmod +x "$AUTOCOMMIT_SCRIPT"
    echo "✅ Script is now executable"
fi

# Check if cron job already exists
if crontab -l 2>/dev/null | grep -q "autocommit.sh"; then
    echo "⚠️  WARNING: Autocommit cron job already exists"
    echo "Current cron jobs:"
    crontab -l | grep autocommit.sh
    echo ""
    read -p "Do you want to replace it? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Installation cancelled"
        exit 0
    fi
    # Remove existing autocommit cron jobs
    crontab -l | grep -v "autocommit.sh" | crontab -
fi

# Add cron job
echo "Adding cron job..."
(crontab -l 2>/dev/null; echo "$CRON_LINE") | crontab -

if [ $? -eq 0 ]; then
    echo "✅ Cron job installed successfully!"
    echo ""
    echo "📋 Installed cron job:"
    echo "   $CRON_LINE"
    echo ""
    echo "ℹ️  The script will run every 5 minutes"
    echo "📄 Logs will be saved to: ${SCRIPT_DIR}/autocommit.log"
    echo ""
    echo "🔍 Useful commands:"
    echo "   View all cron jobs:  crontab -l"
    echo "   View logs:           tail -f ${SCRIPT_DIR}/autocommit.log"
    echo "   Remove cron job:     crontab -e (then delete the line)"
    echo "   Test script:         ${AUTOCOMMIT_SCRIPT}"
else
    echo "❌ ERROR: Failed to install cron job"
    exit 1
fi
