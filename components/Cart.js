import styled from 'styled-components';
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
    PayButton
} from './CheckoutSummary';

import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, yo } from '../store/cart/actions';
import { useForm, useFormState } from 'react-hook-form';
import { directCartEdit } from '../utils/dataUtils';
import { cartActions } from '../store/cart';
import Cookie from 'js-cookie';

const CartWindow = styled.div`
    position: absolute;
    position: relative;
    top: 0;
    left: 0;
`;

export const CartWrapper = styled.div`
   height: 400px;
    width: 100vw;
    background-color: rgba(128, 128, 128, 0.49);  
    position: absolute;

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
    /* cursor: pointer; */

`;

const TitleLine = styled.div`
`;

const CartTitle = styled.h2`

`;

const Quantity = styled.div`
    display: flex;
    justify-self: end;
    gap: 25%;
`;

const IncrementQTY = styled.p`
    :hover {
        cursor: pointer;
    }
`;

export default function Cart() {
    const cartState = useSelector((state) => state.cart);
    const {
        isLoading,
        items: cart
    } = cartState

    // console.log({ "isLoading": isLoading })
    // console.log({ "Cart cart state": cart })
    const testitem7 = Object.entries({
        testitem7: {
            name: "Test items",
            productId: "testitem7",
            type: "headphones",
            price: 100,
            quantity: 1
        }
    })


    // const cartArrayObj = cart && Object.entries(cart)
    const cartArrayObj = Object.entries(cart)
    const [cartArray, setCartArray] = useState([]);

    useEffect(() => {
        setCartArray(cartArrayObj)
    }, [isLoading, cart])

    const subtotal = cartArray.reduce((sum, item) => {
        return sum += item[1].price * item[1].quantity
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

    const setItemTest = Cookie.set("itemTest", 0)

    return (
        !isLoading && <CartWindow>

            {/* state quantity: {cartArrayObj[0][1].quantity} */}
            {/* quant: {JSON.stringify(quant)} */}
            {/* quant: {quant?.testitem8?.qty} */}
            <CartWrapper>
                <button onClick={() => setItemTest}>SET COOKIE ITEM TEST</button>
                <CartModalMargin
                    className="section-margin"
                >
                    <form form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("test")}
                        />
                    </form>
                    {/* <form onSubmit={handleSubmit(onSubmit)} > */}
                    <CartModal>
                        <TitleLine>
                        </TitleLine>

                        {
                            // !isLoading && 
                            cartArray.map((item, i) => {
                                // console.log({ "title item": item[1].productId });
                                // setQuant({ [item[1].productId]: { qty: item[1].quantity } })
                                // setQuant({ [item[0]]: "yooo" });
                                // Object.assign(prodVals, { [item[1].productId]: { qty: item[1].quantity } });
                                // setQuant(prodVals);
                                const current = item[1]
                                return (

                                    < ProductWrapper >

                                        <CheckoutProdIMG src="/media/placeholderIMG.png"
                                            width={25}
                                            height={25}
                                            style={{ border: "1px solid black" }}
                                            fill="magenta"
                                        />
                                        <TextWrapper>
                                            <h3>
                                                {item[1].name}
                                            </h3>
                                            <h4>
                                                {`$ ${item[1].price}`}
                                            </h4>
                                        </TextWrapper>
                                        <Quantity>
                                            <IncrementQTY
                                                // onClick={() => setQuant({ [item[1].productId]: { qty: [item[1].quantity] + 1 } })}
                                                // onClick={() => {
                                                //     directCartEdit({
                                                //         name: item[1].name,
                                                //         productId: item[1].productId,
                                                //         type: item[1].type,
                                                //         price: item[1].price,
                                                //         quantity: item[1].quantity - 1
                                                //     }, item[1].productId
                                                //     );
                                                //     dispatch(cartActions.getCartCookie({}))
                                                // }}
                                                onClick={() => {
                                                    dispatch(cartActions.directCartEdit({
                                                        product: {
                                                            name: current.name,
                                                            productId: current.productId,
                                                            type: current.type,
                                                            price: current.price,
                                                            quantity: current.quantity
                                                        }
                                                    }
                                                    ));
                                                    dispatch(cartActions.setCartFinishLoading({}));

                                                }}
                                            // onClick={(e) => console.log({ increment: e.target })}
                                            // on click send: name, prodId, qty, price
                                            >-</IncrementQTY>
                                            <p key={item[1].productId} id={item[1].productId}>
                                                {/* {quant?.[item[1].productId]?.qty}  */}
                                                X {item[1].quantity}
                                            </p>
                                            <input
                                                // defaultValue={10}
                                                // value={quant && quant?.item[1]?.qty}
                                                id={item[1].productId}
                                            // {...register(item[1].productId)}
                                            />
                                            <IncrementQTY
                                                onClick={() => {
                                                    directCartEdit({
                                                        name: item[1].name,
                                                        productId: item[1].productId,
                                                        type: item[1].type,
                                                        price: item[1].price,
                                                        quantity: item[1].quantity + 1
                                                    }, item[1].productId
                                                    );
                                                    dispatch(cartActions.getCartCookie({}))
                                                }}
                                            >
                                                +
                                            </IncrementQTY>
                                        </Quantity>
                                    </ProductWrapper>
                                )
                            })
                        }

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
                                <Cost>{`$ ${subtotal}`}</Cost>
                            </TotalWrapper>
                        }
                        <PayButton
                            onClick={handleSubmit(onSubmit)}
                        >
                            CHECKOUT
                        </PayButton>
                    </CartModal>
                    {/* </form> */}
                </CartModalMargin>
            </CartWrapper>
        </CartWindow >
    )
};