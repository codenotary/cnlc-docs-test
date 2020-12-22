---
title: Managing Ledgers
---

-------

This section describes how to manage an existing Ledger using the features offered by CodeNotary Ledger Compliance®.

_Topics on this page..._

- [Ledgers page](help/manage-ledger#ledgers-page)
- [Ledger management features](help/manage-ledger#ledger-management-features)

## Ledgers page

The *Ledgers* page displays a searchable (by name), paginated table of all ledgers in the system.

The top-level *Ledgers* page lists all the ledgers currently defined in the system, along with usage information.

<v-img src="/alt_ledger_annot.png" alt="disk usage" align="left"></v-img>

![](assets\images\alt_ledger_annot.png)

By clicking the **Actions** icon, privileged users can enable/disable a ledger. When a ledger is disabled, SDK users cannot post transactions to it.  

Clicking on a ledger name takes you to its Dashboard page.

#### Ledger dashboard

When you click a ledger from the Ledgers page, the Ledger Dashboard opens.

Like the [Home page](/help/overall-status), the Ledger Dashboard displays status, messages and selected KPIs. But instead of system-wide information, it displays only that specific to the selected ledger. 

<v-img src="/alt_ledger_dash.png" alt="disk usage" align="left"></v-img>

![](assets\images\alt_ledger_dash.png)

Other Ledger statistics are shown on the page, such as the number of Ledger entries, Ledger size on disk, last data insertion time and the number of active data sources.

Ledger management functions are accessed from the tabs along the top of the page.

###### *Also on the dashboard...*

1. The Ledger selector dropdown in the upper left lets you switch from one ledger to another.
2. Tampering alerts and messages are displayed if the ledger has been tampered with or if there any diagnostic messages related to the current ledger. Clicking on the messages box will take you to the
   [Messages and Notifications](/help/messages) tab.
3. *Writes over time* shows the most recent write operations in the current ledger.

## Ledger management features

After a ledger is created, you can change its name, enable/disable it, generate new API keys or delete keys no longer in use. To access management tools, select the appropriate tab at the top of the page.

| Function                                                    | Tab               |                                                          |
| ----------------------------------------------------------- | ----------------- | -------------------------------------------------------- |
| [Managing API keys](help/manage-ledger#managing-API-keys)   | *API Keys*        | View existing API keys for the selected ledger.          |
| [Querying a ledger](help/manage-ledger#querying-a-ledger)   | *Query Ledger*    | Query and transactions in the selected ledger.           |
| [Audit report](help/manage-ledger#audit-report)             | *Audit Report*    | Create an audit report of events for the current ledger. |
| [Renaming a ledger](help/manage-ledger#renaming-a-ledger)   | *Ledger Settings* | Change the ledger name as it appears in the UI.          |
| [Exporting a ledger](help/manage-ledger#exporting-a-ledger) | *Export*          | Export ledger data to a JSON file.                       |

#### Managing API keys

The *API Keys* tab list every API configured for the selected ledger --  its name, type (SDK, CI/CD, Postgres), and most recent usage date. You can have multiple API keys for the same ledger. That way you can assign a unique key to each application when you have more than one accessing the same ledger. 

By clicking the **Actions** icon you can add new keys, get the value for existing keys, delete a key or show the Signer ID (for CI/CD keys).

---

**Caution**: Deleting an API Key here will prevent any application currently using it from authenticating with the API.

---

To create a new API key by clicking on "Create API Key" and providing an API Key name. *Only alphanumeric characters, plus dash and underscore ('-', '_') are valid.*

After creating your API key, you can copy it or download to a file on your local system.

<v-img src="/alt_apikey_gen.png" alt="" align="left"></v-img>

![](assets\images\alt_apikey_gen.png)

To copy the API Key string to the clipboard, click the copy icon to the right of the key.

To download the key as a file, click the **Download API Key** button.

---

**NOTE** *API key value can be recovered later using the "Retrieve API Key" action in the list of a ledger API keys.*

---

#### Querying a Ledger

While the SDK allows you to query ledger values based on a (lookup) key, the *Query Ledger* tab lets you query ledger contents directly through the UI. The query process is is discussed in more detail on the [*Query Ledger data page*](/help/query-ledger) .

<v-img src="/alt_query_ldgr_wgt_annot.png" alt="" align="left"></v-img>




![](assets\images\alt_query_ldgr_wgt_annot.png)

#### Audit report

Audit report lets you generate a PDF report containing the status of the current Ledger and
CodeNotary Ledger Compliance instance.

Report generation requires to select start and end time of interest for displaying the relevant reporting data.

<v-img src="/alt_aud_rept_main.png" alt="" align="left"></v-img>


![](assets\images\alt_aud_rept_main.png)

##### Running Audit Reports

Audit reports let you see the compete list of transactions for the selected period.

1. Select the desired time interval.
2. Click the **Generate report** button to add a new report to the list that includes all events up to now (within the most recent 5 minutes).
3. Click the **Download** button for that new report to save the PDF to your local system.

For more about Audit reports and what they contain, see the [*Using Audit Reports* page](/help/use-audit-reports)

#### Renaming a Ledger

The *Ledger Settings* tab lets you rename an existing ledger. 

<v-img src="/alt_ldgr_set_dlg.png" alt="" align="left"></v-img>
![](assets\images\alt_ldgr_set_dlg.png)

Enter the new name in the text box then click the **Update ledger** button.

Note that this has no effect on SDK users. It merely changes the name of the ledger as displayed in the UI.

#### Export Ledger

The Export ledger function lets you download ledger data as a JSON file.

After clicking the *Export* tab from the ledger dashboard, a list view appears, showing previous exports for the current ledger and the timeframe each represents. 

<v-img src="/alt_ldgr_export_main.png" alt="" align="left"></v-img>
![](assets\images\alt_ldgr_export_main.png)

##### Download an existing export

You can download any previously exported file again by clicking the download icon <v-img src="/alt_dnload_icn.png" alt=""></v-img>![](assets\images\alt_dnload_icn.png) in the *Actions* column on the far right.

##### Create a new export

Click the **Export ledger** button on the upper right to create a new download that includes all current data.

A new entry is created at the top of the list. The *Status* column indicates when the file is ready for download. It will first display "running" as the system creates the file. When *Status* changes to "finished" the download icon appears. 

Note that larger files will take longer to create.

| [<< Previous](/help/create-ledger) | [Next>>](/help/use-ledger) |
| ---------------------------------- | -------------------------: |
| *Creating a Ledger*                |            *Using the SDK* |


