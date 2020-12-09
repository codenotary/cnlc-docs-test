---
title: Understanding the System
---

##### STATUS: FIRST DRAFT 12/6/20, DB previous title "Introduction"

-------
If you're new to the CodeNotary Ledger Compliance platform, taking a moment to review the topics on this page will make it easier to understand other help content.  

###### _Topics on this page..._

[What is CodeNotary Ledger Compliance?](#what-is-codenotary-ledger-compliance?)

[What are some typical use cases?](#what-are-some-typical-use-cases?)

[Major components](major-components)

## What is CodeNotary Ledger Compliance? 

CodeNotary Ledger Compliance (the 'CLC Platform') is designed around the concept of immutability. That simply means that ledger entries cannot be modified or deleted after they're posted.

Like Blockchain, CLC ledger entries are protected by both the architecture and encryption. Unlike Blockchain, CLC doesn't require that transactions are extensively replicated across network nodes. 

That means users get the benefits of a secure ledger packaged in architecture that far outperforms the speed of Blockchain reads and writes. The performance trade-offs often make sense in environments that require transaction logs, but don't necessarily require the resource-intensive complexity of full Blockchain implementations.

## What are some typical use cases?

The application of secure ledgers extends well beyond financial transactions. Businesses in every vertical can benefit from recording mission-critical transactions in a secure, immutable ledger.

* Store every update to sensitive database fields (credit card or bank account data) of an existing application database
* CI/CD recipes to protect build and deployment pipelines
* Invoices and documents
* Digital certificates 
* Digital objects identification (digital checksum)
* Store log streams (i. e. access logs)

The CLC platform provides additional security for key transactions in any business while enabling compliance with data privacy and security regulations like PCI-DSS-10.

## Major components

Whether deployed on-premises or in the cloud, CodeNotary Ledger Compliance provides you a browser-based dashboard that can be used to manage the software:

* [Core platform](core-platform)
* [User Interface](user-interface)
* [SDK](sdk)

### Core platform

The core CodeNotary Ledger Compliance platform manages ledger data and security.

Users interact with the platform in two ways: through a browser-based UI, and a programming interface provided by CodeNotary SDKs

The user interface provides for dashboard, administration and configuration functions -- creating ledgers, running reports and so on.

The programming interface provided by our SDKs lets you perform ledger transactions with the core. 

Ledger Compliance uses an append-only data structure to store inserts and updates along the correct timestamp and data sequence. Powerful query capabilities allow for a fast data search and immediate inclusion proof.

### User Interface

The user interface is a browser-base GUI. It's where you create and manage ledgers, create API keys, view statistics, run audit reports, and access various administrative functions.

### SDK

Your applications with through CodeNotary ledgers through provided SDKs and plugins. You can post new entries as well as cryptographically verify and query data from Ledger.

Each SDK and plugin has its own API key to be used to authenticate against Code Notary Ledger Compliance.

##### SDK Language Support

The following integrations are available:

* Java
* .Net
* Python
* Go
* Node.js

**Plugins**

* PostgreSQL Change Data Capture
* CI/CD digital asset notarization

## Summary

- Ledgers provide secure, immutable storage appropriate sensitive or mission-critical data.

- Ledgers are set up and configured on the CLC web UI.

- Transactions are written to the ledger as key-value pairs, using the provided SDK.



| [<< Previous](/help) | [Next>>](/help/overall-status) |
| -------------------- | -----------------------------: |
| *About Help*         |        *Home -- System Status* |

-------



.

.

.

.

.

.

.

.

.











 The transaction log is a major component of the database and you need the log to replay transactions in the event of a system failure, disaster recovery, or data replication. 

But, transaction logs are neither immutable nor do they provide direct and easy access.

Ledger Compliance uses an append-only data structure to store inserts and updates along the correct timestamp and data sequence. Powerful query capabilities allow for a fast data search and immediate inclusion proof.

## 

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

The API keys are unique to a particular Ledger. Therefore, whenever you create a Ledger, you also create an API key. But you can create additional API keys for a given ledger at your option.

API keys are used by Ledger Compliance Plugins or applications using the provided SDKs.

> **Important**: the API key defines the data structure and allows for different and domain-specific queries. We highly encourage you to use an API key only for the same application and data type!



### SDKs and data flow

Your client applications interact with ledgers through CodeNotary SDKs and plugins. You can post new entries as well as cryptographically verify and query data from Ledger.

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

|      |      |
| :---        		|             ---:  |
|      |      |