import styled from 'styled-components'

export const WindowOverlay = styled.div`
  position: absolute;
  z-index: 90;
  top: 0;

  overflow: auto;

  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.colors.black_90};

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
