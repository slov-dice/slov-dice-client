import styled from 'styled-components'

import { TabPanelBase, TabPanelBottomBase } from '../styles'

export const TabPanel = styled(TabPanelBase)``
export const TabPanelBottom = styled(TabPanelBottomBase)``

export const EffectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`

export const EffectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 320px;
`

export const EffectsActions = styled.div`
  width: 256px;
`
