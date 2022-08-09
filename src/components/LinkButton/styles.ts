import { motion } from 'framer-motion'
import styled from 'styled-components'

export const LinkButton = styled(motion.button)`
  cursor: pointer;
  user-select: none;

  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};

  background-color: transparent;
  border: none;
  border-radius: 5%;
  box-shadow: 0 1px 0 0 ${({ theme }) => theme.colors.primary};
`
