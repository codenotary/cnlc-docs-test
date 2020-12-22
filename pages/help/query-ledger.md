---
title: Querying a Ledger
---

-------
From the *Query Ledger* page you can search and filter ledger entries based on a search string, an API key, and a time frame.

###### _Topics on this page..._

- [The Query Ledger page](help/query-ledger#the-query-ledger-page)

- [Running a query](help/query-ledger#running-a-query)

- [Query results tools](help/query-ledger#query-results-tools)

## The Query Ledger page

There are three tabs on the *Query Ledger* page. The default tab is *Query*, where the search form is. The *Recent Queries* shows all the most recent queries run by any user. You can optionally save queries. Those are displayed under the *Saved Queries* tab. 

<v-img src="/alt_query_ldgr_main.png" alt="" align="left"></v-img>
![](assets\images\alt_query_ldgr_main.png)

## Running a query

Run queries from the *Query* tab on the *Query Ledgers* page. The form at the top of the page lets you select filter parameters, run the query, and save parameters for later reuse.

<v-img src="/alt_query_ldgr_wgt_annot.png" alt="" align="left"></v-img>


![](assets\images\alt_query_ldgr_wgt_annot.png)

#### To run a query

1. Select the ledger from the ledger dropdown.

2. Select the API key from the dropdown. (the blue icon indicates the type, SDK, CI/CD, Postgres)

3. Enter a key or key prefix in the key field. This is the look-up key for a given k-v pair ledger entry.

4. Enter the timeframe by clicking the calendar icon, then selecting *relative* or *absolute* time range, and entering the desired dates or durations. 

5. Select the (maximum) number of rows the query should return.

6. From this same dialog you can also toggle whether the query should return entries tagged as tampered or not tampered. Click the **Apply** button.
   
   <v-img src="/alt_query_entryfilt_dlg.png" alt="" align="left"></v-img>
   
7. 
   Click the **Filter** button to run the query.

## Query results tools

The UI provides additional tools to save, search, and download your query results.

##### Save query parameters for reuse

You can save the values of query fields by clicking the **disk** button.

##### Searching query results

A search tool appears after you run a query, unless no ledger entries were returned.

##### Download query results

After running a query, you can click the **download** button to save a csv version of the results to your local hard drive.

| [<< Previous](/help/using-ledger) | [Next>>](/help/use-audit-reports) |
| --------------------------------- | --------------------------------: |
| *Using the SDK*                   |        *Generating Audit Reports* |
