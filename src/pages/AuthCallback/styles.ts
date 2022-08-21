import { motion } from 'framer-motion'
import styled from 'styled-components'

import { statusItemAttrs } from './motion'

export const Page = styled.div`
  position: relative;

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  height: max(800px, 100vh);

  @media ${({ theme }) => theme.media.md} {
    align-items: flex-start;
  }
`

export const Box = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.order.content};

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: min(${({ theme }) => theme.sizes.authCallbackForm.width}px, 100%);
  height: ${({ theme }) => theme.sizes.authCallbackForm.height}px;

  background: ${({ theme }) => theme.colors.black};
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 50%) 0 6px 12px -2px, rgba(0, 0, 0, 65%) 0 3px 7px -3px;

  @media ${({ theme }) => theme.media.md} {
    height: 100%;

    background: ${({ theme }) => theme.colors.black_90};
    border-radius: 0;
  }
`

export const TopSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  padding: 64px 64px 32px;

  @media ${({ theme }) => theme.media.md} {
    padding: 64px 32px 0;
  }
`
export const StatusList = styled.ul`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 18px;
`

export const StatusItem = styled(motion.li).attrs(({ theme }) => statusItemAttrs(theme))`
  position: relative;

  &::before {
    content: '';

    position: absolute;
    top: 2px;
    left: -9px;

    width: 3px;
    height: 12px;

    opacity: 0.9;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 3px;
  }
`

export const BottomSection = styled.div`
  width: 100%;
  height: 120px;

  box-shadow: rgb(0 0 0 / 40%) 0 0 5px;
`
