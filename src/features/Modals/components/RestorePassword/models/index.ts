import { E_StatusServerMessage, T_LocaleServerMessage } from 'models/app'

export enum E_ModalContent {
  emailConfirm = 'emailConfirm',
  changePassword = 'changePassword',
}

export type T_RestoreData = {
  message: T_LocaleServerMessage
  status: E_StatusServerMessage
}

export enum E_StatusName {
  checkEmail = 'checkEmail',
  checkCode = 'checkCode',
  changePassword = 'changePassword',
}

export interface I_InitialState {
  content: E_ModalContent
  statuses: {
    [E_StatusName.checkEmail]: {
      isLoading: boolean
      isCooldown: boolean
    }
    [E_StatusName.checkCode]: {
      isLoading: boolean
    }
    [E_StatusName.changePassword]: {
      isLoading: boolean
    }
  }
}
