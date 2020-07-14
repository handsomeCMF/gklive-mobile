import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = '/'
axios.defaults.headers.get['Content-Type'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
  // 在发送请求之前做些什么
    return config
  }, function (error) {
  // 对请求错误做些什么
    return Promise.reject(error)
  })

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
  // 对响应数据做点什么
    return response
  }, function (error) {
  // 对响应错误做点什么
    return Promise.reject(error)
  })

// get方式请求 参数放在header
export function getByHeader (url, params = {}, context) {
  const promise = new Promise(function (resolve, reject) {
    axios.get(url, qs.parse(params))
      .then(res => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(res.data.message)
        }
      })
      .catch(err => {
        reject(err)
      })
  })

  return promise
}

// get方式请求  拼接地址
export function getByUrl (url, params = {}, context) {
  // 拼接地址
  url += '?'
  const keys = Object.keys(params)
  for (let i = 0, length = keys.length; i < length; i++) {
    if (i === 0) {
      url += keys[i]
      url += '=' + params[keys[i]]
    } else {
      url += '&' + keys[i]
      url += '=' + params[keys[i]]
    }
  }

  const promise = new Promise(function (resolve, reject) {
    axios.get(url)
      .then(res => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(res.data.message)
        }
      })
      .catch(err => {
        reject(err)
      })
  })

  return promise
}

// post方式请求
export function post (url, params = {}, context) {
  const promise = new Promise(function (resolve, reject) {
    axios.post(url, qs.parse(params))
      .then(function (res) {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(res.data.message)
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
  return promise
}
// put方式
export function put (url, params = {}, context) {
  const promise = new Promise(function (resolve, reject) {
    axios.put(url, qs.parse(params))
      .then(function (res) {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(res.data.message)
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
  return promise
}
