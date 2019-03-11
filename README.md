# BunnyCDN Node.js client

A simple client for the [BunnyCDN API](https://bunnycdn.docs.apiary.io). **(WIP)**

## Usage

    const BunnyCDN = require('bunnycdn')

    const client = new BunnyCDN({
      apiKey: 'YOUR-API-KEY'
    })

    client
      .listPullzones()
      .then(({ status, message, body }) => {
        // status = 200
        // message = 'OK'
        // body = [{}, ...]
      })
      .catch(console.error)

## Methods

See official [BunnyCDN documentation](https://bunnycdn.docs.apiary.io) for more info.

**listPullzones()**

**createPullzone(data)**

**getPullzone(id)**

**updatePullzone(id, data)**

**deletePullzone(id)**

**purgeCache(id)**

**addPullzoneHostname(data)**

**deletePullzoneHostname(data)**
