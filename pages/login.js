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
const login = () => {
    const ref = useRef();
    const { register, handleSubmit
    } = useForm({
        mode: "change"
    });
    const onSubmit = async (formData) => {
        console.log({
            email: formData.email,
            password: formData.password
        })
        try {
            await axios.post("/api/auth?call=login", {
                username: formData.email,
                password: formData.password
            })

        } catch (error) {
            console.log({ "error!": error })
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
                    {...register("email")}
                />

                <input
                    {...register("password")}
                    type="password"
                    name="password"
                    placeholder="password"
                    id="password"
                />

                <input
                    type="submit"
                    value="submit"
                />
            </form>
        </div>
    )
}

export default login
