import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { theme } from '../constants/theme';
import { cartActions } from '../store/cart';
import {
    ButtonContainer,
    CheckoutProdIMG,
    Cost,
    PayButton,
    ProductWrapper,
    SummaryTotals,
    TextWrapper,
    TotalWrapper
} from './CheckoutSummary';

const { colors } = theme;

const CartWindow = styled.div`
    position: relative;

    &.nav-banner {
    position: fixed;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 20;
    }

    
    &.cart-modal {
        position: fixed;
        top: 0;
        left: 0;
        visibility: hidden;
        opacity: 0;
        height: 100%; 
        height: 100vh; 
        width: 100%;
        transition: opacity .25s ease;
    }

    &.visible.cart-modal {
        visibility: visible;
        opacity: 1;
    }
`;

export const CartWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(128, 128, 128, 0.49);  
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    .modal-motion {
        position: relative;
    }
`;

const CartModalMargin = styled.div`
    position: relative;
    height: 100%;
`;


const CartModal = styled.div`
    position: absolute;
    top: 15%;
    right: 0;
    width: 38rem;
    background-color: white;
    padding: 3rem;
    pointer-events: auto !important;
    display: flex ;
    flex-direction: column;
    justify-content: center;
    border-radius: .8rem;
    margin-top: 2rem;
`;

const TitleLine = styled.h5`
    &.cart-title {
        margin-bottom: 1rem !important;
    }
`;

const CartTitle = styled.h2`

`;

export const Quantity = styled.div`
    justify-self: end;
    flex: 0 1 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25%;
    background: ${colors.accent3};
    padding: 0;
    width: 9.6rem;
    height: 3.2rem;
    font-weight: bold;
    position: relative;
    z-index: 2;

   
`;

export const IncrementQTY = styled.p`
    cursor: pointer;
    opacity: 50%;
    z-index: 2;

    :hover {
        color: ${colors.main};
    }
`;


const DeleteItemContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    /* height: 150%; */
    position: absolute;
    right: -25%;
`;

const DeleteItemWrapper = styled.div`
    background-color: transparent;
    height: 40px;
    width: 40px;
    position: absolute;
    top: -50%;
    bottom: -50%;
    right: 0;
    z-index: 0;
`;

const DeleteItem = styled.svg`
    opacity: 0;
    transition: all .25s ease;
    height: 15px;
    width: 15px;
    cursor: pointer;

    &.prod-hovered {
        opacity: 40%;
        transition: all .25s ease;
        pointer-events: all;
        

        .delete-can { 
            fill: ${colors.mainText};
            pointer-events: fill;
            transition: all .25s ease;
        }
        
        .delete-can:hover {
            fill: red;
            transition: all .25s ease;
        }
    }
`;

const Close = styled.div`

`;

const NoItems = styled.div`
    /* display: flex;
    justify-content: center; */
    text-align: center;
`;

