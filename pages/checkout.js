// if isAuthenticated fill form in with info
// if !isAuthenticated default values

// if from is valid, allow continue & pay
// // validation condtions?

// TODO - MAKE 'SUMMARY' STICKY ON SIDE WHILE SCROLLING

import { useState, useEffect } from 'react';
import { cartActions } from '../store/cart'
import { selectCart } from '../store/cart';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/router";
import {
    CheckoutForm,
    CheckoutWrapper,
    CheckoutInput,
    CheckoutSubmit,
    CheckoutFormError,
    CheckoutInputLabel,
    CheckoutSectionTitle,
    PaymentButton,
    PaymentIcon,
    CardInfo,
    InputWrapper,
    NoItems
} from '../components/CheckoutForm';
import { FormSelect } from '../components/FormStyles'
import { useForm } from 'react-hook-form';
import { countries } from '../utils/countries';
import { SubSectionTitle } from '../components/Text';
import { Button } from '../components/Buttons';
import {
    CheckoutPage,
    CheckoutSummary,
    CheckoutProdIMG,
    ProductTitle,
    SummaryTotals,
    TotalWrapper,
    Cost,
    ProductWrapper,
    PayButton
} from '../components/CheckoutSummary';
import { LoaderContainer, Loader } from '../components/Loader';
import ThankYouModal from '../components/ThankYouModal';
import { theme, mq } from '../constants/theme';
import axios from 'axios';
import Cookie from 'js-cookie';

const { colors } = theme;



const someVal = "null" // TODO - REPLACE AND REMOVE PLACEHOLDER


const chargeObj = { // TODO - REMOVE PLACEHOLDER
    amount: 100,
    currency: "USD",
    receipt_email: "jscizzle22@gmail.com"
}

