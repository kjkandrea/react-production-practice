import axios from 'axios'
import config from '../config/server'

console.log(config)

const STATUS = {
  UNAUTHORIZED: 401
}

const { domain } = config

const goAuth = () => {
  alert('gogo')
}

const request = (method, url, data) => {
  return axios({
    method,
    url: domain + url,
    data
  })
  .then(result => result.data)
  .catch(result => {
    console.log(result)
    const {status} = result.response
    if(status === STATUS.UNAUTHORIZED) goAuth()
    throw result.response
  })
}