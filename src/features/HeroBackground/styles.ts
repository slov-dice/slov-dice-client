import styled from 'styled-components'

export const HeroBackground = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.order.hero};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;

  width: 100%;
`
