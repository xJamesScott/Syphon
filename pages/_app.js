import '../styles/globals.css';
import { Provider } from 'react-redux';
import { ProviderAuth } from 'next-auth/client';
import { useStore, wrapper } from '../store/store';
import Banner from '../components/Banner';
// import { AppContainer } from '../components/AppContainer';
import AppContainer from '../components/AppContainer';
import { useRouter } from 'next/router';
import { connect, useSelector, useDispatch } from "react-redux";
// import { createSelector } from "reselect";
import withRedux from 'next-redux-wrapper';
import { useContext } from 'react';

const ComponentWrapper = () => {
  const dispatch = Usedispatch();
}

// const dataSelector = createSelector(
//   (state) => state.data,
//   (data) => data
// );


function App({ Component, pageProps, custom, router, bro }) {
  const store = useStore(pageProps.initialReduxState);
  const { hideNav, isLoginRequired } = pageProps;
  // const router = useRouter();
  // const test = useSelector((state) => state);
  // console.log({ "state": test })
  console.log({ "store APP": store })
  console.log({ "app bro": bro })
  // dispatch({
  //   type: 'INCREMENT',
  // })
  console.log({
    "store": store.dispatch({
      type: 'INCREMENT',
    })
  })


  console.log({ "pageProps!": pageProps })
  // const data = useSelector(dataSelector);


  // console.log({ "pageProps": pageProps }, custom)
  // const { isAuthenicated } = state
  // const dispatch = useDispatch();
  // const { tick } = useSelector(state => state);
  const context = useContext(AppContainer);
  console.log({ "context!": context })
  console.log({ "router app": router })
  const isClient = () => typeof window !== "undefined";

  // if (isClient() && pageProps.isLoginRequired) {
  //   router.push("/auth/")
  // }

  // pageProps.isLoginRequired && router.push("/auth")

  return (
    <Provider store={store}>

      <AppContainer
        store={store}
        router={router}
        pageProps={pageProps}
        {...pageProps}
      >
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
      </AppContainer>
    </Provider>

  )
};

// const mapDispatchToProps = {};
const mapDispatchToProps = () => {
  return
};

// const mapStateToProps = ({ }) => ({
//   isAuthenicated: true
// })

const mapStateToProps = (state) => ({
  custom: state,
})

// App.getInitialProps = wrapper.getInitialPageProps(store => ({ pathname, req, res }) => {
//   console.log('2. Page.getInitialProps uses the store to dispatch things');
//   // store.dispatch({ type: 'TICK', payload: 'was set in error page ' + pathname });
// });
// App.getInitialProps = Component.getInitialPageProps(store => ({ pathname, req, res }) => {
//   console.log('2. Page.getInitialProps uses the store to dispatch things');
//   // store.dispatch({ type: 'TICK', payload: 'was set in error page ' + pathname });
// });

// App.getInitialProps = ({ store, pathname, query }) => {
//   // const dispatch = useDispatch()
//   // dispatch({ type: 'TICK', payload: 'foo' })
//   // console.log({ "app state!": state })
//   store.dispatch({ type: 'TICK', payload: 'foo' })
//   return { custom: state }
// }

// const getStaticProps = wrapper
// export default wrapper.withRedux(App);
export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(null, mapDispatchToProps)(App);
// export default connect(mapStateToProps, null)(App);
