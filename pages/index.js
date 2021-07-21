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
import styled from 'styled-components';
import { motion } from "framer-motion";
  


const TestComponent = styled.div`

`;


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

  // Cookie.set("testMulti", {
  //   bro: "yo",
  //   bro: "yo"
  // })

  const [visible, setVisible] = useState(false);

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
    setVisible(true);
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



  const { count, increment, decrement, reset } = useCounter();

  const [htmlData, setHtmlData] = useState("yo")


  const endpoint = "http://localhost:3000/email/orderConfirmation.html"

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.text(); // parses JSON response into native JavaScript objects
  }

  // postData(endpoint)
  //   .then(data => {
  //     console.log({ "data!!!!": data }); // JSON data parsed by `data.json()` call
  //   });

  // TESTING

  var str = "I have a cat, a dog, and a goat.";

  var mapObj = {
    cat: "dog",
    dog: "goat2",
    goat2: "cat"
  };

  const catName = "cat"
  const dogName = "dog"
  const goatName = "goat"

  // const newObj = Object.keys(mapObj).reduce((acc, curr, i) => {
  // const newObj = Object.keys(mapObj).map((curr, i) => {
  //   // acc = `${curr}|`

  //   let sum = ""

  //   sum = curr
  //   return sum
  // }, "")

  const newObj = Object.keys(mapObj).join("|")

  console.log({ newObj: newObj })

  // const re = new RegExp(`${catName}|${dogName}|${goatName}`,`gi` );
  // const re = new RegExp("cat|dog|goat",`gi` );
  // const re = new RegExp(JSON.stringify(newObj), "gi");
  // // console.log(JSON.stringify(re))


  // // /cat|dog|goat/gi
  // str = str.replace(re, function (matched) {
  //   return mapObj[matched];
  // });

  // console.log(str)


  // TESTING




  return (
    visible &&
    (<motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    >
      Home
      <div>yooooo!</div>
      <div>yooooo!</div>
      <div>yooooo!</div>
      <div>yooooo!</div>
      <div>yooooo!</div>
      {/* <div >DATA: {htmlData}</div> */}
    </motion.div >)


  )
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       hideNav: false,
//       isLoginRequired: true
//     }
//   }
// }