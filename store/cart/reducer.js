import { CART_ACTIONS } from "./actions";
import Cookie from 'js-cookie';
import { generateUUID } from '../../utils/utils';


const initialState = {
    _id: null,
    isLoading: false,
    error: null,
    items: () => {
        let newObj = {}
        const currentCart = Cookie.getJSON("cart")
        for (const item of currentCart) {
            if (item) {
                Object.assign(newObj, item)
            }
        }
        return newObj
    }
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
            const genId = generateUUID({ range: 10 })

            const currentCart = Cookie.getJSON("cart")
            const newCart = (data) => {
                console.log({ "cart": data })
                if (Array.isArray(data)) {
                    data.push(payload.data)
                    return data
                } else {
                    return []
                }
            }
            Cookie.set('cart', newCart(currentCart))


            const itemTest1 = {
                id: genId,
                name: 'Test Items',
                productId: 'testitem4',
                price: 100,
                quantity: 2
            }
            const itemTest2 = {
                testitem8: {
                    id: genId,
                    name: 'Test Items',
                    productId: 'testitem6',
                    price: 100,
                    quantity: 1
                }
            }

            const newItem = { [itemTest1.id]: { ...itemTest1 } }

            // console.log({ "newItem": newItem })

            const mergedItem = Object.assign(Cookie.getJSON("testitem3"), newItem)

            // console.log({ "redux merged item": mergedItem })


            Cookie.set("testitem3", mergedItem)

            // const current = Cookie.getJSON("testitem3")
            // console.log({ "UUID": generateUUID({ range: 10 }) })
            console.log({ "redux cookie current": Cookie.getJSON("testitem3") })
            const addVal = Object.assign(Cookie.getJSON("testitem3"), payload.data)


            let newObj = {};

            const addValRepeat = (data) => {

                // console.log({ "addValRepeat data": data })
                for (let i = 0; i < 4; i++) {
                    // let newObj = {};
                    Object.assign(newObj, { [data.id]: data })
                };
                return newObj
            }

            console.log({ "addValRepeat": addValRepeat(newObj) })

            console.log({
                "redux action payload": payload.data
            })
            console.log({
                "redux testitem3": Cookie.getJSON("testitem3")
            })

            console.log({ "redux addVal": addVal })




            // Cookie.set("testitem3", { ...state.items, ...payload.data })
            // Cookie.set("testitem3", addVal)

            const filteredCart = Object.entries(addVal)

            console.log({ "filteredCart": filteredCart })

            const mergeCart = (data) => {
                const res = {};
                console.log({ "mergeCart data": data })

                // data.forEach(cart => {
                for (let [key, val] of data) {
                    console.log({ "data val": val })
                    console.log({ "data key": key })
                    if (val.price) {
                        console.log("nooooo!")
                    }
                    if (res[key] && !val.price) {
                        res[key] += val

                    } else {
                        res[key] = val;
                    }
                }
                // })
                return res
            }


            for (let i of currentCart) {
                console.log("test yo!")
            }


            const mergeCart2 = (data) => {
                let res = {};
                // for (let i of data) {
                // console.log({ "mergeCart2 data2": data })
                // console.log({ "data2 length": data.length })
                // data.forEach(cart => {

                data.forEach(combined => {
                    for (let [key, val] of Object.entries(combined)) {
                        console.log({ "data2 data": Object.entries(combined) })
                        console.log({ "data2 val": val })
                        console.log({ "data2 key": key })
                        // if (val.price) {
                        //     console.log("nooooo!")
                        // }
                        // if (res[key] && !val.price) {
                        if (res[key]) {
                            res[key] += val
                        } else {
                            res[key] = val;
                        }
                    }
                });
                return res
            }


            mergeCart2(currentCart)

            console.log({ "mergeCart object entries": (currentCart) })

            const combinedCart2 = mergeCart2(currentCart);

            // console.log({ currentCart: currentCart })

            console.log({ "data cart": filteredCart })
            console.log({ "data cart2": currentCart })

            console.log({ "redux combinedCart2": combinedCart2 })

            const combinedCart = mergeCart(filteredCart)

            console.log({ "redux combinedCart": combinedCart })

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