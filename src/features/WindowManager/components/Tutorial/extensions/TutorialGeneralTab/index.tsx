import { isMobile } from 'react-device-detect'

import sideMenuMedia from './assets/sideMenu.webp'
import windowMedia from './assets/window.gif'

import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'

export const TutorialGeneralTab = () => {
  useStoreSelector((store) => store.app.language)

  return (
    <div>
      <div>
        <h1>{t('windowTutorial.general.paragraph1.title')}</h1>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.general.paragraph1.text1')}</p>
        <C.Divider h={8} md={4} />
        {!isMobile && <C.Img src={windowMedia} alt='side-menu' />}
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.general.paragraph1.text2')}</p>
        <C.Divider h={8} md={4} />
        <C.Img src={sideMenuMedia} alt='side-menu' />
        <C.Divider h={16} md={8} />
      </div>
      <div>
        <h1>{t('windowTutorial.general.paragraph2.title')}</h1>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.general.paragraph2.text1')}</p>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.general.paragraph2.text2')}</p>
        <C.Divider h={16} md={8} />
      </div>
      <div>
        <h1>{t('windowTutorial.general.paragraph3.title')}</h1>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.general.paragraph3.text1')}</p>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.general.paragraph3.text2')}</p>
        <C.Divider h={16} md={8} />
      </div>
      <div>
        <h1>{t('windowTutorial.general.paragraph4.title')}</h1>
        <C.Divider h={8} md={4} />
        <ul>
          <li>{t('windowTutorial.general.paragraph4.text1')}</li>
          <C.Divider h={8} md={4} />
          <li>{t('windowTutorial.general.paragraph4.text2')}</li>
        </ul>
      </div>
    </div>
  )
}
