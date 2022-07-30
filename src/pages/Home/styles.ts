import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Home = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}))`
  position: relative;
`
