import { motion } from 'framer-motion'
import styled from 'styled-components'

import { wrapperAttrs } from './motion'

export const Wrapper = styled(motion.div).attrs(wrapperAttrs)`
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

export const WrapperEmailField = styled.div`
  display: grid;
  grid: 1fr/ 3fr 1fr;
`

export const WrapperCodeField = styled.div`
  width: 90px;
`

export const WrapperActions = styled.div`
  display: flex;
  gap: 16px;

  margin-left: auto;
`
