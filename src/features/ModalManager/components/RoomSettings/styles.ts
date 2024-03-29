import styled from 'styled-components'

import { BaseModal, BaseModalClose, BaseModalContent } from '../styles'

export const Modal = styled(BaseModal)`
  width: 900px;
  height: 720px;

  @media ${({ theme }) => theme.media.lg} {
    height: 100%;
  }
`

export const ModalClose = styled(BaseModalClose)``

export const ModalContent = styled(BaseModalContent)`
  overflow: auto;

  height: 700px;
  max-height: 700px;
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
