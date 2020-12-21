---
title: Managing the Appliance 
---

-------
The Manage page provides a set of administration tools to help you manage the CNLC platform.

###### _Topics on this page..._

- [The Manage page](help/manage#the-manage-page)

- [Using management tools](help/manage#using-management-tools)

## The Manage page

All system admin functions, from backup to logging and licensing, are available under tabs on the *Manage* page.

##### System management tools 

| Tab                                                         | Action                                                     |
| ----------------------------------------------------------- | ---------------------------------------------------------- |
| [Email notifications](help/manage#email-notifications)      | Configure outbound email notifications of system messages. |
| [Logging](help/manage#logging)                              | Export or read system logs.                                |
| [License](help/manage#license)                              | Apply or update your CNLC user license.                    |
| [Backup](help/manage#backup)                                | Set automatic ledger backups.                              |
| [Maintenance](help/manage#maintenance)                      | Restart the system, or inhibit ledger transactions.        |
| [Appliance  Information](help/manage#appliance-information) | Selected system stats.                                     |
| [Patching](help/manage#patching)                            | Upload and apply a software patch.                         |
| [TLS configuration](help/manage#tls-configuration)          | Upload TLS configuration file.                             |

All options open a simple text form that lets you enter changes. 

## Using management tools

The options available under each tab are discussed in more detail below.

#### Email notifications

Configure outbound email notifications of system messages.

#### Logging

Define the URL, including port number, where system logs should be forwarded.

Press the **Save changes** button after modifying the text. 

<v-img src="/alt_logging_dlog.png" alt="" align="left"></v-img>
![](assets\images\alt_logging_dlog.png)

#### License

Lets you apply or update your CNLC user license.

You can paste the license string directly into the text box, or click the Select license file icon to load it from your local drive.

Click the **Update license** button when you're done.

<v-img src="/alt_lic_dlog.png" alt="" align="left"></v-img>
![](assets\images\alt_lic_dlog.png)

#### Backup

To set automatic ledger backups at a specified interval, click the **Manage scheduled backup** button.

To create a backup now, click the **Create an on-demand backup** button.

<v-img src="/alt_bakup_dlog.png" alt="" align="left"></v-img>


![](assets\images\alt_bakup_dlog.png)



After clicking Manage scheduled backup, the form below opens:

Set the backup interval, and enter your password to validate the change, then click the **Apply backup policy** button.

<v-img src="/alt_bakupsched_dlog.png" alt="" align="left"></v-img>
![](assets\images\alt_bakupsched_dlog.png)

#### Maintenance

This tab let's you reboot the platform, or put the system into maintenance mode to block SDK access while server maintenance tasks are performed.

To reboot, click the **Reboot appliance** button.

If maintenance mode is currently off, the only other option is to turn it on (inhibit ledger access) by clicking the **Turn ON maintenance mode** button. After maintenance is complete, click the **Turn OFF maintenance mode** button.

<v-img src="/alt_maint_dlog.png" alt="" align="left"></v-img>
![](assets\images\alt_maint_dlog.png)

#### Appliance  Information

This tab displays current system status. 

#### Patching

From the *Patching* tab you can apply a software patch from CodeNotary.

If CodeNotary sends you a patch file, click the **Start patch upload** button to open a file dialog and select it from your local drive. Only .zip, .rar, or .tar.gz files are valid.

<v-img src="/alt_patch_dlog.png" alt="" align="left"></v-img>

 ![](assets\images\alt_patch_dlog.png)

#### TLS configuration

Upload TLS configuration file.

<v-img src="/alt_tls_cfg_dlg.png" alt="" align="left"></v-img>


![](assets\images\alt_tls_cfg_dlg.png)



| [<< Previous](/help/messages) |      |
| ----------------------------- | ---: |
| *Messages and Notifications*  |      |


