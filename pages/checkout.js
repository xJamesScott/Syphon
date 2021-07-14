// if isAuthenticated fill form in with info
// if !isAuthenticated default values

// if from is valid, allow continue & pay
// // validation condtions?

// TODO - MAKE 'SUMMARY' STICKY ON SIDE WHILE SCROLLING

import { useState, useEffect } from 'react';
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
    InputWrapper
} from '../components/CheckoutForm';
import { FormSelect } from '../components/FormStyles'
import { useForm } from 'react-hook-form';
import { countries } from '../utils/countries';
import { SubSectionTitle } from '../components/Text';
import { Button } from '../components/Buttons';
import {
    CheckoutSummary,
    CheckoutProdIMG,
    ProductTitle,
    SummaryTotals,
    TotalWrapper,
    Cost,
    ProductWrapper,
    PayButton
} from '../components/CheckoutSummary';
import ThankYouModal from '../components/ThankYouModal';
import { useSelector, useDispatch } from 'react-redux';

import { selectCart } from '../store/cart';
import axios from 'axios';

const someVal = "null" // TODO - REPLACE AND REMOVE PLACEHOLDER


const chargeObj = { // TODO - REMOVE PLACEHOLDER
    amount: 100,
    currency: "USD",
    receipt_email: "jscizzle22@gmail.com"
}

