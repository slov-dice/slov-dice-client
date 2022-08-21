import styled from 'styled-components'

export const Layout = styled.div`
  position: relative;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  height: max(800px, 100vh);

  @media ${({ theme }) => theme.media.md} {
    align-items: flex-start;
  }
`
