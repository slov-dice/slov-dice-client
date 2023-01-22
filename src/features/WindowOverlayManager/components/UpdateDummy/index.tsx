import Tippy from '@tippyjs/react'
import { useCallback, useState } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import EditIcon from 'assets/icons/app/edit.svg'
import TrashIcon from 'assets/icons/app/trash.svg'
import { Button } from 'components/Buttons'
import { CharacterBarText } from 'components/Character'
import { AvatarPicker, EditableText, EditableTextarea } from 'components/game'
import { gameBattlefieldActions } from 'features/WindowManager/components/Battlefield/slice'
import { E_WindowOverlay, I_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_Battlefield } from 'models/shared/game/battlefield'
import { T_BaseCharacterBar, T_CharacterBarId } from 'models/shared/game/character'
import { roomActions } from 'store/room'
import * as C from 'styles/components'
import { getBar } from 'utils/game/effects'

const findOverlay = (overlay: I_WindowOverlay) => overlay.name === E_WindowOverlay.updateDummy

export const UpdateDummyOverlay = () => {
  const dispatch = useStoreDispatch()

  const overlayPayload = useStoreSelector(
    (store) => store.gameBattlefield.overlays.find(findOverlay)?.payload,
  )

  const battlefield = useStoreSelector((store) =>
    store.room.game.battlefield.window.masterDummies.find((dummy) => dummy.id === overlayPayload)
      ? E_Battlefield.master
      : E_Battlefield.players,
  )

  const { dummyStore, settingsBars, dummyEditor } = useStoreSelector((store) => ({
    dummyStore: store.room.game.battlefield.window[
      battlefield === E_Battlefield.master ? 'masterDummies' : 'playersDummies'
    ].find((dummy) => dummy.id === overlayPayload),
    settingsBars: store.room.game.characters.settings.bars,
    dummyEditor: store.gameBattlefield.dummyEditor,
  }))
  const [dummy, setDummy] = useState(dummyStore!)

  const handleOpenActionsEditorOverlay = () => {
    dispatch(
      gameBattlefieldActions.openBattlefieldWindowOverlay({
        name: E_WindowOverlay.actionsEditor,
        payload: 'dummyEditor',
        isOpen: true,
      }),
    )
  }

  const handleClose = useCallback(() => {
    dispatch(gameBattlefieldActions.closeBattlefieldWindowOverlay(E_WindowOverlay.updateDummy))
  }, [dispatch])

  const handleChangeCharacterName = (value: string) => {
    setDummy((prev) => ({ ...prev, name: value }))
  }

  const handleChangeCharacterDescription = (value: string) => {
    setDummy((prev) => ({ ...prev, description: value }))
  }

  const handleChangeCharacterBarMaxValue = (id: T_CharacterBarId, value: number) => {
    setDummy((prev) => ({
      ...prev,
      barsMax: prev.barsMax.map((bar) => (bar.id === id ? { ...bar, max: value } : bar)),
    }))
  }

  const handleCheckBarInclude = (id: T_CharacterBarId, value: boolean) => {
    setDummy((prev) => ({
      ...prev,
      barsMax: prev.barsMax.map((bar) => (bar.id === id ? { ...bar, include: value } : bar)),
    }))
  }

  const handleUpdateDummy = () => {
    dispatch(
      roomActions.emitUpdateDummyInBattlefieldWindow({
        battlefield,
        dummy: {
          ...dummy,
          ...dummyEditor,
        },
      }),
    )
    handleClose()
  }

  const handleRemoveDummy = () => {
    dispatch(roomActions.emitRemoveDummy({ dummyId: dummy.id, battlefield }))
    handleClose()
  }

  return (
    <div>
      <S.OverlayHeader>
        <span>{t('updateDummyOverlay.title')}</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <S.OverlayContent>
        <S.ContentTop>
          <Tippy content={t('updateDummyOverlay.actions.remove')}>
            <S.RemoveDummy onClick={handleRemoveDummy}>
              <TrashIcon />
            </S.RemoveDummy>
          </Tippy>
          <AvatarPicker characterId='dummyEditor' image={dummyEditor.avatar} />
        </S.ContentTop>
        <S.ContentWrapper>
          <S.ContentBlock>
            <EditableText value={dummy.name} onChange={handleChangeCharacterName} />
            <EditableTextarea
              value={dummy.description}
              onChange={handleChangeCharacterDescription}
            />
          </S.ContentBlock>
          <S.ContentBlock>
            {dummy.barsMax.map((bar) => {
              const baseBar: T_BaseCharacterBar = getBar(bar.id, settingsBars)
              return (
                <S.BarWrapper key={bar.id} color={baseBar.color} barHeight={100}>
                  <S.BarName>
                    {t('updateDummyOverlay.fields.max')} {baseBar.name}
                  </S.BarName>
                  <S.BarText>
                    <CharacterBarText
                      id={bar.id}
                      value={bar.max}
                      onChange={handleChangeCharacterBarMaxValue}
                    />
                  </S.BarText>
                  <input
                    type='checkbox'
                    checked={bar.include}
                    onChange={(e) => handleCheckBarInclude(bar.id, e.target.checked)}
                  />
                </S.BarWrapper>
              )
            })}
          </S.ContentBlock>
          <S.ContentBlock direction='row'>
            {dummyEditor.actions.map((action) => (
              <S.CharacterAction key={action.id}>
                <div>{action.title}</div>
                <hr />
                <C.ParagraphPreLine>{action.description}</C.ParagraphPreLine>
              </S.CharacterAction>
            ))}
            <Tippy content={t('windowCharacters.editActions')}>
              <S.EditActions onClick={handleOpenActionsEditorOverlay}>
                <EditIcon />
              </S.EditActions>
            </Tippy>
          </S.ContentBlock>
        </S.ContentWrapper>
        <C.Divider decorated />
        <S.ContentBottom>
          <Button onClick={handleClose} mod={Button.mod.secondary}>
            {t('updateDummyOverlay.actions.cancel')}
          </Button>
          <Button onClick={handleUpdateDummy}>{t('updateDummyOverlay.actions.save')}</Button>
        </S.ContentBottom>
      </S.OverlayContent>
    </div>
  )
}
