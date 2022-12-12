import styled from 'styled-components'

import * as C from 'styles/components'

export const WindowContentWrapper = styled.div`
  display: grid;
  grid: 1fr 1fr/ 1fr;
  gap: 8px;

  width: 100%;
  height: 100%;
  padding: 8px;
`

export const FieldWrapper = styled.div`
  position: relative;

  display: flex;

  width: 100%;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.white_05};
`

export const CardsWrapper = styled.div`
  overflow: auto;
  display: flex;
  gap: 2%;

  width: 100%;
  max-width: 100%;
  height: 100%;
`

export const MasterFieldEdit = styled(C.Control)`
  position: absolute;
  top: 4px;
  right: 4px;
`

export const PlayerFieldEdit = styled(C.Control)`
  position: absolute;
  right: 4px;
  bottom: 4px;
`
