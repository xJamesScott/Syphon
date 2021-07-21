import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from './Loader';
import { useEffect, useState } from 'react';
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

const CartCount = styled.div`
    color: red;
    position: absolute;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    // border: 1px solid red;
    top: -20%;
    right: -20%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;

    p { 
        font-size: 1rem;
        font-weight: 700;
        line-height: 1rem;
    }

`;

const ButtonContainer = styled.div`
    position: relative;
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

    const cartState = useSelector((state) => state.cart);
    const {
        isLoading,
        items: cart
    } = cartState

    const cartArrayObj = Object.values(cart);
    const [cartArray, setCartArray] = useState([]);

    const totalItems = cartArrayObj.reduce((sum, item) => {
        return sum += item.quantity
    }, 0);

    console.log({ totalItems: totalItems })

    // useEffect(() => {
    //     // setCartArray(cartArrayObj);
    // }, [isLoading, cart]);

    console.log({ cartArrayObj: cartArrayObj });



    return (
        !isLoading ?
            <CartWindow>
                <BannerWrapper>
                    <div className="section-margin">
                        <ButtonContainer>
                            <CartCount>
                                {/* TODO: PULL COUNT VALUE FROM USESTATE INSTEAD OF REDUX */}
                                <p>{totalItems}</p>
                            </CartCount>
                            <CartButton
                                onClick={() => setCartVisible(() => !cartVisible)}
                            >
                                Cart
                            </CartButton>
                        </ButtonContainer>
                    </div>
                </BannerWrapper>
                <Cart
                    // className="visible"
                    visible={cartVisible}
                    onClick={(e) => e.preventDefault}
                    cartArray={cartArray}
                />
            </CartWindow >
            : <Loader />
    )
};

export default Banner;
