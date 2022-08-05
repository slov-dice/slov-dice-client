import { T_UserId } from './app'

export interface I_Profile {
  id: T_UserId
  email: string
  nickname: string
  isAuth: boolean
}
