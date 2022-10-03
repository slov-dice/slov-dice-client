import { motion } from 'framer-motion'
import styled from 'styled-components'

import { effectRemoveAttrs } from './motion'

import { E_EffectType } from 'models/game/character'

export const Effect = styled.span`
  position: relative;
`

export const EffectIcon = styled.span<{ type: E_EffectType }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;
  padding: 4px;

  border-color: ${({ theme, type }) =>
    type === E_EffectType.positive
      ? '#50c87880'
      : type === E_EffectType.neutral
      ? theme.colors.white_50
      : '#eb4c4280'};
  border-style: dashed;
  border-width: 1px;
  border-radius: 50%;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const EffectRemove = styled(motion.span).attrs(effectRemoveAttrs)`
  cursor: pointer;

  position: absolute;
  top: -4px;
  right: -4px;

  display: flex;

  width: 14px;
  height: 14px;

  opacity: 1;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;

  fill: ${({ theme }) => theme.colors.white};

  svg {
    width: 100%;
    height: 100%;
  }
`
