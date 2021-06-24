import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { StyledLink } from '../../components/StyledLink';
import { useSelector, useDispatch } from 'react-redux';
import {
  useQuery
} from '../../utils/hooks';
import {
  Form, Input,
  Submit, FormError,
  AuthError
} from '../../components/AuthForm'


const login = ({ test2, test3, test4 }) => {
  // const router = useRouter();
  // const dispatch = useDispatch();
  // const [redirectTo, setRedirect] = useState(false);
  // const [referrer, setReferrer] = useState(false);
  // const [authError, setAuthError] = useState(false);


  // const test = useSelector((state) => state)
  // console.log({ "wrapper state!": test })

  // // useEffect(() => {
  // //     setReferrer(document.referrer)
  // //     if (redirectTo) {
  // //         router.push("/")
  // //     }
  // // }, [redirectTo])

  // const { register, handleSubmit
  // } = useForm({
  //   mode: "onSubmit",
  //   reValidateMode: "onSubmit"
  // });

  // const onSubmit = async (formData) => {

  //   // **PRODUCTION API CALL**

  //   try {
  //     dispatch
  //     const res = await axios.post("/api/auth?call=login",
  //       {
  //         email: formData.email,
  //         password: formData.password,
  //         redirect: referrer
  //       });
  //     console.log({ "res!!!": res })

  //     // DISPATCH ACTION TO SET AUTH

  //     // const {
  //     //     data: { data,
  //     //         handler: { redirect }
  //     //     } } = res

  //     // SET AUTH STATE

  //     // if (redirect) {
  //     //     setRedirect(redirect)
  //     // }
  //     console.log({ "res!!!": res })
  //   } catch (err) {
  //     console.log({ "err!!!": err })
  //     setAuthError(err.response.data)
  //   }
  //   // };


  //   // **TEST API CALL**

  //   // try {
  //   //     const res = await axios.post("/api/redirect", {
  //   //         redirect: referrer // replace with redux state
  //   //     })
  //   //     const {
  //   //         data: { data,
  //   //             handler: { redirect }
  //   //         } } = res
  //   //     if (redirect) {
  //   //         setRedirect(redirect)
  //   //     }
  //   // } catch (err) {
  //   //     console.log(err)
  //   // }
  // };

  // return (
  //     <div>

  //         <button onClick={onSubmit}>SUBMIT TEST</button>

  //         <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)} >
  //             <AuthError>{authError && authError}</AuthError>
  //             <Input
  //                 autoComplete="off"
  //                 type="email"
  //                 name="email"
  //                 placeholder="email"
  //                 {...register("email")}
  //             />

  //             <Input
  //                 autoComplete="off"
  //                 {...register("password")}
  //                 type="password"
  //                 name="password"
  //                 placeholder="password"
  //                 id="password"
  //             />

  //             <Submit
  //                 value="SUBMIT"
  //             />

  //             <StyledLink href="/auth/forgot-password">Forgot Password</StyledLink>
  //             <StyledLink href="/auth/signup">Sign Up</StyledLink>
  //         </Form>
  //     </div>
  // )
  return (
    <>
      yoofffffffffffffffffffffffffoo!~
    </>
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
