import { RefObject, useEffect, useState, KeyboardEvent, ChangeEvent } from 'react'

interface I_HookProps {
  inputRef: RefObject<HTMLInputElement> | null
  initialInputValue: string
  onEnterPress: () => void
}

export const useEditableNumeric = ({ inputRef, initialInputValue, onEnterPress }: I_HookProps) => {
  const [isEdit, setEdit] = useState(false)
  const [inputValue, setInputValue] = useState(initialInputValue)

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
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

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      onEnterPress()
      handleBlur()
    }
    if (event.key === 'Escape') {
      setInputValue(initialInputValue)
      handleBlur()
    }

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

  useEffect(() => {
    if (inputRef?.current && isEdit) {
      inputRef.current.focus()
    }
  }, [inputRef, isEdit])

  return { handleEdit, handleBlur, handleKeyDown, isEdit, inputValue, handleChangeInput }
}
