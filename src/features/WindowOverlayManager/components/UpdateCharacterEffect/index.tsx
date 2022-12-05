import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import PlusIcon from 'assets/icons/app/plus.svg'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { T_CharacterEffectId } from 'models/shared/game/character'
import * as C from 'styles/components'
import { getGameIcon } from 'utils/game/effects/icons'

export const UpdateCharacterEffectOverlay = () => {
  const {
    closeCharacterWindowOverlay,
    removeCharacterEffect,
    addCharacterEffect,
    emitUpdateCharacterFieldInCharactersWindow,
  } = useActions()

  const { overlayPayload, settingsEffects, language } = useStoreSelector((store) => ({
    overlayPayload: store.gameCharacters.overlays.find(
      (overlay) => overlay.name === E_WindowOverlay.updateCharacterEffect,
    )?.payload,
    settingsEffects: store.room.game.characters.settings.effects,
    language: store.app.language,
  }))

  const characterEffects = useStoreSelector((store) => {
    if (overlayPayload === 'characterCreator') {
      return store.gameCharacters.characterCreator.effects
    }
    if (overlayPayload === 'characterEditor') {
      return store.gameCharacters.characterEditor.effects
    }
    return store.room.game.characters.window.characters.find(
      (character) => character.id === overlayPayload,
    )?.effects
  })

  const handleClose = () => {
    closeCharacterWindowOverlay(E_WindowOverlay.updateCharacterEffect)
  }

  const handleToggleEffect = (effectId: T_CharacterEffectId) => () => {
    if (overlayPayload) {
      if (overlayPayload === 'characterCreator' || overlayPayload === 'characterEditor') {
        if (characterEffects?.includes(effectId)) {
          removeCharacterEffect({ characterId: overlayPayload, effectId })
          return
        }
        addCharacterEffect({ characterId: overlayPayload, effectId })
        return
      }
      emitUpdateCharacterFieldInCharactersWindow({
        characterId: overlayPayload,
        field: 'effects',
        value: effectId,
      })
    }
  }

  return (
    <div>
      <S.OverlayHeader>
        <span>{t('updateCharacterEffectOverlay.title')}</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <S.OverlayContent>
        <S.EffectsContainer>
          {settingsEffects.map((effect) => (
            <S.EffectWrapper key={effect.id}>
              <S.IconWrapper>
                <S.IconInner>{getGameIcon(effect.icon)}</S.IconInner>
              </S.IconWrapper>
              <S.DescriptionWrapper>
                <div>{effect.name[language]}</div>
                <hr />
                <div>{effect.description[language]}</div>
              </S.DescriptionWrapper>
              <S.ActionWrapper onClick={handleToggleEffect(effect.id)}>
                <S.ActionInner isSelected={characterEffects?.includes(effect.id) || false}>
                  <PlusIcon />
                </S.ActionInner>
              </S.ActionWrapper>
            </S.EffectWrapper>
          ))}
        </S.EffectsContainer>
        <C.Divider decorated />
      </S.OverlayContent>
    </div>
  )
}
