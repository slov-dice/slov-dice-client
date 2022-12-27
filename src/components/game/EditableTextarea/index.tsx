import { useRef } from 'react'

import * as S from './styles'

import { useEditable } from 'hooks/useEditable'

interface I_EditableTextareaProps {
  value: string
  onChange: (value: string) => void
}

export const EditableTextarea = ({ value, onChange }: I_EditableTextareaProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null)

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
    <S.DescriptionWrapper onClick={!isEdit ? handleEdit : undefined}>
      {isEdit ? (
        <S.DescriptionTextarea
          ref={inputRef}
          value={inputValue}
          onChange={handleChangeInput}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <span>{value}</span>
      )}
    </S.DescriptionWrapper>
  )
}
