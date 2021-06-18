// Item title
// Add to cart button (Name, Price, Quantity)
// Quantity buttons (+ / -)
import Banner from "../components/banner";


export default function item() {
    return (
        <div>
            <h2>Product</h2>
            <h4>$<span className="price">{200}</span></h4>
            {   // if authentication
                //  Axios POST
                // Dispatch action
                // if !authenticated
                // Dispatch action
            }
            <button>ADD TO CART</button>
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {  }, // will be passed to the page component as props
    }
}
