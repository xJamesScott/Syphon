import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
import {
  HomeBanner,
  FeatureProd,
  HighLightProd,
  MiniProdContainer,
} from '../components/Home';
import { ButtonOrange, ButtonBlack, ButtonBorder } from '../components/Buttons';
import ButtonHollow from '../components/ButtonHollow';
import {
  ProductSection,
  AboutText,
  AboutTitle,
  AboutIMG,
  ProductTypesContainer,
  ProductTypeWrapper,
  TypeIMG,
  TypeTitle,
  ShopWrapper
} from '../components/ProductPage';





const SickTest = styled(motion.div)`

`;


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
  }, []);

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


  return (
    <div
      className="page"
    >
      <HomeBanner>
        <div className="section-margin">
          <div
            className="banner-divider"
          />
          <div className="home-banner-wrap">
            <div className="home-text">
              <h4 className="home-new">NEW PRODUCT</h4>
              <h3 className="home-title">RocketEar&nbsp;GT <br /> HEADPHONES</h3>
              <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <ButtonOrange>SEE PRODUCT</ButtonOrange>
            </div>
            <div className="home-bnr-img">
              <div>
                <Image
                  width={708.8}
                  height={886}
                  src="/media/home/banner.png"
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
        </div>
      </HomeBanner>

      <ProductSection
        // className="section-margin"
        className="section-margin"
      >
        <ProductTypesContainer>
          {/* HEADPHONES */}
          <ProductTypeWrapper>
            <div className="type-bg" />
            <TypeIMG
              src="/media/placeholderIMG.png" // get from server link
              width={123}
              height={160}
            />
            <TypeTitle>
              HEADPHONES
            </TypeTitle>
            <ShopWrapper
              value="SHOP"
              className="prod-types"
            />

            {/* 
                             <ShopWrapper>
                                <ShopText>
                                    SHOP
                                </ShopText>
                                <ShopArrow>
                                    {">"}
                                    // use icon-arrow-right.svg
                                </ShopArrow>
                            </ShopWrapper> 
                             */}

          </ProductTypeWrapper>
          {/* SPEAKERS */}
          <ProductTypeWrapper>
            <div className="type-bg" />
            <TypeIMG
              src="/media/placeholderIMG.png" // get from server link
              width={123}
              height={160}
            />
            <TypeTitle>
              SPEAKERS
            </TypeTitle>
            <ShopWrapper
              value="SHOP"
              className="prod-types"
            />

            {/* 
                             <ShopWrapper>
                                <ShopText>
                                    SHOP
                                </ShopText>
                                <ShopArrow>
                                    {">"}
                                    // use icon-arrow-right.svg
                                </ShopArrow>
                            </ShopWrapper> 
                             */}
          </ProductTypeWrapper>
          {/* EARPHONES */}
          <ProductTypeWrapper>
            <div className="type-bg" />
            <TypeIMG
              src="/media/placeholderIMG.png" // get from server link
              width={123}
              height={160}
            />
            <TypeTitle>
              EARPHONES
            </TypeTitle>
            <ShopWrapper
              value="SHOP"
              className="prod-types"
            />

            {/* 
                             <ShopWrapper>
                                <ShopText>
                                    SHOP
                                </ShopText>
                                <ShopArrow>
                                    {">"}
                                    // use icon-arrow-right.svg
                                </ShopArrow>
                            </ShopWrapper> 
                             */}
          </ProductTypeWrapper>
        </ProductTypesContainer>
      </ProductSection>

      <FeatureProd
        className="section-margin"
      >
        <div className="fprod-image">
          <div className="fprod-img-bg">
            <Image
              width={944}
              height={944}
              layout="intrinsic"
              src="/media/placeholderIMG.png"
              className="fprod-img-main"
            />
          </div>
          <Image
            width={410}
            height={493}
            src="/media/placeholderIMG.png"
          />
        </div>
        <div className="fprod-text">
          <h1 className="fprod-title">
            ZOOKA GT<br />
            SPEAKER
          </h1>
          <p className="fprod-description">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>

          <ButtonBlack className="fprod-button">
            SEE PRODUCT
          </ButtonBlack>
        </div>
      </FeatureProd>

      <HighLightProd
        className="section-margin"
      >
        <Image
          // height={320}
          // width={1120}
          layout="fill"
          src="/media/placeholderIMG.png"
          className="hprod-img"
        />
        <div className="hprod-text">
          <h4>ZOOKA SPEAKER</h4>
          <ButtonBorder>SEE PRODUCT</ButtonBorder>
        </div>
      </HighLightProd>

      <MiniProdContainer
        className="section-margin"
      >
        <div
          className="mprod-img-wrap"
        >
          <div className="mprod-img">
            <Image
              // height={320}
              // width={1120}
              layout="fill"
              src="/media/placeholderIMG.png"
              className="hprod-img"
            />
          </div>
        </div>
        <div className="mprod-text-wrap">
          <h4>YX1 EARPHONES</h4>
          <ButtonBorder>SEE PRODUCT</ButtonBorder>
        </div>
      </MiniProdContainer>

      {/* About Products */}

      <div
        className="section-margin"
      >
        <ProductSection
          className="about-product main-about"
        >
          <AboutText>
            <AboutTitle>
              BRINGING&nbsp;YOU&nbsp;THE<br />
              <span className="pop-word">BEST&nbsp;</span>
              AUDIO&nbsp;GEAR
            </AboutTitle>
            <p>
              Located at the heart of New York City, Syphon is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Syphon the best place to buy your portable audio equipment.
            </p>
          </AboutText>
          <AboutIMG
            src="/media/placeholderIMG.png" // get from server link
            width={540}
            height={588}
          />
        </ProductSection>
      </div>
    </div>
  )
}

// export const getServerSideProps = async () => {

// };
