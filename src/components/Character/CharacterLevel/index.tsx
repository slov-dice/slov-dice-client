import { useRef } from 'react'

import * as S from './styles'

import { useEditable } from 'hooks/useEditable'
import { t } from 'languages'

interface I_CharacterSpecial {
  value: number
  onChange: (value: number) => void
}

export const CharacterLevel = ({ value, onChange }: I_CharacterSpecial) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const calculateValue = () => {
    if (/^[+-][0-9]+$/.test(inputValue)) {
      let result = value + +inputValue
      if (result < 0) result = 0
      onChange(result)
      return
    }

    if (/^[0-9]+$/.test(inputValue)) {
      onChange(+inputValue)
    }
  }

  const { handleEdit, handleKeyDown, handleBlur, isEdit, inputValue, handleChangeInput } =
    useEditable({
      inputRef,
      initialInputValue: String(value),
      onEnterPress: calculateValue,
      pattern: 'numeric',
    })

  return (
    <S.LevelWrapper onClick={!isEdit ? handleEdit : undefined}>
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
        <S.LevelLabel>{`${t('windowCharacters.level')} ${value}`}</S.LevelLabel>
      )}
    </S.LevelWrapper>
  )
}