const checkout = ({ }) => {
    const dispatch = useDispatch();
    const [showTYModal, setTYModal] = useState(false); // TODO: SET TO FALSE AFTER TESTING
    const [cartItems, setCartItems] = useState([]);
    const [cartStatus, setCartStatus] = useState({});
    const [counting, setCounting] = useState(true);
    const [itemCount, setItemCount] = useState();

    const {
        isLoading = true
    } = cartStatus;

    const cart = useSelector(selectCart);

    useEffect(() => {
        dispatch(cartActions.setCartLoading({}));
        setCartItems(Object.values(cart.items));
        setCartStatus(cart);
        dispatch(cartActions.setCartFinishLoading({}));
    }, [cart.items]);

    const { register, handleSubmit, formState: { errors }, getValues
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onChange"
    });

    // const addressFields = getValues(["address", "city", "state", "zip"]);
    // const { address, city, state, zip } = addressFields;
    const fullAddress = `${getValues("address")} ${getValues("city")}, ${getValues("state")} ${getValues("zip")}`;

    // console.log(fullAddress)

    const subtotal = cartItems.reduce((sum, item) => {
        return sum += item.price * item.quantity // TODO - PLUGIN PROPER VARIABLES
    }, 0);

    const rawItemCount = cartItems.reduce((sum, item) => {
        return sum += item.quantity // TODO - PLUGIN PROPER VARIABLES
    }, 0);

    useEffect(() => {
        setItemCount(rawItemCount);
        setCounting(false);
    }, [rawItemCount, cartItems]);



    // () => {
    //     setCounting(false);
    // }

    const emailData = {
        numItems: cartItems.length,
        address: fullAddress,
        total: subtotal
    };



    // console.log({ fullAddress: getValues(["address", "city", "state", "zip"]) })

    // const onSubmit = async (e) => {
    //     // e.preventDefault();
    //     alert("yoooo!")
    //     // setTYModal(true);
    //     // sendEmail();
    // };

    const [emailProcessing, setEmailProcessing] = useState(false);
    const [submissionError, setSubmissionError] = useState(false);
    const [completeTransaction, setCompleteTransation] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        handleSubmit(async () => {
            setEmailProcessing(true);
            setCompleteTransation(true);
            try {
                await sendEmail();
                dispatch(cartActions.directCartEdit({ inc: "clear" }));
                dispatch(cartActions.setCartFinishLoading({}));
                setEmailProcessing(false);
                setTYModal(true);
            } catch (error) {
                setEmailProcessing(false);
                setSubmissionError(true);
            }
        })(e);
    };

    const sendEmail = async () => {
        // axios.post('https://api.sendgrid.com/v3/mail/send');
        axios.post('/api/sendEmail', emailData);
    };

    const router = useRouter();



    // const testObj = { // TODO - REMOVE PLACEHOLDER
    //     item1: { price: 4, quantity: 4 },
    //     item2: { price: 20, quantity: 1 },
    //     item3: { price: 100, quantity: 1 }
    // }

    // const testObj2 = Object.entries(testObj) // TODO - PLUGIN PROPER VARIABLES



    // TODO - if isAuthenticated fetch user info and pass to checkout

    // for (const [productId, item] of cartItems) {
    //     console.log({ "for item": item });
    // }

    // cartItems.map((item, i) => {
    //     console.log({ "cartItems Map": item })
    // });

    // useEffect(() => {
    //     if (typeof window !== undefined && itemCount < 1 && !isLoading && !counting) {
    //         router.push("/");
    //     }
    // }, [isLoading, itemCount]);

    // console.log({ isLoading: isLoading, itemCount: itemCount, counting: counting })

    return (

        itemCount < 1 && !completeTransaction
            ? // if cart empty
            <NoItems>
                <h3>CART EMPTY.</h3>
                <a href="/">
                    <PayButton>SHOP</PayButton>
                </a>
            </NoItems>
            :
            // emailProcessing // if processing (form submitted)
            //     ?
            //     <LoaderContainer>
            //         <div>
            //             <Loader
            //                 speed=".75s"
            //                 emptyColor={colors.main}
            //             />
            //             <h3 className="load-text">Processing Your Order...</h3>
            //         </div>

            //     </LoaderContainer>
            //     :


            <CheckoutPage
                className="checkout-page"

            >
                <div
                    style={{ overflow: "hidden", height: "100%" }}
                    className={completeTransaction ? "ty-bg complete" : " ty-bg not-complete"}
                >
                    <img
                        // className="ty-bg"
                        src="/confetti.png"
                    />
                </div>
                <div
                    className={!completeTransaction ? "complete" : "not-complete"}
                >
                    <CheckoutForm
                        className="section-margin"
                        id="checkout"
                    >
                        {submissionError ?
                            <h3
                                className="submit-error"
                            >
                                Error processing your order :(
                                <br />
                                Please try again shortly, or contact support</h3>
                            : null
                        }
                        <div className="panel-container checkout-panel">
                            <CheckoutWrapper
                                className="checkout-panels"
                            >
                                <h3>CHECKOUT</h3>
                                <h4 className="section-title">BILLING DETAILS</h4>
                                <InputWrapper>
                                    <InputWrapper className="label-error">
                                        <CheckoutInputLabel htmlForm="fname"> First Name </CheckoutInputLabel>
                                        {<CheckoutFormError>{errors.fname && errors.fname.message}</CheckoutFormError>}
                                    </InputWrapper>
                                    <CheckoutInput
                                        name="fname"
                                        id="fname"
                                        defaultValue={someVal ? "yooo" : null}
                                        placeholder={"First"}
                                        className={errors.fname ? "error" : null}
                                        {...register('fname',
                                            {
                                                required: { value: true, message: "Required Field" },
                                            })}
                                    />
                                </InputWrapper>
                                <InputWrapper >
                                    <InputWrapper className="label-error">
                                        <CheckoutInputLabel htmlForm="lname"> Last Name </CheckoutInputLabel>
                                        {<CheckoutFormError>{errors.lname && errors.lname.message}</CheckoutFormError>}
                                    </InputWrapper>
                                    <CheckoutInput
                                        name="lname"
                                        id="lname"
                                        defaultValue={someVal ? "yooo" : null}
                                        placeholder={"Last"}
                                        className={errors.lname ? "error" : null}
                                        {...register('lname',
                                            {
                                                required: { value: true, message: "Required Field" },
                                            })}
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <InputWrapper className="label-error">
                                        <CheckoutInputLabel htmlForm="email"> Email Address </CheckoutInputLabel>
                                        {<CheckoutFormError>{errors.email && errors.email.message}</CheckoutFormError>}
                                    </InputWrapper>
                                    <CheckoutInput
                                        name="email"
                                        id="email"
                                        // defaultValue={someVal ? "yooo" : null} // TODO: ENABLE WHEN NOT TESTING
                                        defaultValue={someVal ? "email@gmail.com" : null}
                                        placeholder={"email@email.com"}
                                        className={errors.email ? "error" : null}
                                        {...register('email',
                                            {
                                                required: { value: true, message: "Required Field" },
                                                pattern: {
                                                    value: /\S+@\S+\.\S+/,
                                                    message: "Please enter a valid email."
                                                }
                                            })}
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <InputWrapper className="label-error">
                                        <CheckoutInputLabel htmlForm="phone"> Phone Number </CheckoutInputLabel>
                                        {<CheckoutFormError>{errors.phone && errors.phone.message}</CheckoutFormError>}
                                    </InputWrapper>
                                    <CheckoutInput
                                        name="phone"
                                        id="phone"
                                        defaultValue={someVal ? "yooo" : null}
                                        placeholder={"+1 555-555-5555"}
                                        className={errors.phone ? "error" : null}
                                        {...register('phone',
                                            {
                                                required: { value: true, message: "Required Field" },
                                            })}
                                    />
                                </InputWrapper>
                                <h4 className="section-title">SHIPPING INFO</h4>
                                {/* TODO - Add Google Maps Address Validation / Search */}
                                <InputWrapper>
                                    <InputWrapper className="label-error">
                                        <CheckoutInputLabel htmlForm="address"> Address </CheckoutInputLabel>
                                        {<CheckoutFormError>{errors.address && errors.address.message}</CheckoutFormError>}
                                    </InputWrapper>
                                    <CheckoutInput
                                        name="address"
                                        id="address"
                                        defaultValue={someVal ? "yooo" : null}
                                        placeholder={"Enter Street Address"}
                                        className={errors.address ? "error" : null}
                                        {...register('address',
                                            {
                                                required: { value: true, message: "Required Field" },
                                            })}
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <InputWrapper className="label-error">
                                        <CheckoutInputLabel htmlForm="zip"> Zip Code </CheckoutInputLabel>
                                        {<CheckoutFormError>{errors.zip && errors.zip.message}</CheckoutFormError>}
                                    </InputWrapper>
                                    <CheckoutInput
                                        name="zip"
                                        id="zip"
                                        defaultValue={someVal ? "yooo" : null}
                                        placeholder={"10001"}
                                        className={errors.zip ? "error" : null}
                                        {...register('zip',
                                            {
                                                required: { value: true, message: "Required Field" },
                                            })}
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <InputWrapper className="label-error">
                                        <CheckoutInputLabel htmlForm="city"> City </CheckoutInputLabel>
                                        {<CheckoutFormError>{errors.city && errors.city.message}</CheckoutFormError>}
                                    </InputWrapper>
                                    <CheckoutInput
                                        name="city"
                                        id="city"
                                        defaultValue={someVal ? "yooo" : null}
                                        placeholder={"10001"}
                                        className={errors.city ? "error" : null}
                                        {...register('city',
                                            {
                                                required: { value: true, message: "Required Field" },
                                            })}
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <InputWrapper className="label-error">
                                        <CheckoutInputLabel htmlForm="state"> State </CheckoutInputLabel>
                                        {<CheckoutFormError>{errors.state && errors.state.message}</CheckoutFormError>}
                                    </InputWrapper>
                                    <CheckoutInput
                                        name="state"
                                        id="state"
                                        defaultValue={someVal ? "yooo" : null}
                                        placeholder={"Enter State"}
                                        className={errors.state ? "error" : null}
                                        {...register('state',
                                            {
                                                required: { value: true, message: "Required Field" },
                                            })}
                                    />
                                </InputWrapper>
                                <InputWrapper>
                                    <InputWrapper className="label-error">
                                        <CheckoutInputLabel htmlForm="Country"> Country </CheckoutInputLabel>
                                        {<CheckoutFormError>{errors.Country && errors.Country.message}</CheckoutFormError>}
                                    </InputWrapper>
                                    <FormSelect
                                        name="Country"
                                        id="Country"
                                        defaultValue=""
                                        className={errors.Country ? "error" : null}
                                        {...register('Country',
                                            {
                                                required: { value: true, message: "Required Field" },
                                            })}
                                    >
                                        <option hidden className="option" >Select Country</option>
                                        {countries.map((location, i) => { return <option key={i}>{location}</option> })}
                                    </FormSelect>
                                </InputWrapper>
                                <h4 className="section-title payment-details">PAYMENT DETAILS</h4>
                                <h5 className="payment-method">Payment Method</h5>
                                {/* <div className="section-wrapper"> */}
                                {/* PAYMENT TYPES */}
                                {/*
                                {TODO - INTEGRATE GOOGLE PAY}
                                <PaymentButton onClick={null} htmlForm="gpay">
                                    <CheckoutInput type="radio" id="gpay" name="payment" value="gpay" />
                                    <PaymentIcon
                                        src="/media/placeholderIMG.png"
                                        height={50}
                                        width={50}
                                    />
                                </PaymentButton>
                               // TODO - INTEGRATE APPLE PAY
                                <PaymentButton onClick={null} htmlForm="applepay">
                                    <CheckoutInput type="radio" id="applepay" name="payment" value="applepay" />
                                    <PaymentIcon
                                        src="/media/placeholderIMG.png"
                                        height={50}
                                        width={50}
                                    />
                                </PaymentButton> */}
                                {/* <PaymentButton onClick={null} htmlForm="credit">
                                <CheckoutInput type="radio" id="credit" name="payment" value="credit" />
                                <CheckoutInputLabel htmlForm="credit"> Credit or Debit </CheckoutInputLabel>
                                <PaymentIcon
                                    src="/media/placeholderIMG.png"
                                    height={50}
                                    width={50}
                                />
                            </PaymentButton> */}
                                {/* if Credit selected, show card inputs below*/}
                                <CardInfo
                                    className="card-info"
                                >
                                    <InputWrapper
                                        className="card-details"
                                    >
                                        <CheckoutInputLabel htmlForm="number"> Card Number </CheckoutInputLabel>
                                        <CheckoutInput
                                            id="number"
                                            name="number"
                                            placeholder="0000 0000 0000 0000"
                                        />
                                    </InputWrapper>
                                    <InputWrapper
                                        className="card-details quarter"
                                    >
                                        <CheckoutInputLabel htmlForm="expiration"> Expiration </CheckoutInputLabel>
                                        <CheckoutInput
                                            id="expiration"
                                            name="expiration"
                                            placeholder="MM / YY"
                                        />
                                    </InputWrapper>
                                    <InputWrapper
                                        className="card-details quarter"
                                    >
                                        <CheckoutInputLabel htmlForm="number"> Security Code </CheckoutInputLabel>
                                        <CheckoutInput
                                            id="security-code"
                                            name="security-code"
                                            placeholder="CVC"
                                        />
                                    </InputWrapper>
                                </CardInfo>
                                {/* </div> */}
                            </CheckoutWrapper>
                        </div>
                        {/* <div> */}
                        <div className="panel-container summary">
                            <CheckoutSummary
                                className="checkout-panels"
                            >
                                <h4>SUMMARY</h4>
                                {cartItems.map((item, i) => { // iterates through unique items TODO: CHANGE 'countries' to cart (state)
                                    if (item.quantity > 0) {
                                        return (
                                            <ProductWrapper
                                                key={"checkoutItem" + i}
                                            >
                                                <CheckoutProdIMG
                                                    className="round-border"
                                                    src={`/products/${item.productId}/desktop/thumbnail.jpg`}
                                                    width={64}
                                                    height={64}
                                                />
                                                <div className="item-info">
                                                    <h3>
                                                        {item.name}
                                                    </h3>
                                                    <h4>
                                                        {`$ ${item.price}`}
                                                    </h4>
                                                </div>
                                                <p>
                                                    {`x${item.quantity}`}
                                                </p>
                                            </ProductWrapper>
                                        )
                                    } else {
                                        return null
                                    }
                                })};
                                <TotalWrapper>
                                    <SummaryTotals className="checkout-summary">TOTAL</SummaryTotals>
                                    <Cost>{`$ ${parseFloat(subtotal.toFixed(2)).toLocaleString('en')}`}</Cost>
                                </TotalWrapper>
                                <PayButton
                                    onClick={onSubmit}
                                    className={emailProcessing ? "processing" : ""}
                                >
                                    {
                                        !emailProcessing ?
                                            "CONTINUE & PAY"
                                            :
                                            <span>
                                                <Loader
                                                    className="button"
                                                    speed=".6s"
                                                />
                                                Processing
                                            </span>
                                    }
                                </PayButton>
                            </CheckoutSummary>
                        </div>
                    </CheckoutForm >

                </div>

               

                {
                    showTYModal &&
                    <>

                        <ThankYouModal
                            setModal={(e) => setTYModal(e)} // TODO - REMOVE; FOR TESTING ONLY
                            cart={cartItems}
                            total={subtotal}
                            setTransaction={setCompleteTransation}
                        />
                    </>
                }
                {/* </div > */}


            </CheckoutPage>
    )
}

export default checkout
