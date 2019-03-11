const got = require('got')
const extend = require('extend')
const pkg = require('./package.json')

function bunnycdn (options = {}) {
  let _options = {}
  const _defaults = {
    apiKey: null,
    apiBaseUrl: 'https://bunnycdn.com/api',
    storageBaseUrl: 'https://storage.bunnycdn.com'
  }

  if (!options.apiKey) {
    throw new TypeError('API key is required.')
  }

  _options = extend({}, _defaults, options)

  function _throwError (err) {
    const error = new Error('Internal Server Error')
    error.status = 500

    if (err.statusCode) {
      error.status = err.statusCode
    }

    if (err.statusMessage) {
      error.message = err.statusMessage
    }

    if (err.body) {
      error.body = err.body
    }

    throw error
  }

  async function _req (path = '', options = {}) {
    const defaults = {
      baseUrl: _options.apiBaseUrl,
      method: 'GET',
      json: true,
      headers: {
        'User-Agent': `bunnycdn-node-client/${pkg.version}`,
        'AccessKey': _options.apiKey
      }
    }

    try {
      var res = await got(path, extend(defaults, options))
    } catch (err) {
      return _throwError(err)
    }

    return res.body
  }

  return {
    purge (query) {
      return _req('/purge', {
        query,
        method: 'POST'
      })
    },

    statistics (query) {
      return _req('/statistics', { query })
    },

    billing: {
      list () {
        return _req('/billing')
      },

      applycode (query) {
        return _req('/billing/applycode', { query })
      }
    },

    pullzone: {
      list () {
        return _req('/pullzone')
      },

      create (body) {
        return _req('/pullzone', {
          body,
          method: 'POST'
        })
      },

      get (id) {
        return _req(`/pullzone/${id}`)
      },

      update (id, body) {
        return _req(`/pullzone/${id}`, {
          body,
          method: 'POST'
        })
      },

      delete (id) {
        return _req(`/pullzone/${id}`, {
          method: 'DELETE'
        })
      },

      purgeCache (id) {
        return _req(`/pullzone/${id}/purgeCache`, {
          method: 'POST'
        })
      },

      addHostname (body) {
        return _req('/pullzone/addHostname', {
          body,
          method: 'POST'
        })
      },

      deleteHostname (query) {
        return _req('/pullzone/deleteHostname', {
          query,
          method: 'DELETE'
        })
      },

      setForceSSL (body) {
        return _req('/pullzone/setForceSSL', {
          body,
          method: 'POST'
        })
      },

      loadFreeCertificate (query) {
        return _req('/pullzone/addHostname', { query })
      },

      addCertificate (body) {
        return _req('/pullzone/addCertificate', {
          body,
          method: 'POST'
        })
      },

      addBlockedIp (body) {
        return _req('/pullzone/addBlockedIp', {
          body,
          method: 'POST'
        })
      },

      removeBlockedIp (body) {
        return _req('/pullzone/removeBlockedIp', {
          body,
          method: 'POST'
        })
      }
    },
    storagezone: {
      list () {
        return _req('/storagezone')
      },

      create (body) {
        return _req('/storagezone', {
          body,
          method: 'POST'
        })
      },

      delete (id) {
        return _req(`/storagezone/${id}`, {
          method: 'DELETE'
        })
      }
    },
    storage: {
      download (path) {
        return _req(path, {
          baseUrl: _options.storageBaseUrl
        })
      },

      upload (path, body) {
        return _req(path, {
          body,
          baseUrl: _options.storageBaseUrl,
          method: 'PUT'
        })
      },

      delete (path) {
        return _req(path, {
          baseUrl: _options.storageBaseUrl,
          method: 'DELETE'
        })
      },

      list (path) {
        return _req(path, {
          baseUrl: _options.storageBaseUrl
        })
      }
    }
  }
}

module.exports = bunnycdn
