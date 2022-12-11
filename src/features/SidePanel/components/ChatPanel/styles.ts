import styled from 'styled-components'

import { Panel, BaseTitle } from '../styles'

export const ChatPanel = styled(Panel)`
  height: 100%;
`

export const Title = styled(BaseTitle)``

export const ContentSection = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  box-shadow: rgb(35 35 36) 0 0 0 0 inset, rgb(23 21 21 / 50%) 0 0 20px 7px inset;
`

export const MessagesWrapper = styled.div`
  overflow: auto;
  display: flex;
  flex: 1;
  flex-direction: column;

  height: 100%;
  padding: 16px 16px 0;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: #1e1939;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
  }
`

export const MessageFieldWrapper = styled.div`
  display: grid;
  grid: 1fr/ 5fr 1fr;
`

export const CommandsActionsWrapper = styled.div`
  display: grid;
  grid: 1fr / repeat(5, 1fr);
`
