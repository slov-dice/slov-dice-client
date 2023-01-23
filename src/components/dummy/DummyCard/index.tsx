import Tippy from '@tippyjs/react'

import * as S from './styles'

import EditIcon from 'assets/icons/app/edit.svg'
import SwordsIcon from 'assets/icons/app/swords.svg'
import SkullCrossbones from 'assets/icons/game/skull-crossbones.svg'
import { CharacterBarText } from 'components/Character'
import { AvatarPicker, EditableText } from 'components/game'
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_Battlefield } from 'models/shared/game/battlefield'
import { T_CharacterBarId } from 'models/shared/game/character'
import { T_BaseDummy } from 'models/shared/game/dummy'
import { roomActions } from 'store/room'
import * as C from 'styles/components'
import { getBar } from 'utils/game/effects'

interface I_DummyCardProps {
  dummy: T_BaseDummy
  battlefield: E_Battlefield
}

export const DummyCard = ({ dummy, battlefield }: I_DummyCardProps) => {
  const dispatch = useStoreDispatch()
  const settingsBars = useStoreSelector((store) => store.room.game.characters.settings.bars)

  const handleAddDummyToBattlefield = () => {
    dispatch(roomActions.emitAddDummy({ dummy, battlefield }))
  }

  const handleOpenDummyEditor = () => {
    dispatch(gameBattlefieldActions.setDummyEditor(dummy))
    dispatch(
      gameBattlefieldActions.openBattlefieldWindowOverlay({
        isOpen: true,
        name: E_WindowOverlay.updateDummy,
        payload: dummy.id,
      }),
    )
  }

  const handleRemoveDummiesFromField = () => {
    dispatch(roomActions.emitRemoveDummiesOnBattlefield({ dummyId: dummy.id, battlefield }))
  }

  const handleChangeDummyName = (value: string) => {
    dispatch(
      roomActions.emitUpdateDummyField({
        value,
        field: 'name',
        dummyId: dummy.id,
        battlefield,
      }),
    )
  }

  const handleChangeDummyMaxBar = (id: T_CharacterBarId, value: number) => {
    dispatch(
      roomActions.emitUpdateDummyField({
        value,
        field: 'barsMax',
        dummyId: dummy.id,
        battlefield,
        subFieldId: id,
      }),
    )
  }

  return (
    <S.CardWrapper>
      <S.LeftSection>
        <AvatarPicker characterId={dummy.id} image={dummy.avatar} />
        <S.BarsWrapper>
          {dummy.barsMax.map((bar) => {
            const baseBar = getBar(bar.id, settingsBars)
            if (bar.include) {
              return (
                <S.BarWrapper key={bar.id} color={baseBar.color} barHeight={100}>
                  <S.BarName>
                    {t('battlefieldEditorOverlay.fields.max')} {baseBar.name}
                  </S.BarName>
                  <S.BarText>
                    <CharacterBarText
                      id={bar.id}
                      value={bar.max}
                      onChange={handleChangeDummyMaxBar}
                    />
                  </S.BarText>
                </S.BarWrapper>
              )
            }
            return null
          })}
        </S.BarsWrapper>
      </S.LeftSection>
      <S.RightSection>
        <S.NameWrapper>
          <EditableText value={dummy.name} onChange={handleChangeDummyName} />
        </S.NameWrapper>
        <S.InfoWrapper>
          <S.BattlefieldAction>
            <Tippy content={t('battlefieldEditorOverlay.actions.kill')}>
              <C.Control onClick={handleRemoveDummiesFromField}>
                <SkullCrossbones />
              </C.Control>
            </Tippy>
            <Tippy content={t('battlefieldEditorOverlay.actions.deploy')}>
              <C.Control onClick={handleAddDummyToBattlefield}>
                <SwordsIcon />
              </C.Control>
            </Tippy>
          </S.BattlefieldAction>
          <Tippy content={t('battlefieldEditorOverlay.actions.edit')}>
            <C.Control onClick={handleOpenDummyEditor}>
              <EditIcon />
            </C.Control>
          </Tippy>
        </S.InfoWrapper>
      </S.RightSection>
    </S.CardWrapper>
  )
}
