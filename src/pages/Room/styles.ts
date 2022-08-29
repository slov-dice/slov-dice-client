import styled from 'styled-components'

export const Page = styled.div`
  position: relative;
`

export const Container = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.order.content};

  padding-top: ${({ theme }) => theme.sizes.header.height}px;
`
