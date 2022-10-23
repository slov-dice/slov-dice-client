import styled from 'styled-components'

import { BaseModal, BaseModalClose, BaseModalContent } from '../styles'

export const Modal = styled(BaseModal)`
  width: 900px;
`

export const ModalClose = styled(BaseModalClose)``

export const ModalContent = styled(BaseModalContent)`
  overflow: auto;

  height: 400px;
  max-height: 400px;
  padding: 16px 8px;

  color: ${({ theme }) => theme.colors.white};

  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
  }
`
