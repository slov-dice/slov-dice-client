import { useRef } from 'react'

import * as S from './styles'

import { useActions } from 'hooks/useActions'
import { useEditableNumeric } from 'hooks/useEditableNumeric'
import { T_CharacterSpecial } from 'models/game/character'

interface I_CharacterSpecial {
  values: T_CharacterSpecial
  characterId: string
}

export const CharacterSpecial = ({ values, characterId }: I_CharacterSpecial) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { setCharacterSpecial } = useActions()

  const calculateValue = () => {
    if (/^[+-][0-9]+$/.test(inputValue)) {
      let result = values.current + +inputValue
      if (result < 0) result = 0
      setCharacterSpecial({ characterId, specialName: values.name, specialValue: result })
      return
    }

    if (/^[0-9]+$/.test(inputValue)) {
      setCharacterSpecial({ characterId, specialName: values.name, specialValue: +inputValue })
    }
  }

  const { handleEdit, handleKeyDown, handleBlur, isEdit, inputValue, handleChangeInput } =
    useEditableNumeric({
      inputRef,
      initialInputValue: String(values.current),
      onEnterPress: calculateValue,
    })

  return (
    <S.Special onClick={!isEdit ? handleEdit : undefined}>
      <span>{values.name}</span>{' '}
      {isEdit ? (
        <S.SpecialInput
          ref={inputRef}
          value={inputValue}
          onChange={handleChangeInput}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          maxLength={16}
        />
      ) : (
        <S.SpecialValue>{values.current}</S.SpecialValue>
      )}
    </S.Special>
  )
}
