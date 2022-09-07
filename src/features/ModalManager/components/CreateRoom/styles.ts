import styled from 'styled-components'

import { BaseWindow, BaseWindowClose, BaseWindowActions } from '../styles'

export const Window = styled(BaseWindow)`
  height: 700px;
`

export const WindowClose = styled(BaseWindowClose)``

export const WindowActions = styled(BaseWindowActions)`
  display: grid;
  grid: 1fr / 1fr 2fr;
  gap: 16px;
`
