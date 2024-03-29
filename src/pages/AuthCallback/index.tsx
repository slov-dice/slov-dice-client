import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import * as S from './styles'

import { Logo } from 'components/Logo'
import { connectAuthenticatedUser } from 'features/AuthForm/utils/dispatchers'
import { HeroBackground } from 'features/HeroBackground'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import { authAPI } from 'services/auth'
import * as C from 'styles/components'
import { LocalStorage } from 'utils/helpers/localStorage'

const AuthCallback = () => {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  const dispatch = useStoreDispatch()
  const [thirdPartyAuth, { data, isError, error, isSuccess }] = authAPI.useThirdPartyAuthMutation()

  const [statuses, setStatuses] = useState<string[]>(['authCallback.stepPrepare'])

  useEffect(() => {
    const handleAuth = async () => {
      if (code) {
        const authType = LocalStorage.getAuthType()
        setStatuses((prev) => [...prev, 'authCallback.stepAuthorizing'])
        thirdPartyAuth({ code, authType })
      }
    }
    handleAuth()
  }, [code, thirdPartyAuth])

  // Успешная авторизация
  useEffect(() => {
    if (data && isSuccess) {
      connectAuthenticatedUser(data, dispatch)
      setStatuses((prev) => [...prev, 'authCallback.stepSuccess'])
    }
  }, [data, isSuccess, dispatch])

  // Ошибка при авторизации
  useEffect(() => {
    if (isError) {
      setStatuses((prev) => [...prev, 'authCallback.stepError'])
    }
  }, [isError, error])

  return (
    <S.Page>
      <S.Box>
        <S.TopSection>
          <div>
            <div>
              <C.Title>{t('authCallback.title')}</C.Title>
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
      </S.Box>
      <HeroBackground />
    </S.Page>
  )
}

export default AuthCallback
