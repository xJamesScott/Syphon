import { Provider } from 'react-redux';
import Banner from '../components/Banner';
import { useStore } from '../store/store';
import '../styles/globals.css';
import GlobalStyle from '../components/GlobalStyle';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from '../components/Loader';
import { splitGroups, deleteItems, testData } from '../utils/dataUtils'
import Cookie from 'js-cookie';
import { useEffect, useRef, useState } from 'react';

function WrappedApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  });
  const { hideNav, isLoginRequired } = pageProps;

  return (
    <Provider store={store}>
      <GlobalStyle />
      {
        !hideNav &&
        <Banner />
      }
      <Component {...pageProps} cart={"cart"} />
    </Provider>
  )
};

export default WrappedApp;
