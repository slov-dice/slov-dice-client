export interface FormSignIn {
  email: string
  password: string
}

export interface FormSignUp extends FormSignIn {
  nickname: string
  rePassword: string
}

export interface FormRestore {
  email: string
}

export interface FormChangePassword {
  password: string
  rePassword: string
}
