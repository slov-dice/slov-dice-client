import { useRef } from 'react'

import * as S from './styles'

import { useEditable } from 'hooks/useEditable'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { T_BaseCharacterSpecial, T_CharacterSpecial } from 'models/shared/game/character'
import { regExp } from 'utils/helpers/regExp'

interface I_CharacterSpecial {
  special: T_BaseCharacterSpecial & T_CharacterSpecial
  onChange: (name: string, value: number) => void
}

export const CharacterSpecial = ({ special, onChange }: I_CharacterSpecial) => {
  const language = useStoreSelector((store) => store.app.language)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCalculateValue = () => {
    if (regExp.onlyNumberWithCalc.test(inputValue)) {
      let result = special.current + +inputValue
      if (result < 0) result = 0
      onChange(special.id, result)
      return
    }

    if (regExp.onlyNumber.test(inputValue)) {
      onChange(special.id, +inputValue)
    }
  }

  const { handleEdit, handleKeyDown, handleBlur, isEdit, inputValue, handleChangeInput } =
    useEditable({
      inputRef,
      initialInputValue: String(special.current),
      onEnterPress: handleCalculateValue,
      pattern: 'numeric',
    })

  return (
    <S.SpecialWrapper onClick={!isEdit ? handleEdit : undefined}>
      <span>{special.name[language]}</span>{' '}
      {isEdit ? (
        <S.SpecialInput
          ref={inputRef}
          value={inputValue}
          onChange={handleChangeInput}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          maxLength={4}
        />
      ) : (
        <S.SpecialValue>{special.current}</S.SpecialValue>
      )}
    </S.SpecialWrapper>
  )
}
