import { E_StatusServerMessage, T_LocaleServerMessage } from 'models/app'

export enum E_ModalContent {
  emailConfirm = 'emailConfirm',
  changePassword = 'changePassword',
}

export type T_RestoreData = {
  message: T_LocaleServerMessage
  status: E_StatusServerMessage
}
