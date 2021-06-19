import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import axios from 'axios';


const Input = styled.input`

`;
const signup = () => {
    const { formState: { errors }, register, handleSubmit, getValues
    } = useForm({
        mode: "change"
    });

    const onSubmit = async (formData) => {
        try {
            await axios.post("/api/auth?call=signup", {
                username: formData.email,
                password: formData.password
            })

        } catch (err) {
            console.log({ "error!": err })
            return error
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    {...register('email',
                        {
                            required: { value: true, message: "Required Field" },
                            maxLength: 2
                        })}
                />
                {errors.email && errors.email.message}
                <input
                    {...register("password",
                        { required: { value: true, message: "Required Field" } }
                    )}
                    type="password"
                    name="password"
                    placeholder="password"
                    id="password"
                />
                {errors.email && errors.email.message}

                <input
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

                <input
                    type="submit"
                    value="submit"
                />

            </form>
        </div>
    )
}

export default signup
