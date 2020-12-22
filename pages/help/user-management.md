---
title: Managing User Accounts
---

-------
The *Users* page lets administrators create new users, change parameters for existing users, or delete them.

###### _Topics on this page..._

- [Creating new users](help/user-management#creating-new-users)

- [Managing existing users](help/user-management#managing-existing-users)

## Creating new users

To add a user to the system, you'll need their email address, desired user name, their role in the system and, optionally, their first and last name.

<v-img src="/alt_usradmin_plain.png" alt="" align="left"></v-img>

![](assets\images\alt_usradmin_plain.png)

### Role-based permissions

Note that some limitations to user administration are imposed by your assign role.

System Admin - Full read-write access to all functions in the UI.

Admin  - Limited read-write access to all functions in the UI.

Ledger manager  - Read-write access to user functions in the UI, but no access to admin functions.

### To create a new user  

1. Go to the *Users* page 
2. Click the **Create user** button in the upper right.
3. Complete the form by filling in the following fields:
   - User name
   - email address
   - password
   - first name (optional)
   - last name (optional)
     ![](C:\Users\David\Downloads\Metatrope\clients\ntry\assets\images\alt_updprofile_dlog.png)
4. Select a role from the User role drop down menu.
5. Click the **Create user** button.

You can change any of these parameters after creating a user, provided you have appropriate permissions.

## Managing existing users

You can quickly change or delete a user's account from the options popup menu by clicking the gear icon in the users row. 

<v-img src="/alt_usradmin_menu.png" alt="" align="left"></v-img>
![](assets\images\alt_usradmin_menu.png)

##### User management options 

| Option              | Action                                                       |
| ------------------- | ------------------------------------------------------------ |
| Change role         | Assign a new access role to a user.                          |
| Change email        | Update user email.                                           |
| Regenerate Password | Algorithmically generate a new password.                     |
| Delete user         | Completely remove the user account from the system. This cannot be undone. |

All options open a simple text form that lets you enter changes. 

<prev-next class="_margin-top-1" :prev="{ url: '/use-audit-reports, lable: 'Audit Reports' }" next="{ url: '/messages', lable: 'Messages and Notifications' }"></prev-next>