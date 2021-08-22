import axios from 'axios'
import config from '../config/server'

const STATUS = {
  UNAUTHORIZED: 401
}

const { domain, version, clientId, platform } = config

const goAuth = () => {
  alert('401 response.')
}

const request = (method, url, data) => {
  const headers = {
    version,
    clientId,
    platform
  }

  return axios({
    method,
    url: domain + url,
    data,
    headers
  })
  .then(result => result.data)
  .catch(result => {
    console.log(result)
    const { status } = result.response
    if(status === STATUS.UNAUTHORIZED) goAuth()
    throw result.response
  })
}

const products = {
  get(keyword) {
    return request('get', `/products/search?keywords=${keyword}`)
  },
}

const api = {
  products
}

export default api