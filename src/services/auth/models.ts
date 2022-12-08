import { E_AuthType, T_LocaleText } from 'models/shared/app'

export interface I_AuthResponse {
  accessToken?: string
  refreshToken?: string
  message: T_LocaleText
  id: number
  email: string
  nickname: string
}
export interface I_SignInPayload {
  email: string
  password: string
}

export interface I_SignUpPayload {
  email: string
  nickname: string
  password: string
}

export interface I_ThirdPartyAuthPayload {
  code: string
  authType: E_AuthType
}

export interface I_EmailConfirmResponse {
  message: T_LocaleText
}
export interface I_EmailConfirmPayload {
  token: string
}
