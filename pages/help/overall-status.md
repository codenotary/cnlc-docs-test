---
title: Home -- System Status 
---

STATUS: INITIAL REVISIONS edited:12/6/20, DB previous title "Home -- Overall Status"

---

The *Home* page appears immediately after login. It displays multiple indicators of system-wide status -- ledgers' status (like total instances and tamper alerts), and system indicators like total transactions posted, resource usage, and pending system messages.

The left-hand navigation panel provides links to every top-level page in the UI.

_Topics on this page..._

- [Home page indicators](#home-page-indicators)
- [Navigation](#navigation)

## Home page indicators

<v-img src="/Home.png" alt="Home"></v-img>

1. **Tampering Check**  

   The ??Ledger Compliance stack?? continually monitors entries for signatures of tampering -- data or cryptographic inconsistencies.  While *tampering* may indicate that someone intentionally changed data, it may also just mean there is a hardware or software fault. 

   ###### Messages

   _No tampering detected_  

   This is the default message, indicating all ledgers have passed tests.

   <v-img src="/alt_msg_notamper_sm.png" alt="No tampering detected"></v-img>

    _Tampering detected_ 
   Indicates the the cryptographic proof is invalid and data not consistent. This requires immediate attention.

   Please contact CodeNotary support if you need assistance troubleshooting a tampering message.

   <v-img src="/Home_tamper.png" alt="Tampering"></v-img>

2. **Messages**  Pending system notification and error messages are indicated here.
   
   Click the indicator to view unread messages.

   Messages can indicate mission critical events -- low disk space, high resource usage, authentication errors, component failures, or pending license expiration. 

   Be sure to monitor messages frequently.
   
   <v-img src="/Home_messages.png" alt="Messages"></v-img>
   
3. **Ledger count**  Shows the current number of ledgers defined in the system, both active and inactive. 

   Click the box icon to go to the *Ledgers overview* page.

   <v-img src="/Home_ledger_total.png" alt="Ledger count"></v-img>

4. **+ Add ledger**  Quick link to create a new Ledger.

   <v-img src="/add_ledger_btn.png" alt="Add a new ledger"></v-img>

5. **Writes over time**  Indicates the total number of entries written to any ledger in the last 6 hours.

   <v-img src="/Home_write_events.png" alt="write events"></v-img>

6. **Disk usage**  Displays a bar graph of the free and used storage space for both system and ledger data.

   <v-img src="/alt_disk_usage_sm.png" alt="disk usage"></v-img>

## Navigation

The navigation panel on the left side of the screen provides links to every top-level page in the system, and is available on all pages.

<v-img src="/alt_navbar_plain.png" alt="disk usage"></v-img>

To minimize the navigation panel, click the **<** icon on the bottom edge.

### Main Pages

The top-level pages and subpages are organized as follows:

Ledgers

Managing

TODO

-------



| [<< Previous](/help/introduction) | [Next>>](/help/create-ledger) |
| --------------------------------- | ----------------------------: |
| *Understanding the System*        |           *Creating a Ledger* |

-------



