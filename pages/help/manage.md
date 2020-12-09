---
title: Manage CodeNotary Ledger Compliance
---

## Email notification

<v-img src="/manage-email.png" alt="Email"></v-img>

CodeNotary Ledger Compliance can use email notification to update and alert you

1. **Notification recipient** type the email addresses
2. and click **Add recipient**
3. Configure **SMTP settings** for Ledger Compliance to send emails to the notification recipients

## Logging

You can configure your Syslog target here, in the format *protocol://Syslog-Target:Port*.

<v-img src="/manage-syslog.png" alt="Syslog"></v-img>

Example: `udp://mysyslogserver:514`


## License

Without any license, CodeNotary Ledger Compliance runs in the Free edition, only supporting a single Ledger.

Please add the License Key here, either by copy paste (1) or file upload (2).

<v-img src="/manage-license.png" alt="License"></v-img>


## Backup

CodeNotary Ledger Compliance can backup all configuration and Ledger data on the appliance. 

<v-img src="/manage-backup.png" alt="Backup"></v-img>

You can either **schedule backups** (1) or create an **on demand backup** (2).

All backups can be found on the appliance in the `/srv/volumes/backup` directory. 

Please contact support@codenotary.com if you need to restore any backup. Due to security reasons we don't provide an UI based restore.

## Maintenance

---

> **Please use these operations carefully!**

---

Under the **Maintenance** tab you can **reboot** (1) the appliance or enable the **maintenance mode**.

Enabling Maintenance mode puts CodeNotary Ledger Compliance into read-only mode, prohibiting any data ingestion. 

<v-img src="/manage-maint.png" alt="Maintenance"></v-img>


## Appliance information

Find all current component versions of CodeNotary Ledger Compliance here. These are useful when selecting updates or working with the CodeNotary support.

<v-img src="/manage-info.png" alt="Appliance Information"></v-img>


## Patching

Any new CodeNotary Ledger Compliance software patch is installed using the **Start patch upload** button. After selecting the patch file, the patch is uploaded to the appliance and can be installed as a next step.

<v-img src="/manage-patch.png" alt="Patch Management"></v-img>

Please be aware that an appliance patch is rebooting the appliance.
