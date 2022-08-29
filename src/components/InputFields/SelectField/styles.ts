import styled from 'styled-components'

export const WrapperSelect = styled.div<{ isOpened: boolean }>`
  position: relative;

  ::after {
    pointer-events: none;
    content: '';

    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%) ${({ isOpened }) => (isOpened ? 'rotate(180deg)' : 'rotate(0)')};

    display: block;

    width: 0;
    height: 0;

    border-color: ${({ theme }) => theme.colors.white} transparent transparent;
    border-style: solid;
    border-width: 6px 4px 0;

    transition: transform 0.2s ease;
  }
`

export const Select = styled.select<{ fullWidth: boolean }>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '256px')};
  max-width: 100%;
  height: 54px;
  max-height: 100%;
  padding: 12px 18px;

  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.white_05};
  border: none;
  border-radius: 8px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 10%) 0 6px 12px -2px, rgba(0, 0, 0, 40%) 0 3px 7px -3px;

  appearance: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.white_50};
  }
`

export const Option = styled.option`
  color: ${({ theme }) => theme.colors.black};
`
