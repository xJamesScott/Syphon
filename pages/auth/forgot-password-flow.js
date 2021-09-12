import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { StyledLink } from '../../components/StyledLink';
import {
    useQuery
} from '../../utils/hooks';
import {
    Form, Input,
    Submit, FormError,
    AuthError
} from '../../components/AuthForm'

const forgotPassword = ({ hideNav, domain }) => {
    const router = useRouter();
    const query = useQuery();
    const code = router.query.code;
    const ref = useRef();
    const [redirectTo, setRedirect] = useState(false);
    const [referrer, setReferrer] = useState(false)
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

        try {
          
            const res = await axios.post("/api/auth?call=change-password",
                {
                    email: formData.email,
                    redirect: referrerr // replace with redux state
                });
            const {
                data: {
                    data,
                    handler: { redirect }
                }
            } = res
            if (redirect) {
                setRedirect(redirect)
            }
        } catch (err) {
            console.log(err)
            setAuthError(err.response.data)
        }
    };

    return (
        <div>
            <button onClick={onSubmit}>SUBMIT TEST</button>
            <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
                <AuthError>{authError && authError}</AuthError>
                <Input
                    autoComplete="off"
                    type="email"
                    name="email"
                    placeholder="email"
                    {...register("email")}
                />

                <Submit
                    type="submit"
                    value="submit"
                />
            </Form>
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

export default forgotPassword
