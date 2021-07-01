const testData = [
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
    { productId: "a2", name: "prod2", type: "aaa", price: 20 },
    { productId: "a2", name: "prod2", type: "aaa", price: 20 },
]

let groupedBy = (array, key) => { // groups array of objects by key
    // console.log({ "groupedBy array": array })
    return array.reduce((result, obj) => {
        (result[obj[key]] = result[obj[key]] || []).push(obj);
        return result;
    }, {});
};


const combine = (valObj, i) => { // combines group and sums values
    const prod = valObj[i].productId;
    const result = { [prod]: {} };

    valObj.forEach(products => {
        const prodObj = Object.entries(products)
        for (let [key, value] of prodObj) {
            if (result[prod][key] && Number.isFinite(value)) {
                result[prod][key] += value;
            } else {
                result[prod][key] = value;
            }
        }
    });
    console.log({ result: result })
    return result;
};

const splitGroups = (data, groupBy) => {
    let res = {}
    Object.values(groupedBy(data, groupBy)).forEach((result, i) => {
        Object.assign(res, combine(result, i))
    })
    return res
}

console.log({ splitGroups: splitGroups(testData, "name") })

const combine2 = (valObj) => { // combines group and sums values
    let result = {};
    valObj.map((prods, i) => {
        const resultObj = result;
        console.log("Yo2")
        prods.forEach((products, j) => {

            const prodObj = Object.entries(products)

            for (let [key, value] of prodObj) {
                console.log({ products2: products.productId })
            }
        });

    })
    return result;
};

// const groupAndCount = (data, groupBy) => combine(Object.values(groupedBy(data, groupBy))[0])  // only handles first index (one group)
const groupAndCount2 = (data, groupBy) => combine2(Object.values(groupedBy(data, groupBy)))  // should handle all groups

const runGroup2 = groupAndCount2(testData, "name")


console.log({ runGroup2: runGroup2 }) // RUN THIS TO EXECUTE ALL CALLBACKS


