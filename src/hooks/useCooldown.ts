import { useEffect, useState } from 'react'

export const useCooldown = (dependency: boolean) => {
  const [cooldown, setCooldown] = useState<string>('00')

  useEffect(() => {
    let intervalId: any
    if (dependency) {
      setCooldown('30')
      intervalId = setInterval(() => {
        setCooldown((prev) => {
          if (Number(prev) <= 0) {
            clearInterval(intervalId)
            return '00'
          }
          if (Number(prev) <= 10) {
            return '0' + (Number(prev) - 1)
          }
          return String(Number(prev) - 1)
        })
      }, 1000)
    } else {
      clearInterval(intervalId)
    }
    return () => {
      clearInterval(intervalId)
    }
  }, [dependency])

  return { cooldown: `00:${cooldown}`, isCooldown: Boolean(Number(cooldown)) }
}
