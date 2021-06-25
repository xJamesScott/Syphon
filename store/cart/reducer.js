import { CART_ACTIONS } from "./actions";
// import { generateUUID } from '../../utils/generateUUID';

// TODO - ALTERSPEAD TO ACCOMODATE OBJECT STRUCTURE FOR ITEMS INSTEAD OF ARRAYS

const initialState = {
    _id: null,
    isLoading: false,
    error: null,
    // items: [{}] // CHANGE TO OBJECT $productId:{data here}
    items: {} // CHANGE TO OBJECT $productId:{data here}


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
            return {
                ...state,
                isLoading: payload.isLoading,
                items: { ...state.items, ...payload.data }
            }
        }
        default: return state;
    }
}

export default cartReducer;