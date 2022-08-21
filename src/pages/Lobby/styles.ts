import styled from 'styled-components'

export const Page = styled.div`
  position: relative;
`

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.sizes.header.height}px;
`
