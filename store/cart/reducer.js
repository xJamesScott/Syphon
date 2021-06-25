import { CART_ACTIONS } from "./actions";
// import { generateUUID } from '../../utils/generateUUID';

// TODO - ALTERSPEAD TO ACCOMODATE OBJECT STRUCTURE FOR ITEMS INSTEAD OF ARRAYS

const initialState = {
    _id: null,
    isLoading: false,
    error: null,
    items: [{}] // CHANGE TO OBJECT $productId:{data here}


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
            const rawItems = [...state.items, payload.data]
            // const rawItems = [state.items, payload.data]

            console.log({ "rawItems": rawItems })
            console.log({ "state items": { ...state } })
            const itemsById = rawItems.reduce((acc, obj) => {
                console.log("item id!")
                let key = obj["productId"]
                if (!acc[key]) {
                    acc[key] = []
                }
                acc[key].pop(obj)
                acc[key].push(obj)
                // [key].push(obj)
                // return acc[key]
                console.log({ "acc": acc })
                return acc
                // return acc[key].slice(-1)
            })


            console.log({ "items by id NO BRACKETS": itemsById })
            console.log({ "items by id WITH BRACKETS": [itemsById] })
            return {
                ...state,
                isLoading: payload.isLoading,
                // group items by product it
                // rawItems.reduce((acc, obj)=> {
                //     let key = obj["productId"]
                //     if (!acc[key]){
                //         acc[key]=[]
                //     }
                //     acc[key].push(obj)
                //     return acc
                // })
                // 
                // 
                // 
                // 
                // 
                //                 
                // items: [itemsById]
                items: [itemsById]
            }
        }
        default: return state;
    }
}

export default cartReducer;