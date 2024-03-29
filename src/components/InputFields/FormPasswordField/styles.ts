import styled from 'styled-components'

export const FormPasswordFieldWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 100%;
`

export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  height: 48px;
  max-height: 100%;
  margin-bottom: 12px;
  padding: 14px 20px;

  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.white_10};
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 10%) 0 6px 12px -2px, rgba(0, 0, 0, 40%) 0 3px 7px -3px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.white_50};
  }

  ::-ms-reveal {
    opacity: 0;
  }
`

export const IconWrapper = styled.div<{ passwordVisible: boolean }>`
  cursor: pointer;
  user-select: none;

  position: absolute;
  top: 16px;
  right: 16px;

  width: 18px;
  height: 18px;

  fill: ${({ theme }) => theme.colors.white};

  svg {
    position: absolute;
  }

  svg:nth-child(1) {
    opacity: ${({ passwordVisible }) => (passwordVisible ? 0 : 1)};
  }

  svg:nth-child(2) {
    opacity: ${({ passwordVisible }) => (passwordVisible ? 1 : 0)};
  }
`

export const Error = styled.span`
  position: absolute;
  bottom: -5px;

  min-width: 300px;

  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};
`
