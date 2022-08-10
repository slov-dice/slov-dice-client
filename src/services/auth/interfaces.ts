import { E_AuthType } from 'models/app'

export interface I_AuthResponse {
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

export interface I_EmailConfirmPayload {
  token: string
}

export interface I_LogoutPayload {
  from: E_AuthType
}
