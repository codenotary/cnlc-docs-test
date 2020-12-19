---
title: Understanding the System
---

-------
If you're new to the CodeNotary Ledger Compliance platform, taking a moment to review the topics on this page will make it easier to understand other help content.  align="left"

###### _Topics on this page..._

- [What is CodeNotary Ledger Compliance?](#/help/what-is-codenotary-ledger-compliance?)

- [What are some typical use cases?](#/help/what-are-some-typical-use-cases?)

- [Major components](#/help/major-components)

## What is CodeNotary Ledger Compliance? 

CodeNotary Ledger Compliance (the 'CNLC Platform') is designed around the concept of immutability. That simply means that ledger entries cannot be modified or deleted after they're posted.

Like Blockchain, CNLC ledger entries are protected by both the architecture and encryption. Unlike Blockchain, CNLC doesn't require transactions to be extensively replicated across network nodes. 

That means users get the benefits of a secure ledger packaged in architecture that far outperforms the speed of Blockchain read and write transactions. These performance trade-offs often make sense in environments that require secure transaction logs, but don't necessarily require the resource-intensive complexity of full Blockchain implementations.

## What are some typical use cases?

The application of secure ledgers extends well beyond financial transactions. Businesses in every vertical can benefit from recording mission-critical transactions in a secure, immutable ledger.

* Store every update to sensitive database fields (credit card or bank account data) of an existing application database
* CI/CD recipes to protect build and deployment pipelines
* Invoices and documents
* Digital certificates 
* Digital objects identification (digital checksum)
* Store log streams (i. e. access logs)

The CNLC platform provides additional security for key transactions in any business while enabling compliance with data privacy and security regulations like PCI-DSS-10.

## Major components

Whether deployed on-premises or in the cloud, CodeNotary Ledger Compliance provides you a browser-based dashboard that can be used to manage the software:

* [Core platform](#core-platform)
* [User Interface](#user-interface)
* [SDK](#sdk)

### Core platform

The core CodeNotary Ledger Compliance platform manages ledger data, security, and the API gateway access through our SDK.

Users interact with the platform in two ways: through a browser-based UI, and a programming interface provided by CodeNotary SDKs

The user interface provides for dashboard, administration and configuration functions -- creating ledgers, running reports and so on.

The programming interface provided by our SDKs lets you perform ledger transactions with the core. 

Ledger Compliance uses an append-only data structure to store inserts and updates along the correct timestamp and data sequence. Powerful query capabilities allow for a fast data search and immediate inclusion proof.

### User Interface

The user interface is a browser-base GUI. It's where you create and manage ledgers, create API keys, view statistics, run audit reports, and access various administrative functions.
<v-img src="/alt_ledger_plain.png" alt="" align="left"> </v-img>

![](assets\images\alt_ledger_plain.png)

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

- Ledgers are set up and configured on the CNLC web UI.

- Transactions are written to the ledger as key-value pairs, using the provided SDK.



| [<< Previous](/help) | [Next>>](/help/overall-status) |
| -------------------- | -----------------------: |
| *About Help*         |  *Home -- System Status* |