export default function Cart(
    {
        visible,
        hideCart,
        totalItems
        // isLoading
    }
) {
    const cartState = useSelector((state) => state.cart);
    const {
        isLoading,
        items: cart
    } = cartState

    const cartArrayObj = Object.entries(cart);

    const [cartArray, setCartArray] = useState([]);

    useEffect(() => {
        setCartArray(cartArrayObj)
    }, [isLoading, cart])

    const subtotal = cartArray.reduce((sum, item) => {
        return sum += item[1].price * item[1].quantity;
    }, 0)

    const dispatch = useDispatch();

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                hideCart();
                window.removeEventListener('click', handleClick);
            }
        };

        if (visible) {
            window.addEventListener("click", handleClick);
        }
    }, [visible]);

    const ref = useRef();

    const [prodHover, setProdHover] = useState({});

    return (
        !isLoading &&
        <CartWindow
            className={visible ? "visible cart-modal" : "cart-modal"}
        >
            <CartWrapper
                className="modal"
            >
                <CartModalMargin
                    className="section-margin"
                >
                    <CartModal
                        className="modal"
                        ref={ref}
                    >
                        {
                            totalItems < 1 ?
                                <NoItems>
                                    <div>
                                        NO ITEMS IN CART
                                    </div>
                                </NoItems>
                                :
                                <>
                                    <TitleLine
                                        className="cart-title"
                                    >
                                        CART ({totalItems})
                                    </TitleLine>
                                    {
                                        cartArray.map((item, i) => {
                                            const current = item[1];
                                            const nameRaw = current.name
                                            const productId = current.productId

                                            return (
                                                < ProductWrapper
                                                    key={"cartItem" + i}
                                                    className="cart-prod-wrap"
                                                    onMouseEnter={() => setProdHover({ [current.productId]: true })}
                                                    onMouseLeave={() => setProdHover({ [current.productId]: false })}
                                                >
                                                    <CheckoutProdIMG
                                                        className="round-border"
                                                        src={`/products/${item[0]}/desktop/thumbnail.jpg`}
                                                        width={64}
                                                        height={64}
                                                    />
                                                    <TextWrapper
                                                    >
                                                        <p>
                                                            {item[1].name}
                                                        </p>
                                                        <p className="price">
                                                            {`$ ${item[1].price}`}
                                                        </p>
                                                    </TextWrapper>
                                                    <Quantity>
                                                        {/* INCREMENT - 1 */}
                                                        <IncrementQTY
                                                            onClick={() => {
                                                                dispatch(cartActions.directCartEdit({
                                                                    product: {
                                                                        name: current.name,
                                                                        productId: current.productId,
                                                                        type: current.type,
                                                                        price: current.price,
                                                                        quantity: current.quantity
                                                                    }, inc: "sub"
                                                                }
                                                                ));
                                                                dispatch(cartActions.setCartFinishLoading({}));
                                                            }}
                                                        >
                                                            -
                                                        </IncrementQTY>
                                                        <p
                                                            key={item[1].productId}
                                                            id={item[1].productId}
                                                        >
                                                            {item[1].quantity}
                                                        </p>
                                                        {/* INCREMENT + 1 */}
                                                        <IncrementQTY
                                                            onClick={() => {
                                                                dispatch(cartActions.directCartEdit({
                                                                    product: {
                                                                        name: current.name,
                                                                        productId: current.productId,
                                                                        type: current.type,
                                                                        price: current.price,
                                                                        quantity: current.quantity
                                                                    }, inc: "add"
                                                                }
                                                                ));
                                                                dispatch(cartActions.setCartFinishLoading({}));

                                                            }}
                                                        >
                                                            +
                                                        </IncrementQTY>

                                                        <DeleteItemContainer>
                                                            <DeleteItemWrapper
                                                            />
                                                            <DeleteItem
                                                                className={prodHover[productId] ? "prod-hovered" : ""}
                                                                onClick={() => {
                                                                    dispatch(cartActions.directCartEdit({
                                                                        product: {
                                                                            name: current.name,
                                                                            productId: current.productId,
                                                                            type: current.type,
                                                                            price: current.price,
                                                                            quantity: current.quantity
                                                                        }, inc: "delete"
                                                                    }
                                                                    ));
                                                                    dispatch(cartActions.setCartFinishLoading({}));
                                                                }}
                                                                width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            >
                                                                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={0} y={0} width={15} height={15}>
                                                                    <rect width={15} height={15} fill="url(#pattern0)" />
                                                                </mask>
                                                                <g mask="url(#mask0)">
                                                                    <rect className="delete-can" x={-1} y={1} width={18} height={18} fill="blue" />
                                                                </g>
                                                                <defs>
                                                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                                                                        <use xlinkHref="#image0" transform="scale(0.0416667)" />
                                                                    </pattern>
                                                                    <image id="image0" width={24} height={24} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAZUlEQVRIiWNgGCmggYGB4T8a7iBGIyMWsf8UOgbFTCYKDSMbwIKBYvU09wGxFqC7kGgfDhofjFowasGoBRQAFiLVoRfr2Ip5rGDAgugplEavxXBhZD1EAT8GBoYnJFjwBKpnGAIAUcAmPA1WYN0AAAAASUVORK5CYII=" />
                                                                </defs>
                                                            </DeleteItem>
                                                        </DeleteItemContainer>
                                                    </Quantity>
                                                </ProductWrapper>
                                            )
                                        })}

                                    {
                                        !isLoading &&
                                        <TotalWrapper>
                                            <SummaryTotals>TOTAL</SummaryTotals>
                                            <Cost>{`$ ${parseFloat(subtotal).toFixed(2)}`}</Cost>
                                        </TotalWrapper>
                                    }

                                    <ButtonContainer
                                        id="cart-button"
                                    >
                                        <a href="/checkout">
                                            <PayButton
                                            // TODO: track clicks
                                            >
                                                CHECKOUT
                                            </PayButton>
                                        </a>
                                    </ButtonContainer>
                                </>
                        }
                    </CartModal>
                </CartModalMargin>
            </CartWrapper>
        </CartWindow >
    )
};