import actionsImage from './assets/actions.webp'
import battle1Image from './assets/battle1.webp'
import battle2Image from './assets/battle2.webp'

import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'

export const TutorialBattlefieldTab = () => {
  useStoreSelector((store) => store.app.language)

  return (
    <div>
      <div>
        <h1>{t('windowTutorial.battlefield.paragraph1.title')}</h1>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.battlefield.paragraph1.text1')}</p>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.battlefield.paragraph1.text2')}</p>
        <p>{t('windowTutorial.battlefield.paragraph1.text3')}</p>
        <C.Divider h={8} md={4} />
        <h2>{t('windowTutorial.battlefield.paragraph1.subTitle1')}</h2>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.battlefield.paragraph1.text4')}</p>
        <C.Divider h={8} md={4} />
        <C.Img src={actionsImage} alt='actions' />
        <C.Divider h={16} md={8} />
      </div>
      <div>
        <h1>{t('windowTutorial.battlefield.paragraph2.title')}</h1>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.battlefield.paragraph2.text1')}</p>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.battlefield.paragraph2.text2')}</p>
        <C.Divider h={16} md={8} />
      </div>
      <div>
        <h1>{t('windowTutorial.battlefield.paragraph3.title')}</h1>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.battlefield.paragraph3.text1')}</p>
        <C.Divider h={8} md={4} />
        <C.Img src={battle1Image} alt='battle1' />
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.battlefield.paragraph3.text2')}</p>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.battlefield.paragraph3.text3')}</p>
        <C.Divider h={8} md={4} />
        <C.Img src={battle2Image} alt='actions' />
      </div>
    </div>
  )
}
