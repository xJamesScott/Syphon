import '../styles/globals.css'
import { Provider } from 'react-redux'
import { ProviderAuth } from 'next-auth/client'
import { useStore } from '../store/store'

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
