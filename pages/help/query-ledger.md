---
title: Query Ledger data
---

Especially for Auditors it's important to query the data within a Ledger without the need to access the application itself.
CodeNotary Ledger Compliance offers the Ledger query individually for each Ledger (main menu: Ledgers) or in the main menu **Query Ledger** as a central function.

**Query Ledger**

<v-img src="/query-ledger-1.png" alt="Query Ledger"></v-img>


## Query

When querying a Ledger, please keep in mind, that version 2 of CodeNotary Ledger Compliance only supports a Key-based filter and not a Value-based (yet).
Therefore, you can either search for a key prefix or a substring of the Key.

1. **Ledger name**: select the Ledger you want to query

2. **API Key name**: select the API key that has been used to write data into the Ledger and you want to query. The little blue box shows the data type (SDK, CICD, Postgres).The data type defines the output structure of the result.

3. **Save**: Save your current query to be used later again

4. **Filter**: Run the query using the selected filter attributes

5. **Key or Key prefix**: search for a key prefix or a substring of the key

6. **Time range**: select the time range for the data result

7. **Rows limit**: limit the number of returned entries. You can also select to filter by tampered, non tampered entries.

### Query result

<v-img src="/query-ledger-2.png" alt="Query Ledger result"></v-img>

When running the Query, you get the results in a structured view (can change based on API key type).

1. **Tampered**: every entry in Ledger Compliance is continuously cryptographically verified. Green = verifiable, Red = potential Tampering detected

2. **Details**: show the details of the entry

3. **Key history**: show the complete value history of the selected key

4. **Search**: search for substrings in the query result (key and value is supported)

5. **Export**: export the query result


## Recent queries

All recent queries during the current session can be found in the **Recent queries** tab.

<v-img src="/query-ledger-recent.png" alt="Recent queries"></v-img>

1. **Apply**: Click to execute the selected query


## Saved queries

All queries that have been saved using the save icon (**3**) can be found under the **Saved queries** tab.

<v-img src="/query-ledger-saved.png" alt="Saved queries"></v-img>

1. **Apply**: Click to execute the saved query

