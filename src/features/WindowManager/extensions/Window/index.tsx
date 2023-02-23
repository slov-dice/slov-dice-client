import { useDragControls, useMotionValue } from 'framer-motion'
import { useRef, ReactNode, useState, MutableRefObject } from 'react'
import { useTheme } from 'styled-components'

import { useControls } from './hooks/useControls'
import { useResize } from './hooks/useResize'
import * as S from './styles'

import { E_Window, I_WindowHeader } from '../../models'
import { E_ResizerPosition } from '../../models/window'

import CloseIcon from 'assets/icons/app/close.svg'
import CompressIcon from 'assets/icons/app/compress.svg'
import DividerIcon from 'assets/icons/app/divider.svg'
import ExpandIcon from 'assets/icons/app/expand.svg'
import SettingsIcon from 'assets/icons/app/gear.svg'
import MinusIcon from 'assets/icons/app/minus.svg'
import PlusIcon from 'assets/icons/app/plus.svg'
import { windowManagerActions } from 'features/WindowManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import { getAppIcon } from 'utils/icons/app'

interface I_WindowProps {
  children: ReactNode
  dragConstraintsRef: MutableRefObject<HTMLDivElement | null>
  header: I_WindowHeader
  content: E_Window
  focused: boolean
}

export const Window = ({
  children,
  dragConstraintsRef,
  header,
  content,
  focused,
}: I_WindowProps) => {
  const dispatch = useStoreDispatch()

  const wrapperRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()
  const dragControls = useDragControls()

  const defaultWindowSize = theme.sizes.window
  const defaultWindowHeaderHeight = theme.sizes.windowHeader.height

  const containerWidth = dragConstraintsRef.current?.clientWidth ?? 0
  const containerHeight = dragConstraintsRef.current?.clientHeight ?? 0

  // Актуальное состояние окна
  const height = useMotionValue(defaultWindowSize)
  const width = useMotionValue(defaultWindowSize)
  const y = useMotionValue(0)
  const x = useMotionValue(0)

  // Флаги для активации css transitions
  const [transformTransitionChanger, setTransformTransitionChanger] = useState(false)
  const [sizeTransitionChanger, setSizeTransitionChanger] = useState(false)

  const { isResize, handleMouseDown } = useResize({
    height,
    width,
    y,
    x,
    containerHeight,
    containerWidth,
    defaultWindowSize,
    transitionDuration: theme.durations.ms300,
    setSizeTransitionChanger,
  })

  const {
    isFullSize,
    isMinSize,
    handleClose,
    toggleFullSize,
    toggleMinSize,
    handleStopPropagation,
    handleOpenSettings,
    handleTransformTransitionChanger,
  } = useControls({
    height,
    width,
    y,
    x,
    containerHeight,
    containerWidth,
    defaultWindowSize,
    defaultWindowHeaderHeight,
    content,
    transitionDuration: theme.durations.ms300,
    modal: header.settings,
    setTransformTransitionChanger,
  })

  const handleFocus = () => {
    dispatch(windowManagerActions.setWindowFocus(content))
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
      $isResize={isResize}
      $transformTransitionChanger={transformTransitionChanger}
      $sizeTransitionChanger={sizeTransitionChanger}
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
          <span>{getAppIcon(header.icon)}</span>
          <span>{t(header.title)}</span>
        </S.HeaderLabel>
        <S.HeaderControls>
          {header.settings && (
            <>
              <S.Control onMouseDown={handleOpenSettings}>
                <SettingsIcon />
              </S.Control>
              <S.Control $isDivider>
                <DividerIcon />
              </S.Control>
            </>
          )}
          <S.Control onClick={toggleMinSize} onMouseDown={handleTransformTransitionChanger}>
            {isMinSize ? <PlusIcon /> : <MinusIcon />}
          </S.Control>
          <S.Control onClick={toggleFullSize} onMouseDown={handleTransformTransitionChanger}>
            {isFullSize ? <CompressIcon /> : <ExpandIcon />}
          </S.Control>
          <S.Control onClick={handleClose} onMouseDown={handleStopPropagation}>
            <CloseIcon />
          </S.Control>
        </S.HeaderControls>
      </S.Header>
      <S.Content isResize={isResize} focused={focused}>
        {children}
      </S.Content>
    </S.Wrapper>
  )
}
