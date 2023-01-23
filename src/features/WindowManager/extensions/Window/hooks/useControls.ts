import { MotionValue, useMotionValue } from 'framer-motion'
import { useState, MouseEvent, Dispatch, SetStateAction } from 'react'

import { E_Modal } from 'features/ModalManager/models'
import { openModal } from 'features/ModalManager/slice'
import { E_Window } from 'features/WindowManager/models'
import { windowManagerActions } from 'features/WindowManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'

interface I_UseControlProps {
  height: MotionValue<number>
  width: MotionValue<number>
  x: MotionValue<number>
  y: MotionValue<number>
  containerHeight: number
  containerWidth: number
  defaultWindowSize: number
  defaultWindowHeaderHeight: number
  content: E_Window
  transitionDuration: number
  modal: E_Modal | null
  setTransformTransitionChanger: Dispatch<SetStateAction<boolean>>
}

export const useControls = ({
  height,
  width,
  y,
  x,
  containerHeight,
  containerWidth,
  defaultWindowSize,
  defaultWindowHeaderHeight,
  content,
  transitionDuration,
  modal,
  setTransformTransitionChanger,
}: I_UseControlProps) => {
  const dispatch = useStoreDispatch()

  // Предыдущее состояние окна до изменения на полноэкранный режим
  const prevWindowFullSize = useMotionValue({
    height: height.get(),
    width: width.get(),
    y: y.get(),
    x: x.get(),
  })

  // Предыдущее состояние окна до изменения на компактный режим
  const prevWindowMinSize = useMotionValue({
    height: height.get(),
    width: width.get(),
    y: y.get(),
    x: x.get(),
  })

  const [isFullSize, setFullSize] = useState(false)
  const [isMinSize, setMinSize] = useState(false)

  const handleClose = () => {
    dispatch(windowManagerActions.closeWindow(content))
  }

  const toggleFullSize = () => {
    if (isFullSize) {
      height.set(prevWindowFullSize.get().height)
      width.set(prevWindowFullSize.get().width)
      y.set(prevWindowFullSize.get().y)
      x.set(prevWindowFullSize.get().x)
      setFullSize(false)
    } else {
      prevWindowFullSize.set({
        width: width.get(),
        height: height.get(),
        y: y.get(),
        x: x.get(),
      })
      height.set(containerHeight)
      width.set(containerWidth)
      y.set(0)
      x.set(0)
      dispatch(windowManagerActions.setWindowFocus(content))
      setFullSize(true)
    }
  }

  const toggleMinSize = () => {
    if (isMinSize) {
      height.set(prevWindowMinSize.get().height)
      width.set(prevWindowMinSize.get().width)
      setMinSize(false)
      setFullSize(false)
    } else {
      if (!isFullSize) {
        prevWindowMinSize.set({
          width: width.get(),
          height: height.get(),
          y: y.get(),
          x: x.get(),
        })
      }
      height.set(defaultWindowHeaderHeight)
      width.set(defaultWindowSize)
      setMinSize(true)
      setFullSize(false)
    }
  }

  const handleStopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const handleTransformTransitionChanger = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setTransformTransitionChanger(true)
    setTimeout(() => {
      setTransformTransitionChanger(false)
    }, transitionDuration)
  }

  const handleOpenSettings = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (modal) dispatch(openModal(modal))
  }

  return {
    isFullSize,
    isMinSize,
    handleClose,
    toggleFullSize,
    toggleMinSize,
    handleStopPropagation,
    handleTransformTransitionChanger,
    handleOpenSettings,
  }
}
