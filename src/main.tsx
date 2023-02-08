import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { App } from 'App'
import { ModalManagerProvider } from 'features/ModalManager/context'
import { persistor, store } from 'store'
import { theme } from 'styles/theme'
import 'services/socket'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ModalManagerProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </ModalManagerProvider>
    </PersistGate>
  </Provider>,
)
