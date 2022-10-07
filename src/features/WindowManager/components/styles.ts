import styled from 'styled-components'

export const BaseWrapper = styled.div`
  overflow: auto;

  height: 100%;
  padding: 24px;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
  }
`
