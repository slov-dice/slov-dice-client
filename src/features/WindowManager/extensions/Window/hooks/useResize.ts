import { MotionValue, useMotionValue } from 'framer-motion'
import { useState, MouseEvent, useEffect, useCallback, Dispatch, SetStateAction } from 'react'

import { E_ResizerPosition } from '../../../models/window'

interface I_UseResizeProps {
  height: MotionValue<number>
  width: MotionValue<number>
  x: MotionValue<number>
  y: MotionValue<number>
  containerHeight: number
  containerWidth: number
  defaultWindowSize: number
  transitionDuration: number
  setSizeTransitionChanger: Dispatch<SetStateAction<boolean>>
}

export const useResize = ({
  height,
  width,
  x,
  y,
  containerHeight,
  containerWidth,
  defaultWindowSize,
  transitionDuration,
  setSizeTransitionChanger,
}: I_UseResizeProps) => {
  const [activeResizer, setActiveResizer] = useState<E_ResizerPosition | null>(null)
  const [isResize, setIsResize] = useState(false)

  // Начальное состояние окна перед изменении размера
  const startWindowResize = useMotionValue({
    height: height.get(),
    width: width.get(),
    y: y.get(),
    x: x.get(),
  })

  // Начальное положение курсора перед изменением размера
  const startMouseResize = useMotionValue({
    y: 0,
    x: 0,
  })

  const handleMouseDown = (e: MouseEvent<HTMLElement>, direction: E_ResizerPosition) => {
    setIsResize(true)
    startWindowResize.set({
      height: height.get(),
      width: width.get(),
      y: y.get(),
      x: x.get(),
    })
    startMouseResize.set({
      y: e.clientY,
      x: e.clientX,
    })
    setActiveResizer(direction)
  }

  const handleMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      if (!isResize || !activeResizer) return
      const diffY = e.clientY - startMouseResize.get().y
      const diffX = e.clientX - startMouseResize.get().x
      const directions = activeResizer.split('')

      const getStart = (startSize: number, start: number, diff: number) => {
        return {
          size: Math.min(Math.max(startSize - diff, defaultWindowSize), start + startSize),
          position: Math.max(start + Math.min(diff, startSize - defaultWindowSize), 0),
        }
      }

      const getEnd = (startSize: number, start: number, diff: number, containerSize: number) => {
        return {
          size: Math.max(Math.min(startSize + diff, containerSize - start), defaultWindowSize),
        }
      }

      if (directions.includes(E_ResizerPosition.n)) {
        const dimensions = getStart(
          startWindowResize.get().height,
          startWindowResize.get().y,
          diffY,
        )
        height.set(dimensions.size)
        y.set(dimensions.position)
      }

      if (directions.includes(E_ResizerPosition.w)) {
        const dimensions = getStart(startWindowResize.get().width, startWindowResize.get().x, diffX)
        width.set(dimensions.size)
        x.set(dimensions.position)
      }

      if (directions.includes(E_ResizerPosition.e)) {
        const dimensions = getEnd(
          startWindowResize.get().width,
          startWindowResize.get().x,
          diffX,
          containerWidth,
        )
        width.set(dimensions.size)
      }

      if (directions.includes(E_ResizerPosition.s)) {
        const dimensions = getEnd(
          startWindowResize.get().height,
          startWindowResize.get().y,
          diffY,
          containerHeight,
        )
        height.set(dimensions.size)
      }
    },
    [
      activeResizer,
      containerHeight,
      containerWidth,
      defaultWindowSize,
      height,
      isResize,
      startMouseResize,
      startWindowResize,
      width,
      x,
      y,
    ],
  )

  const handleMouseUp = useCallback(() => {
    setIsResize(false)
    setSizeTransitionChanger(true)
    setTimeout(() => {
      setSizeTransitionChanger(false)
    }, transitionDuration)

    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
  }, [handleMouseMove, setSizeTransitionChanger, transitionDuration])

  useEffect(() => {
    console.count()
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  return { isResize, handleMouseDown }
}
