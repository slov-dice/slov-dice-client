import * as Yup from 'yup'

export const restoreSchema = Yup.object({
  email: Yup.string().email('auth.form.email.rules.isEmail').required('auth.form.rules.required'),
})

export const signInSchema = Yup.object({
  password: Yup.string()
    .min(5, 'auth.form.password.rules.min')
    .required('auth.form.rules.required'),
}).concat(restoreSchema)

export const signUpSchema = Yup.object({
  nickname: Yup.string().required('auth.form.rules.required'),
  rePassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'auth.form.rePassword.rules.rePassword')
    .required('auth.form.rules.required'),
}).concat(signInSchema)

export const changePasswordSchema = Yup.object({
  password: Yup.string()
    .min(5, 'auth.form.password.rules.min')
    .required('auth.form.rules.required'),
  rePassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'auth.form.rePassword.rules.rePassword')
    .required('auth.form.rules.required'),
})
