import styled from 'styled-components'

export const SelectContainer = styled.div`
  position: relative;

  width: fit-content;
  min-width: 150px;

  :before {
    content: '';

    position: absolute;
    top: 17px;
    right: 8px;

    border: 6px solid transparent;
    border-top: 6px solid ${({ theme }) => theme.colors.white_50};
  }
`
export const SelectHeader = styled.div`
  cursor: pointer;
  user-select: none;

  height: 36px;
  padding: 8px 24px 8px 12px;

  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.white_05};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 10%) 0 6px 12px -2px, rgba(0, 0, 0, 40%) 0 3px 7px -3px;

  svg {
    width: 100%;
    height: 100%;
  }
`
export const SelectList = styled.ul`
  position: absolute;
  z-index: 100;
  top: 36px;

  overflow: hidden;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;

  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 10%) 0 6px 12px -2px, rgba(0, 0, 0, 40%) 0 3px 7px -3px;

  &:first-child {
    padding-top: 8px;
  }
`
export const ListItem = styled.li`
  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 4px;

  border-top: 1px solid ${({ theme }) => theme.colors.white_05};

  svg {
    width: 100%;
    height: 100%;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.primary_50};
  }
`
