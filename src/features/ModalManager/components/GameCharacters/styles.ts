import styled from 'styled-components'

import { BaseModal, BaseModalClose, BaseModalContent } from '../styles'

export const Modal = styled(BaseModal)`
  width: 900px;
`

export const ModalClose = styled(BaseModalClose)``

export const ModalContent = styled(BaseModalContent)`
  height: 400px;
  padding-block: 16px;

  color: ${({ theme }) => theme.colors.white};
`
