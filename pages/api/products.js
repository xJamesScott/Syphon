import dbConnect from '../../utils/dbConnect';
import Item from '../../models/Item';

export default async function products(req, res) {

    const {
        query: { call, productId }
    } = req

    await dbConnect();

    switch (call) {
        case "all":
            try {
                const item = await Item.find();
                return res.json(item);
            } catch (err) {
                console.log("Error aggregating products " + err);
                return res.status(500)
            }
        case "productId":
            try {
                const item = await Item.findOne({ productId: productId });
                return res.json(item);
            } catch (err) {
                console.log("Error aggregating products " + err);
                return res.status(500)
            }

        default:
            return;
    }

}