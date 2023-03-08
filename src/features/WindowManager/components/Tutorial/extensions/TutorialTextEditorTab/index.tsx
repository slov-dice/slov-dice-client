import textEditorImage from './assets/textEditor.webp'

import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'

export const TutorialTextEditorTab = () => {
  useStoreSelector((store) => store.app.language)

  return (
    <div>
      <h1>{t('windowTutorial.textEditor.paragraph1.title')}</h1>
      <C.Divider h={8} md={4} />
      <p>{t('windowTutorial.textEditor.paragraph1.text1')}</p>
      <C.Divider h={16} md={8} />
      <p>{t('windowTutorial.textEditor.paragraph1.text2')}</p>
      <C.Divider h={8} md={4} />
      <ul>
        <li>{t('windowTutorial.textEditor.paragraph1.listItem1')}</li>
        <C.Divider h={8} md={4} />
        <li>{t('windowTutorial.textEditor.paragraph1.listItem2')}</li>
        <C.Divider h={8} md={4} />
        <li>{t('windowTutorial.textEditor.paragraph1.listItem3')}</li>
        <C.Divider h={8} md={4} />
        <li>{t('windowTutorial.textEditor.paragraph1.listItem4')}</li>
      </ul>
      <C.Divider h={8} md={4} />
      <C.Img src={textEditorImage} alt='side-menu' />
      <C.Divider h={8} md={4} />
      <i>{t('windowTutorial.textEditor.paragraph1.text3')}</i>
    </div>
  )
}
