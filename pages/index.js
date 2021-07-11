import Head from 'next/head'
import Image from 'next/image'
// import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { cartActions } from '../store/cart'
import Cookie from 'js-cookie';
import { splitGroups, deleteItems, testData } from '../utils/dataUtils'
import { Spinner } from '@chakra-ui/react';
import { Loader } from '../components/Loader';



export default function Home(test2, test3, test4) {
  const postTest = async () => {
    console.log("post test!")
    try {
      axios.post("/api/products?call=test");
    } catch (error) {
      console.log(error)
    }


  };

  // postTest();

  // useEffect(() => {
  //   const cartCookie = Cookie.getJSON("cart");
  //   const groupedCart =  splitGroups(cartCookie, "productId");

  //   console.log({ "cart cookie!": cartCookie });
  //   // console.log({ "testData": testData });
  //   console.log({ "groupedCart redux": groupedCart });
  // }, [])


  // const cartCookie = Cookie.getJSON("cart")
  // const groupedCart = splitGroups(cartCookie, "productId")
  // console.log({groupedCart: groupedCart})

  const arr = [
    { a1: { productId: "a1", name: "prod1", type: "aaa", price: 20 } },
    { a2: { productId: "a2", name: "prod1", type: "bbb", price: 20 } },
    { a3: { productId: "a3", name: "prod1a", type: "bbb", price: 20 } },
    { a4: { productId: "a4", name: "prod1b", type: "ccc", price: 20 } },
  ]

  const combine = arr.reduce((combined, arr) => {
    for (const [itemId, item] of Object.entries(arr)) {
      if (!combined[itemId]) {
        combined[itemId] = {};
      }
      combined[itemId] += item
    }
    return combined;
  }, {});

  const cookie2 = Cookie.getJSON("test2")

  Cookie.set("testMulti", {
    bro: "yo",
    bro: "yo"
  })

  const router = useRouter();
  const createTest = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/test', {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: "Yoooo!" })
      })
      router.post("/");
    } catch (error) {
    }
  }

  useEffect(() => {
  }, [])

  const dispatch = useDispatch()

  const useCounter = () => {
    const count = useSelector((state) => state.count)
    const test = useSelector((state) => state)

    const increment = () =>
      dispatch({
        type: 'INCREMENT',
      })
    const decrement = () =>
      dispatch({
        type: 'DECREMENT',
      })
    const reset = () =>
      dispatch({
        type: 'RESET',
      })
    return { count, increment, decrement, reset }
  }

  const addItem = async () => {
    dispatch(cartActions.setCartCurrent({ price: "too much!" }))
  }

  const testAPI = async () => {
    await axios.post("/api/auth?call=signup", {})
  }



  const { count, increment, decrement, reset } = useCounter()
  return (
    <>
    Home
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      hideNav: false,
      isLoginRequired: true
    }
  }
}