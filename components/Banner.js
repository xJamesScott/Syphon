import styled from "styled-components"
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

    return (
        <CartWindow>
            <BannerWrapper>
                <div className="section-margin">
                    <a href="/cart"><CartButton >Cart</CartButton></a>
                </div>
            </BannerWrapper>

            <Cart></Cart>
        </CartWindow>
    )
}

export default Banner
