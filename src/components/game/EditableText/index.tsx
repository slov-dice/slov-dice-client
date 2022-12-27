import { useRef } from 'react'

import * as S from './styles'

import { useEditable } from 'hooks/useEditable'

interface I_EditableTextProps {
  value: string
  onChange: (value: string) => void
}

export const EditableText = ({ value, onChange }: I_EditableTextProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChangeName = () => {
    onChange(inputValue)
  }

  const { handleEdit, handleKeyDown, handleBlur, isEdit, inputValue, handleChangeInput } =
    useEditable({
      inputRef,
      initialInputValue: value,
      onEnterPress: handleChangeName,
      pattern: 'text',
    })

  return (
    <S.NameWrapper onClick={!isEdit ? handleEdit : undefined}>
      {isEdit ? (
        <S.NameInput
          ref={inputRef}
          value={inputValue}
          onChange={handleChangeInput}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          maxLength={24}
        />
      ) : (
        <span>{value}</span>
      )}
    </S.NameWrapper>
  )
}
