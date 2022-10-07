import { E_WindowOverlay } from 'features/WindowOverlayManager/models'
import { useActions } from 'hooks/useActions'

export const CreateCharacterOverlay = () => {
  const { closeCharacterWindowOverlay } = useActions()

  return (
    <div>
      <h1 onClick={() => closeCharacterWindowOverlay(E_WindowOverlay.createCharacter)}>
        CreateCharacterOverlay
      </h1>

      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
    </div>
  )
}
