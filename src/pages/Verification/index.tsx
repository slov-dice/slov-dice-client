import { useEffect, useLayoutEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import * as S from './styles'

import { HeroBackground } from 'features/HeroBackground'
import { authAPI } from 'services/auth'

export const Verification = () => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [fetchEmailConfirmation, { isSuccess, isError }] = authAPI.useEmailConfirmationMutation()

  const [statuses, setStatuses] = useState<string[]>([])

  useLayoutEffect(() => {
    if (token) {
      fetchEmailConfirmation({ token })
      setStatuses((prev) => [...prev, 'Верифицируем...'])
    }
  }, [fetchEmailConfirmation, token])

  useEffect(() => {
    if (isSuccess) {
      setStatuses((prev) => [...prev, 'Всё оккккк'])
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      setStatuses((prev) => [...prev, 'пиздец'])
    }
  }, [isError])

  return (
    <S.Wrapper>
      <S.Box>
        Подготовка...
        {statuses.map((status) => (
          <div key={status}>{status}</div>
        ))}
      </S.Box>
      <HeroBackground />
    </S.Wrapper>
  )
}
