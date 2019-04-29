/**
 * @Author: djz
 * @Date: 2019-04-29
 * @Project: vue-sell-cube
 */
import axios from 'axios'

const urlMap = {
  development: '/',
  production: '' // 线上地址
}
const baseUrl = urlMap[process.env.NODE_ENV]
const ERR_OK = 0

export function get (url) {
  return function (params = {}) {
    return axios.get(baseUrl + url, {
      params
    }).then(res => {
      const { error, data } = res.data
      if (error === ERR_OK) {
        return data
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
