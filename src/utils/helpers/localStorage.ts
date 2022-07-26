import { E_AuthType, E_Locale } from 'types/app'
import { isBrowser } from 'utils/constants/app'

export const LocalStorage = {
  setAuthType: (type: E_AuthType) => localStorage.setItem('authType', type),
  getAuthType: () => localStorage.getItem('authType') as E_AuthType,

  setLanguage: (locale: E_Locale) => localStorage.setItem('language', locale),
  getLanguage: () => (isBrowser ? (localStorage.getItem('language') as E_Locale) : E_Locale.ru),
}
