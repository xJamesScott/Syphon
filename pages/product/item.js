import Banner from "../../components/Banner";
import { useState, useEffect } from 'react';
import { cartActions } from '../../store/cart'
import { useDispatch } from 'react-redux';

// TODO - ITERATE THROUGH ITEMS FOR 'YOU MAY ALSO LIKE' SECTION, 
    // REMOVE CURRENT PAGE ITEM FROM RESULT - USE COMPONENT


export default function item() {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const itemData = {
        name: "Test Items",
        productId: "testitem6",
        price: 100,
        quantity: quantity
    };

    const addItem = async () => {
        dispatch(cartActions.setCartCurrent({ [itemData.productId]: itemData }))
    };

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
            <button onClick={() => quantity >= 2 && setQuantity(quantity - 1)}> - </button>
            <span>{quantity}</span>
            {/* <input
            onchange={}
            /> */}
            <button onClick={() => setQuantity(quantity + 1)}> + </button>
            <button onClick={addItem}>ADD TO CART</button>
        </div >
    )
}

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}
