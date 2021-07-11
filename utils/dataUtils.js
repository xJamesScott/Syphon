// EDIT CART ACTIONS
// EDIT QUANTITY
// DELETE 1 ITEM
// DELETE ALL ITEMS
//

import Cookie from 'js-cookie';
// import { cartActions } from '../store/cart'
// import { useDispatch } from 'react-redux';

// dispatch = useDispatch();
const cartCookie = Cookie.getJSON("cart");

// console.log({ "testarr": Cookie.getJSON("cart") })

// Cookie.getJSON("testarr").push("yo")

export const testData = [
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
    { productId: "a2", name: "prod2", type: "aaa", price: 20 },
]

// export const deleteItems = (cart, removeId, product) => cart.filter((curr) => { // for given productId, deletes all indices from cart cookie
//     curr.productId !== removeId;
//     cart.push(product);
//     Cookie.set(cart)


// })



// export const pushToCart = (cart, product) => cart.push(product) // adds cart changes to cart cookie (quantity edits)
// export const pushToCart = (cart, product) => {
//     // cart.push(product)
//     Cookie.set(cart);
// } // adds cart changes to cart cookie (quantity edits)

export const directCartEdit = (product, removeId) => { // for given productId, deletes all then adds new index for product
    const cart = cartCookie;
    // console.log({ "product directCartEdit": product });
    // console.log({ "removeId directCartEdit": removeId });
    const newCart = cart.filter((curr) => {
        curr.productId !== removeId; // removes old product indices
    })
    newCart.push(product); // adds new product index
    Cookie.set("cart", newCart);

    const updatedCart = Cookie.getJSON("cart")
    // console.log({ "directCartEdit cart": newCart });
    // console.log({ "directCartEdit updatedcart": updatedCart });

    // dispatch(cartActions.getCartCookie({}))
    return
}

const groupedBy = (array, key) => { // creates cart object of product groups from cart cookie array
    return array.reduce((result, obj, i) => {

        (result[obj[key]] = result[obj[key]] || []).push(obj);

        return result;
    }, {});
};

const combine = (valObj, i) => { // combines product groups and sums values into object
    const prod = valObj[0].productId;
    const result = { [prod]: {} };

    valObj.forEach((products, j) => { // loops through product objects. create new object. productId is key. ojbect is value (sum of indices)
        const prodObj = Object.entries(products)

        for (let [key, value] of prodObj) {

            if (result[prod][key] && Number.isFinite(value) && key == "quantity") { // accumulates total quantity
                result[prod]["quantity"] += value;
            } else {
                result[prod][key] = value;
            }
        }
    });
    return result;
};

export const splitGroups = (cart, groupBy) => { // converts cart cookie array in to object
    let res = {}
    let cartCookie;

    if (!cart) {
        Cookie.set("cart", []);
        Cookie.set("cart", cart);
        // cartCookie = Cookie.getJSON("cart");
    } else if (cart) {
        cartCookie = cart
    }

    // cart ? cartCookie = cart : cartCookie = []

    Object.values(groupedBy(cartCookie, groupBy)).forEach((result, i) => {
        Object.assign(res, combine(result, i))
    })
    return res
}