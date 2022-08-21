import { motion } from 'framer-motion'
import styled from 'styled-components'

import { wrapperAttrs } from './motion'

export const Wrapper = styled(motion.div).attrs(({ theme }) => wrapperAttrs(theme))``
