import '../styles/globals.css';
import { Provider } from 'react-redux';
import { ProviderAuth } from 'next-auth/client';
import { useStore } from '../store/store';
import Banner from '../components/Banner';
import { useRouter } from 'next/router';
import { connect, useSelector, useDispatch } from "react-redux";
import withRedux from 'next-redux-wrapper';

const ComponentWrapper = () => {
  const dispatch = Usedispatch();
}


function App({ Component, pageProps, state, }) {
  const store = useStore(pageProps.initialReduxState);
  const { hideNav, isLoginRequired } = pageProps;
  const router = useRouter();

  console.log({ "pageProps": pageProps })
  // const { isAuthenicated } = state
  // const dispatch = useDispatch();

  return (
    <Provider store={store}>
      {
        // isLoginRequired
        //   // && !isAuthenicated 
        //   ? router.push("/auth/login") // Routes to 
        //   :
        !hideNav &&
        <>
          <Banner />
          <Component {...pageProps} />
        </>
      }
    </Provider>

  )
};

const mapDispatchToProps = {};
const mapStateToProps = ({ }) => ({
  isAuthenicated: true
})


// export default withRedux(App);
export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
