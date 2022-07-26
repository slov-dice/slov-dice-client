import throttle from 'lodash.throttle'
import { useEffect, useRef } from 'react'

export const useEventListener = (
  eventName: string,
  callback: any,
  element = window,
  throttleTime = 100,
) => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (element == null) return
    const handler = throttle((e: any) => callbackRef.current(e), throttleTime)
    element.addEventListener(eventName, handler)

    return () => element.removeEventListener(eventName, handler)
  }, [eventName, element, throttleTime])
}
