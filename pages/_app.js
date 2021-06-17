import '../styles/globals.css'
import { Provider } from 'react-redux'
import { ProviderAuth } from 'next-auth/client'
import { useStore } from '../store/store'
import Banner from '../components/Banner'

function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  console.log({ "pageProps!!": pageProps })

  return (
    <Provider store={store}>
      <Banner />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
