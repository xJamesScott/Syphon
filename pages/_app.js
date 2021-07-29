import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import { useStore } from '../store/store';
import '../styles/globals.css';
import GlobalStyle from '../components/GlobalStyle';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion"


function WrappedApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const { hideNav, isLoginRequired } = pageProps;

  return (
    <Provider store={store}>
      <GlobalStyle />
      {/* TODO: ADD HEADER use header tag ( favicon, meta, etc.) */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {
          !hideNav &&
          <Banner 
            className="page"
          /> // nav bar
        }
        <AnimateSharedLayout>
          <Component 
          {...pageProps} 
          cart={"cart"} 
          className="page"
          />
        </AnimateSharedLayout>
        <Footer />
      </motion.div>
    </Provider>



  )
};

export default WrappedApp;
