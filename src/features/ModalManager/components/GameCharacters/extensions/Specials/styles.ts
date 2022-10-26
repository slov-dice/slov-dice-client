import styled from 'styled-components'

import { TabPanelBase, TabPanelBottomBase } from '../styles'

export const TabPanel = styled(TabPanelBase)``
export const TabPanelBottom = styled(TabPanelBottomBase)``

export const SpecialsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`

export const SpecialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const SpecialsActions = styled.div`
  width: 256px;
`
