// if isAuthenticated fill form in with info
// if !isAuthenticated default values

// if from is valid, allow continue & pay
// // validation condtions?

// TODO - MAKE 'SUMMARY' STICKY ON SIDE WHILE SCROLLING

import {
    CheckoutForm,
    CheckoutInput,
    CheckoutSubmit,
    CheckoutFormError,
    CheckoutInputLabel,
    CheckoutSectionTitle
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
    SummaryTotals
} from '../components/CheckoutSummary';
// import placeholderIMG from '../public/favicon.ico'

import Image from 'next/image';

const someVal = "null"

const checkout = () => {

    const { register, handleSubmit, formState: { errors }
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onSubmit"
    });

    const testObj = {
        item1: { price: 4 },
        item2: { price: 20 },
        item3: { price: 10 }
    }

    // console.log({ testObj: Object.entries(testObj) })

    const testObj2 = Object.entries(testObj)
    const total = () => {
        // for (let i = 0; i < testObj2.length; i++) {

        //     console.log({ "testObj!": testObj2[i][1].price++ })
        // }

        // console.log({ "testObj!": "fin!" })
        // for (const [productId, item] of Object.entries(testObj)) {
        //     console.log({ "testObj!": item.price++ })
        // }
        testObj2.reduce((sum, b) => {
            // if (!a[b]) {
            //     a[b] = 0
            // }

            // console.log({ "testObj! A": a })
            // console.log({ "testObj! B": b })
            console.log({ "testObj! add": sum + b[1].price })

            // console.log({ "testObj! A": a[1].price })
            // console.log({ "testObj! B": b[1].price })

            // console.log({ "testObj! A": a[1].price, b: + b[1].price })
            // console.log({ "testObj! B": b[1].price++ })
            // console.log({ "testObj! add": a[1] + b[1] })
        }, 0)

    }

    total()




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

                {/* Add Google Maps Address Validation / Search */}

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
                            for (const [productId, item] of Object.entries(countries)) {
                                return (
                                    <>
                                        <h3>
                                            {item.name}
                                        </h3>
                                        <h4>
                                            {`$ ${item.price}`}
                                        </h4>
                                        <p>
                                            {item.quantity}
                                        </p>
                                    </>
                                )
                            }
                        }}
                        <SummaryTotals>SUB TOTAL</SummaryTotals>
                        <h3>
                            {/* {() => {
                            for (const [productId, item] of Object.entries(countries)) {
                                return (
                                    item.price
                                )
                            }

                            for (let i = 0; i < Object.entries(countries).length)
                        }} */}
                        </h3>
                        <SummaryTotals>SHIPPING</SummaryTotals>
                        <SummaryTotals>SALES TAX</SummaryTotals>
                        <SummaryTotals>GRAND TOTAL</SummaryTotals>

                    </CheckoutSummary>
                </div>

            </CheckoutForm >
        </div >
    )
}



export default checkout
