import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string): boolean => {
  const getMatches = (query: string): boolean => {
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  useEffect(() => {
    const handleChange = () => {
      setMatches(getMatches(query))
    }
    const matchMedia = window.matchMedia(query)

    handleChange()

    matchMedia.addEventListener('change', handleChange)
    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}
