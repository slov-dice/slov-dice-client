import styled from 'styled-components'

import { BlockRemove, BlockAdd } from 'styles/common/block'
import { TabPanelBase, TabPanelBottomBase } from 'styles/common/tabs'

export const TabPanel = styled(TabPanelBase)``
export const TabPanelBottom = styled(TabPanelBottomBase)``

export const BarsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const BarBlock = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

  width: 200px;
  padding: 12px;

  background-color: #2b2b2b;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 16%) 0 3px 6px, rgba(0, 0, 0, 23%) 0 3px 6px;
`

export const BarRemove = styled(BlockRemove)``

export const BarAdd = styled(BlockAdd)``
