import { CART_ACTIONS } from "./actions";
import Cookie from 'js-cookie';
import { generateUUID } from '../../utils/utils';
import { splitGroups, deleteItems } from '../../utils/dataUtils'

// const cartCookie = Cookie.get("cart")
// const groupedCart = splitGroups(cart, "productId")

const initialState = {
    _id: null,
    isLoading: false,
    error: null,
    // items: groupedCart
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
            // const genId = generateUUID({ range: 10 })
            const currentCart = Cookie.getJSON("cart")
            const newCart = (data) => {
                if (Array.isArray(data)) {
                    data.push(payload.data)
                    return data
                } else {
                    return []
                }
            }
            Cookie.set('cart', newCart(currentCart))

          return {
              ...state,
              isLoading: payload.isLoading
            }
            // return {
            //     ...state,
            //     isLoading: payload.isLoading,
            //     items: { ...state.items, ...payload.data }
            // }
        }
        default: return state;
    }
}

export default cartReducer;