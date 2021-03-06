---
title: Introduction to the SDK
---

-------

_Topics on this page..._

- [What can you do with the SDK?](help/use-ledger#what-can-you-do-with-the-sdk-?)
- [Resources Provided](help/use-ledger#resources-provided)
- [Getting started](help/use-ledger#getting-started)
- [Downloading the SDK](help/use-ledger#downloading-the-sdk)

This is an introduction to using the SDK. The .zip package for each SDK contains a readme.md file with specific instructions for install and using it. 

As part of creating a ledger in the CNLC UI, you'll create an API key that you can use with the SDK to manage query transactions. 

## What can you do with the SDK? 

Available methods are easy to understand and use. They are discussed in detail in the ```readme.md``` file in the SDK root.

The core methods provided are these:

**connect** provides the initial authentication with the platform.

**set** lets you write key-value pairs to a ledger. There are several variations of set.

**get** lets you retrieve data from a ledger. There are several variations of get.

## Resources Provided

The SDK for each supported language is available for download as a zip file from here.

Subfolders include examples, libraries, and a readme.md file that provides instructions for initial installation, notes on instantiating the client, and using the available methods to interact with your ledgers.

- Samples folder 
  Each supported language includes samples that demonstrate use of available methods in multiple contexts.

- Libraries

- Readme.md

##### What you'll need

The first step is to instantiate a LC client. You only need one 

- API Key (created in the UI)

- Server IP address 

- port number (typically the same port on which the web UI is exposed)

## Getting started 

Once you have at least one ledger in the UI, it's a quick few steps to accessing it from within your code.

**1.  Download the SDK**
Go to the developers page and download the zip file that matches your preferred development language.

**2.  Install language-specific libraries**
Unzip the file to your development environment.

**3.  Instantiate the client**
Initialize and connect to your CNLC platform instance. Here's where you use the API key generated from the ledger your client is connecting to.

**4.  Use client methods within your code to read and write transactions**
Available methods are provided by the client object you initialize in step 3.

## Downloading the SDK

To access the SDK, click the the Developers icon on the left-hand navigation panel.

Click **Download SDKs**.

<v-img src="/alt_devsdk_sm.png" alt="" ></v-img>

Select the SDK that matches your development language.

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



| [<< Previous](/help/manage-ledger) | [Next>>](/help/query-ledger) |
| ---------------------------------- | ---------------------------: |
| *Managing  Ledgers*                |           *Querying Ledgers* |

-------



