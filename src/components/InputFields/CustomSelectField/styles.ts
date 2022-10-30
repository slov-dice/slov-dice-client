import styled from 'styled-components'

export const SelectContainer = styled.div`
  position: relative;

  width: fit-content;
`
export const SelectHeader = styled.div`
  cursor: pointer;
  user-select: none;

  height: 36px;
  padding: 8px 18px;

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
export const SelectListWrapper = styled.div``
export const SelectList = styled.ul`
  position: absolute;
  z-index: 100;
  top: 36px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  box-sizing: border-box;
  width: fit-content;
  margin: 0;
  padding: 0;

  background: #373737;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &:first-child {
    padding-top: 8px;
  }
`
export const ListItem = styled.li`
  cursor: pointer;
  user-select: none;

  height: 36px;
  margin-inline: 8px;
  padding: 4px;

  svg {
    width: 100%;
    height: 100%;
  }
`
