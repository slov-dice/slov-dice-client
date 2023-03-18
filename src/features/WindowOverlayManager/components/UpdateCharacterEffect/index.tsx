import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import PlusIcon from 'assets/icons/app/plus.svg'
import { gameCharactersActions } from 'features/WindowManager/components/Characters/slice'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { T_CharacterEffectId } from 'models/shared/game/character'
import { roomActions } from 'store/room'
import * as C from 'styles/components'
import { getGameIcon } from 'utils/game/effects/icons'

export const UpdateCharacterEffectOverlay = () => {
  const dispatch = useStoreDispatch()

  const { overlayPayload, settingsEffects } = useStoreSelector((store) => ({
    overlayPayload: store.gameCharacters.overlays.find(
      (overlay) => overlay.name === E_WindowOverlay.updateCharacterEffect,
    )?.payload,
    settingsEffects: store.room.game.characters.settings.effects,
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
    dispatch(gameCharactersActions.closeWindowOverlay(E_WindowOverlay.updateCharacterEffect))
  }

  const handleToggleEffect = (effectId: T_CharacterEffectId) => () => {
    if (overlayPayload) {
      if (overlayPayload === 'characterCreator' || overlayPayload === 'characterEditor') {
        if (characterEffects?.includes(effectId)) {
          dispatch(
            gameCharactersActions.removeCharacterEffect({ characterId: overlayPayload, effectId }),
          )
          return
        }
        dispatch(
          gameCharactersActions.addCharacterEffect({ characterId: overlayPayload, effectId }),
        )
        return
      }
      dispatch(
        roomActions.emitUpdateCharacterField({
          characterId: overlayPayload,
          field: 'effects',
          value: effectId,
        }),
      )
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
                <div>{effect.name}</div>
                <hr />
                <div>{effect.description}</div>
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
