---
title: Creating a Ledger
---

-------

The very first step in implementing a ledger is to create it in the browser-based UI.  Part of that process includes generating the secure key to use with the SDK. The key is required to access the ledger from your code. 

_Topics on this page..._

- [To Create a Ledger](help/create-ledger#to-create-a-ledger)

- [Errors Creating a Ledger](help/create-ledger#errors-creating-a-ledger)

## To Create a Ledger

New ledgers are created in the web UI from either the _Ledgers_ page or the _Home_ page by clicking the **+ Add ledger** button. 

<v-img src="/alt_ledger_plain.png" alt="" ></v-img>

Creating a ledger takes just a few steps - name your ledger, add optional tags, and generate an API key.

1. **Navigate to the *Ledger Page***  From the left-side navigation bar, select **Ledger** . The _Ledger_ page opens.

2. Click the **+ Add ledger** button. The *Define Ledger* panel opens.
   
<v-img src="/alt_panell_defineledger.png" alt="" ></v-img>
   
   
3. **Enter a unique Ledger name** in the *Ledger name* field. 
   Your ledger name appears in tabular views.  It must be globally unique, and can contain only alphanumeric characters as well as dash and underscore ('-','_').  Note that you have the option to change the ledger name at any time.

4. **Add Data Labels**  (_optional_) Under *Data Labelling* you can create one or more labels to associate with the ledger.  Enter a plain-text label and click + or hit the Enter key to add it.

   Click the X on any label to remove it.

   Labels are user-defined tags you can use to help categorize, group or otherwise track identifying aspects of the ledger. The remain associated with the ledger as metadata.

   Click the **Next step** button when you're ready to continue. The *Define API key* panel opens.

   *Click the **Previous step** button to return to the Define Ledger* panel.

   <v-img src="/alt_panel_definekey_sm.png" alt="" ></v-img>



5. **Enter a unique name for the API Key** in the API Key name field. The key name must be globally unique, and can contain only alphanumeric characters as well as dash and underscore ('-','_').  

   The key name is simply an identifier that allows you to select it in other contexts.

6. Click the **Next step** button when you're ready to continue. 

   The *Summary* panel opens. 

   ---

   **NOTE**  If you have exceeded the total number of ledgers allowed by your user license you will see an error when you click the **Next step** button on the *Define API Key* panel. (See [Errors Creating a Ledger](#/help/errors-creating-a-ledger) below.) 

   ---

   Click the **Previous step** button to return to the *Define API key* panel. 

## Errors Creating a Ledger

A red error message may pop up If the system can't validate or process an entry, or if your action exceed limits set by your user license.

Most error messages explain in detail what the problem is. 

##### Illegal characters

Most text fields in the UI will accept numbers and letters, as well as dash and underscore. Be sure to remove punctuation and spaces to ensure your text is validated.

##### Duplicate name

All ledger names and API key names must be unique across the entire system. Rename the ledger if this happens.

##### License error

<v-img src="/alt_err_lic.png" alt="" ></v-img>

CodeNotary offers a variety of licensing options.

**License Options** 

- **Free Edition**: *1 Ledger*
- **Virtual Appliance Edition**: *5 Ledgers*
- **Physical Appliance Edition**: *unlimited Ledgers*

Please contact [sales@codenotary.com](mailto:sales@codenotary.com) for help finding the right license for your needs.



| [<< Previous](/help/overall-status) | [Next>>](/help/manage-ledger) |
| ----------------------------------- | ----------------------------: |
| *Home - System Status*             |           *Managing a Ledger* |

-------


