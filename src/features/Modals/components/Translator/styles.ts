import styled from 'styled-components'

import { BaseWindow, BaseWindowClose } from '../styles'

export const Window = styled(BaseWindow)`
  padding: 24px 30px;

  border-radius: 2px;
`

export const WindowClose = styled(BaseWindowClose)`
  top: 24px;
  right: 30px;
`

export const WindowTitle = styled.span`
  font-size: 32px;
  font-weight: 300;
  text-transform: uppercase;
`

export const WindowContent = styled.div`
  color: ${({ theme }) => theme.colors.white_50};
`

export const WindowActions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`
