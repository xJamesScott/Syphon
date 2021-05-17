import dbConnect from '../../utils/dbConnect';
import Test from '../../models/Test';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const tests = await Test.find({});
                console.log("try!")
                res.status(200).json({ success: true, data: tests })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const test = await Test.create(req.body);
                console.log("try!")
                res.status(201).json({ success: true, data: test })
            } catch (error) {
                console.log({ req: req.body })
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
// export default async (req, res) => {
//     const { method } = req;

//     switch (method) {
//         case 'GET':
//             try {
//                 const Tests = await find();

//                 res.status(200).json({ success: true, data: Tests })
//             } catch (error) {
//                 res.status(400).json({ success: false });
//             }
//             break;
//         case 'POST':
//             try {
//                 const Test = await Test.create(req.body);

//                 res.status(201).json({ success: true, data: Test })
//             } catch (error) {
//                 res.status(400).json({ success: false });
//             }
//             break;
//         default:
//             res.status(400).json({ success: false });
//             break;
//     }
// }