---
title: Home -- System Status 
---

---

The *Home* page appears immediately after user login. It displays multiple indicators of system-wide status -- ledgers' status (like total instances and tamper alerts), and system indicators like total transactions posted, resource usage, and pending system messages.

The left-hand navigation panel provides links to every top-level page in the UI.

_Topics on this page..._

- [Home page indicators](#/help/home-page-indicators)
- [Navigation](#/help/navigation)

## Home page indicators

<v-img src="/Home.png" alt="Home"></v-img>

1. **Tampering Check**  

   The Ledger Compliance stack continually monitors entries for signatures of tampering -- data or cryptographic inconsistencies.  While *tampering* may indicate the data was intentionally changed, it may also just signal a hardware or software fault. 
   <v-img src="/alt_msg_notamper.png" alt="" align="right"> </v-img>![](assets\images\alt_msg_notamper.png)

   ###### Messages

   _No tampering detected_  

   This is the default message, indicating all ledgers have passed tamper tests.

   _Tampering detected_ 
Indicates the the cryptographic proof is invalid and data not consistent. This requires immediate attention.
   
   Please contact CodeNotary support if you need assistance troubleshooting a tampering message.

   **Messages**  Pending system notification and error messages are indicated here.

   Click the indicator to view unread messages.

   Messages can indicate mission critical events -- low disk space, high resource usage, authentication errors, component failures, or pending license expiration. 

   Be sure to monitor messages frequently.

3. **Ledger count**  Shows the current number of ledgers defined in the system, both active and inactive. 

   Click the box icon to go to the *Ledgers overview* page.

   <v-img src="/Home_ledger_total.png" alt="Ledger count"></v-img>

4. **+ Add ledger**  Quick link to create a new Ledger.
   <v-img src="/alt_Add_ledger_btn_sm.png" alt="" align="right"> </v-img>


5. **Writes over time**  Indicates the total number of entries written to any ledger in the last 6 hours.

6. **Disk usage**  Displays a bar graph of the free and used storage space for both system and ledger data.

   <v-img src="/alt_disk_usage_sm.png" alt="disk usage" align="right"></v-img>
   ![](assets\images\alt_disk_usage_sm.png)

## Navigation

The navigation panel on the left side of the screen appears on every page. It provides links to every top-level page in the system, and is available on all pages.

To minimize the navigation panel, click the **<** icon on the bottom edge.

### Main Pages

The top-level pages and subpages are organized as follows:

**Home**
The default page. Displays system status indicators, warnings, and pending message notification.

**Ledgers**
A tabular view of all ledgers configured in the system. Lets you add a new ledger, search ledgers by name, and select individual ledgers to see stats , generate new API keys, or perform various functions.

**Query Ledger**
A tabular view of previous queries along with a filtering tool to create new queries.

**Audit Report**
A tabular view of listing previously created audit files, downloadable in PDF format.

**Manage**
Tools for managing backups, maintenance, and other functions designed to support typical system admin tasks.

**Users**
A list of current users, and functionality to modify them or create new users.

**Messages**
System messages organized under tabs based on whether they have been read and acknowledged or not.

**Help**
These help pages.

**Developer Section**
Offers links to download SDKs and other interfaces to support access of the CNLC platform from your code.

-------



| [<< Previous](/help/introduction) | [Next>>](/help/create-ledger) |
| --------------------------------- | ----------------------------: |
| *Understanding the System*        |           *Creating a Ledger* |

-------



