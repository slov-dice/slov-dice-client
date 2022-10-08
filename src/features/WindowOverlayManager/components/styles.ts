import styled from 'styled-components'

export const OverlayHeaderBase = styled.div`
  position: sticky;
  z-index: 2;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 8px;

  font-size: 22px;
  font-weight: 300;
  text-transform: uppercase;

  background: ${({ theme }) => theme.colors.black};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.primary};
`
