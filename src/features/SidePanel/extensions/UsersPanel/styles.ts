import styled from 'styled-components'

import { Panel, BaseTitle } from '../styles'

export const UsersPanel = styled(Panel)``

export const Title = styled(BaseTitle)``

export const ContentSection = styled.div`
  overflow: auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  box-shadow: rgb(35 35 36) 0 0 0 0 inset, rgb(23 21 21 / 50%) 0 0 20px 7px inset;
`

export const UsersWrapper = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 16px;

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
