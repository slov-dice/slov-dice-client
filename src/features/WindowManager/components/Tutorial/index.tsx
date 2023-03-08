import {
  TutorialRoomSettingsTab,
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
        <Tab id='tutorial-general' tabTitle='windowTutorial.general.tabTitle'>
          <TutorialGeneralTab />
        </Tab>
        <Tab id='tutorial-bars' tabTitle='windowTutorial.roomSettings.tabTitle'>
          <TutorialRoomSettingsTab />
        </Tab>
        <Tab id='tutorial-characters' tabTitle='windowTutorial.characters.tabTitle'>
          <TutorialCharactersTab />
        </Tab>
        <Tab id='tutorial-battlefield' tabTitle='windowTutorial.battlefield.tabTitle'>
          <TutorialBattlefieldTab />
        </Tab>
        <Tab id='tutorial-text-editor' tabTitle='windowTutorial.textEditor.tabTitle'>
          <TutorialTextEditorTab />
        </Tab>
      </Tabs>
    </S.Wrapper>
  )
}
