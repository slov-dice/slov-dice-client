import styled from 'styled-components'

export const Page = styled.div`
  position: relative;

  overflow: hidden;

  height: 100vh;
`

export const Container = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.order.content};

  padding-top: ${({ theme }) => theme.sizes.header.height}px;
`
