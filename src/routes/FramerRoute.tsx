import { motion, Variants } from 'framer-motion'
import { Outlet } from 'react-router-dom'

const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const FramerRoute = () => {
  return (
    <motion.div {...variants}>
      <Outlet />
    </motion.div>
  )
}
