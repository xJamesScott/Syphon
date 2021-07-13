import styled from "styled-components"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart'
import Cart from './Cart';

const CartWindow = styled.div`
    z-index: 10; 
`;
const BannerWrapper = styled.div`
    background-color: black;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`;

const CartButton = styled.button`
`;

function Banner(isAuthenticated) {
    const dispatch = useDispatch();
    const getCart = () => {
        dispatch(cartActions.getCartCookie({}));
        dispatch(cartActions.setCartFinishLoading({}));

    };
    typeof window !== "undefined" && getCart();

    const [cartVisible, setCartVisible] = useState(false); // TODO: UNSET FROM TRUE, ONLY FOR TESTING

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
                onClick={(e) => e.preventDefault}
            />
        </CartWindow >
    )
};

export default Banner;
