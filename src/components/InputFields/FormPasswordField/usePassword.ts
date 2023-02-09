import { useCallback, useState } from 'react'

import { useEventListener } from 'hooks/useEventListener'

export const usePassword = () => {
  const [isMouseDown, setMouseDown] = useState(false)
  const [isMouseOver, setMouseOver] = useState(false)

  const passwordVisible = isMouseDown && isMouseOver

  const showPassword = useCallback(() => setMouseDown(true), [])
  const hidePassword = useCallback(() => setMouseDown(false), [])

  const handleMouseEnter = useCallback(() => setMouseOver(true), [])
  const handleMouseLeave = useCallback(() => setMouseOver(false), [])

  useEventListener('mouseup', hidePassword)

  return { passwordVisible, showPassword, hidePassword, handleMouseEnter, handleMouseLeave }
}
