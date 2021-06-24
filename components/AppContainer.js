
import { createContext, useContext, useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

import withRedux from 'next-redux-wrapper';
import { useStore, wrapper } from '../store/store';
import { useRouter } from 'next/router';
const AppContext = createContext();
const isClient = () => typeof window !== "undefined";
const Bro = styled.div``;
// export function AppContainer({ children }) {
// export const AppContainer =
const AppContainer =
    wrapper.
        withRedux(
            ({ children, store, router, pageProps }) => {
                let sharedState = { "teeeest!": "yooooooo" }
                // const router = useRouter()
                // router.push("/auth/login")
                // console.log({ "children": children.props })
                console.log({ "wrapper store": store })
                console.log({ "children": children })
                console.log({ "pageProps container": pageProps })
                // console.log({ "container router": router.pathname })
                const dispatch = useDispatch()
                const decrement = () =>
                    dispatch({
                        type: 'DECREMENT',
                    })
                const test = useSelector((state) => state)
                console.log({ "wrapper state!": test })
                // return (
                //     <AppContext.Provider
                //         value={sharedState}
                //         test2="broooo!"
                //         test4="oooo!"
                //     >
                //         {children}
                //     </AppContext.Provider>
                // );

                // useEffect(() => {
                //     if (isClient() && pageProps.isLoginRequired) {
                //         return router.push("/auth/login")
                //     }
                // }, [pageProps])

                // if (isClient() && pageProps.isLoginRequired) {
                //     return <>yoooooooooooooooooooo</>
                // }
                const [containerLoading, setLoading] = useState(true);
                console.log({ "count": test.count })

                const testProp = "yooooo"

                // pageProps.yo();
                // useEffect(() => {
                // if (test.count >= 1) {
                //     // const timer = () => setTimeout(setLoading(false), 2000)
                //     // return <>
                //     //     {/* {timer} */}
                //     //     <div>Loading</div>
                //     //     {/* <button onClick={decrement}>DECREMENT</button> */}
                //     //     {/* <button onClick={() => setLoading(false)}>SET LOADING</button> */}
                //     // </>
                //     // router.push("/auth")
                // }
                return children
                // else {
                //     return children
                // }
                // setLoading(false)
                // if (!containerLoading) {
                //     return children
                // }
                // setTimeout(setLoading(false), 2000)

                // }, [pageProps])
                // return children

            })

export function useAppContext() {
    return useContext(AppContext);
}

// const mapStateToProps = ({ }) => ({
//     isAuthenicated: true
// })

// AppContainer.getInitialProps = () => {
//     return "Yoooo"
// }
// export default connect(mapStateToProps, null)(AppContainer)

export async function getServerSideProps() {
    return {
        props: {
            loadLogin: true,
        }
    }
}


export default AppContainer




