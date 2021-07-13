import styled from "styled-components"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart'
import Cart from './Cart';

const CartWindow = styled.div`
    /* position: relative; */
`;
const BannerWrapper = styled.div`
    background-color: black;
    color: white;
`;

const CartButton = styled.button`
`;

function Banner(isAuthenticated) {
    const dispatch = useDispatch();
    const getCart = () => {
        dispatch(cartActions.getCartCookie({}))
        dispatch(cartActions.setCartFinishLoading({}))

    }
    typeof window !== "undefined" && getCart()

    const [cartVisible, setCartVisible] = useState(true); // TODO: UNSET FROM TRUE, ONLY FOR TESTING
    return (
        <CartWindow>
            <BannerWrapper>
                <div className="section-margin">
                    {/* <a href="/cart"> */}
                    <CartButton
                        onClick={() => setCartVisible(() => !cartVisible)}
                    >
                        Cart
                    </CartButton>
                    {/* </a> */}
                </div>
            </BannerWrapper>
            <Cart
                // className="visible"
                visible={cartVisible}
            />
        </CartWindow >
    )
}

export default Banner
