import { CART_ACTIONS } from "./actions";
import Cookie from 'js-cookie';
import { generateUUID } from '../../utils/utils';
import { splitGroups, deleteItems, testData } from '../../utils/dataUtils'
import { useEffect, useRef, useState } from 'react';

// Cookie.set("cart", testData)

const cartCookie = Cookie.getJSON("cart");
const groupedCart = () => {
    if (typeof window !== "undefined") {
        splitGroups(cartCookie, "productId");
    } else {
        {}
    }
}

const initialState = {
    _id: null,
    isLoading: false,
    error: null,
    items: groupedCart() // TODO: value not sticking - may need need to pass in from client side or dispatch action in _app
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