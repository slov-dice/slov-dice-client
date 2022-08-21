import styled from 'styled-components'

import { Panel } from '../styles'

export const ChatPanel = styled(Panel)`
  height: 100%;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const FormMessage = styled.div`
  display: grid;
  grid: 1fr / 4fr 1fr;
`
