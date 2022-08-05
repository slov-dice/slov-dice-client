import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const AuthWrapper = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}))`
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

export const AuthForm = styled.div`
  position: relative;
  z-index: 5;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${({ theme }) => theme.sizes.authForm.width}px;
  height: ${({ theme }) => theme.sizes.authForm.height}px;

  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme }) => theme.colors.authForm};
  border-radius: 16px;

  ${({ theme }) => css`
    box-shadow: rgba(0, 0, 0, 0.5) 0 3px 7px -3px, 0 6px 0 0 ${theme.colors.primary};
  `}

  @media ${({ theme }) => theme.media.md} {
    width: 100%;
    height: calc(100% - 7px);
  }
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 680px;
  padding: 64px 81px 32px;

  @media ${({ theme }) => theme.media.lg} {
    padding: 64px 36px 0;
  }
`
