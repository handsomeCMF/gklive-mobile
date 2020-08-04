import { getByHeader, getByUrl, put } from '../common/axiosUtils.js'

// 查询直播间列表
export async function roomList (params = {}, context) {
  const url = context.$domain + 'liveroom/list'
  var res = await getByHeader(url, params, context)
  return res
}

// 获取直播间(拿地址)
export async function getOwnerRoom (params = {}, context) {
  const url = context.$domain + 'liveroom'
  var res = await getByUrl(url, params, context)
  return res
}

// 主播获取自己的直播间
export async function getUserRoom (params = {}, context) {
  const url = context.$domain + 'user/liveroom'
  var res = await getByUrl(url, params, context)
  return res
}

// 开始直播
export async function startLive (context) {
  const url = context.$domain + 'liveroom/start'
  var res = await put(url, context)
  return res
}

// 修改直播间标题
export async function setTitle (params, context) {
  const url = context.$domain + 'liveroom'
  var res = await put(url, params, context)
  return res
}

// 修改直播间封面图
export async function setCoverImage (params, context) {
  const url = context.$domain + 'liveroom/cover-image'
  var res = await put(url, params, context)
  return res
}
