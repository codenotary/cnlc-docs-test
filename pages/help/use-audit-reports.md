---
title: Generating Audit Reports
---

-------
Audit reports let you trace time-stamped events in the system for analyzing usage, reporting to leadership, or to support provision of information that may be required by regulators.

###### _Topics on this page..._

- [Generating audit reports](help/use-audit-report#generating-audit-reports)

- [Reading the audit report](help/use-audit-report#reading-the-audit-report)

## Generating audit reports 

A link to the *Audit report* page is available from the main navigation bar. It displays a list of previously generated auto reports, which the platform maintains as internal files.

<v-img src="/alt_aud_rept_main.png" alt="" align="left"></v-img>
![](assets\images\alt_aud_rept_main.png)

When you generate a new audit report, it's added to the tabular view, and you can download it, or open the PDF directly.

#### To generate a system-wide audit report

1. Go to the *Audit report* page. 
2. Select how far back, from today, the report should include data for.  You can select time units of hours, days, months, or years from the dropdown. Then select the number of those time units the report should go back to. 
3. Click the **Generate report** button in the upper right. The report is created as a file in the system. It will appear at the end of the tabular display after generation. 
4. Click the **Download** button <v-img src="/alt_dnload_icn.png" alt=""></v-img>![](assets\images\alt_dnload_icn.png) in the far right column to download it as a PDF file.

#### To generate an audit report for a single ledger

1. Go to the *Ledgers* page. 
2. Select the desired ledger from the Ledgers display. The Ledger dashboard appears.
3. Click on the *Audit report* tab. The audit report interface appears. You can select a different ledger from the dropdown menu in the upper left.
4. Select how far back, from today, the report should include data for.  You can select time units of hours, days, months, or years from the dropdown. Then select the number of those time units the report should go back to. 
5. Click the **Generate report** button in the upper right. The report is created as a file in the system. It will appear at the end of the tabular display after generation. 
6. Click the **Download** button <v-img src="/alt_dnload_icn.png" alt=""></v-img>![](assets\images\alt_dnload_icn.png) in the far right column to download it as a PDF file. 

## Reading the Audit report

Audit reports are created as PDF files. The content includes a title page, a list of audit entries, and a CNLC system status report.

##### Title page

The first page includes a unique id for the report, a sequential *Audit Report* number, the start and end dates for which data is included, and the date the report was generated.

<v-img src="/alt_lcompli_top_rept.png" alt="" align="left"></v-img>
![](assets\images\alt_lcompli_top_rept.png)

##### Log entries

Below the title page is the list of all logged system events for the designated period. 

<v-img src="/alt_lcompli_mid_rept.png" alt="" align="left"></v-img>
![](assets\images\alt_lcompli_mid_rept.png)

##### System status

The bottom of the report shows selected KPIs and system stats at the time the audit was run.

<v-img src="/alt_lcompli_bot_rept.png" alt="" align="left"></v-img>
![](assets\images\alt_lcompli_bot_rept.png)

<prev-next class="_margin-top-1" :prev="{ url: '/query-ledger, lable: 'Querying a Ledger' }" next="{ url: '/user-management', lable: 'User management' }"></prev-next>