import styled from 'styled-components'

export const Box = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.order.content};

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: min(${({ theme }) => theme.sizes.authForm.width}px, 100%);
  height: ${({ theme }) => theme.sizes.authForm.height}px;

  background: ${({ theme }) => theme.colors.black};
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 50%) 0 6px 12px -2px, rgba(0, 0, 0, 65%) 0 3px 7px -3px;

  @media ${({ theme }) => theme.media.md} {
    height: 100%;

    background: ${({ theme }) => theme.colors.black_90};
    border-radius: 0;
  }
`

export const TopSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  padding: 64px 64px 32px;

  @media ${({ theme }) => theme.media.md} {
    padding: 64px 32px 0;
  }
`

export const ContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BottomAction = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`

export const BottomSection = styled.div`
  width: 100%;
  height: 120px;

  box-shadow: rgb(0 0 0 / 40%) 0 0 5px;
`
