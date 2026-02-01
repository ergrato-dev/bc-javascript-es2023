# Autocommit Scripts

## 📋 What?

Automated commit system using Conventional Commits that runs every 5 minutes on Fedora 43.

## 🎯 For?

- **Track progress**: Keep incremental development history
- **Prevent data loss**: Automatic backups every 5 minutes
- **Maintain quality**: Consistent commit messages following conventions
- **Save time**: No need to manually commit frequently

## 💥 Impact?

- ✅ Never lose work due to forgotten commits
- ✅ Detailed commit history for learning and review
- ✅ Professional commit messages automatically generated
- ✅ Focus on coding, not on version control management

---

## 🚀 Quick Start

### Option 1: Automated Installation

```bash
# Run the installer
./_scripts/install-cron.sh
```

### Option 2: Manual Installation

```bash
# 1. Make script executable
chmod +x _scripts/autocommit.sh

# 2. Edit crontab
crontab -e

# 3. Add this line:
*/5 * * * * /home/epti/Documents/epti-dev/bc-channel/bc-javascript-es2023/_scripts/autocommit.sh >> /home/epti/Documents/epti-dev/bc-channel/bc-javascript-es2023/_scripts/autocommit.log 2>&1

# 4. Save and exit
```

---

## 📝 Commit Message Format

The script automatically generates commits following Conventional Commits:

```
<type>(<scope>): <description>

What: <what changed>
For: Track incremental development progress
Impact: Ensures continuous backup and detailed history
```

### Commit Types

| Type    | When                  | Example                         |
| ------- | --------------------- | ------------------------------- |
| `feat`  | New files created     | `feat(week-05): add 3 files`    |
| `docs`  | Documentation changes | `docs(readme): update 1 files`  |
| `chore` | Config/maintenance    | `chore(config): update 2 files` |
| `style` | Asset changes         | `style(assets): update 1 files` |
| `test`  | Test files            | `test(week-10): update 2 files` |

### Scopes

- `week-XX`: Week-specific changes
- `scripts`: Changes in _scripts/
- `docs`: Changes in _docs/
- `config`: Root configuration files
- `general`: Other changes

---

## 📁 Files

| File              | Purpose                                      |
| ----------------- | -------------------------------------------- |
| `autocommit.sh`   | Main script that detects and commits changes |
| `install-cron.sh` | Automated installer for the cron job         |
| `crontab.conf`    | Cron configuration reference                 |
| `autocommit.log`  | Log file (auto-generated)                    |
| `README.md`       | This file                                    |

---

## ⚙️ Configuration

### Change Frequency

Edit the cron schedule in `crontab.conf` or directly in crontab:

```bash
# Every 5 minutes (default)
*/5 * * * * /path/to/autocommit.sh

# Every 10 minutes
*/10 * * * * /path/to/autocommit.sh

# Every hour
0 * * * * /path/to/autocommit.sh
```

### Enable Auto-Push

Uncomment these lines in `autocommit.sh`:

```bash
# if git push origin main 2>&1 | tee -a "${LOGFILE}"; then
#     log_message "${GREEN}Successfully pushed to remote${NC}"
# else
#     log_message "${YELLOW}WARNING: Push failed or no remote configured${NC}"
# fi
```

---

## 🕐 Cron Schedule

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of week (0 - 6) (Sun to Sat)
│ │ │ │ │
* * * * * command to execute
```

### Examples

```bash
*/5 * * * *   # Every 5 minutes
0 * * * *     # Every hour
0 0 * * *     # Every day at midnight
0 9-17 * * *  # Every hour from 9 AM to 5 PM
```

---

## 🔧 Troubleshooting

### Check if cron is running

```bash
sudo systemctl status crond
```

### Start/enable cron service

```bash
sudo systemctl enable --now crond
```

### View installed cron jobs

```bash
crontab -l
```

### View logs

```bash
# Real-time log viewing
tail -f _scripts/autocommit.log

# View last 50 lines
tail -n 50 _scripts/autocommit.log

# Search for errors
grep ERROR _scripts/autocommit.log
```

### Test script manually

```bash
./_scripts/autocommit.sh
```

### Remove cron job

```bash
crontab -e
# Delete the autocommit line and save
```

### Common Issues

**Issue**: Script doesn't run
- Check if crond service is running: `sudo systemctl status crond`
- Verify script is executable: `ls -l _scripts/autocommit.sh`
- Check cron logs: `sudo journalctl -u crond`

**Issue**: No commits being made
- Check if there are actual changes: `git status`
- Run script manually to see errors: `./_scripts/autocommit.sh`
- Check log file: `cat _scripts/autocommit.log`

**Issue**: Permission denied
- Make script executable: `chmod +x _scripts/autocommit.sh`
- Check file permissions: `ls -l _scripts/`

---

## 📊 Example Output

### Successful Commit

```
[2025-12-18 14:35:00] Starting autocommit process...
[2025-12-18 14:35:00] Successfully committed 3 files
[2025-12-18 14:35:00] Type: docs, Scope: week-05
[2025-12-18 14:35:00] Summary: 2 modified, 1 added
[2025-12-18 14:35:00] Autocommit process completed
```

### No Changes

```
[2025-12-18 14:40:00] Starting autocommit process...
[2025-12-18 14:40:00] No changes to commit
```

---

## ⚠️ Important Notes

1. **Git Repository Required**: Script only works in initialized git repositories
2. **Auto-Push Disabled**: By default, commits are local only. Enable auto-push if needed.
3. **Log Rotation**: Consider rotating logs if they grow too large
4. **Network Required**: If auto-push is enabled, ensure network connectivity

---

## 🎓 For Bootcamp Instructors

### Why Autocommit?

- **Student Focus**: Students focus on learning, not on remembering to commit
- **Progress Tracking**: Easy to see student progress throughout the week
- **Recovery**: Students can recover lost work from any point
- **Best Practices**: Teaches importance of frequent commits

### Customization

Modify `autocommit.sh` to:
- Change commit message templates
- Add custom scopes for your bootcamp structure
- Integrate with LMS or tracking systems
- Add notifications

---

*Última actualización: Diciembre 2025*
