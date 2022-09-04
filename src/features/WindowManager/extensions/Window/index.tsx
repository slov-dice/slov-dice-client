/* eslint-disable prefer-const */
import { useDragControls, useMotionValue } from 'framer-motion'
import { useRef, ReactNode, useState, useEffect, useCallback } from 'react'

import * as S from './styles'

import { theme } from 'styles/theme'

export enum E_ResizerPosition {
  n = 'n',
  ne = 'ne',
  e = 'e',
  se = 'se',
  s = 's',
  sw = 'sw',
  w = 'w',
  nw = 'nw',
}

interface I_WindowProps {
  children: ReactNode
  dragConstraints: any
}

export const Window = ({ children, dragConstraints }: I_WindowProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const height = useMotionValue(420)
  const width = useMotionValue(420)
  const y = useMotionValue(0)
  const x = useMotionValue(0)
  const dragControls = useDragControls()

  const [startMouseY, setStartMouseY] = useState(0)
  const [startMouseX, setStartMouseX] = useState(0)
  const [startY, setStartY] = useState(y.get())
  const [startX, setStartX] = useState(x.get())
  const [isResize, setIsResize] = useState(false)
  const [startHeight, setStartHeight] = useState(height.get())
  const [startWidth, setStartWidth] = useState(width.get())
  const [activeResizer, setActiveResizer] = useState<string | null>(null)

  // Изменение размера окна
  const handleMouseDown = (e: React.MouseEvent<HTMLElement>, direction: E_ResizerPosition) => {
    setIsResize(true)
    setStartHeight(height.get())
    setStartWidth(width.get())
    setStartY(y.get())
    setStartX(x.get())
    setStartMouseY(e.clientY)
    setStartMouseX(e.clientX)
    setActiveResizer(direction)
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResize) return
      const diffY = e.clientY - startMouseY
      const diffX = e.clientX - startMouseX
      const containerWidth = dragConstraints.current.clientWidth
      const containerHeight = dragConstraints.current.clientHeight

      const getStart = (startSize: number, start: number, diff: number) => {
        return {
          size: Math.min(Math.max(startSize - diff, 0), start + startSize),
          position: Math.max(start + Math.min(diff, startSize), 0),
        }
      }

      const getEnd = (startSize: number, start: number, diff: number, containerSize: number) => {
        return {
          size: Math.min(startSize + diff, containerSize - start),
        }
      }

      if (activeResizer === E_ResizerPosition.n) {
        const dimensions = getStart(startHeight, startY, diffY)
        height.set(dimensions.size)
        y.set(dimensions.position)
      }

      if (activeResizer === E_ResizerPosition.w) {
        const dimensions = getStart(startWidth, startX, diffX)
        width.set(dimensions.size)
        x.set(dimensions.position)
      }

      if (activeResizer === E_ResizerPosition.e) {
        const dimensions = getEnd(startWidth, startX, diffX, containerWidth)
        width.set(dimensions.size)
      }

      if (activeResizer === E_ResizerPosition.s) {
        const dimensions = getEnd(startHeight, startY, diffY, containerHeight)
        height.set(dimensions.size)
      }
    },
    [
      activeResizer,
      dragConstraints,
      height,
      isResize,
      startHeight,
      startMouseX,
      startMouseY,
      startWidth,
      startX,
      startY,
      width,
      x,
      y,
    ],
  )

  const handleMouseUp = useCallback(
    (e: MouseEvent) => {
      setIsResize(false)
      setStartHeight(height.get())
      setStartWidth(width.get())
      setStartY(0)
      setStartX(0)
      setStartMouseY(0)
      setStartMouseX(0)
      setActiveResizer(null)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    },
    [handleMouseMove, height, width],
  )

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  return (
    <S.Wrapper
      ref={wrapperRef}
      drag
      dragTransition={{
        power: 0,
        min: 0,
        max: 200,
        timeConstant: 250,
      }}
      dragConstraints={dragConstraints}
      dragListener={false}
      dragControls={dragControls}
      style={{ width, height, x, y }}
    >
      {Object.values(E_ResizerPosition).map((position) => (
        <S.Resizer
          key={position}
          position={position}
          onMouseDown={(e) => handleMouseDown(e, position)}
        />
      ))}
      <S.Head
        onPointerDown={(e) => {
          dragControls.start(e)
        }}
      >
        <div>Название</div>
        <div>X</div>
      </S.Head>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}
