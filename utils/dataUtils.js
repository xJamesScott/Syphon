import Cookie from 'js-cookie';
const cartCookie = Cookie.getJSON("cart");

export const testData = [
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
    { productId: "a2", name: "prod2", type: "aaa", price: 20 },
]


export const directCartEdit = (product, removeId) => { // for given productId, deletes all then adds new index for product
    const cart = cartCookie;
    const newCart = cart.filter((curr) => {
        curr.productId !== removeId; // removes old product indices
    })
    newCart.push(product); // adds new product index
    Cookie.set("cart", newCart);

    const updatedCart = Cookie.getJSON("cart");
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
        return [];
    } else if (cart) {
        cartCookie = cart
    }
    Object.values(groupedBy(cartCookie, groupBy)).forEach((result, i) => {
        Object.assign(res, combine(result, i))
    })
    return res
}