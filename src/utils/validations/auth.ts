import * as Yup from 'yup'

export const restoreSchema = Yup.object({
  email: Yup.string().email('validation.isEmail').required('validation.required'),
})

export const codeSchema = Yup.object({
  code: Yup.string().matches(/^[0-9]{4}$/, 'validation.codeMatches'),
})

export const signInSchema = Yup.object({
  password: Yup.string().min(5, 'validation.passwordMin').required('validation.required'),
}).concat(restoreSchema)

export const signUpSchema = Yup.object({
  nickname: Yup.string().required('validation.required'),
  rePassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'validation.passwordOneOf')
    .required('validation.required'),
}).concat(signInSchema)

export const changePasswordSchema = Yup.object({
  password: Yup.string().min(5, 'validation.passwordMin').required('validation.required'),
  rePassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'validation.passwordOneOf')
    .required('validation.required'),
})
