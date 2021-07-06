// ADD TO CART  -  not needed - send item to db, then SET_CART_LOADING
// REMOVE FROM CART
// SET CART LOADING (pass in argument)
// SET CART ERROR


export const CART_ACTIONS = {
    SET_CART_LOADING: "SET_CART_LOADING",
    SET_CART_FINISH_LOADING: "SET_CART_FINISH_LOADING",
    SET_CART_ERROR: "SET_CART_ERROR",
    SET_CART_CURRENT: "SET_CART_CURRENT",
    GET_CART_COOKIE: "GET_CART_COOKIE",
    DIRECT_CART_EDIT: "DIRECT_CART_EDIT",
};

export const setCartLoading = ({ isLoading = true }) => ({
    type: CART_ACTIONS.SET_CART_LOADING,
    payload: {
        isLoading
    }
});

export const setCartFinishLoading = ({ isLoading = false }) => ({
    type: CART_ACTIONS.SET_CART_FINISH_LOADING,
    payload: {
        isLoading
    },
});
export const setCartCurrent = ({ isLoading = false, ...data }) => ({

    type: CART_ACTIONS.SET_CART_CURRENT,
    payload: {
        isLoading,
        data
    },
});

export const getCartCookie = ({ isLoading = false, ...data }) => ({
    type: CART_ACTIONS.GET_CART_COOKIE,
    payload: {
        isLoading,
        data
    }
})

export const directCartEdit = ({ isLoading = true, product }) => ({
    type: CART_ACTIONS.DIRECT_CART_EDIT,
    payload: {
        isLoading,
        product
    }
})

export const cartActions = {
    setCartLoading,
    setCartFinishLoading,
    setCartCurrent,
    getCartCookie,
    directCartEdit
}

