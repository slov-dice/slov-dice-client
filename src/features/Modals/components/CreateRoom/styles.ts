import styled from 'styled-components'

import {
  BaseWindow,
  BaseWindowClose,
  BaseWindowTitle,
  BaseWindowHead,
  BaseWindowContent,
  BaseWindowActions,
} from '../styles'

export const Window = styled(BaseWindow)`
  height: 700px;

  @media ${({ theme }) => theme.media.medium} {
    height: 100%;
  }
`

export const WindowHead = styled(BaseWindowHead)``

export const WindowClose = styled(BaseWindowClose)``

export const WindowTitle = styled(BaseWindowTitle)``

export const WindowContent = styled(BaseWindowContent)`
  width: 75%;

  @media ${({ theme }) => theme.media.medium} {
    width: 100%;
  }
`

export const WindowActions = styled(BaseWindowActions)`
  display: grid;
  grid: 1fr / 1fr 2fr;
  gap: 16px;
`
