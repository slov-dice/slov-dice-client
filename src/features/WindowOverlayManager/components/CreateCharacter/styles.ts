import styled from 'styled-components'

import {
  OverlayHeaderBase,
  ContentBlockBase,
  BarNameBase,
  BarTextBase,
  BarWrapperBase,
} from '../styles'

export const OverlayHeader = styled(OverlayHeaderBase)``

export const OverlayContent = styled.div`
  padding: 16px;
`

export const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  padding-bottom: 8px;
`

export const ContentWrapper = styled.div`
  display: grid;
  grid: 1fr / repeat(auto-fit, minmax(370px, 1fr));
  gap: 24px;
`

export const ContentBlock = styled(ContentBlockBase)``

export const BarWrapper = styled(BarWrapperBase)``

export const BarName = styled(BarNameBase)``

export const BarText = styled(BarTextBase)``

export const ContentBottom = styled.div`
  display: grid;
  grid: 1fr / 1fr 2fr;
  gap: 16px;

  max-width: min(600px, 100%);
  margin-left: auto;
`
