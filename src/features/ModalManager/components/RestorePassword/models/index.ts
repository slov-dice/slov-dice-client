export enum E_ModalContent {
  emailConfirm = 'emailConfirm',
  changePassword = 'changePassword',
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
