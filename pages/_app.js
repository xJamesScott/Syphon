import { Provider } from 'react-redux';
import Banner from '../components/Banner';
import { useStore } from '../store/store';
import '../styles/globals.css';
import GlobalStyle from '../components/GlobalStyle';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from '../components/Loader';
import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';

function WrappedApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  // const persistor = persistStore(store, {}, function () {
  //   persistor.persist()
  // });


  const { hideNav, isLoginRequired } = pageProps;



  return (
    <Provider store={store}>
      <GlobalStyle />

      {/* {
        !hideNav &&
        <Banner />
      } */}
      <Component {...pageProps} cart={"cart"} />
    </Provider>
  )
};

// WrappedApp.getInitialProps = async (req) => {
//   const dispatch = useDispatch();
//   dispatch(cartActions.getCartCookie())
//   const props = req
//   console.log("intial props!")
//   return { "yo": Cookie.getJSON("cart") }
// }


export default WrappedApp;
