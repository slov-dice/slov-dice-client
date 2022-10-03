import { useRef } from 'react'

import * as S from './styles'

import { setSpecialValue } from 'features/WindowManager/components/Characters/slice'
import { useEditableNumeric } from 'hooks/useEditableNumeric'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { T_CharacterSpecial } from 'models/game/character'

interface I_CharacterSpecial {
  values: T_CharacterSpecial
  characterId: string
}

export const CharacterSpecial = ({ values, characterId }: I_CharacterSpecial) => {
  const dispatch = useStoreDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const calculateValue = () => {
    if (/^[+-][0-9]+$/.test(inputValue)) {
      let result = values.current + +inputValue
      if (result < 0) result = 0
      dispatch(setSpecialValue({ characterId, specialName: values.name, specialValue: result }))
      return
    }

    if (/^[0-9]+$/.test(inputValue)) {
      dispatch(
        setSpecialValue({ characterId, specialName: values.name, specialValue: +inputValue }),
      )
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
