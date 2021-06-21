import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import axios from 'axios';
import {
    useQuery,
} from '../utils/hooks';

const Input = styled.input`

`;
const login = () => {
    const router = useRouter();
    const query = useQuery();
    const code = router.query.code;
    const ref = useRef();
    const [redirectTo, setRedirect] = useState(false);

    useEffect(() => {
        if (redirectTo) {
            router.push("/")
        }

    }, [redirectTo])

    const { register, handleSubmit
    } = useForm({
        mode: "change"
    });

    const onSubmit = async (formData) => {

        // **ACTUAL API CALL**

        // try {
        // console.log({
        //     email: formData.email,
        //     password: formData.password
        // })
        // const res = await fetch("/api/auth?call=login",
        //     {
        //     email: formData.email,
        //     password: formData.password
        // }))
        // } catch (err) {
        //     console.log(err)
        // }


        // **PLACE HOLDER API CALL**

        try {
            const res = await axios.get("/api/redirect")
            const {
                data: { data,
                    handler: { redirect }
                } } = res
            if (redirect) {
                setRedirect(redirect)
            }
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div>
            <button onClick={onSubmit}>SUBMIT TEST</button>
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

export const getServerSideProps = () => {
    return {
        props: {},
    }
}

export default login
