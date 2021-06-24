import { Provider } from 'react-redux';
import Banner from '../components/Banner';
import { useStore } from '../store/store';
import '../styles/globals.css';

function WrappedApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const { hideNav, isLoginRequired } = pageProps;

  return (
    <Provider store={store}>
      {
        !hideNav &&
        <>
          <Banner />
          <Component {...pageProps} />
        </>
      }
    </Provider>
  )
};

export default WrappedApp;
