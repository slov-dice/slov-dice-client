import { E_AuthType, T_LocaleServerMessage } from 'models/app'

export interface I_AuthResponse {
  accessToken: string
  message: T_LocaleServerMessage
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
  message: T_LocaleServerMessage
}
export interface I_EmailConfirmPayload {
  token: string
}

export interface I_LogoutPayload {
  from: E_AuthType
}
