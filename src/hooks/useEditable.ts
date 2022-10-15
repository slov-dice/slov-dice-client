import { RefObject, useEffect, useState, KeyboardEvent, ChangeEvent } from 'react'

interface I_UseEditable {
  inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement> | null
  initialInputValue: string
  onEnterPress: () => void
  pattern: 'numeric' | 'text'
}

export const useEditable = ({
  inputRef,
  initialInputValue,
  onEnterPress,
  pattern,
}: I_UseEditable) => {
  const [isEdit, setEdit] = useState(false)
  const [inputValue, setInputValue] = useState(initialInputValue)

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value)
  }

  const handleEdit = () => {
    if (!isEdit) {
      setEdit(true)
    }
  }
  const handleBlur = () => {
    if (isEdit) {
      setEdit(false)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.code === 'Enter') {
      onEnterPress()
      handleBlur()
    }
    if (event.key === 'Escape') {
      setInputValue(initialInputValue)
      handleBlur()
    }

    if (pattern === 'numeric') {
      if (
        !/[0-9]/.test(event.key) &&
        event.key !== '+' &&
        event.key !== '-' &&
        event.code !== 'Backspace' &&
        event.code !== 'Delete' &&
        event.code !== 'ArrowLeft' &&
        event.code !== 'ArrowRight'
      ) {
        event.preventDefault()
      }
    }
  }

  useEffect(() => {
    if (inputRef?.current && isEdit) {
      inputRef.current.focus()
    }
  }, [inputRef, isEdit])

  return { handleEdit, handleBlur, handleKeyDown, isEdit, inputValue, handleChangeInput }
}
