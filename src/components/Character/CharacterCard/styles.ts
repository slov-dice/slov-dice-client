import styled from 'styled-components'

export const Card = styled.div`
  overflow: hidden;
  display: grid;
  grid: 1fr / 2fr 2fr;
  gap: 12px;

  width: 360px;
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

export const Avatar = styled.img`
  width: 100%;

  object-fit: contain;
  border: 2px solid ${({ theme }) => theme.colors.white_50};
  border-radius: 50%;
`

export const WrapperBars = styled.div`
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

export const LabelName = styled.span`
  padding-bottom: 4px;

  font-size: 18px;
  font-weight: 500;
  text-align: center;

  border-bottom: 1px dashed ${({ theme }) => theme.colors.white_50};
`

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;

  height: 100%;
  padding-left: 4px;
`

export const WrapperEffects = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const Actions = styled.div`
  display: flex;
  justify-content: end;
`
