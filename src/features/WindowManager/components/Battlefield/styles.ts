import styled from 'styled-components'

import * as C from 'styles/components'

export const WindowContentWrapper = styled.div`
  display: grid;
  grid: calc(50% - 4px) calc(50% - 4px) / 100%;
  gap: 8px;

  width: 100%;
  height: 100%;
  padding: 8px;
`

export const FieldWrapper = styled.div`
  position: relative;

  display: flex;

  width: 100%;
  height: 100%;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.white_05};
`

export const CardsWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  gap: 2%;
  align-items: center;

  width: 100%;
  max-width: 100%;
  height: 100%;
  padding: 8px 8px 14px;

  ::-webkit-scrollbar {
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: #1e1939;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
  }
`

export const MasterFieldEdit = styled(C.Control)`
  position: absolute;
  z-index: 10;
  top: 4px;
  right: 4px;
`

export const PlayerFieldEdit = styled(C.Control)`
  position: absolute;
  z-index: 10;
  right: 4px;
  bottom: 4px;
`
