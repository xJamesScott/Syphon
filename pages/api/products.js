import dbConnect from '../../utils/dbConnect';
import Item from '../../models/Item';

export default async function products(req, res) {

    const {
        query: { call }
    } = req

    // console.log({ "query call": call })
    // res.status(200)

    await dbConnect();

    switch (call) {
        case "all":
            try {
                const item = await Item.find();
                console.log({ "API Item": item })
                return res.json(item);
            } catch (err) {
                console.log("Error aggregating products " + err);
                return res.status(500)
            }
        case "productId":
            console.log("runnine productId!")
            console.log({ "productId request!!!": req})
            try {
                const item = await Item.findOne({ productId: "REGT200" });
                console.log({ "productId item": item })
                // return res.json(item);
                return res.json(item); // testing
            } catch (err) {
                console.log("Error aggregating products " + err);
                return res.status(500)
            }

        default:
            return;
    }

}