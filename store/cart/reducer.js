import { CART_ACTIONS } from "./actions";

const initialState = {
    isLoading: false,
    error: null,
    items: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ACTIONS.SET_CART_LOADING:
            const { payload } = action;
            return {
                ...state,
                isLoading: payload.isLoading
            }

        case CART_ACTIONS.SET_CART_FINISH_LOADING: {
            const { payload } = action;
            return {
                ...state,
                isLoading: payload.isLoading
            }
        }

        case CART_ACTIONS.SET_CART_CURRENT: {
            const { payload } = action;
            console.log({ "items!": payload })
            return {
                ...state,
                isLoading: payload.isLoading,
                items: payload.data
            }
        }
        default: return state;
    }
}

export default cartReducer;