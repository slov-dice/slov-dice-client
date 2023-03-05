import {
  TutorialBarsTab,
  TutorialBattlefieldTab,
  TutorialCharactersTab,
  TutorialGeneralTab,
  TutorialTextEditorTab,
} from './extensions'
import * as S from './styles'

import { Tabs, Tab } from 'components/Tabs'

export const TutorialContent = () => {
  return (
    <S.Wrapper>
      <Tabs>
        <Tab id='tutorial-general' tabTitle='Основное'>
          <TutorialGeneralTab />
        </Tab>
        <Tab id='tutorial-bars' tabTitle='Бары'>
          <TutorialBarsTab />
        </Tab>
        <Tab id='tutorial-characters' tabTitle='Персонажи'>
          <TutorialCharactersTab />
        </Tab>
        <Tab id='tutorial-battlefield' tabTitle='Поле боя'>
          <TutorialBattlefieldTab />
        </Tab>
        <Tab id='tutorial-text-editor' tabTitle='Текстовой редактор'>
          <TutorialTextEditorTab />
        </Tab>
      </Tabs>
    </S.Wrapper>
  )
}
