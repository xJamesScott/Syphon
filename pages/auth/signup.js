import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux'
import { useForm, useFormState } from "react-hook-form";
import styled from 'styled-components';
import axios from 'axios';
import {
    Form, Input,
    Submit, FormError,
    AuthError
} from '../../components/AuthForm'

const signup = () => {
    const [redirectTo, setRedirect] = useState(false);
    const [referrer, setReferrer] = useState(false);
    const [authError, setAuthError] = useState(false);

    useEffect(() => {
        setReferrer(document.referrer)
        if (redirectTo) {
            router.push("/")
        }
    }, [redirectTo])

    const { formState: { errors }, register, handleSubmit, getValues
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onSubmit"
    });

    

    const onSubmit = async (formData) => {
        try {
            await axios.post("/api/auth?call=signup", {
                email: formData.email,
                password: formData.password,
                redirect: referrer || "" // replace with redux state
            })

            const {
                data: { data,
                    handler: { redirect }
                } } = res

            if (redirect) {
                setRedirect(redirect)
            }

        } catch (err) {
            console.log({ "error!": err })
            setAuthError(err.response.data)
        }
    };
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <AuthError>{authError && authError}</AuthError>
                <Input
                    type="email"
                    name="email"
                    placeholder="email"
                    {...register('email',
                        {
                            required: { value: true, message: "Required Field" },
                        })}
                />
                {errors.email && errors.email.message}
                <Input
                    {...register("password",
                        { required: { value: true, message: "Required Field" } }
                    )}
                    type="password"
                    name="password"
                    placeholder="password"
                    id="password"
                />
                {errors.email && errors.email.message}

                <Input
                    {...register("confirm", {
                        required: { value: true, message: "Required Field" },
                        validate: (value) => (value === getValues("password")) || 'Password does not match!'
                    })}
                    type="password"
                    name="confirm"
                    placeholder="confirm password"
                    id="confirm"
                />
                {errors.confirm && <div>{errors.confirm.message}</div>}

                <Submit
                    value="SUBMIT"
                />
            </Form>
        </div>
    )
}

export default signup
