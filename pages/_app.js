import { Provider } from 'react-redux';
import Banner from '../components/Banner';
import { useStore } from '../store/store';
import '../styles/globals.css';
import GlobalStyle from '../components/GlobalStyle';
import Footer from '../components/Footer';

function WrappedApp({ Component, pageProps }) {

  const store = useStore(pageProps.initialReduxState);
  const { hideNav, isLoginRequired } = pageProps;

  return (
    <Provider store={store}>
      <GlobalStyle />
      {/* TODO: ADD HEADER use header tag ( favicon, meta, etc.) */}
      {/* {
        !hideNav &&
        <Banner /> // nav bar
      } */}

      <Component {...pageProps} cart={"cart"} />
      <Footer />
    </Provider>

  )
};

export default WrappedApp;
