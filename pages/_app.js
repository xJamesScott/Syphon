import { AnimateSharedLayout, motion } from "framer-motion";
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// import client from "../apollo/client";
import { useApollo } from '../apollo/client'
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import GlobalStyle from '../components/GlobalStyle';
import Head from '../components/Head';
import { useStore } from '../store/store';
import '../styles/globals.css';


function WrappedApp({ Component, pageProps }) {
  // const client = useApollo(pageProps)

  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
  });

  const store = useStore(pageProps.initialReduxState);
  const { hideNav, isLoginRequired } = pageProps;

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Head />
        <GlobalStyle />
        {/* TODO: ADD HEADER use header tag ( favicon, meta, etc.) */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="page-container"
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
    </ApolloProvider>
  )
};

export default WrappedApp;
