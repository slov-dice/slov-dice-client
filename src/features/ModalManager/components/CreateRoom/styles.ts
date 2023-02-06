import styled from 'styled-components'

import { BaseModal, BaseModalClose, BaseModalActions } from '../styles'

export const Modal = styled(BaseModal)`
  height: 700px;
`

export const ModalClose = styled(BaseModalClose)``

export const ModalActions = styled(BaseModalActions)`
  display: grid;
  grid: 1fr / 1fr 2fr;
  gap: 16px;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`
