---
title: Using the SDK to Write Ledger Transactions
---

STATUS: INITIAL ROUGH edited:12/7/20, DB previous title "use -- ledger"

<< Previous (_Understanding Ledger Status_)                                                         		 (_Using the SDK_)  Next>>

-------

_Topics on this page..._

- [Downloading the SDK](#Downloading the SDK)

As part of creating a ledger in the CLC UI, you'll have an API key that you can use with the SDK to write and query transactions. 

## Downloading the SDK

To access the SDK, click the the Developers icon on the left-hand navigation panel.

Click Download SDKs

Select the SDK that matches your development language.

<v-img src="/alt_devsdk_sm.png" alt="SDK menu"></v-img>

Available SDKs

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

## Using the SDK

Because there are only a few core function calls in the SDK, integration with your own code is simple.

### What's in the SDK?

Samples and libraries

### Important concepts

The SDK provides methods to get data from a ledger, set data (a key-value pair).

There are actually three variations on both get and set -- a plain vanilla version, a safe version of each, and a batch version.

The server default port is 3324.

### Method reference 

connect

set

get

safeSet

safeGet

setBatch

getBatch

scan

history



### Creating the client

Start by initializing the client. 

##### What you'll need

The first step is to instantiate a LC client. You only need one 

- API Key (created in the UI)

- Server IP address 

- port number 

##### Initializing the connection

Create a ``client`` object and use the ```connect()``` method to authenticate with the Ledger Compliance Server.

```python
import LedgerCompliance.client

apikey="yosvyhwo00elzqznteetslalaalspeuvtsgl"
host="192.168.nnn.nnn"
port=3324

client=LedgerCompliance.client.Client(apikey,host,port)
client.connect()
```

### Basic ledger transactions -- using get and set

Once the connection is in place, you can use the ```set``` method to store key/value pairs, and the ```get``` method to retrieve the data:

```python
client.set(b"key", b"value")
value=client.get(b"key")
```

>  :information_source:**NOTE** that the value is serialized with a timestamp, so you can always tell when the insert was made.

| [<< Previous](/help/manage-ledger) |        [Next>>](*) |
| ---------------------------------- | -----------------: |
| *Managing  Ledgers*                | *Querying Ledgers* |

-------



