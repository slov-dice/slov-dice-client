import styled from 'styled-components'

import { BaseModal, BaseModalActions, BaseModalClose, BaseModalContent } from '../styles'

export const Modal = styled(BaseModal)`
  height: 340px;
`

export const ModalClose = styled(BaseModalClose)``

export const ModalContent = styled(BaseModalContent)``

export const ModalActions = styled(BaseModalActions)`
  display: grid;
  grid: 1fr / 1fr 2fr;
  gap: 16px;
`
