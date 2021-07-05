// EDIT CART ACTIONS
// EDIT QUANTITY
// DELETE 1 ITEM
// DELETE ALL ITEMS
//

export const testData = [
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
    { productId: "a2", name: "prod2", type: "aaa", price: 20 },
]

export const deleteItems = (cart, removeId) => cart.filter((curr) => { // for given productId, deletes all indices from cart cookie
    return curr.productId !== removeId
})

export const pushToCart = (cart, product) => cart.push(product) // adds cart changes to cart cookie (quantity edits)

export const directCart = (cart, product, removeId) => { // for givied productId, deletes all then adds new index for product
    deleteItems(cart, removeId);
    pushToCart(product); // product is an object
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
    
            if (result[prod][key] && Number.isFinite(value) && key == "quantity" ) { // accumulates total quantity
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
    cart ? cartCookie = cart : cartCookie = []

    Object.values(groupedBy(cartCookie, groupBy)).forEach((result, i) => {
        Object.assign(res, combine(result, i))
    })
    return res
}