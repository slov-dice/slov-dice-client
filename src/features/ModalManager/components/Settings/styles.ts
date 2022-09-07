import { Reorder } from 'framer-motion'
import styled from 'styled-components'

import { BaseWindow, BaseWindowClose } from '../styles'

export const Window = styled(BaseWindow)`
  height: 400px;
`

export const WindowClose = styled(BaseWindowClose)``

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

export const WindowActions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`
