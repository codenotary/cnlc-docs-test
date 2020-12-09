---
title: Manage a Ledger
---

This section describes how to manage an existing Ledger using the features offered by CodeNotary Ledger Compliance®.

## Ledgers page

<v-img src="/disable-ledger.png" alt="Ledger listing"></v-img>

The Ledgers page lists all the ledgers currently defined in the appliance, along with usage information.
By clicking on the Actions button, a privileged user can disable a Ledger, i.e. making it not available for data
insertion.

The user can navigate in the Ledger Dashboard by clicking on a ledger name.

## Ledger dashboard

The Ledger dashboard lists shows insights and details about the current ledger.

<v-img src="/ledger-dashboard.png" alt="Ledger dashboard"></v-img>

1. The Ledger switcher allows to switch from one ledger to another quickly.
2. Tampering alerts and messages show if the ledger has been tampered with or if there any diagnostic messages
related to the current ledger. A click on the messages box will lead the user to the
[Messages and Notifications](/help/messages) tab.
3. Writes over time shows write operations in the current ledger during the last 6 hours.

Other Ledger statistics are shown in the page, such as the number of Ledger entries, Ledger size on disk, last
data insertion time and the number of active data sources.

## API Keys

The API Keys tab allows the user to add and manage a Ledger's API Keys.
For each API key available on a ledger, its name, type (SDK, CI/CD, Postgres), last usage is displayed.

By clicking on "Actions", it's possible to delete an API key, retrieve its value or show the Signer ID (in case
of CI/CD keys).

**Caution**: deleting an API Key will prevent applications using it to write data in the respective ledgers.

<v-img src="/ledger-api-keys.png" alt="Api Keys"></v-img>

It is possible to create a new API key by clicking on "Create API Key" and providing an API Key name.

*We recommend to avoid special characters for API Key name.*

<v-img src="/api-key-create1.png" alt="Api Key creation, step 1"></v-img>

Afterwards, API Key value can be copied to the clipboard or downloaded as a text file.

<v-img src="/api-key-create2.png" alt="Api Key creation, step 2"></v-img>

*API key value can be recovered later using the "Retrieve API Key" action in the list of a ledger API keys.*

## Query Ledger

This subsection allows the user to explore a Ledger contents. More details are available in
[Query Ledger data](/help/query-ledger).

## Audit report

Audit report section allows the creation of a PDF report containing the status of the current Ledger and
CodeNotary Ledger Compliance instance.

Report generation requires to select start and end time of interest for displaying the relevant reporting data.

**TODO insert final image here**

## Ledger settings

In this section, it is possible to rename an existing ledger, by changing the name in the text box and
clicking "Update Ledger".

<v-img src="/ledger-settings.png" alt="Ledger settings"></v-img>

## Export Ledger

Export Ledger allows to export ledger data and download it as a JSON file.
The section lists all the already generated exports for the current ledger and allows to generate a new one by
clicking on "Export ledger" (1).

<v-img src="/ledger-export.png" alt="Export Ledger"></v-img>

After some time, depending on the size of the ledger, the export will be available for download. This can be achieved by clicking the button marked as (2).
