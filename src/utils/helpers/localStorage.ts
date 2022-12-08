import { E_AuthType, E_Locale } from 'models/shared/app'

export const LocalStorage = {
  setAuthType: (type: E_AuthType) => localStorage.setItem('authType', type),
  getAuthType: () => localStorage.getItem('authType') as E_AuthType,

  setLanguage: (locale: E_Locale) => localStorage.setItem('language', locale),
  getLanguage: () => (localStorage.getItem('language') as E_Locale) || E_Locale.ru,

  setAccessToken: (value: string) => localStorage.setItem('accessToken', value),
  getAccessToken: () => localStorage.getItem('accessToken'),
  removeAccessToken: () => localStorage.removeItem('accessToken'),

  setRefreshToken: (value: string) => localStorage.setItem('refreshToken', value),
  getRefreshToken: () => localStorage.getItem('refreshToken'),
  removeRefreshToken: () => localStorage.removeItem('refreshToken'),
}
