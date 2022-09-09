import { useDragControls, useMotionValue } from 'framer-motion'
import {
  useRef,
  ReactNode,
  useState,
  useEffect,
  useCallback,
  MutableRefObject,
  MouseEvent,
} from 'react'

import * as S from './styles'

import { E_Window, I_WindowHead } from '../../models'
import { closeWindow, setFocus } from '../../slice'

import CloseIcon from 'assets/icons/close.svg'
import CompressIcon from 'assets/icons/compress.svg'
import DividerIcon from 'assets/icons/divider.svg'
import ExpandIcon from 'assets/icons/expand.svg'
import SettingsIcon from 'assets/icons/gear.svg'
import MinusIcon from 'assets/icons/minus.svg'
import PlusIcon from 'assets/icons/plus.svg'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import { getIcon } from 'utils/helpers/icons'

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

const DEFAULT_SIZE = 420

interface I_WindowProps {
  children: ReactNode
  dragConstraintsRef: MutableRefObject<HTMLDivElement | null>
  head: I_WindowHead
  value: E_Window
  focused: boolean
}

export const Window = ({ children, dragConstraintsRef, head, value, focused }: I_WindowProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const dispatch = useStoreDispatch()

  const height = useMotionValue(DEFAULT_SIZE)
  const width = useMotionValue(DEFAULT_SIZE)
  const y = useMotionValue(0)
  const x = useMotionValue(0)

  const prevWindowStateFullSize = useMotionValue({
    width: width.get(),
    height: height.get(),
    y: y.get(),
    x: x.get(),
  })
  const prevWindowStateMinSize = useMotionValue({
    width: width.get(),
    height: height.get(),
    y: y.get(),
    x: x.get(),
  })
  const dragControls = useDragControls()

  const containerWidth = dragConstraintsRef.current?.clientWidth ?? 0
  const containerHeight = dragConstraintsRef.current?.clientHeight ?? 0

  const [startMouseY, setStartMouseY] = useState(0)
  const [startMouseX, setStartMouseX] = useState(0)
  const [startY, setStartY] = useState(y.get())
  const [startX, setStartX] = useState(x.get())
  const [startHeight, setStartHeight] = useState(height.get())
  const [startWidth, setStartWidth] = useState(width.get())
  const [activeResizer, setActiveResizer] = useState<string | null>(null)

  const [isResize, setIsResize] = useState(false)
  const [isFullSize, setFullSize] = useState(false)
  const [isMinSize, setMinSize] = useState(false)

  const [transitionChanger, setTransitionChanger] = useState(false)

  // Изменение размера окна
  const handleMouseDown = (e: MouseEvent<HTMLElement>, direction: E_ResizerPosition) => {
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
    (e: globalThis.MouseEvent) => {
      if (!isResize) return
      const diffY = e.clientY - startMouseY
      const diffX = e.clientX - startMouseX
      const containerWidth = dragConstraintsRef.current?.clientWidth ?? 0
      const containerHeight = dragConstraintsRef.current?.clientHeight ?? 0

      const getStart = (startSize: number, start: number, diff: number) => {
        return {
          size: Math.min(Math.max(startSize - diff, DEFAULT_SIZE), start + startSize),
          position: Math.max(start + Math.min(diff, startSize - DEFAULT_SIZE), 0),
        }
      }

      const getEnd = (startSize: number, start: number, diff: number, containerSize: number) => {
        return {
          size: Math.max(Math.min(startSize + diff, containerSize - start), DEFAULT_SIZE),
        }
      }

      if (
        activeResizer === E_ResizerPosition.n ||
        activeResizer === E_ResizerPosition.ne ||
        activeResizer === E_ResizerPosition.nw
      ) {
        const dimensions = getStart(startHeight, startY, diffY)
        height.set(dimensions.size)
        y.set(dimensions.position)
      }

      if (
        activeResizer === E_ResizerPosition.w ||
        activeResizer === E_ResizerPosition.nw ||
        activeResizer === E_ResizerPosition.sw
      ) {
        const dimensions = getStart(startWidth, startX, diffX)
        width.set(dimensions.size)
        x.set(dimensions.position)
      }

      if (
        activeResizer === E_ResizerPosition.e ||
        activeResizer === E_ResizerPosition.ne ||
        activeResizer === E_ResizerPosition.se
      ) {
        const dimensions = getEnd(startWidth, startX, diffX, containerWidth)
        width.set(dimensions.size)
      }

      if (
        activeResizer === E_ResizerPosition.s ||
        activeResizer === E_ResizerPosition.sw ||
        activeResizer === E_ResizerPosition.se
      ) {
        const dimensions = getEnd(startHeight, startY, diffY, containerHeight)
        height.set(dimensions.size)
      }
    },
    [
      activeResizer,
      dragConstraintsRef,
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

  const handleMouseUp = useCallback(() => {
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
  }, [handleMouseMove, height, width])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  const handleClose = () => {
    dispatch(closeWindow(value))
  }

  const handleFocus = () => {
    dispatch(setFocus(value))
  }
  const toggleFullSize = () => {
    if (isFullSize) {
      height.set(prevWindowStateFullSize.get().height)
      width.set(prevWindowStateFullSize.get().width)
      y.set(prevWindowStateFullSize.get().y)
      x.set(prevWindowStateFullSize.get().x)
      setFullSize(false)
    } else {
      prevWindowStateFullSize.set({
        width: width.get(),
        height: height.get(),
        y: y.get(),
        x: x.get(),
      })
      height.set(containerHeight)
      width.set(containerWidth)
      y.set(0)
      x.set(0)
      dispatch(setFocus(value))
      setFullSize(true)
    }
  }

  const toggleMinSize = () => {
    if (isMinSize) {
      height.set(prevWindowStateMinSize.get().height)
      width.set(prevWindowStateMinSize.get().width)
      setMinSize(false)
      setFullSize(false)
    } else {
      if (!isFullSize) {
        prevWindowStateMinSize.set({
          width: width.get(),
          height: height.get(),
          y: y.get(),
          x: x.get(),
        })
      }
      height.set(36)
      width.set(420)
      setMinSize(true)
      setFullSize(false)
    }
  }

  const handleStopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const handleTransitionChanger = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setTransitionChanger(true)
    setTimeout(() => {
      setTransitionChanger(false)
    }, 300)
  }

  return (
    <S.Wrapper
      ref={wrapperRef}
      drag
      dragConstraints={{
        top: 0,
        right: containerWidth - width.get(),
        bottom: containerHeight - height.get(),
        left: 0,
      }}
      dragListener={false}
      dragControls={dragControls}
      isResize={isResize}
      transitionChanger={transitionChanger}
      style={{ width, height, x, y }}
      onMouseDown={handleFocus}
    >
      {Object.values(E_ResizerPosition).map((position) => (
        <S.Resizer
          key={position}
          position={position}
          isFullSize={isFullSize}
          isMinSize={isMinSize}
          disabled={isFullSize || isMinSize}
          onMouseDown={(e) => handleMouseDown(e, position)}
        />
      ))}
      <S.Header
        onMouseDown={(e) => {
          dragControls.start(e)
        }}
      >
        <S.HeaderLabel>
          <span>{getIcon(head.icon)}</span>
          <span>{t(head.title)}</span>
        </S.HeaderLabel>
        <S.HeaderActions>
          <S.HeaderAction onMouseDown={handleStopPropagation}>
            <SettingsIcon />
          </S.HeaderAction>
          <S.HeaderAction isDivider>
            <DividerIcon />
          </S.HeaderAction>
          <S.HeaderAction onClick={toggleMinSize} onMouseDown={handleTransitionChanger}>
            {isMinSize ? <PlusIcon /> : <MinusIcon />}
          </S.HeaderAction>
          <S.HeaderAction onClick={toggleFullSize} onMouseDown={handleTransitionChanger}>
            {isFullSize ? <CompressIcon /> : <ExpandIcon />}
          </S.HeaderAction>
          <S.HeaderAction onClick={handleClose} onMouseDown={handleStopPropagation}>
            <CloseIcon />
          </S.HeaderAction>
        </S.HeaderActions>
      </S.Header>
      <S.Content isResize={isResize} focused={focused}>
        {children}
      </S.Content>
    </S.Wrapper>
  )
}
