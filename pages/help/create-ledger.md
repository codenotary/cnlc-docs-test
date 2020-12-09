---
title: Create a Ledger
---

The Ledgers page is the place to manage and create Ledger. We mainly cover the Ledger creating here, please check the Manage Ledger part for existing Ledger.

**Ledger Overview**

<v-img src="/Ledgers_create.png" alt="Ledgers"></v-img>

But you can also create a new Ledger in the **Home Page**:


<v-img src="/Ledgers_create_home.png" alt="Home Ledger"></v-img>

**Add Ledger**

1. Add ledger in both places starts a ledger creation wizard.

## Ledger creation wizard

Depending on the activated license you can create a limited or unlimited number of Ledgers.

* Free Edition: 1 Ledger
* Virtual Appliance Edition: 5 Ledgers
* Physical Appliance Edition: unlimited Ledgers

There are variations possible - please contact sales@codenotary.com for details.

### Define Ledger

The first step defines the Ledger name and the Data label that can be used to identify and query data.

<v-img src="/create-ledger-step1.png" alt="Define Ledger"></v-img>

1. **Ledger name**: the Ledger name needs to be unique for the whole CodeNotary Ledger Compliance instance. We recommend avoiding special characters. 

2. ** Data Labelling**: you can define multiple labels for the Ledger. Labels are meant for enhancing the Ledger identity or combining Ledgers as functional groups. Examples are creating 2 Ledgers with different names, but a label production. 

3. ** Add Label**: make sure to either press ENTER or click the + button to add labels


### Define API Key

API keys are the most important setting for a Ledger, as they are used to access a Ledger programmatically either using SDKs or Plugins. The API Key name is used to simplify the identification, as the API key itself is a UID.
Please make sure to use unique API key names and only use normal characters (a-z, A-Z, 0-9).

<v-img src="/create-ledger-step2.png" alt="Define API Key"></v-img>

1. **API Key name**: Please make sure to use unique API key names and only use normal characters (a-z, A-Z, 0-9).


### Summary

You're ready to go and the Ledger has been created successfully.

<v-img src="/create-ledger-step3.png" alt="Summary"></v-img>

1. **API key**: this is the API key that can be used with any CodeNotary Ledger Compliance SDK or plugins

2. **Clipboard**: copies the API key to your clipboard

3. **Download API Key**: Downloads the API key information as a json file

4. **Done or Connect your applications**: *Go to Ledger* navigates to the Ledger overview, *Connect your applications* navigates your to the Developers section, where you can find more information about the SDK or Plugins.




