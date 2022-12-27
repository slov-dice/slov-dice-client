import * as S from './styles'

import EditIcon from 'assets/icons/app/edit.svg'
import SwordsIcon from 'assets/icons/app/swords.svg'
import SkullCrossbones from 'assets/icons/game/skull-crossbones.svg'
import { CharacterBarText } from 'components/Character'
import { AvatarPicker, EditableText } from 'components/game'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_Field } from 'models/shared/game/battlefield'
import { T_BaseDummy } from 'models/shared/game/dummy'
import { roomActions } from 'store/room'
import * as C from 'styles/components'
import { getBar } from 'utils/game/effects'

interface I_DummyCardProps {
  dummy: T_BaseDummy
  field: E_Field
}

export const DummyCard = ({ dummy, field }: I_DummyCardProps) => {
  const dispatch = useStoreDispatch()
  const settingsBars = useStoreSelector((store) => store.room.game.characters.settings.bars)

  const handleAddDummyToBattlefield = () => {
    dispatch(roomActions.emitAddDummyToFieldInBattlefieldWindow({ dummy, field }))
  }

  const handleChangeDummyName = (value: string) => {}

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
                    <CharacterBarText id={bar.id} value={bar.max} onChange={() => {}} />
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
          <C.Control>
            <SkullCrossbones />
          </C.Control>
          <C.Control onClick={handleAddDummyToBattlefield}>
            <SwordsIcon />
          </C.Control>
          <C.Control>
            <EditIcon />
          </C.Control>
        </S.InfoWrapper>
      </S.RightSection>
    </S.CardWrapper>
  )
}
