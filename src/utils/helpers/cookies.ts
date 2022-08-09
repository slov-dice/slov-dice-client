export enum E_Cookies {
  access_token = 'access_token',
}

export const setCookie = (name: string, value: string, days = 1) => {
  const date = new Date()

  date.setTime(date.getTime() + days * 1000 * 60 * 60 * 24)

  const expires = 'expires=' + date.toUTCString()
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

export const getCookie = (name: string) => {
  const cookies = document.cookie.split(';') || ''
  return cookies.find((cookie) => cookie.includes(name))
}

export const getCookieValue = (name: string) => {
  const cookie = getCookie(name) || ''
  return cookie.split('=')[1]
}

export function eraseCookie(name: string) {
  document.cookie = name + '=; Max-Age=0'
}
