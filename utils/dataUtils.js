const testData = [
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
    { productId: "a1", name: "prod1", type: "aaa", price: 20 },
]

let groupedBy = (array, key) => { // groups array of objects by key
    return array.reduce((result, obj) => {
        (result[obj[key]] = result[obj[key]] || []).push(obj);
        return result;
    }, {});
};



const combine = (valObj) => { // combines group and sums values
    const prod = valObj[0].productId
    const result = { [prod]: {} };
    valObj.forEach(products => {
        for (let [key, value] of Object.entries(products)) {
            if (result[prod][key] && Number.isFinite(value)) {
                result[prod][key] += value;
            } else {
                result[prod][key] = value;
            }
        }
    });
    return result;
};

export const groupAndCount = (data, groupBy) => combine(Object.values(groupedBy(data, groupBy))[0])

console.log(groupAndCount(testData, "name"))