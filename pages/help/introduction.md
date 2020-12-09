---
title: Introduction
---


The following sections provide a high-level overview of CodeNotary Ledger Compliance, its components and how they interact.

Common database architectures are meant to store data in tables as part of a transaction and a transaction log records all of the transactions and modifications. All changes in database tables are overwriting actions and the history is either not stored or stored using Change Data Capture functionality. 

The transaction log is a major component of the database and you need the log to replay transactions in the event of a system failure, disaster recovery, or data replication. 

But, transaction logs are neither immutable nor do they provide direct and easy access.

CodeNotary Ledger Compliance is created with immutability in mind, keeping all data history over time and guaranteeing integrity by a built-in cryptographic proof. 

Ledger Compliance uses an append-only data structure to store inserts and updates along the correct timestamp and data sequence. Powerful query capabilities allow for a fast data search and immediate inclusion proof.

## The components

CodeNotary Ledger Compliance provides you a browser-based dashboard that can be used to manage the software:

* Overall functional and performance status
* Create and manage Ledger
* Ledger data query
* Create and manage audit reports
* User management
* Appliance management (functionality depends on the deployment method)



### Ledger structure

A Ledger is the core part of CodeNotary Ledger Compliance as its the main storage for data and provides the underlying immutability. Every Ledger is a standalone database with its own user management, API Keys and permissions sets. That enables a clean data separation.

The Ledger uses immudb (https://immudb.io) as a proven technology to store data tamperproof.

It is crucial to handle API keys carefully, as they can be used to write data into the respective Ledger and query data as well.

In general the recommendation is to have different Ledgers for different purposes and access groups.

#### API key

The API keys are unique for the specific Ledger they have been created for. Therefore, whenever you create a Ledger, the first API key needs to be created in the same workflow. Of course you can create additional API keys for different applications in the Ledger management.

API keys are used by Ledger Compliance Plugins or applications using the provided SDKs.

**Important**: the API key defines the data structure and allows for different and domain-specific queries. We highly encourage you to use an API key only for the same application and data type!



### SDKs and data flow

The SDKs and plugins are the main components to send and store data within a Ledger and they can also be used to cryptographically verify and query data from Ledger.

Each SDK and plugin has its own API key to be used to authenticate against Code Notary Ledger Compliance.

The following integrations are available:

**SDK**s

* Java
* .Net
* Python
* Go
* Node.js

**Plugins**

* PostgreSQL Change Data Capture
* CI/CD digital asset notarization



You can find more information in the "[Use a Ledger](/help/use-ledger)" section.
