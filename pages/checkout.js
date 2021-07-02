// if isAuthenticated fill form in with info
// if !isAuthenticated default values

// if from is valid, allow continue & pay
// // validation condtions?

// TODO - MAKE 'SUMMARY' STICKY ON SIDE WHILE SCROLLING

import { useState } from 'react';
import {
    CheckoutForm,
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

const someVal = "null" // TODO - REPLACE AND REMOVE PLACEHOLDER


const chargeObj = { // TODO - REMOVE PLACEHOLDER
    amount: 100,
    currency: "USD",
    receipt_email: "jscizzle22@gmail.com"
}

const checkout = ({ }) => {
    const [showTYModal, setTYModal] = useState(false);
    const cart = useSelector(selectCart);
    // const cartItems = Object.entries(cart.items)
    const cartItems = Object.entries(cart)

    const { register, handleSubmit, formState: { errors }
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onSubmit"
    });

    const onSubmit = async () => {

    };

    const testObj = { // TODO - REMOVE PLACEHOLDER
        item1: { price: 4, quantity: 4 },
        item2: { price: 20, quantity: 1 },
        item3: { price: 100, quantity: 1 }
    }

    const testObj2 = Object.entries(testObj) // TODO - REMOVE PLACEHOLDER

    const subtotal = testObj2.reduce((sum, item) => {
        return sum += item[1].price * item[1].quantity // TODO - REMOVE PLACEHOLDER
    }, 0)

    // TODO - if isAuthenticated fetch user info and pass to checkout

    return (
        <div className="section-margin">

            <h3>CHECKOUT</h3>

            <CheckoutForm>

                <h4>BILLING DETAILS</h4>

                <CheckoutInputLabel for="fname"> First Name </CheckoutInputLabel>
                {<CheckoutFormError>Errors go here{errors.fname && errors.fname.message}</CheckoutFormError>}
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

                <CheckoutInputLabel for="lname"> Last Name </CheckoutInputLabel>
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

                <CheckoutInputLabel for="email"> Email Address </CheckoutInputLabel>
                {<CheckoutFormError>{errors.email && errors.email.message}</CheckoutFormError>}
                <CheckoutInput
                    name="email"
                    id="email"
                    defaultValue={someVal ? "yooo" : null}
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

                <CheckoutInputLabel for="phone"> Phone Number </CheckoutInputLabel>
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

                <h4>BILLING DETAILS</h4>

                {/* TODO - Add Google Maps Address Validation / Search */}

                <CheckoutInputLabel for="address"> Address </CheckoutInputLabel>
                {<CheckoutFormError>{errors.address && errors.address.message}</CheckoutFormError>}
                <CheckoutInput
                    name="address"
                    id="address"
                    defaultValue={someVal ? "yooo" : null}
                    placeholder={"+1 555-555-5555"}
                    {...register('address',
                        {
                            required: { value: true, message: "Required Field" },
                        })}
                />

                <CheckoutInputLabel for="zip"> Zip Code </CheckoutInputLabel>
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

                <CheckoutInputLabel for="city"> City </CheckoutInputLabel>
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

                <CheckoutInputLabel for="state"> State </CheckoutInputLabel>
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

                <CheckoutInputLabel for="Country"> Country </CheckoutInputLabel>
                {<CheckoutFormError>{errors.Country && errors.Country.message}</CheckoutFormError>}
                <FormSelect
                    name="Country"
                    id="Country"
                    defaultValue={someVal ? "yooo" : null}
                    placeholder={"Select Country"}
                    {...register('Country',
                        {
                            required: { value: true, message: "Required Field" },
                        })}
                >
                    {countries.map((location) => { return <option>{location}</option> })}
                </FormSelect>

                <div className="section-wrapper">
                    {/* 
                    {TODO - INTEGRATE GOOGLE PAY}

                    <PaymentButton onClick={null} for="gpay">
                        <CheckoutInput type="radio" id="gpay" name="payment" value="gpay" />
                        <PaymentIcon
                            src="/media/placeholderIMG.png"
                            height={50}
                            width={50}
                        />
                    </PaymentButton>

                   // TODO - INTEGRATE APPLE PAY

                    <PaymentButton onClick={null} for="applepay">
                        <CheckoutInput type="radio" id="applepay" name="payment" value="applepay" />
                        <PaymentIcon
                            src="/media/placeholderIMG.png"
                            height={50}
                            width={50}
                        />
                    </PaymentButton> */}

                    <PaymentButton onClick={null} for="credit">
                        <CheckoutInput type="radio" id="credit" name="payment" value="credit" />
                        <CheckoutInputLabel for="credit"> Credit or Debit </CheckoutInputLabel>
                        <PaymentIcon
                            src="/media/placeholderIMG.png"
                            height={50}
                            width={50}
                        />
                    </PaymentButton>

                    {/* if Credit selected, show card inputs below*/}

                    <CardInfo>

                        <InputWrapper>
                            <CheckoutInputLabel for="number"> Card Number </CheckoutInputLabel>
                            <CheckoutInput
                                id="number"
                                name="number"
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <CheckoutInputLabel for="expiration"> Expiration </CheckoutInputLabel>
                            <CheckoutInput
                                id="expiration"
                                name="expiration"
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <CheckoutInputLabel for="number"> Security Code </CheckoutInputLabel>
                            <CheckoutInput
                                id="security-code"
                                name="security-code"
                            />
                        </InputWrapper>
                    </CardInfo>
                </div>

                <div>
                    <h4>SUMMARY</h4>
                    <CheckoutSummary>
                        <CheckoutProdIMG src="/media/placeholderIMG.png"
                            width={400}
                            height={400}
                            style={{ border: "1px solid black" }}
                            fill="magenta"
                        />
                        {() => {
                            for (const [productId, item] of Object.entries(countries)) { // iterates through unique items
                                return (
                                    <ProductWrapper>
                                        <CheckoutProdIMG src="/media/placeholderIMG.png"
                                            width={400}
                                            height={400}
                                            style={{ border: "1px solid black" }}
                                            fill="magenta"
                                        />
                                        <h3>
                                            {item.name}
                                        </h3>
                                        <h4>
                                            {`$ ${item.price}`}
                                        </h4>
                                        <p>
                                            {`x${item.quantity}`}
                                        </p>
                                    </ProductWrapper>
                                )
                            }
                        }}

                        <TotalWrapper>
                            <SummaryTotals>TOTAL</SummaryTotals>
                            <Cost>{`$ ${subtotal}`}</Cost>
                        </TotalWrapper>

                        <PayButton
                            onClick={handleSubmit()}
                        >CONTINUE & PAY</PayButton>

                    </CheckoutSummary>
                </div>
            </CheckoutForm >

            <Button
                onClick={() => setTYModal(true)}

            >SHOW MODAL</Button>

            {
                showTYModal &&
                <>
                    <ThankYouModal
                        // items={items}
                        setModal={(e) => setTYModal(e)} // TODO - REMOVE; FOR TESTING ONLY
                    />

                </>

            }
        </div >
    )
}

export default checkout
