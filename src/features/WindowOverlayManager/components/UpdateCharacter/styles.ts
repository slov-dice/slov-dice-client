import styled from 'styled-components'

import {
  OverlayHeaderBase,
  ContentBlockBase,
  BarWrapperBase,
  BarNameBase,
  BarTextBase,
} from '../styles'

import * as C from 'styles/components'

export const OverlayHeader = styled(OverlayHeaderBase)``

export const RemoveCharacter = styled(C.Control)`
  position: absolute;
  top: 8px;
  right: -8px;

  border: 1px solid ${({ theme }) => theme.colors.white_10};
`

export const OverlayContent = styled.div`
  padding: 16px;
`

export const ContentTop = styled.div`
  position: relative;

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

export const EditActions = styled(C.Control)`
  position: absolute;
  top: 8px;
  right: 8px;

  fill: ${({ theme }) => theme.colors.white};

  svg {
    width: 100%;
    height: 100%;
  }
`

export const CharacterAction = styled.div`
  width: 180px;
  height: fit-content;
  padding: 8px;

  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 4px;

  div:first-child {
    font-weight: 700;
  }
`
