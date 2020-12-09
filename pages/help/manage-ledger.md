---
title: Managing Ledgers
---

STATUS: ROUGH DRAFT REVISIONS edited:12/8/20, DB previous title "Manage a Ledger"

-------

_Topics on this page..._

- [Ledgers page](#ledgers-page)
- [Ledger management features](#ledger-management-features)
- [Managing API keys](#managing-API-keys)
- [Querying a ledger](#querying-a-ledger)

- [Exporting a ledger](#exporting-a-ledger)

## Ledgers page

The Ledgers page displays a searchable, paginated table of all ledgers in the system.

<v-img src="/alt_ledger_annot.png" alt="Ledger listing"></v-img>

The top-level *Ledgers* page lists all the ledgers currently defined in the system, along with usage information.

By clicking the **Actions** icon, privileged users can enable/disable a ledger. 

When a ledger is disabled, SDK users cannot post transactions to it.  

The user can navigate in the Ledger Dashboard by clicking on a ledger name.

## Ledger management features

After a ledger is created, you can change its name, enable/disable it, generate new API keys or delete an old one. 

Users can enable/disable existing ledgers This section describes how to manage an existing Ledger using the features offered by CodeNotary Ledger Compliance®.

### Running Audit Reports

Audit reports let you see the compete list of transactions for the selected period.

## Ledger dashboard

Like the Home page, the Ledger dashboard lists shows insights and details specific to the selected ledger.

<v-img src="/ledger-dashboard.png" alt="Ledger dashboard"></v-img>

1. The ??Ledger switcher?? allows to switch from one ledger to another quickly.
2. Tampering alerts and messages are displayed if the ledger has been tampered with or if there any diagnostic messages related to the current ledger. A click on the messages box will lead the user to the
[Messages and Notifications](/help/messages) tab.
3. *Writes over time* shows write operations in the current ledger during the last 6 hours.

Other Ledger statistics are shown in the page, such as the number of Ledger entries, Ledger size on disk, last data insertion time and the number of active data sources.

## Managing API Keys

The *API Keys* tab list every API configured for the selected ledger --  its name, type (SDK, CI/CD, Postgres), and most recent usage date.

By clicking the **Actions** icon you can add new keys, get the value for existing keys, delete a key or show the Signer ID (for CI/CD keys).

> :warning:**Caution**: Deleting an API Key here will prevent applications that use it from authenticating with the API.

<v-img src="/ledger-api-keys.png" alt="Api Keys"></v-img>

It is possible to create a new API key by clicking on "Create API Key" and providing an API Key name.

*Only alphanumeric characters, plus dash and underscore ('-', '_') are valid.*

<v-img src="/api-key-create1.png" alt="Api Key creation, step 1"></v-img>

Afterwards, API Key value can be copied to the clipboard or downloaded as a text file.

<v-img src="/api-key-create2.png" alt="Api Key creation, step 2"></v-img>

*API key value can be recovered later using the "Retrieve API Key" action in the list of a ledger API keys.*

## Querying a Ledger

While the SDK allows you to query ledger values based on a (lookup) key, the *Query Ledger* tab lets you query ledger contents directly through the UI. The query process is is discussed in more detail on the [Query Ledger data](/help/query-ledger) page.

## Audit report

Audit report section allows the creation of a PDF report containing the status of the current Ledger and
CodeNotary Ledger Compliance instance.

Report generation requires to select start and end time of interest for displaying the relevant reporting data.

**TODO insert final image here**

## Renaming a Ledger

The Ledger settings tab lets you rename an existing ledger. 

Enter the new name in the text box then
click the **Update Ledger** button.

<v-img src="/ledger-settings.png" alt="Ledger settings"></v-img>

## Export Ledger

The Export Ledger function lets you download ledger data as a JSON file.
You can view a list of previous exports for the current ledger.

<v-img src="/ledger-export.png" alt="Export Ledger"></v-img>

After some time, depending on the size of the ledger, the export will be available for download. This can be achieved by clicking the button marked as (2).



| [<< Previous](/help/create-ledger) |     [Next>>](*) |
| ---------------------------------- | --------------: |
| *Creating a Ledger*                | *Using the SDK* |

-------



