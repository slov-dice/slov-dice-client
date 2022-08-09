import styled from 'styled-components'

import { BaseWindow, BaseWindowClose } from '../styles'

export const Window = styled(BaseWindow)``

export const WindowClose = styled(BaseWindowClose)``

export const WindowContent = styled.div`
  color: ${({ theme }) => theme.colors.white_50};
`
