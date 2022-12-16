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

export const ContentBlockBase = styled.div<{ direction?: 'column' | 'row' }>`
  display: flex;
  flex-direction: ${({ direction = 'column' }) => (direction === 'column' ? 'column' : 'row')};
  gap: 16px;

  width: 100%;
  min-height: 81px;
  padding: 12px;

  background-color: #2b2b2b;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 16%) 0 3px 6px, rgba(0, 0, 0, 23%) 0 3px 6px;
`

export const BarWrapperBase = styled.div<{ color: string; barHeight: number }>`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4px;

  padding-left: 12px;

  :before {
    content: '';

    position: absolute;
    bottom: 0;
    left: 0;

    width: 3px;
    height: ${({ barHeight }) => barHeight}%;

    background-color: ${({ color }) => color};

    transition: height 500ms ease;
  }

  :after {
    content: '';

    position: absolute;
    left: 0;

    width: 3px;
    height: 100%;

    opacity: 0.5;
    background-color: ${({ color }) => color};
  }
`

export const BarNameBase = styled.span`
  font-weight: 300;
  text-transform: uppercase;
`

export const BarTextBase = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-evenly;
`
