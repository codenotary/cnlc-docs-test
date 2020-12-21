---
title: Messages and Notifications 
---

-------
The CNLC platform reports critical system events and display them on the *Messages* page in tabular format. 

Users can see separate lists to distinguish active messages from those that have already been read and acknowledged.

###### _Topics on this page..._

- [How do you know there are new messages?](help/messages#how-do-you-know-there-are-new-messages-?)

- [The *Messages* page](help/messages#the-messages-page)

- [Message types](help/messages#message-types)

## How do you know there are new messages?

All new messages are displayed on the *Messages* page under the *Active messages* tab. When any new messages are waiting to be read, the UI alerts users in three different locations:

1. **Alert icon**![](assets\images\alt_bell_alert.png) The alert bell icon on the upper right of the status bar will display a flashing red dot above the bell.

2. **Home page**  The messages panel on the [Home page](/help/overall-status) turns red and indicates the number of messages waiting.
   
   <v-img src="/alt_msg_notif.png" alt="" align="left"></v-img>
   ![](assets\images\alt_msg_notif.png)
   
3. **[Ledger management page](/help/manage-ledger)**   For messages related to a particular ledger, the messages panel on the management page for that ledger red and indicates the number of messages waiting.

Additionally, the platform can see notification emails automatically through your SMTP server. Any number of recipients can be configured, and TO addresses are not constrained to users configured in the system.

## The Messages page

The *Messages* page consists of two tabs --  *Active messages* and *Acknowledged messages*. Messages listed on the *Active messages* tab have not yet been acknowledged by any user. 

After a user acknowledges  a particular message, the system shifts it from the unread messages table and lists it under the Acknowledged messages tab.

<v-img src="/alt_msg_main.png" alt="" align="left"></v-img>
![](assets\images\alt_msg_main.png)

###### Acknowledging a message

To acknowledge any message, simply click its **Acknowledge** button on the far right of the row.

###### View message detail

To see the message detail, click any data field in the row.

## Message types

The system categorizes messages into the following types.

- Tamper: suspected tampering ongoing on a ledger (a malicious user could have tried to edit or forge data).
- Application: issue with receiving data from an external source (plugin, SDK).
- License: license expiration warning.
- Memory: low memory warning.
- Disk: low disk space warning.
- CPU: high CPU usage warning.
- Container: unhealthy status for an application component.

For additional help understanding messages, please don't hesitate to contact us by email support@codenotary.com or chat with a support representative at https://codenotary.com. 

| [<< Previous](/help/user-management) | [Next>>](/help/manage) |
| ------------------------------------ | ---------------------: |
| *User Management*                    |     *Manage Appliance* |

-------


