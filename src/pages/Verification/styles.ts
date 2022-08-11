import styled from 'styled-components'

export const Wrapper = styled.div`
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

export const Box = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.order.content};

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: min(${({ theme }) => theme.sizes.verificationForm.width}px, 100%);
  height: ${({ theme }) => theme.sizes.verificationForm.height}px;

  background: ${({ theme }) => theme.colors.black};
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 50%) 0 6px 12px -2px, rgba(0, 0, 0, 65%) 0 3px 7px -3px;

  @media ${({ theme }) => theme.media.md} {
    height: 100%;

    background: ${({ theme }) => theme.colors.black_90};
    border-radius: 0;
  }
`
