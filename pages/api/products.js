import dbConnect from '../../utils/dbConnect';
import Item from '../../models/Item';

export default async function products(req, res) {

    const {
        body,
        query: { call, productId, create, pin }
    } = req

    await dbConnect();

    switch (call) {
        case "all":
            try {
                const item = await Item.find();
                return res.json(item);
            } catch (err) {
                console.log("Error aggregating products " + err);
                return res.status(500);
            }
        case "productId":
            try {
                const item = await Item.findOne({ productId: productId });
                return res.json(item);
            } catch (err) {
                console.log("Error aggregating products " + err);
                return res.status(500);
            }

        case "create":
            if (pin == "***REMOVED***") {
                // console.log({ "api products": body })
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
                                    const item = await Item.save(product);
                                    return res.json(item);
                                } catch (error) {
                                    console.log("Error aggregating products " + err);
                                    // return res.status(500);
                                }
                            };
                        } catch (err) {
                            console.log("Error finding products " + err);
                            // return res.status(500);
                        }
                    }
                });
            } else {
                console.log("NOT AUTHORIZED! " + pin)
            };
        default:
            return;
    }

}