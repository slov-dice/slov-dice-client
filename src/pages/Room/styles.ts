import styled from 'styled-components'

export const Page = styled.div`
  position: relative;

  height: calc(100vh - ${({ theme }) => theme.sizes.header.height}px);
  margin-top: ${({ theme }) => theme.sizes.header.height}px;
`
