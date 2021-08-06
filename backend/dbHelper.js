import dbConnect from '../utils/dbConnect';
import Item from '../models/Item';
import { products as prodList } from '../utils/Products';

// export default async function products(req, res) {
export default async function products(call, data) {
    // console.log({ "call!": call });
    // console.log({ "data!!!!!": data });

    const {
        productId, create, pin, not, productType
    } = data



    dbConnect("global");
    // dbConnect();

    switch (call) {

        case "test2":
            try {
                const res = Item.insertMany(prodList).lean();
                return res;
            } catch (err) {
                console.log("Error creating products " + err);
                // throw Error("Error creating products " + err);
                // return res.status(500);
            };
        case "types":
            try {
                const res = await Item.distinct("productType").lean();
                console.log({ "ress!!!! types": res });
                return res;
            } catch (err) {
                console.log("Error fetching product types: " + err)
            };
        case "all":
            try {
                if (not) {
                    const res = await Item.find({ productId: { $ne: not } }).lean(); // excludes by productId
                    return res;
                } else {
                    const res = await Item.find();
                    return res;
                }
            } catch (err) {
                console.log("Error aggregating products " + err);
                // throw Error("Error aggregating products " + err);
                // return res.status(500);
            };
        case "productId":
            try {
                const res = await Item.findOne({ productId: productId }).lean();
                return res;
            } catch (err) {
                console.log("Error aggregating products!: " + err);
                // throw Error("Error aggregating products!: " + err);
                // return res.status(500);
            };

        case "productType":
            try {
                const res = await Item.find({ productType: productType }).lean();
                console.log({ "ress!!!! productType!!": productType });
                // console.log({ models: models });
                return res;
            } catch (err) {
                console.log("Error fetching model types!: " + err);
                // throw Error("Error fetching model types!: " + err);
                // return res.status(500);
            }

        case "create":
            if (pin == "0376") {
                body.map((product) => {
                    async () => {
                        try {
                            const res = await Item.findOne({ productId: product.productId });
                            if (productExist) {
                                console.log("Product exist already: " + product.productId)
                                // return status(200);
                            }

                            if (!productExist) { // potentional error based on what's returned from productExist
                                try {
                                    const res = await new Item(product).save();
                                    return res;
                                } catch (error) {
                                    console.log("Error aggregating products " + err);
                                    return status(500);
                                }
                            };
                        } catch (err) {
                            console.log("Error finding products " + err);
                            console.log("Error finding products " + err);
                            return status(500);
                        }
                    }
                });
            } else {
                console.log("NOT AUTHORIZED! " + pin)
            };
        default:
            return status(200);
    };

};