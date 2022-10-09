import styled from 'styled-components'

import { OverlayHeaderBase } from '../styles'

export const OverlayHeader = styled(OverlayHeaderBase)``

export const OverlayContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  padding: 16px;
`

export const AvatarWrapper = styled.div`
  overflow: hidden;

  width: 156px;
  height: 156px;

  border: 2px solid ${({ theme }) => theme.colors.white_50};
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
  }
`
