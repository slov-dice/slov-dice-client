import styled from 'styled-components'

export const CardWrapper = styled.div`
  overflow: hidden;
  display: grid;
  grid: 1fr / 2fr 2fr;
  gap: 12px;

  width: 360px;
  height: fit-content;
  min-height: 309px;
  padding: 8px;

  text-transform: uppercase;

  background-color: ${({ theme }) => theme.colors.white_05};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 16%) 0 3px 6px, rgba(0, 0, 0, 23%) 0 3px 6px;
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding-right: 12px;
`

export const BarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  border-left: 1px dashed ${({ theme }) => theme.colors.white_50};
`

export const NameWrapper = styled.span`
  padding-bottom: 4px;
  padding-left: 4px;

  border-bottom: 1px dashed ${({ theme }) => theme.colors.white_50};
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;

  height: 100%;
  padding-left: 4px;
`

export const EffectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: end;
`
