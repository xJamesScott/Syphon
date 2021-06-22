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
    const [redirectTo, setRedirect] = useState(false);
    const [referrer, setReferrer] = useState(false);
    const [authError, setAuthError] = useState(false);
    const [passwordReqSent, setPasswordReqSent] = useState(false);

    const { register, handleSubmit, formState: { errors }
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onSubmit"
    });

    const onSubmit = async (formData) => {

        // **ACTUAL API CALL**

        try {

            const res = await axios.post("/api/auth?call=change-password",
                {
                    email: formData.email,
                });
            setPasswordReqSent(res)
        } catch (err) {
            console.log(err)
            setAuthError("No account found with the email provided.")
        }
    };
    return (

        <div>
            {
                !passwordReqSent ?
                    <><button onClick={onSubmit}>SUBMIT TEST</button>
                        <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
                            <AuthError>{authError && authError}</AuthError>

                            <button onClick={() => clearErrors()}>CLEAR</button>

                            <Input
                                autoComplete="off"
                                name="email"
                                placeholder="email"
                                {...register('email',
                                    {
                                        required: { value: true, message: "Required Field" },
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Please enter a valid email."
                                        }
                                    })}
                            />
                            <FormError>{errors.email && errors.email.message}</FormError>

                            <Submit
                                value="SUBMIT"
                            />
                        </Form>
                    </>
                    :
                    // TODO - ADD ENVELOPE ICON
                    < div > A magic login link has been sent to your email.  </div >
            }
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
