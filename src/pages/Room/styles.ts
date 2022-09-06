import styled from 'styled-components'

export const Page = styled.div`
  position: relative;

  overflow-y: none;

  height: 100%;
  margin-top: ${({ theme }) => theme.sizes.header.height}px;
`
