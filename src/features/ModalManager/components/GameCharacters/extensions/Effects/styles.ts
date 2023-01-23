import styled from 'styled-components'

import { BlockAdd, BlockRemove } from 'styles/common/block'
import { TabPanelBase, TabPanelBottomBase } from 'styles/common/tabs'

export const TabPanel = styled(TabPanelBase)``
export const TabPanelBottom = styled(TabPanelBottomBase)``

export const EffectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`

export const EffectWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 340px;
  padding: 12px;

  background-color: #2b2b2b;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 16%) 0 3px 6px, rgba(0, 0, 0, 23%) 0 3px 6px;
`

export const EffectRemove = styled(BlockRemove)``

export const EffectAdd = styled(BlockAdd)`
  width: 340px;
`
