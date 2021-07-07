export const getStaticPaths = async () => {
    // **TEST DATA
    console.log("yoooooo!")
    let paths
    paths = [
        { params: { id: "REGT200" } }
    ]
    return {
        paths,
        fallback: false
    }

    // **TEST DATA

    // const fetchProducts = async () => {
    //     try {
    //         const res = await axios.get("/api/products?call=all");
    //         const products = await res.json();
    //         const paths = products.map(product => {
    //             return {
    //                 params: [{ id: product.productId }]
    //             }
    //         })
    //         return {
    //             paths,
    //             fallback: false
    //         }
    //         // return {
    //         //     paths: [
    //         //         { params: { id: "REGT200" } }
    //         //     ],
    //         //     fallback: false
    //         // }
    //     } catch (error) {
    //         return error
    //     }



    // }

    // return fetchProducts();

}

export default function test() {
    return (
        <div>
            yo
        </div>
    )
}