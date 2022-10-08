import styled from 'styled-components'

import { OverlayHeaderBase } from '../styles'

export const OverlayHeader = styled(OverlayHeaderBase)``

export const OverlayContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;

  padding: 8px;
`

export const AvatarItem = styled.div`
  width: 156px;
  height: 156px;

  img {
    width: 100%;
    height: 100%;
  }
`
