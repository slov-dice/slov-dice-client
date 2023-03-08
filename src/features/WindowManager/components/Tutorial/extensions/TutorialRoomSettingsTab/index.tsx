import roomSettingsImage from './assets/roomSettings.webp'

import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'

export const TutorialRoomSettingsTab = () => {
  useStoreSelector((store) => store.app.language)

  return (
    <div>
      <div>
        <h1>{t('windowTutorial.roomSettings.paragraph1.title')}</h1>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.roomSettings.paragraph1.text1')}</p>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.roomSettings.paragraph1.text2')}</p>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.roomSettings.paragraph1.text3')}</p>
        <C.Divider h={8} md={4} />
        <C.Img src={roomSettingsImage} alt='room-settings' />
      </div>
    </div>
  )
}
