import styled from 'styled-components'

import { TabPanelBase, TabPanelBottomBase } from '../styles'

export const TabPanel = styled(TabPanelBase)``
export const TabPanelBottom = styled(TabPanelBottomBase)``

export const BarsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const BarsActions = styled.div`
  width: 256px;
`
