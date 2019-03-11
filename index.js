const got = require('got')
const extend = require('extend')
const pkg = require('./package.json')

class BunnyCDN {
  constructor (options = {}) {
    if (!options.apiKey) {
      throw new TypeError('API key is required.')
    }

    const defaults = {
      baseUrl: 'https://bunnycdn.com/api'
    }

    this.options = extend(defaults, options)
  }

  _caughtError (err) {
    const error = {
      status: 500,
      message: 'Internal Server Error'
    }

    if (err.statusCode) {
      error.status = err.statusCode
    }

    if (err.statusMessage) {
      error.message = err.statusMessage
    }

    return error
  }

  async _req (path = '', options = {}) {
    const defaults = {
      method: 'GET',
      json: true,
      baseUrl: this.options.baseUrl,
      headers: {
        'User-Agent': `bunnycdn-node-client/${pkg.version}`,
        'AccessKey': this.options.apiKey
      }
    }

    try {
      var res = await got(path, extend(defaults, options))
    } catch (err) {
      return this._caughtError(err)
    }

    return {
      status: 200,
      message: 'OK',
      body: res.body
    }
  }

  listPullzones () {
    return this._req('/pullzone')
  }

  createPullzone (body = {}) {
    return this._req('/pullzone', {
      body,
      method: 'POST'
    })
  }

  getPullzone (id) {
    return this._req(`/pullzone/${id}`)
  }

  updatePullzone (id, body = {}) {
    return this._req(`/pullzone/${id}`, {
      body,
      method: 'POST'
    })
  }

  deletePullzone (id) {
    return this._req(`/pullzone/${id}`, {
      method: 'DELETE'
    })
  }
}

module.exports = BunnyCDN
