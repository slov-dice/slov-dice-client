import { Reorder } from 'framer-motion'
import styled from 'styled-components'

import { BaseModal, BaseModalClose, BaseModalActions } from '../styles'

export const Modal = styled(BaseModal)`
  height: 400px;

  @media ${({ theme }) => theme.media.lg} {
    height: 100%;
  }
`

export const ModalClose = styled(BaseModalClose)``

export const TaskBarConstructor = styled(Reorder.Group)`
  overflow: hidden;
  display: flex;

  width: 420px;
`

export const TaskBarConstructorItem = styled(Reorder.Item).attrs(({ theme }) => ({
  whileHover: { backgroundColor: theme.colors.white_30 },
  whileTap: { scale: 0.95 },
}))`
  cursor: grab;
  user-select: none;

  display: flex;
  justify-content: center;

  width: 40px;
  height: 40px;
  padding: 6px;

  border-radius: 10%;

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`

export const ModalActions = styled(BaseModalActions)`
  gap: 16px;
`
