
import { CART_ACTIONS } from "./actions";
import Cookie from 'js-cookie';
import { generateUUID } from '../../utils/utils';
import { splitGroups, deleteItems, testData } from '../../utils/dataUtils'

const cartCookie = Cookie.getJSON("cart");

const setAndGetCookie = () => {
    Cookie.set("cart", []);
    return (splitGroups(cartCookie, "productId"));
}

const initialState = {
    _id: null,
    isLoading: false,
    error: null,
    items: {}
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

        case CART_ACTIONS.GET_CART_COOKIE: {
            const { payload } = action;
            const cart = cartCookie ? splitGroups(cartCookie, "productId") : setAndGetCookie()

            return {
                ...state,
                isLoading: false,
                items: cart
            }
        }

        case CART_ACTIONS.SET_CART_CURRENT: {
            const { payload } = action;
            // const genId = generateUUID({ range: 10 })
            const cartCookie = Cookie.getJSON("cart")
            const newCart = (data) => {
                if (Array.isArray(data)) {
                    data.push(payload.data)
                    return data
                } else {
                    return []
                }
            }
            Cookie.set('cart', newCart(cartCookie))


            return {
                ...state,
                isLoading: payload.isLoading,
                items: splitGroups(cartCookie, "productId")
            }
        }
        default: return state;
    }
}

export default cartReducer;