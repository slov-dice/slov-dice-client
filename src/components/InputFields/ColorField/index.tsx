import { ChangeEventHandler, forwardRef } from 'react'

import * as S from './styles'

interface I_ColorFieldProps {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  fullWidth?: boolean
}

const ColorFieldComponent = forwardRef((props: I_ColorFieldProps, ref: any) => {
  const { fullWidth = false } = props

  return <S.Input {...props} ref={ref} type='color' fullWidth={fullWidth} />
})

ColorFieldComponent.displayName = 'ColorField'

export const ColorField = ColorFieldComponent