const checkout = ({ }) => {
    const [showTYModal, setTYModal] = useState(true); // TODO: SET TO FALSE AFTER TESTING
    const [cartItems, setCartItems] = useState([]);

    const cart = useSelector(selectCart);

    useEffect(() => {
        setCartItems(Object.values(cart.items));
    }, [cart.items])


    const { register, handleSubmit, formState: { errors }, getValues
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onSubmit"
    });

    const onSubmit = async () => {
        const values = getValues();
        console.log(values)
    };

    // const testObj = { // TODO - REMOVE PLACEHOLDER
    //     item1: { price: 4, quantity: 4 },
    //     item2: { price: 20, quantity: 1 },
    //     item3: { price: 100, quantity: 1 }
    // }

    // const testObj2 = Object.entries(testObj) // TODO - PLUGIN PROPER VARIABLES

    const subtotal = cartItems.reduce((sum, item) => {
        return sum += item.price * item.quantity // TODO - PLUGIN PROPER VARIABLES
    }, 0)

    // TODO - if isAuthenticated fetch user info and pass to checkout

    // for (const [productId, item] of cartItems) {
    //     console.log({ "for item": item });
    // }



    // cartItems.map((item, i) => {
    //     console.log({ "cartItems Map": item })
    // });

    const sendEmail = () => {
        axios.post('https://api.sendgrid.com/v3/mail/send');
    }

    return (
        // <div className="section-margin">
        <div
            className="checkout-page"
        >
            <CheckoutForm
                className="section-margin"
                id="checkout"
            >

                <CheckoutWrapper
                    className="checkout-panels"
                >
                    <h3>CHECKOUT</h3>
                    <h4>BILLING DETAILS</h4>
                    <InputWrapper>
                        <InputWrapper className="label-error">
                            <CheckoutInputLabel htmlForm="fname"> First Name </CheckoutInputLabel>
                            {<CheckoutFormError>Errors go here{errors.fname && errors.fname.message}</CheckoutFormError>}
                        </InputWrapper>
                        <CheckoutInput
                            name="fname"
                            id="fname"
                            defaultValue={someVal ? "yooo" : null}
                            placeholder={"Enter First Name"}
                            {...register('fname',
                                {
                                    required: { value: true, message: "Required Field" },
                                })}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <CheckoutInputLabel htmlForm="lname"> Last Name </CheckoutInputLabel>
                        {<CheckoutFormError>{errors.lname && errors.lname.message}</CheckoutFormError>}
                        <CheckoutInput
                            name="lname"
                            id="lname"
                            defaultValue={someVal ? "yooo" : null}
                            placeholder={"Enter Last Name"}
                            {...register('lname',
                                {
                                    required: { value: true, message: "Required Field" },
                                })}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <CheckoutInputLabel htmlForm="email"> Email Address </CheckoutInputLabel>
                        {<CheckoutFormError>{errors.email && errors.email.message}</CheckoutFormError>}
                        <CheckoutInput
                            name="email"
                            id="email"
                            // defaultValue={someVal ? "yooo" : null} // TODO: ENABLE WHEN NOT TESTING
                            defaultValue={"email@gmail.com"}
                            placeholder={"email@email.com"}
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
                        <CheckoutInputLabel htmlForm="phone"> Phone Number </CheckoutInputLabel>
                        {<CheckoutFormError>{errors.phone && errors.phone.message}</CheckoutFormError>}
                        <CheckoutInput
                            name="phone"
                            id="phone"
                            defaultValue={someVal ? "yooo" : null}
                            placeholder={"+1 555-555-5555"}
                            {...register('phone',
                                {
                                    required: { value: true, message: "Required Field" },
                                })}
                        />
                    </InputWrapper>
                    <h4>SHIPPING INFO</h4>
                    {/* TODO - Add Google Maps Address Validation / Search */}
                    <InputWrapper>
                        <CheckoutInputLabel htmlForm="address"> Address </CheckoutInputLabel>
                        {<CheckoutFormError>{errors.address && errors.address.message}</CheckoutFormError>}
                        <CheckoutInput
                            name="address"
                            id="address"
                            defaultValue={someVal ? "yooo" : null}
                            placeholder={"Enter Street Address"}
                            {...register('address',
                                {
                                    required: { value: true, message: "Required Field" },
                                })}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <CheckoutInputLabel htmlForm="zip"> Zip Code </CheckoutInputLabel>
                        {<CheckoutFormError>{errors.zip && errors.zip.message}</CheckoutFormError>}
                        <CheckoutInput
                            name="zip"
                            id="zip"
                            defaultValue={someVal ? "yooo" : null}
                            placeholder={"10001"}
                            {...register('zip',
                                {
                                    required: { value: true, message: "Required Field" },
                                })}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <CheckoutInputLabel htmlForm="city"> City </CheckoutInputLabel>
                        {<CheckoutFormError>{errors.city && errors.city.message}</CheckoutFormError>}
                        <CheckoutInput
                            name="city"
                            id="city"
                            defaultValue={someVal ? "yooo" : null}
                            placeholder={"10001"}
                            {...register('city',
                                {
                                    required: { value: true, message: "Required Field" },
                                })}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <CheckoutInputLabel htmlForm="state"> State </CheckoutInputLabel>
                        {<CheckoutFormError>{errors.state && errors.state.message}</CheckoutFormError>}
                        <CheckoutInput
                            name="state"
                            id="state"
                            defaultValue={someVal ? "yooo" : null}
                            placeholder={"Enter State"}
                            {...register('state',
                                {
                                    required: { value: true, message: "Required Field" },
                                })}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <CheckoutInputLabel htmlForm="Country"> Country </CheckoutInputLabel>
                        {<CheckoutFormError>{errors.Country && errors.Country.message}</CheckoutFormError>}
                        <FormSelect
                            name="Country"
                            id="Country"
                            placeholder={"Select Country"}
                            {...register('Country',
                                {
                                    required: { value: true, message: "Required Field" },
                                })}
                        >
                            <option disabled defaultValue>Select Country</option>
                            {countries.map((location, i) => { return <option key={i}>{location}</option> })}
                        </FormSelect>
                    </InputWrapper>
                    <h4>PAYMENT DETAILS</h4>
                    <h5>Payment Method</h5>
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
                    <CardInfo>
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

                {/* <div> */}

                <CheckoutSummary
                    className="checkout-panels"
                >
                    <h4>SUMMARY</h4>
                    {cartItems.map((item, i) => { // iterates through unique items TODO: CHANGE 'countries' to cart (state)
                        return (
                            <ProductWrapper
                                key={"checkoutItem" + i}
                            >
                                <CheckoutProdIMG
                                    className="item-photo"
                                    src="/media/placeholderIMG.png"
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
                    })}

                    <TotalWrapper>
                        <SummaryTotals>TOTAL</SummaryTotals>
                        <Cost>{`$ ${parseFloat(subtotal.toFixed(2)).toLocaleString('en')}`}</Cost>
                    </TotalWrapper>

                    <PayButton
                        onClick={handleSubmit(onSubmit)}
                    >CONTINUE & PAY</PayButton>

                </CheckoutSummary>
                {
                    showTYModal &&
                    <>
                        <ThankYouModal
                            // items={items}
                            setModal={(e) => setTYModal(e)} // TODO - REMOVE; FOR TESTING ONLY
                            cart={cartItems}
                            total={subtotal}
                        />
                    </>
                }
            </CheckoutForm >
            {/* </div > */}
        </div>
    )
}

export default checkout
