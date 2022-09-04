import { motion, Variants } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const Framer = styled(motion.div)`
  height: calc(100vh - ${({ theme }) => theme.sizes.header.height}px);
`

export const FramerRoute = () => {
  return (
    <Framer {...variants}>
      <Outlet />
    </Framer>
  )
}
