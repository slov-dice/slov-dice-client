import { FC } from 'react'

import { Entry } from './Entry'
import { LoginForm } from './LoginForm'
import { RegistrationForm } from './RegistrationForm'

import { E_AuthContent } from '../models'

export const AuthTitle: Record<E_AuthContent, string> = {
  [E_AuthContent.registrationEntry]: 'auth.registration',
  [E_AuthContent.registrationForm]: 'auth.registration',
  [E_AuthContent.loginEntry]: 'auth.login',
  [E_AuthContent.loginForm]: 'auth.login',
}

export const AuthArrow: Record<E_AuthContent, E_AuthContent | false> = {
  [E_AuthContent.registrationEntry]: false,
  [E_AuthContent.registrationForm]: E_AuthContent.registrationEntry,
  [E_AuthContent.loginEntry]: false,
  [E_AuthContent.loginForm]: E_AuthContent.loginEntry,
}

export const AuthContent: Record<E_AuthContent, FC> = {
  [E_AuthContent.registrationEntry]: Entry,
  [E_AuthContent.registrationForm]: RegistrationForm,
  [E_AuthContent.loginEntry]: Entry,
  [E_AuthContent.loginForm]: LoginForm,
}

type AuthBottomParams = {
  description: string | false
  button: string
  action: E_AuthContent
}

export const AuthBottom: Record<E_AuthContent, AuthBottomParams> = {
  [E_AuthContent.registrationEntry]: {
    description: 'auth.bottom.has',
    button: 'auth.bottom.login',
    action: E_AuthContent.loginEntry,
  },
  [E_AuthContent.registrationForm]: {
    description: 'auth.bottom.has',
    button: 'auth.bottom.login',
    action: E_AuthContent.loginEntry,
  },
  [E_AuthContent.loginEntry]: {
    description: false,
    button: 'auth.bottom.registration',
    action: E_AuthContent.registrationEntry,
  },
  [E_AuthContent.loginForm]: {
    description: false,
    button: 'auth.bottom.registration',
    action: E_AuthContent.registrationEntry,
  },
}
