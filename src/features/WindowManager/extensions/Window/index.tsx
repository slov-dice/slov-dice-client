/* eslint-disable prefer-const */
import { useState, useRef, ReactNode } from 'react'

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
}

export const Window = ({ children }: I_WindowProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isResizing, setResizing] = useState(false)

  // Передвижение окна
  const handleHeadMouseDown = (headMouseEvent: React.MouseEvent<HTMLDivElement>) => {
    if (wrapperRef.current && headMouseEvent.target) {
      let prevX = headMouseEvent.clientX
      let prevY = headMouseEvent.clientY
      const headerHeight = theme.sizes.header.height

      const handleMouseMove = (windowMouseEvent: MouseEvent) => {
        if (isResizing) return
        const nextX = prevX - windowMouseEvent.clientX
        const nextY = prevY - windowMouseEvent.clientY
        if (wrapperRef.current) {
          const rect: DOMRect = wrapperRef.current.getBoundingClientRect()
          if ((rect.x > 0 || nextX < 0) && (rect.x + rect.width < window.innerWidth || nextX > 0)) {
            wrapperRef.current.style.left = rect.left - nextX + 'px'
          }
          if (
            (rect.y > headerHeight || nextY < 0) &&
            (rect.y + rect.height < window.innerHeight || nextY > 0)
          ) {
            wrapperRef.current.style.top = rect.top - nextY + 'px'
          }

          prevX = windowMouseEvent.clientX
          prevY = windowMouseEvent.clientY
        }
      }

      const handleMouseUp = () => {
        console.log('mouseup')
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseup', handleMouseUp)
      }

      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }
  }

  // Изменение размера окна
  const handleControlsMouseDown = (resizerMouseEvent: React.MouseEvent<HTMLElement>) => {
    if (wrapperRef.current && resizerMouseEvent.target) {
      setResizing(true)
      if (resizerMouseEvent.target) {
        const currentElementId = resizerMouseEvent.currentTarget.id
        let prevX: number = resizerMouseEvent.clientX
        let prevY: number = resizerMouseEvent.clientY

        const handleMouseMove = (windowMouseEvent: MouseEvent) => {
          if (wrapperRef.current) {
            const rect: DOMRect = wrapperRef.current.getBoundingClientRect()

            // Если смещаем верхнюю границу
            if (currentElementId === E_ResizerPosition.n) {
              wrapperRef.current.style.height =
                rect.height + (prevY - windowMouseEvent.clientY) + 'px'

              // Перемещение окна выше
              if (rect.height > theme.sizes.window.height)
                wrapperRef.current.style.top = rect.top - (prevY - windowMouseEvent.clientY) + 'px'
            }

            // Если смещаем правый верхний угол
            if (currentElementId === E_ResizerPosition.ne) {
              wrapperRef.current.style.width =
                rect.width - (prevX - windowMouseEvent.clientX) + 'px'
              wrapperRef.current.style.height =
                rect.height + (prevY - windowMouseEvent.clientY) + 'px'

              // Перемещение окна выше
              if (rect.height > theme.sizes.window.height)
                wrapperRef.current.style.top = rect.top - (prevY - windowMouseEvent.clientY) + 'px'
            }

            // Если смещаем правую границу
            if (currentElementId === E_ResizerPosition.e) {
              wrapperRef.current.style.width =
                rect.width - (prevX - windowMouseEvent.clientX) + 'px'
            }

            // Если смещаем правый нижний угол
            if (currentElementId === E_ResizerPosition.se) {
              wrapperRef.current.style.width =
                rect.width - (prevX - windowMouseEvent.clientX) + 'px'
              wrapperRef.current.style.height =
                rect.height - (prevY - windowMouseEvent.clientY) + 'px'
            }

            // Если смещаем нижнюю границу
            if (currentElementId === E_ResizerPosition.s) {
              wrapperRef.current.style.height =
                rect.height - (prevY - windowMouseEvent.clientY) + 'px'
            }

            // Если смещаем левый нижний угол
            if (currentElementId === E_ResizerPosition.sw) {
              wrapperRef.current.style.width =
                rect.width + (prevX - windowMouseEvent.clientX) + 'px'
              wrapperRef.current.style.height =
                rect.height - (prevY - windowMouseEvent.clientY) + 'px'

              // Перемещаем окно левее
              if (rect.width > theme.sizes.window.width)
                wrapperRef.current.style.left =
                  rect.left - (prevX - windowMouseEvent.clientX) + 'px'
            }

            // Если смещаем левую границу
            if (currentElementId === E_ResizerPosition.w) {
              wrapperRef.current.style.width =
                rect.width + (prevX - windowMouseEvent.clientX) + 'px'

              // Перемещаем окно левее
              if (rect.width > theme.sizes.window.width)
                wrapperRef.current.style.left =
                  rect.left - (prevX - windowMouseEvent.clientX) + 'px'
            }

            if (currentElementId === E_ResizerPosition.nw) {
              wrapperRef.current.style.width =
                rect.width + (prevX - windowMouseEvent.clientX) + 'px'
              wrapperRef.current.style.height =
                rect.height + (prevY - windowMouseEvent.clientY) + 'px'

              // Перемещаем окно выше
              if (rect.height > theme.sizes.window.height)
                wrapperRef.current.style.top = rect.top - (prevY - windowMouseEvent.clientY) + 'px'

              // Перемещаем окно левее
              if (rect.width > theme.sizes.window.width)
                wrapperRef.current.style.left =
                  rect.left - (prevX - windowMouseEvent.clientX) + 'px'
            }

            prevX = windowMouseEvent.clientX
            prevY = windowMouseEvent.clientY
          }
        }
        const handleMouseUp = () => {
          setResizing(false)
          window.removeEventListener('mousemove', handleMouseMove)
          window.removeEventListener('mouseup', handleMouseUp)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseup', handleMouseUp)
      }
    }
  }

  return (
    <S.Wrapper ref={wrapperRef}>
      {Object.values(E_ResizerPosition).map((position) => (
        <S.Resizer
          key={position}
          onMouseDown={handleControlsMouseDown}
          id={position}
          position={position}
        />
      ))}
      <S.Head onMouseDown={handleHeadMouseDown}>
        <div>Название</div>
        <div>X</div>
      </S.Head>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}
