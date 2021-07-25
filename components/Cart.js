import styled from 'styled-components';
import { theme, mq } from '../constants/theme';
import {
    CheckoutSummary,
    CheckoutProdIMG,
    ProductWrapper,
    TotalWrapper,
    SummaryTotals,
    Cost,
    ProductTitle,
    ProductPrice,
    TextWrapper,
    PayButton,
    ButtonContainer
} from './CheckoutSummary';

import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, yo } from '../store/cart/actions';
import { useForm, useFormState } from 'react-hook-form';
import { directCartEdit } from '../utils/dataUtils';
import { cartActions } from '../store/cart';
import Cookie from 'js-cookie';
import { motion } from "framer-motion";

const { colors } = theme;

const CartWindow = styled.div`
    position: absolute;
    position: relative;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity .3s ease;
    z-index: 1;
    /* pointer-events: none; */
    
    &.visible {
        opacity: 100;
        transition: opacity .3s ease;
        /* pointer-events: unset; */
    }
`;

export const CartWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(128, 128, 128, 0.49);  
    position: fixed;
    pointer-events: none;
    /* width: 0;

    .visible {
        width: 100%;
    } */
`;

const CartModalMargin = styled.div`
    position: relative;
`;


const CartModal = styled.div`
    position: absolute;
    right: 0;
    width: 38rem;
    background-color: white;
    padding: 3rem;
    pointer-events: auto !important;
    display: flex ;
    flex-direction: column;
    justify-content: center;
    border-radius: .5rem;
    margin-top: 2rem;
    /* cursor: pointer; */
`;

const TitleLine = styled.h5`
`;

const CartTitle = styled.h2`

`;

const Quantity = styled.div`
    justify-self: end;
    flex: 0 1 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25%;
    background: ${colors.accent3};
    padding: 0;
    /* background: magenta; */
    width: 9.6rem;
    height: 3.2rem;
    font-weight: bold;
    position: relative;
`;


const IncrementQTY = styled.p`
    
    /* color: ${colors.mainText}; */
    
    opacity: 50%;

    :hover {
        cursor: pointer;
    }
