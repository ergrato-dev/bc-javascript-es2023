#!/bin/bash

# ============================================
# Install Autocommit Cron Job
# ============================================
# What: Automated installer for the autocommit cron job
# For: Quick setup on Fedora 43
# Impact: Enables automatic commits every 5 minutes
# ============================================

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
AUTOCOMMIT_SCRIPT="${SCRIPT_DIR}/autocommit.sh"
CRON_LINE="*/5 * * * * ${AUTOCOMMIT_SCRIPT} >> ${SCRIPT_DIR}/autocommit.log 2>&1"

echo "╔════════════════════════════════════════════════════════╗"
echo "║   Autocommit Cron Job Installer for Fedora 43         ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Check if crond is installed
if ! command -v crond &> /dev/null; then
    echo "❌ ERROR: crond is not installed"
    echo "Install it with: sudo dnf install cronie"
    exit 1
fi

# Check if crond service is running
if ! systemctl is-active --quiet crond; then
    echo "⚠️  WARNING: crond service is not running"
    echo "Starting crond service..."
    sudo systemctl enable --now crond
    if [ $? -eq 0 ]; then
        echo "✅ crond service started successfully"
    else
        echo "❌ ERROR: Failed to start crond service"
        exit 1
    fi
else
    echo "✅ crond service is running"
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
