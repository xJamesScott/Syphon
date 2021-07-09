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
import Footer from '../components/Footer';
import axios from 'axios';
import { products } from '../public/productList';

function WrappedApp({ Component, pageProps }) {
  console.log(products)
  const getProducts = async () => {
    try {
      console.log("axios request")
      axios.post(`/api/products?call=create&pin=***REMOVED***`, products)
    } catch (error) {
      console.log("Error fetching products " + error)
    }
  }

  getProducts();

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
        <Banner /> // nav bar
      } */}

      <Component {...pageProps} cart={"cart"} />
      <Footer />
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
