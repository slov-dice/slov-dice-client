/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import { useGuestAuth } from './useGuestAuth'

import { E_AuthContent } from '../../models'
import { switchAuthFormContent } from '../../slice'

import GuestIcon from 'assets/icons/alien.svg'
import DiscordIcon from 'assets/icons/discord.svg'
import EmailIcon from 'assets/icons/envelope.svg'
import GoogleIcon from 'assets/icons/google.svg'
import { Button } from 'components/Button'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_AuthType } from 'models/app'
import * as C from 'styles/components'
import { LocalStorage } from 'utils/helpers/localStorage'

export const Entry = () => {
  const navigate = useNavigate()
  const dispatch = useStoreDispatch()
  const { fetchGuestAuth, guestAuthProgress } = useGuestAuth(dispatch)
  const authFormContent = useStoreSelector((state) => state.authForm.content)

  const handleReplaceToEmail = () => {
    const toEmail =
      authFormContent === E_AuthContent.registrationEntry
        ? E_AuthContent.registrationForm
        : E_AuthContent.loginForm
    dispatch(switchAuthFormContent(toEmail))
  }

  const handleGoogleAuth = () => {
    LocalStorage.setAuthType(E_AuthType.google)
    location.replace(import.meta.env.VITE_GOOGLE_AUTH_URL)
  }

  const handleDiscordAuth = () => {
    LocalStorage.setAuthType(E_AuthType.discord)
    location.replace(import.meta.env.VITE_DISCORD_AUTH_URL)
  }

  const handleGuestAuth = () => {
    LocalStorage.setAuthType(E_AuthType.guest)
    fetchGuestAuth()
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Button onClick={handleReplaceToEmail}>
        <EmailIcon /> {t('auth.email')}
      </Button>
      <C.Divider hmd={32} />
      <Button onClick={handleGoogleAuth}>
        <GoogleIcon />
        {t('auth.google')}
      </Button>
      <C.Divider hmd={32} />
      <Button onClick={handleDiscordAuth}>
        <DiscordIcon />
        {t('auth.discord')}
      </Button>
      <C.Divider h={72} hmd={56} />
      <Button disabled={guestAuthProgress.isLoading} onClick={handleGuestAuth}>
        <GuestIcon />
        {guestAuthProgress.isLoading ? t('auth.loading') : t('auth.guest')}
      </Button>
    </motion.div>
  )
}
