import { Reorder } from 'framer-motion'
import styled from 'styled-components'

import { BaseWindow, BaseWindowClose } from '../styles'

export const Window = styled(BaseWindow)`
  border-radius: 2px;
  padding: 24px 30px;
  height: 400px;
`

export const WindowClose = styled(BaseWindowClose)`
  right: 30px;
  top: 24px;
`

export const TaskBarConstructor = styled(Reorder.Group)`
  display: flex;
  overflow: hidden;
  width: 420px;
`

export const TaskBarConstructorItem = styled(Reorder.Item).attrs(({ theme }) => ({
  whileHover: { backgroundColor: theme.colors.white_30 },
  whileTap: { scale: 0.95 },
}))`
  display: flex;
  justify-content: center;
  border-radius: 10%;
  padding: 6px;
  width: 40px;
  height: 40px;
  cursor: grab;
  user-select: none;

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`

export const WindowActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`
