import Cookies from 'js-cookie'
const loginType = 'Admin-Token'
export function getUser () {
  return Cookies.get(loginType)
}
export function setUser (user) {
  return Cookies.set(loginType, user)
}
export function removeUser (user) {
  return Cookies.remove(loginType, user)
}
