import styled from 'styled-components'

import { OverlayHeaderBase } from '../styles'

export const OverlayHeader = styled(OverlayHeaderBase)``

export const OverlayContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  padding: 16px;
`

export const DocCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 240px;
  padding: 8px;

  background-color: ${({ theme }) => theme.colors.white_05};
  box-shadow: rgba(0, 0, 0, 16%) 0 3px 6px, rgba(0, 0, 0, 23%) 0 3px 6px;
`

export const DocCardActions = styled.div<{ justify: 'space-between' | 'flex-end' }>`
  display: flex;
  justify-content: ${({ justify }) => justify};
`
