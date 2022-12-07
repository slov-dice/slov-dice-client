import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.order.content};

  overflow: hidden;

  height: 240px;

  background-color: ${({ theme }) => theme.colors.black};
`
