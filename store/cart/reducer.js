
import { CART_ACTIONS } from "./actions";
import Cookie from 'js-cookie';
// import { generateUUID } from '../../utils/utils';
import { splitGroups, deleteItems, testData, directCartEdit } from '../../utils/dataUtils'


const cartCookie = Cookie.getJSON("cart");

const setAndGetCookie = () => {
    Cookie.set("cart", []);
    return (splitGroups(cartCookie, "productId"));
}

const initialState = {
    _id: null,
    isLoading: false,
    error: null,
    items: {},
    testItem: parseInt(Cookie.get("testItem"))
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
                // items: splitGroups(cartCookie, "productId")
                items: cart
            }
        }

        case CART_ACTIONS.SET_CART_CURRENT: {
            const { payload } = action;


            const cartCookie = Cookie.getJSON("cart")
            const newCart = (data) => {
                if (Array.isArray(data)) {
                    data.push(payload.data)
                    return data
                } else {
                    return []
                }
            }
            Cookie.set('cart', newCart(cartCookie));


            const postEditCookie = Cookie.getJSON("cart"); // new cookie
            return {
                ...state,
                isLoading: payload.isLoading,
                items: splitGroups(postEditCookie, "productId")
            }
        }

        case CART_ACTIONS.DIRECT_CART_EDIT: {
            const { payload: { product } } = action;
            const { payload, inc: { inc } } = action;

            if (inc == "sub") {
                directCartEdit({
                    name: product.name,
                    productId: product.productId,
                    type: product.type,
                    price: product.price,
                    quantity: product.quantity - 1
                }, product.productId);
            }

            if (inc == "add") {
                directCartEdit({
                    name: product.name,
                    productId: product.productId,
                    type: product.type,
                    price: product.price,
                    quantity: product.quantity + 1
                }, product.productId);
            }

            if (inc == "delete") {
                directCartEdit({
                    name: product.name,
                    productId: product.productId,
                    type: product.type,
                    price: product.price,
                    quantity: 0
                }, product.productId);
            }

            if ( inc == "clear") {
                Cookie.set("cart",[]);
            }

            const cartCookie = Cookie.getJSON("cart") // new cookie

            return {
                ...state,
                isLoading: true,
                items: splitGroups(cartCookie, "productId")
            }
        }
        default: return state;
    }
}

export default cartReducer;