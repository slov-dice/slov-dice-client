import { useEffect, useLayoutEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import * as S from './styles'

import { Logo } from 'components/Logo'
import { HeroBackground } from 'features/HeroBackground'
import { t } from 'languages'
import { authAPI } from 'services/auth'
import * as C from 'styles/components'
import { LocalStorage } from 'utils/helpers/localStorage'

export const Verification = () => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const [fetchEmailConfirmation, { isSuccess, data, isError, error }] =
    authAPI.useEmailConfirmationMutation()

  const [statuses, setStatuses] = useState<string[]>(['verification.stepPrepare'])

  useLayoutEffect(() => {
    if (token) {
      fetchEmailConfirmation({ token })
      setStatuses((prev) => [...prev, 'verification.stepVerification'])
    }
  }, [fetchEmailConfirmation, token])

  useEffect(() => {
    if (isSuccess && data) {
      setStatuses((prev) => [...prev, 'verification.stepSuccess'])
      const language = LocalStorage.getLanguage()
      const successMessage = data.message[language]
      toast.success(successMessage)
    }
  }, [isSuccess, data])

  useEffect(() => {
    if (isError) {
      const language = LocalStorage.getLanguage()
      const errorMessage = (error as any).data?.[language] || t('notification.unknownError')
      console.log(JSON.stringify(error))
      toast.error(errorMessage)
      setStatuses((prev) => [...prev, 'verification.stepError'])
    }
  }, [isError, error])

  return (
    <S.Page>
      <S.Container>
        <S.TopSection>
          <div>
            <div>
              <C.Title>{t('verification.title')}</C.Title>
              <C.Divider />
            </div>
            <S.StatusList>
              {statuses.map((status, index) => (
                <S.StatusItem key={status} initial='hidden' animate='visible' custom={index}>
                  {t(status)}
                </S.StatusItem>
              ))}
              <C.Divider />
            </S.StatusList>
          </div>
        </S.TopSection>
        <S.BottomSection>
          <Logo relative />
        </S.BottomSection>
      </S.Container>
      <HeroBackground />
    </S.Page>
  )
}
