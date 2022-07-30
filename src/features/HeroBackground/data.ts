import { MotionStyle } from 'framer-motion'

export const itemsPosition: Record<string, MotionStyle[]> = {
  true: [
    { left: '7.5%', top: '10%', width: 120, rotate: '10deg' },
    { left: '2.5%', bottom: '20%', width: 125, rotate: '30deg' },
    { bottom: 0, left: '10%', width: 120, rotate: '5deg' },
    { right: 0, top: '2%', width: 120, rotate: '10deg' },
    { right: 0, bottom: '10%', width: 120, rotate: '-10deg' },
  ],
  false: [
    { left: '7.5%', top: '5%', width: 320, rotate: '10deg' },
    { left: '2.5%', bottom: '20%', width: 125, rotate: '30deg' },
    { bottom: '-5%', left: '30%', width: 320, rotate: '5deg' },
    { right: 0, top: 0, width: 320, rotate: '10deg' },
    { right: 0, bottom: '10%', width: 420, rotate: '-10deg' },
  ],
}
