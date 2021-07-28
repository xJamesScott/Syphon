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

export const ComponentWrapper = styled.div`
  /* background: magenta; */
  -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;


@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
`;

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
