# BunnyCDN Node.js client

A simple client for the [BunnyCDN API](https://bunnycdn.docs.apiary.io).

## Notice!

I started writing this module, before I found out there was already a [similar module](https://github.com/UintaGroup/bunnycdn-node), which is complete and tested. So, I have stopped developing this module for now, and I recommend using the other one. I will resume development if the other module is deprecated.

## Installation

**NOTICE: I have unpublished this module from npm to prevent cluttering the registry.**

    npm install bunnycdn


## Usage

    const bunnycdn = require('bunnycdn')

    const client = bunnycdn({
      apiKey: 'YOUR-API-KEY'
    })

    client.pullzone.list()
      .then(console.log)
      .catch(console.error)

## Methods

**[client.purge(data)](https://bunnycdn.docs.apiary.io/#reference/0/apipurge/post-purge-cache)**

**[client.statistics(data)](https://bunnycdn.docs.apiary.io/#reference/0/apistatistics/get-statistics)**

**[client.billing.list()](https://bunnycdn.docs.apiary.io/#reference/0/apibilling/get-billing-summary)**

**[client.billing.applycode(data)](https://bunnycdn.docs.apiary.io/#reference/0/apibillingapplycode/get-apply-promo-code)**

### Pullzone

**[client.pullzone.list()](https://bunnycdn.docs.apiary.io/#reference/0/apipullzone/get-pull-zone-list)**

**[client.pullzone.create(data)](https://bunnycdn.docs.apiary.io/#reference/0/apipullzone/post-create-pull-zone)**

**[client.pullzone.get(id)](https://bunnycdn.docs.apiary.io/#reference/0/apipullzoneid/get-single-pull-zone)**

**[client.pullzone.update(id, data)](https://bunnycdn.docs.apiary.io/#reference/0/apipullzoneid/post-update-the-pull-zone)**

**[client.pullzone.delete(id)](https://bunnycdn.docs.apiary.io/#reference/0/apipullzoneid/delete-delete-the-pull-zone)**

**[client.pullzone.purgeCache(id)](https://bunnycdn.docs.apiary.io/#reference/0/apipullzoneidpurgecache/post-purge-pull-zone-cache)**

**[client.pullzone.addHostname(data)](https://bunnycdn.docs.apiary.io/#reference/0/apipullzoneaddhostname/post-add-custom-hostname)**

**[client.pullzone.deleteHostname(data)](https://bunnycdn.docs.apiary.io/#reference/0/apipullzonedeletehostname/delete-delete-custom-hostname)**

**[client.pullzone.setForceSSL(data)](https://bunnycdn.docs.apiary.io/#reference/0/apipullzonesetforcessl/post-set-the-force-ssl-setting)**

**[client.pullzone.loadFreeCertificate(data)](https://bunnycdn.docs.apiary.io/#reference/0/apipullzoneloadfreecertificate/get-load-free-certificate)**

**[client.pullzone.addCertificate(data)](https://bunnycdn.docs.apiary.io/#reference/0/apipullzoneaddcertificate/post-add-certificate)**

**[client.pullzone.addBlockedIp(data)](https://bunnycdn.docs.apiary.io/#reference/0/apipullzoneaddblockedip/post-add-blocked-ip)**

**[client.pullzone.removeBlockedIp(data)](https://bunnycdn.docs.apiary.io/#reference/0/apipullzoneremoveblockedip/post-remove-blocked-ip)**

### Storage zone

**[client.storagezone.list()](https://bunnycdn.docs.apiary.io/#reference/0/apistoragezone/get-storage-zone-list)**

**[client.storagezone.create(data)](https://bunnycdn.docs.apiary.io/#reference/0/apistoragezone/post-add-storage-zone)**

**[client.storagezone.delete(id)](https://bunnycdn.docs.apiary.io/#reference/0/apistoragezoneid/delete-delete-the-storage-zone)**

### Storage

The storage API [documentation](https://bunnycdnstorage.docs.apiary.io) is separate from the main API docs.

**[client.storage.download(path)](https://bunnycdnstorage.docs.apiary.io/#reference/0/storagezonenamepathfilename/get)**

**[client.storage.upload(path)](https://bunnycdnstorage.docs.apiary.io/#reference/0/storagezonenamepathfilename/put)**

**[client.storage.delete(path)](https://bunnycdnstorage.docs.apiary.io/#reference/0/storagezonenamepathfilename/delete)**

**[client.storage.list(path)](https://bunnycdnstorage.docs.apiary.io/#reference/0/storagezonenamepath/get)**

## Errors

All HTTP errors will have a `status` and `message` property. Where `status` will be the HTTP status code (ex. 500), and `message` will be the corresponding error message (ex. Internal Server Error). If the API response contains a `body` property, it will also be present on the error object.