`;

const DeleteItem = styled.svg`
    position: absolute;
    /* top: 0; */
    right: -33%;
    height: 50%;
    opacity: 0;
    transition: all .25s ease;
    
    

    &.prod-hovered {
        opacity: 50%;
        transition: all .25s ease;

        > * > * > *{
        :hover {
            fill: red;
        }}
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
        // cartArray,
        // isLoading
    }
) {
    const cartState = useSelector((state) => state.cart);
    const {
        isLoading,
        items: cart
    } = cartState

    const testitem7 = Object.entries({
        testitem7: {
            name: "Test items",
            productId: "testitem7",
            type: "headphones",
            price: 100,
            quantity: 1
        }
    });

    const cartArrayObj = Object.entries(cart);

    const [cartArray, setCartArray] = useState([]);

    useEffect(() => {
        setCartArray(cartArrayObj)
    }, [isLoading, cart])

    const subtotal = cartArray.reduce((sum, item) => {
        return sum += item[1].price * item[1].quantity;
    }, 0)

    const { register, handleSubmit, control, formState: { errors }
    } = useForm({
        // mode: "onSubmit",
        // reValidateMode: "onSubmit"
        defaultValues: {
            testitem7: "yo",
            test: ""
        }
    });

    const prodVals = {

    }


    // console.log({ "prodVals": prodVals })

    const [quant, setQuant] = useState(prodVals);

    // console.log({ quant: quant })
    // const editQuantity = () => {

    // }

    const dispatch = useDispatch();

    // const ref = useRef({ bro: "bro" })

    // console.log({ ref: ref })

    const onSubmit = (data) => console.log(data);


    const { touchedFields, dirtyFields } = useForm({
        control
    });

    // console.log({ formData: formData })
    // console.log({ touchedFields: touchedFields }, touchedFields, dirtyFields)
    // console.log({ "quant val": quant.test })
    // console.log({ "quant": quant })

    // console.log({ "object entries cart": cartArray })

    // const testItems = () => {
    //     for (const [productId, item] of cartArray) { // iterates through unique items TODO: select cart from state
    //         console.log("cart items")
    //     }
    // }


    // return (
    //     <form form onSubmit={handleSubmit(onSubmit)}>
    //         <input
    //             defaultValue="yoooo!"
    //             // {...register("test")}
    //             ref={ref}
    //         />
    //     </form>
    // )

    // const setItemTest = Cookie.set("itemTest", 0)

    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                hideCart()
                window.removeEventListener('click', handleClick);
            }
        };

        if (visible) {
            window.addEventListener("click", handleClick);
        }
    }, [visible]);

    const ref = useRef();

    const [prodHover, setProdHover] = useState({});

    console.log({ prodHover: prodHover })

    return (
        !isLoading &&
        <CartWindow
            className={visible ? "visible" : ""}
        >


            <CartWrapper
                className="modal"
            >
                <motion.div
                    animate={{ scale: visible ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ originX: .9 }}
                >
                    <CartModalMargin
                        className="section-margin"
                    >
                        {/* <form form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("test")}
                        />
                    </form> */}
                        {/* <form onSubmit={handleSubmit(onSubmit)} > */}
                        <CartModal
                            className="modal"
                            ref={ref}
                        >
                            {
                                totalItems < 1 ? // TODO: CHANGE AFTER TESTING - totalItems < 1 ? 
                                    <NoItems>
                                        <div>
                                            NO ITEMS IN CART
                                        </div>
                                    </NoItems>
                                    :
                                    <>
                                        <TitleLine>
                                            CART ({totalItems})
                                        </TitleLine>
                                        {
                                            cartArray.map((item, i) => {
                                                const current = item[1]
                                                return (
                                                    < ProductWrapper
                                                        key={"cartItem" + i}
                                                        onMouseEnter={() => setProdHover(true)}
                                                        onMouseLeave={() => setProdHover(false)}
                                                    >

                                                        <CheckoutProdIMG src="/media/placeholderIMG.png"
                                                            width={64}
                                                            height={64}
                                                            fill="magenta"

                                                        />
                                                        <TextWrapper

                                                            onClick={() => { console.log("yoooo!") }}
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
                                                            {/* <motion.div
                                                                animate={{
                                                                    opacity: prodHover.cartItem[i] ? 1 : 0
                                                                }}
                                                                transition={{ duration: 0.25 }}
                                                            > */}

                                                            <DeleteItem
                                                                className={prodHover ? "prod-hovered" : ""}
                                                            >
                                                                {/* <svg > */}
                                                                <svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={0} y={0} width={15} height={15}>
                                                                        <rect width={15} height={15} fill="url(#pattern0)" />
                                                                    </mask>
                                                                    <g mask="url(#mask0)">
                                                                        <rect x={-1} y={1} width={18} height={18} fill="#F51A1A" />
                                                                    </g>
                                                                    <defs>
                                                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                                                                            <use xlinkHref="#image0" transform="scale(0.0416667)" />
                                                                        </pattern>
                                                                        <image id="image0" width={24} height={24} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAZUlEQVRIiWNgGCmggYGB4T8a7iBGIyMWsf8UOgbFTCYKDSMbwIKBYvU09wGxFqC7kGgfDhofjFowasGoBRQAFiLVoRfr2Ip5rGDAgugplEavxXBhZD1EAT8GBoYnJFjwBKpnGAIAUcAmPA1WYN0AAAAASUVORK5CYII=" />
                                                                    </defs>
                                                                </svg>


                                                                {/* </svg> */}
                                                            </DeleteItem>
                                                            {/* </motion.div> */}
                                                        </Quantity>
                                                    </ProductWrapper>
                                                )
                                            })}



                                        {/* {() => {
                            for (const [productId, item] of cartArray) { // iterates through unique items TODO: select cart from state
                                console.log("cart items")
                                // return (
                                //     <ProductWrapper>
                                //         <CheckoutProdIMG src="/media/placeholderIMG.png"
                                //             width={400}
                                //             height={400}
                                //             style={{ border: "1px solid black" }}
                                //             fill="magenta"
                                //         />
                                //         <h3>
                                //             {item.name}
                                //         </h3>
                                //         <h4>
                                //             {`$ ${item.price}`}
                                //         </h4>
                                //         <Quantity>
                                //             <IncrementQTY>-</IncrementQTY>
                                //             <p>
                                //                 {`x${item.quantity}`}
                                //             </p>
                                //             <IncrementQTY>+</IncrementQTY>
                                //         </Quantity>
                                //     </ProductWrapper>
                                // )
                            }
                        }} */}
                                        {
                                            !isLoading &&
                                            <TotalWrapper>
                                                <SummaryTotals>TOTAL</SummaryTotals>
                                                <Cost>{`$ ${parseFloat(subtotal).toFixed(2)}`}</Cost>
                                            </TotalWrapper>
                                        }

                                        <ButtonContainer>
                                            <a href="/checkout">
                                                <PayButton
                                                // onClick={handleSubmit(onSubmit)}
                                                >
                                                    CHECKOUT
                                                </PayButton>
                                            </a>
                                        </ButtonContainer>
                                    </>
                            }
                        </CartModal>
                        {/* </form> */}
                    </CartModalMargin>
                </motion.div>
            </CartWrapper>

        </CartWindow >
    )
};