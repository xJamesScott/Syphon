import dbConnect from '../../utils/dbConnect';
import Item from '../../models/Item';
import { products as prodList } from '../../utils/Products';

export default async function products(req, res) {

    const {
        body,
        query: { call, productId, create, pin }
    } = req

    dbConnect("global");
    // dbConnect();

    switch (call) {
        case "test2":
            try {
                // const item = await new Item(testData2).save();
                const createProducts = Item.insertMany(prodList);
                // return res.status(200);
                return res.json(createProducts);
            } catch (err) {
                console.log("Error creating products " + err);
                return res.status(500);
            }
        case "all":
            try {
                const item = await Item.find();
                // console.log({ "item!!!!!": item[0].productId })
                return res.json(item);
            } catch (err) {
                console.log("Error aggregating products " + err);
                // return "error@@@!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
                return res.status(500);
            }
        case "productId":
            try {
                const item = await Item.findOne({ productId: "REGT200" });
                return res.json(item);
            } catch (err) {
                console.log("Error aggregating products!: " + err);
                return res.status(500);
            }

        case "create":
            if (pin == "***REMOVED***") {
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
    }

}