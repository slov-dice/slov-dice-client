import styled from 'styled-components'

export const Page = styled.div`
  position: relative;

  overflow: hidden;

  height: 100vh;
`

export const Container = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.order.content};

  display: flex;
  flex-direction: column;

  max-width: 1268px;
  height: calc(100% - ${({ theme }) => theme.sizes.header.height + 32}px);
  margin: ${({ theme }) => theme.sizes.header.height + 16}px auto 16px auto;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.black_80};
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 50%) 0 6px 12px -2px, rgba(0, 0, 0, 65%) 0 3px 7px -3px;

  @media ${({ theme }) => theme.media.md} {
    height: calc(100% - ${({ theme }) => theme.sizes.header.height}px);
    margin: ${({ theme }) => theme.sizes.header.height}px auto 0 auto;
  }
`
