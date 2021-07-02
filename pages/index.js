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

export default function Home(test2, test3, test4) {

  console.log({ splitGroups: splitGroups(testData, "name") })

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



  console.log({ combine: (combine) })

  console.log({ "test3!!!": test4 })
  const cookie2 = Cookie.getJSON("test2")

  Cookie.set("testMulti", {
    bro: "yo",
    bro: "yo"
  })

  console.log({ "testMulti": Cookie.getJSON("testMulti") })


  // Cookie.set("testitem3", {
  //   cart: {
  //     name: "Test Items",
  //     productId: "testitem5",
  //     price: 100,
  //     quantity: 2
  //   },
  // })
  // Cookie.set("test2", "Yoooooo!!!!!!!")
  // Cookie.set("yo!!!", "broooo!")
  // Cookie.set("test2", JSON.stringify({ cart: { product: "works!!!!" } }))
  // console.log({ "cookie!": Cookie.get("yo!!!") })
  // console.log({ "testitem3!": Cookie.getJSON("testitem3") })
  // console.log
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
      console.log(error);
    }
  }

  useEffect(() => {
  }, [])

  const dispatch = useDispatch()

  const useCounter = () => {
    const count = useSelector((state) => state.count)
    const test = useSelector((state) => state)
    console.log({ "test state!": test })

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
    console.log("dispatch cart action!")
    dispatch(cartActions.setCartCurrent({ price: "too much!" }))
  }

  const testAPI = async () => {
    await axios.post("/api/auth?call=signup", {})
  }

  const { count, increment, decrement, reset } = useCounter()
  return (
    <div className={styles.container}>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={increment} >TEST DB</button>
      <button onClick={addItem}>ADD ITEM</button>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <button onClick={testAPI}>test</button>
        {/* {deleteItems(testData, "a1").map((res, i) => {
          return (
            <div>
              {JSON.stringify(res)}
            </div>)
        })} */}

        {/* <button onClick={deleteItems(testData, "a1")}>DELETE</button> */}

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
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