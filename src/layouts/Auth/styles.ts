import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled(motion.div)`
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
