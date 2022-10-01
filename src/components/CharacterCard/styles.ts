import styled from 'styled-components'

export const Card = styled.div`
  overflow: hidden;
  display: grid;
  grid: 1fr / 2fr 2fr;
  gap: 8px;

  width: 360px;
  height: 280px;
  padding: 8px;

  text-transform: uppercase;

  background-color: ${({ theme }) => theme.colors.white_10};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 15%) 1.95px 1.95px 2.6px;
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const WrapperLevel = styled.div`
  display: flex;
  justify-content: center;
`

export const LabelLevel = styled.span`
  width: 80%;

  font-weight: 500;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`

export const Avatar = styled.img`
  width: 100%;

  object-fit: contain;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`
