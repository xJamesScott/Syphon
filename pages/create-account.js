import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { StyledLink } from '../components/StyledLink';
import {
    useQuery
} from '../utils/hooks';

const Input = styled.input`

`;
const login = ({ hideNav, domain }) => {
    const router = useRouter();
    const query = useQuery();
    const code = router.query.code;
    const ref = useRef();
    const [redirectTo, setRedirect] = useState(false);
    const [referrer, setReferrer] = useState(false);
    const [authError, setAuthError] = useState(false);

    useEffect(() => {
        setReferrer(document.referrer)
        if (redirectTo) {
            router.push("/")
        }
    }, [redirectTo])

    const { register, handleSubmit
    } = useForm({
        mode: "change"
    });

    const onSubmit = async (formData) => {

        // **PRODUCTION API CALL**

        try {
            const res = await axios.post("/api/users?call=create",
                {
                    email: formData.email,
                    password: formData.password,
                    redirect: document.referrer || "" // replace with redux state
                });
            console.log({ "res!!!": res })

            // DISPATCH ACTION TO SET AUTH

            // const {
            //     data: { data,
            //         handler: { redirect }
            //     } } = res

            // SET AUTH STATE

            // if (redirect) {
            //     setRedirect(redirect)
            // }
            console.log({ "res!!!": res })
        } catch (err) {
            console.log({ "err!!!": err })
            setAuthError(err.response.data)
        }
        // };


        // **TEST API CALL**

        // try {
        //     const res = await axios.post("/api/redirect", {
        //         redirect: referrer // replace with redux state
        //     })
        //     const {
        //         data: { data,
        //             handler: { redirect }
        //         } } = res
        //     if (redirect) {
        //         setRedirect(redirect)
        //     }
        // } catch (err) {
        //     console.log(err)
        // }
    };

    return (
        <div>

            <button onClick={onSubmit}>SUBMIT TEST</button>
            Auth Error: {authError}
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
                <input
                    autoComplete="off"
                    type="email"
                    name="email"
                    placeholder="email"
                    {...register("email")}
                />

                <input
                    autoComplete="off"
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
                <StyledLink href="/auth/forgot-password">Forgot Password</StyledLink>
            </form>
        </div>
    )
}

export const getServerSideProps = () => {
    return {
        props: {
            hideNav: true,
        },
    }
}

export default login
