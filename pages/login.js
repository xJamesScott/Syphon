import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import axios from 'axios';
import { useQuery, useFetcher } from '../utils/hooks';
import useSWR from 'swr';

const Input = styled.input`

`;
const login = () => {
    const router = useRouter();
    const code = router.query.code;
    const ref = useRef();
    const fetcher = useFetcher();
    // const query = useQuery()

    useEffect(() => {
        if (code) {
            console.log({ "code!": code })
        }
    }, [code])

    const { register, handleSubmit
    } = useForm({
        mode: "change"
    });

    const onSubmit = async (formData) => {
        // console.log({
        //     email: formData.email,
        //     password: formData.password
        // })
        // const res = await fetch("/api/auth?call=login",
        //     {
        //         method: "GET",
        //         // mode: "no-cors",
        //     })
        //     // .then(response => response.json())
        //     .then(data => console.log(data));
        // console.log(res)
        // fetch("/api/redirect",
        //     // {
        //     //     mode: "no-cors"
        //     // }
        // )
        //     // .then(response => response.json())
        //     .then(data => console.log(data))
        // return res

        await axios.get("/api/redirect")
        await axios.get("/api/redirect")
            .then(data => console.log(data))

        // try {
        //     const res = await axios.post("/api/auth?call=login", {
        //     // const res = await fetch("/api/auth?call=login", {
        //         // const res = await axios.post("https://jsonplaceholder.typicode.com/todos/1n", {
        //         email: formData.email,
        //         password: formData.password
        //     })
        //     console.log(res)
        //     return res
        // } catch (error) {
        //     console.log({ "error!": error })
        //     return error
        // }
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

// export async function getServerSideProps(context) {
//     return {
//         redirect: {
//             permanent: false,
//             destination: "/"
//         }
//     }
// }

// export const getServerSideProps = () => {
//     return {
//         props: {},
//     }
// }


export default login
