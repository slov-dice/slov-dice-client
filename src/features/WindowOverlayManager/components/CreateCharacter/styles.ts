import styled from 'styled-components'

import { OverlayHeaderBase, ContentBlockBase } from '../styles'

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

export const BarWrapper = styled.div<{ color: string; barHeight: number }>`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;

  padding-left: 12px;

  :before {
    content: '';

    position: absolute;
    bottom: 0;
    left: 0;

    width: 3px;
    height: ${({ barHeight }) => barHeight}%;

    background-color: ${({ color }) => color};

    transition: height 500ms ease;
  }

  :after {
    content: '';

    position: absolute;
    left: 0;

    width: 3px;
    height: 100%;

    opacity: 0.5;
    background-color: ${({ color }) => color};
  }
`

export const BarName = styled.span`
  font-weight: 300;
  text-transform: uppercase;
`

export const BarText = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-evenly;
`

export const ContentBottom = styled.div`
  display: grid;
  grid: 1fr / 1fr 2fr;
  gap: 16px;

  max-width: min(600px, 100%);
  margin-left: auto;
`
