import styled from 'styled-components'

import { TabPanelBase, TabPanelBottomBase, BlockAdd, BlockRemove } from '../styles'

export const TabPanel = styled(TabPanelBase)``
export const TabPanelBottom = styled(TabPanelBottomBase)``

export const SpecialsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const SpecialBlock = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  width: 200px;
  padding: 12px;

  background-color: #2b2b2b;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 16%) 0 3px 6px, rgba(0, 0, 0, 23%) 0 3px 6px;
`

export const SpecialRemove = styled(BlockRemove)``

export const SpecialAdd = styled(BlockAdd)`
  height: 118px;
`
