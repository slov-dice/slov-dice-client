import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'

import { getWrapperVariants } from './variants'

export const Wrapper = styled(motion.div).attrs<Variants>(() => ({
  ...getWrapperVariants(),
  transition: { duration: 0.15 },
}))`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.white_50};

  & > span {
    font-size: 24px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
  }
`

export const WrapperActions = styled.div`
  display: flex;
  gap: 16px;

  margin-left: auto;
`
