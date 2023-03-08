import characterCreatorImage from './assets/characterCreator.webp'
import editValueMedia from './assets/editValue.gif'

import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'

export const TutorialCharactersTab = () => {
  useStoreSelector((store) => store.app.language)

  return (
    <div>
      <div>
        <h1>{t('windowTutorial.characters.paragraph1.title')}</h1>
        <C.Divider h={8} md={4} />
        <h2>{t('windowTutorial.characters.paragraph1.subTitle1')}</h2>
        <C.Divider h={8} md={4} />
        <p>
          <i>{t('windowTutorial.characters.paragraph1.text1')}</i>
        </p>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.characters.paragraph1.text2')}</p>

        <C.Divider h={8} md={4} />

        <h2>{t('windowTutorial.characters.paragraph1.subTitle2')}</h2>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.characters.paragraph1.text3')}</p>
        <C.Divider h={8} md={4} />
        <i>{t('windowTutorial.characters.paragraph1.text4')}</i>
        <C.Divider h={16} md={8} />
      </div>
      <div>
        <h1>{t('windowTutorial.characters.paragraph2.title')}</h1>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.characters.paragraph2.text1')}</p>
        <C.Divider h={8} md={4} />
        <ul>
          <li>{t('windowTutorial.characters.paragraph2.listItem1')}</li>
          <C.Divider h={8} md={4} />
          <li>{t('windowTutorial.characters.paragraph2.listItem2')}</li>
          <C.Divider h={8} md={4} />
          <li>{t('windowTutorial.characters.paragraph2.listItem3')}</li>
          <C.Divider h={8} md={4} />
          <li>{t('windowTutorial.characters.paragraph2.listItem4')}</li>
          <C.Divider h={8} md={4} />
          <li>{t('windowTutorial.characters.paragraph2.listItem5')}</li>
          <C.Divider h={8} md={4} />
          <li>{t('windowTutorial.characters.paragraph2.listItem6')}</li>
          <C.Divider h={8} md={4} />
          <li>{t('windowTutorial.characters.paragraph2.listItem7')}</li>
          <C.Divider h={8} md={4} />
          <li>{t('windowTutorial.characters.paragraph2.listItem8')}</li>
          <C.Divider h={8} md={4} />
          <li
            dangerouslySetInnerHTML={{
              __html: t('windowTutorial.characters.paragraph2.listItem9'),
            }}
          />
          <C.Divider h={8} md={4} />
          <C.Img src={characterCreatorImage} alt='side-menu' />
          <C.Divider h={16} md={8} />
        </ul>
      </div>
      <div>
        <h1>{t('windowTutorial.characters.paragraph3.title')}</h1>
        <C.Divider h={8} md={4} />
        <p>{t('windowTutorial.characters.paragraph3.text1')}</p>
        <C.Divider h={8} md={4} />
        <p
          dangerouslySetInnerHTML={{
            __html: t('windowTutorial.characters.paragraph3.text2'),
          }}
        />
        <C.Divider h={8} md={4} />
        <C.Img src={editValueMedia} alt='edit-value' />
      </div>
    </div>
  )
}
