import dbConnect from '../../utils/dbConnect';
import Item from '../../models/Item';
import { products as prodList } from '../../utils/Products';

export default async function products(req, res) {

    const {
        body,
        query: { call, productId, create, pin, not, productType }
    } = req

    dbConnect("global");
    // dbConnect();

    switch (call) {

        case "test2":
            try {
                const createProducts = Item.insertMany(prodList);
                return res.json(createProducts);
            } catch (err) {
                console.log("Error creating products " + err);
                return res.status(500);
            };
        case "types":
            try {
                const types = await Item.distinct("productType");
                return res.json(types);
            } catch (err) {
                console.log("Error fetching product types: " + err)
            };
        case "all":
            try {
                if (not) {
                    const item = await Item.find({ productId: { $ne: not } });
                    return res.json(item);
                } else {
                    const item = await Item.find();
                    return res.json(item);
                }
            } catch (err) {
                console.log("Error aggregating products " + err);
                return res.status(500);
            };
        case "productId":
            try {
                const item = await Item.findOne({ productId: productId });
                return res.json(item);
            } catch (err) {
                console.log("Error aggregating products!: " + err);
                return res.status(500);
            };

        case "productType":
            try {
                const models = await Item.find({ productType: productType });
                // console.log({ models: models });
                return res.json(models);
            } catch (err) {
                console.log("Error fetching model types!: " + err);
                return res.status(500);
            }

        case "create":
            if (pin == "0376") {
                body.map((product) => {
                    async () => {
                        try {
                            const productExist = await Item.findOne({ productId: product.productId });
                            if (productExist) {
                                console.log("Product exist already: " + product.productId)
                                return status(200);
                            }

                            if (!productExist) { // potentional error based on what's returned from productExist
                                try {
                                    const item = await new Item(product).save();
                                    return res.json(item);
                                } catch (error) {
                                    console.log("Error aggregating products " + err);
                                    return res.status(500);
                                }
                            };
                        } catch (err) {
                            console.log("Error finding products " + err);
                            return res.status(500);
                        }
                    }
                });
            } else {
                console.log("NOT AUTHORIZED! " + pin)
            };
        default:
            return res.status(200);
    };

};