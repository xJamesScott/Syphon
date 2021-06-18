import '../styles/globals.css'
import { Provider } from 'react-redux'
import { ProviderAuth } from 'next-auth/client'
import { useStore } from '../store/store'
import Banner from '../components/Banner'

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  const { hideNav } = pageProps

  return (
    <Provider store={store}>
      {!hideNav && <Banner />}
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
