import { motion } from 'framer-motion'
import styled from 'styled-components'

import { roomCardActionAttrs, roomCardAttrs } from './motion'

export const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
`

export const CreateWrapper = styled.div`
  width: 240px;
`

export const RoomList = styled.div`
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-content: flex-start;

  height: 100%;

  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: #1e1939;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #fff;
  }

  @media ${({ theme }) => theme.media.md} {
    justify-content: center;
  }
`

export const RoomCard = styled(motion.div).attrs(roomCardAttrs)`
  position: relative;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 220px;
  height: 160px;
  padding: 16px 16px 48px;

  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 50%) 0 6px 12px -2px, rgba(0, 0, 0, 65%) 0 3px 7px -3px;
`

export const RoomCardTitle = styled.div`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
`

export const RoomCardInfo = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    width: 24px;
    height: 24px;

    fill: ${({ theme }) => theme.colors.white};
  }
`

export const RoomCardAction = styled(motion.div).attrs<{ $isMatch: boolean }>(({ $isMatch }) =>
  $isMatch ? {} : roomCardActionAttrs(),
)<{
  $isMatch: boolean
}>`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 40px;

  button {
    cursor: pointer;

    width: 100%;
    height: 100%;

    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ theme }) => theme.colors.white_05};
    border: none;
    border-top: 3px solid ${({ theme }) => theme.colors.primary};
  }
`

export const NoRoomsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 90%;
`
