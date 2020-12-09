---
title: Use a Ledger (plugins and SDKs)
---

Ledgers are CodeNotary Ledger Compliance data containers, that hold all kinds of historical data: application data, data streams, changes from a data source, mirror copies of database data.
CodeNotary Ledger Compliance allows to populate Ledgers via two methods:

- **Plugins** (e.g. CI/CD Integration, PostgreSQL plugin) - ready-made connectors for capturing/collecting data from existing sources or applications
- **SDKs** - application bindings for several programming languages and platforms (Go, Java, Node.js, Python) that allow to send/retrieve data from existing applications and corporate systems to CodeNotary Ledger Compliance
  for immutably storing it.

Both solutions connect to Ledger Compliance via a gRPC endpoint, which is mapped on 80 or 443 port.

Also, both cases require to set up an API key for sending/reading data and require to configure Ledger Compliance host location, gRPC port and, in case the port requires a TLS connection, the TLS credentials for 
establishing a valid and secure connection.

## Plugins

Plugins allow for deeper integration in Ledger Compliance (see [Query Ledger data](/help/query-ledger) section).

Currently Ledger Compliance supports the following plugins (with more to come):

- **CNLC Postgres plugin**: it allows to immutably store the WAL transaction log from an external Postgres database. It's a Change Data Capture connector for PostgreSQL that injects all database changes in a Ledger.
- **CNLC CI/CD plugin**: it allows to notarize assets from CI/CD pipelines on a Ledger. This allows to certify that the same artifact produced by a CI/CD pipeline is being used in deployments or other pipeline stages.

For further information on how to configure and use each plugin, you can refer to the "Developer section" on the sidebar.

## SDKs

SDKs allow to add Ledger Compliance support to existing applications (custom applications, corporate systems). Each programming language binding provides facilities for immutably store, read and verify data on Ledgers.

Currently Ledger Compliance offers SDKs for the following languages and platforms (with more to come):

- **Go**
- **Node.js**
- **Java** or any JVM language
- **Python**

For further information on how to configure and use each SDK, you can refer to the "Developer section" on the sidebar.
