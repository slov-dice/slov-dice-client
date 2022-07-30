import styled from 'styled-components'

export const WrapperSelect = styled.div<{ isOpened: boolean }>`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    right: 15px;
    top: 50%;
    display: block;
    border-style: solid;
    border-width: 6px 4px 0;
    border-color: ${({ theme }) => theme.colors.white} transparent transparent;
    width: 0;
    height: 0;
    transform: translateY(-50%) ${({ isOpened }) => (isOpened ? 'rotate(180deg)' : 'rotate(0)')};
    transition: transform 0.2s ease;
    pointer-events: none;
  }
`

export const Select = styled.select<{ fullWidth: boolean }>`
  appearance: none;
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 12px 18px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '256px')};
  height: 54px;
  max-width: 100%;
  max-height: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0 6px 12px -2px, rgba(0, 0, 0, 0.4) 0 3px 7px -3px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.white_05};

  ::placeholder {
    color: ${({ theme }) => theme.colors.white_50};
  }
`

export const Option = styled.option`
  color: ${({ theme }) => theme.colors.black};
`
