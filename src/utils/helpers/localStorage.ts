import { E_AuthType, E_Locale } from 'models/app'

export const LocalStorage = {
  setAuthType: (type: E_AuthType) => localStorage.setItem('authType', type),
  getAuthType: () => localStorage.getItem('authType') as E_AuthType,

  setLanguage: (locale: E_Locale) => localStorage.setItem('language', locale),
  getLanguage: () => (localStorage.getItem('language') as E_Locale) || E_Locale.ru,

  setAccessToken: (accessToken: string) => localStorage.setItem('access_token', accessToken),
  getAccessToken: () => localStorage.getItem('access_token'),
}
