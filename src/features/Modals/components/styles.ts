import styled from 'styled-components'

export const BaseWindow = styled.div`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 580px;

  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.black};
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 50%) 0 6px 12px -2px, rgba(0, 0, 0, 65%) 0 3px 7px -3px;

  @media ${({ theme }) => theme.media.lg} {
    gap: 16px;
    justify-content: flex-start;

    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.colors.black_90};
    border-radius: 0;
  }
`

export const BaseWindowClose = styled.span`
  cursor: pointer;
  user-select: none;

  position: absolute;
  right: 24px;

  width: 24px;
  height: 24px;

  fill: ${({ theme }) => theme.colors.white};

  & > svg {
    width: 100%;
    height: 100%;
  }
`
