import { useRef } from 'react'

import * as S from './styles'

import { setLevelValue } from 'features/WindowManager/components/Characters/slice'
import { useEditableNumeric } from 'hooks/useEditableNumeric'
import { useStoreDispatch } from 'hooks/useStoreDispatch'

interface I_CharacterSpecial {
  level: number
  characterId: string
}

export const CharacterLevel = ({ level, characterId }: I_CharacterSpecial) => {
  const dispatch = useStoreDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const calculateValue = () => {
    if (/^[+-][0-9]+$/.test(inputValue)) {
      let result = level + +inputValue
      if (result < 0) result = 0
      dispatch(setLevelValue({ characterId, levelValue: result }))
      return
    }

    if (/^[0-9]+$/.test(inputValue)) {
      dispatch(setLevelValue({ characterId, levelValue: +inputValue }))
    }
  }

  const { handleEdit, handleKeyDown, handleBlur, isEdit, inputValue, handleChangeInput } =
    useEditableNumeric({
      inputRef,
      initialInputValue: String(level),
      onEnterPress: calculateValue,
    })

  return (
    <S.Level onClick={!isEdit ? handleEdit : undefined}>
      {isEdit ? (
        <S.LevelInput
          ref={inputRef}
          value={inputValue}
          onChange={handleChangeInput}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          maxLength={3}
        />
      ) : (
        <S.LevelLabel>Уровень {level}</S.LevelLabel>
      )}
    </S.Level>
  )
}
