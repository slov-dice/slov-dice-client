import { motion } from 'framer-motion'
import styled from 'styled-components'

export const AuthForm = styled.div`
  position: relative;
  z-index: 5;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: min(${({ theme }) => theme.sizes.authForm.width}px, 100%);
  height: ${({ theme }) => theme.sizes.authForm.height}px;

  background: ${({ theme }) => theme.colors.black};
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 50%) 0 6px 12px -2px, rgba(0, 0, 0, 65%) 0 3px 7px -3px;

  @media ${({ theme }) => theme.media.md} {
    height: 100%;

    background: ${({ theme }) => theme.colors.black_90};
    border-radius: 0;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 680px;
  padding: 64px 81px 32px;

  @media ${({ theme }) => theme.media.md} {
    padding: 64px 36px 0;
  }
`

export const Title = styled(motion.h2)`
  display: flex;
  align-items: flex-start;

  width: 100%;
  margin: 24px 0 32px;

  font-size: 28px;
  font-weight: 500;
  font-style: normal;
  color: ${({ theme }) => theme.colors.white};
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BottomAction = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
`

export const BottomDecoration = styled.div`
  width: 100%;
  height: 120px;

  box-shadow: rgb(0 0 0 / 40%) 0 0 5px;
`
