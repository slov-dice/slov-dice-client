import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'

export const CustomToast = styled(ToastContainer).attrs(({ theme }) => ({
  position: 'bottom-right',
  theme: 'dark',
  toastStyle: {
    fontFamily: 'Rubik, sans-serif',
    backgroundColor: theme.colors.black,
  },
}))``
