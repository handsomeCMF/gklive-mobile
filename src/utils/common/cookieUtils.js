// 处理httponlycookie  检测是否存在tooken
export function CookieExist (cookiename) {
  if (document.cookie.indexOf(cookiename) > 0) { return false }
  const d = new Date()
  // 设置cookie时间 为1秒后失效
  d.setTime(d.getTime() + (1000))
  const expires = `expires=${d.toUTCString()}`

  document.cookie = `${cookiename}=new_value;path=/;${expires}`
  // 如果设置完当前cookie以后通过检测 检测不出来刚设置的cookie 就代表当前这个cookie设置了httponly 并且没有失效
  if (document.cookie.indexOf(`${cookiename}=`) === -1) {
    return true
  }
  // 检测有新设置的这个cookie删除它
  d.setTime(d.getTime() - (2000))
  const expires2 = `expires=${d.toUTCString()}`
  document.cookie = `${cookiename}=new_value;path=/;${expires2}`
  return false
}
