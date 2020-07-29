# ZotExpert - Open Zotero Files in PDF Expert

[简体中文](README_CN.md)

## Introduction

Zotero is a free and open source bibliography management software, but the current cross-platform synchronization methods have their shortcomings and cannot meet the needs of individual use.

<details>
<summary>WebDAV Sync</summary>

1. Document storage **locations are disorganized**, and PDFs of documents on the same subject cannot be grouped together at the document level, making batch management difficult.
2. PaperShip on the iOS/iPadOS platform is in disrepair, there are still some PDFs that can not be opened (reporting 404 errors). Even if you can open it, you can only annotate within the application, and the results of annotation in external applications such as PDF Expert **cannot be synchronized**.
</details>

<details>
<summary>Zotero Sync</summary>

1. The drawbacks are the same as article 1, except that it uses the official Zotero storage space (which is somewhat **expensive**).
</details>

<details>
<summary>Zotfile External Storage Sync</summary>

1. Use the Zotfile plug-in to move the PDF to an external folder, and then use tools such as OneDrive synchronization -- each category are in the same sub-folder, facilitating the categorization of documents.
2. However, on iOS/iPadOS platforms, PDFs **cannot be opened directly**, you need to go to PDF Expert to manually locate the file.
</details>

Based on the above, I wrote this iOS/iPadOS shortcut that helps you automatically open the corresponding PDF with Zotero Web Library opened in Safari. Annotations can be synced across platforms. The effect is as follows:

![](./assets/effect.gif)

## Prerequisites

### Zotero PC Configuration

1. Create a Zotero account and log in to the Zotero client (do not turn on the attachment sync feature yet).
2. Install the Zotfile plugin and set up attachments to a cloud sync folder such as OneDrive.
    ![](./assets/ZotfilePref.png)
3. Go back to Zotero's settings and store attachments to **relative path**.
    ![](./assets/GeneralPref.jpg)
4. Turn on Zotero's sync feature again (if you want to sync resources other than PDFs).

### Zotero Web Configuration

1. Login to Zotero web app and go to Settings -> Feeds/API.
2. Make a note of the number shown in the "xxxxxxx" position in the diagram as **user ID** (`userid`).
    ![](./assets/userid.png)
3. Click "Create new private key", go all the way to the next step (notes access can also be opened), after generating the key **don't leave the page**, copy it as **API Key** (`APIKey`).


### PDF Expert Configuration

1. Add a connection and bind the cloud drive you are using (e.g. OneDrive) in the bottom left corner at "Connections".
2. Select the attachment folder (in the example, ZoteroFiles), click on "..." in the bottom right corner, and select "Sync".
3. Open "Synced Folders" in "My Documents", you should see that the folder you just selected has been synced, just wait patiently until the sync is complete.
4. Here you need to remember the name of the **attachment folder** you just set up, i.e. the **synced folder name** (`syncedFolder`).

# Script installation

## Shortcut Command

1. Upgrading iOS to 13 or above.
2. Install a shortcut command via [this link](https://www.icloud.com/shortcuts/2bc50081d84745719faa1fda14bcebe7), turn on the "Share Form" function, and allow access to the Internet.
3. In the question that pops up, fill in "User ID", "API Key", and "Sync Folder Name" based on what you have written down.

## Safari

1. Open any web page, click on the share button in the upper right corner, and slide to the bottom to "Edit Action".
2. Place "ZotExpert" in your preferred location.

# Instruction

1. Open My Library on the Zotero website in Safari and **switch to the new version** (Try the New Web Library Beta in the top right corner).
2. Tap Attachments on any paper and share it to ZotExpert.
3. Enjoy!!

# Others

Please Star, Fork, Issue, PR if you like this repository.
