export interface I_FormSignIn {
  email: string
  password: string
}

export interface I_FormSignUp extends I_FormSignIn {
  nickname: string
  rePassword: string
}
