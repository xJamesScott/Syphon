// ADD TO CART  -  not needed - send item to db, then SET_CART_LOADING
// REMOVE FROM CART
// SET CART LOADING (pass in argument)
// SET CART ERROR


export const CART_ACTIONS = {
    // ADD_CART_ITEM: "ADD_CART_ITEM",
    // REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
    SET_CART_LOADING: "SET_CART_LOADING",
    SET_CART_FINISH_LOADING: "SET_CART_FINISH_LOADING",
    SET_CART_ERROR: "SET_CART_ERROR",
    SET_CART_CURRENT: "SET_CART_CURRENT"
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

export const cartActions = {
    setCartLoading,
    setCartFinishLoading,
    setCartCurrent
}
