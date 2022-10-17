import { dataCharacterEffects } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import PlusIcon from 'assets/icons/app/plus.svg'
import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { T_EffectId } from 'models/game/character'
import * as C from 'styles/components'
import { getGameIcon } from 'utils/helpers/icons/game'

export const UpdateCharacterEffectOverlay = () => {
  const { closeCharacterWindowOverlay, removeCharacterEffect, addCharacterEffect } = useActions()

  const payload = useStoreSelector(
    (state) =>
      state.gameCharacters.overlays.find(
        (overlay) => overlay.name === E_WindowOverlay.updateCharacterEffect,
      )?.payload,
  )

  const characterEffects = useStoreSelector((state) => {
    if (payload === 'characterCreator') {
      return state.gameCharacters.characterCreator.effects
    }
    return state.gameCharacters.characters.find((character) => character.id === payload)?.effects
  })

  const handleClose = () => {
    closeCharacterWindowOverlay(E_WindowOverlay.updateCharacterEffect)
  }

  const handleToggleEffect = (effectId: T_EffectId) => () => {
    if (payload) {
      if (characterEffects?.includes(effectId)) {
        removeCharacterEffect({ characterId: payload, effectId })
        return
      }
      addCharacterEffect({ characterId: payload, effectId })
    }
  }

  return (
    <div>
      <S.OverlayHeader>
        <span>Эффекты персонажа</span>
        <C.Control onClick={handleClose}>
          <CloseIcon />
        </C.Control>
      </S.OverlayHeader>
      <S.OverlayContent>
        <S.EffectsContainer>
          {dataCharacterEffects.map((effect) => (
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
