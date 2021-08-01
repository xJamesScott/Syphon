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
  HomeContainer
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
  TypeIMGWrapper,
  TypeTitle,
  ShopWrapper
} from '../components/ProductPage';





const SickTest = styled(motion.div)`

`;


const TestComponent = styled.div`

`;


export default function Home(test2, test3, test4) {
  const postTest = async () => {
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
    <HomeContainer
      className="page"
    >
      <HomeBanner
        className="home-banner"
      >
       
        <div className="section-margin">
          <div
            className="banner-divider"
          />
          <div className="home-banner-wrap">
            <div className="home-text">
              <h4 className="home-new">NEW PRODUCT</h4>
              <h3 className="home-title">RocketEar&nbsp;GT <br /> HEADPHONES</h3>
              <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <a href="/product/REGT200">
                <ButtonOrange>SEE PRODUCT</ButtonOrange>
              </a>
            </div>
            <div className="home-bnr-img">
              <div
                className="banner-img"
              >
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
        className="section-margin home prod-types"
      >
        <ProductTypesContainer
          className="prod-type-container"
        >
          {/* HEADPHONES */}
          <ProductTypeWrapper
            className="prod-type-wrap"
          >
            <div className="type-bg round-border" />
            {/* headphones desktop */}
            <TypeIMGWrapper
              className="desktop-img"
            >
              <TypeIMG
                src="/media/prod-types/desktop/headphones.png" // get from server link
                width={123}
                height={160}
                className="img"
              />
            </TypeIMGWrapper>
            {/* headphones tablet */}
            <TypeIMGWrapper
              className="tablet-img"
            >
              <TypeIMG
                src="/media/prod-types/tablet/headphones.png" // get from server link
                width={81}
                height={104}
                className="img"
              />
            </TypeIMGWrapper>
            {/* headphones mobile */}
            <TypeIMGWrapper
              className="mobile-img"
            >
              <TypeIMG
                src="/media/prod-types/mobile/headphones.png" // get from server link
                width={80}
                height={104}
                className="img"
              />
            </TypeIMGWrapper>
            <TypeTitle>
              HEADPHONES
            </TypeTitle>
            <ShopWrapper
              value="SHOP"
              className="prod-types"
              href="/headphones"
            />
          </ProductTypeWrapper>
          {/* SPEAKERS */}
          <ProductTypeWrapper
            className="prod-type-wrap"
          >
            <div className="type-bg round-border" />
            {/* speakers desktop */}
            <TypeIMGWrapper
              className="desktop-img"
            >
              <TypeIMG
                src="/media/prod-types/desktop/speakers.png" // get from server link
                width={123}
                height={147}
                className="img"
              />
            </TypeIMGWrapper>
            {/* speakers tablet */}
            <TypeIMGWrapper
              className="tablet-img"
            >
              <TypeIMG
                src="/media/prod-types/tablet/speakers.png" // get from server link
                width={85}
                height={102}
                className="img"
              />
            </TypeIMGWrapper>
            {/* speakers mobile */}
            <TypeIMGWrapper
              className="mobile-img"
            >
              <TypeIMG
                src="/media/prod-types/mobile/speakers.png" // get from server link
                width={84}
                height={101}
                className="img"
              />
            </TypeIMGWrapper>
            <TypeTitle>
              SPEAKERS
            </TypeTitle>
            <ShopWrapper
              value="SHOP"
              className="prod-types"
              href="/speakers"
            />
          </ProductTypeWrapper>
          {/* EARPHONES */}
          <ProductTypeWrapper
            className="prod-type-wrap"
          >
            <div className="type-bg round-border" />
            {/* earphones desktop */}
            <TypeIMGWrapper
              className="desktop-img earphones"
            >
              <TypeIMG
                src="/media/prod-types/tablet/earphones.png" // get from server link
                width={125}
                height={126}
                className="img"
              />
            </TypeIMGWrapper>
            {/* earphones tablet */}
            <TypeIMGWrapper
              className="tablet-img"
            >
              <TypeIMG
                src="/media/prod-types/tablet/earphones.png" // get from server link
                width={103}
                height={104}
                className="img"
              />
            </TypeIMGWrapper>
            {/* earphones mobile */}
            <TypeIMGWrapper
              className="mobile-img"
            >
              <TypeIMG
                src="/media/prod-types/mobile/earphones.png" // get from server link
                width={103}
                height={104}
                className="img"
              />
            </TypeIMGWrapper>
            <TypeTitle>
              EARPHONES
            </TypeTitle>
            <ShopWrapper
              value="SHOP"
              className="prod-types"
              href="/earphones"
            />
          </ProductTypeWrapper>
        </ProductTypesContainer>
      </ProductSection>

      <div className="section-margin feature-prod">
        <FeatureProd
          className="home home-feature"
        >
          <div className="fprod-image">
            <div className="fprod-img-bg">
              <Image
                width={944}
                height={944}
                layout="intrinsic"
                src="/media/home/circles.png"
                className="fprod-img-main"
              />
            </div>
            <div className="desktop-img">
              <Image
                width={410}
                height={493}
                src="/media/home/zookaGT-dt.png"
                className="fprod-speaker-img"
              />
            </div>
            <div className="tablet-img">
              <Image
                width={198}
                height={237}
                src="/media/home/zookaGT-tb.png"
                // className="fprod-speaker-img"
              />
            </div>
            <div className="mobile-img">
              <Image
                width={175}
                height={207}
                src="/media/home/zookaGT-tb.png"
              />
            </div>
          </div>
          <div className="fprod-text">
            <h3 className="fprod-title">
              ZOOKA&nbsp;GT<br />
              SPEAKER
            </h3>
            <p className="fprod-description">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <a href="/product/ZKAG200">
              <ButtonBlack className="fprod-button">
                SEE PRODUCT
              </ButtonBlack>
            </a>
          </div>
        </FeatureProd>
      </div>

      <HighLightProd
        className="section-margin home hprod"
      >
        <div className="desktop-img hprod-img-container">
          <Image
            width={1120}
            height={320}
            // layout="fill"
              layout="fixed"
            src="/media/home/zooka-speaker-dt.jpg"
            className="hprod-img"
          />
        </div>
        <div className="tablet-img hprod-img-container">
          <Image
            width={1110}
            height={320}
            layout="fixed"
            // layout="fill"
            src="/media/home/zooka-speaker-dt.jpg"
            className="hprod-img"
          />
        </div>
        <div className="mobile-wide-img hprod-img-container">
          <Image
            width={1120}
            height={320}
            layout="fixed"
            // layout="fill"
            src="/media/home/zooka-speaker-dt.jpg"
            className="hprod-img"
          />
        </div>
        <div className="mobile-img hprod-img-container">
          <Image
            width={529}
            height={320}
            layout="fixed"
            // layout="fill"
            src="/media/home/zooka-speaker-mb.jpg"
            className="hprod-img"
          />
        </div>
        <div className="hprod-text">
          <h4>ZOOKA SPEAKER</h4>
          <a href="/product/ZKAX100">
          <ButtonBorder>SEE PRODUCT</ButtonBorder>
          </a>
        </div>
      </HighLightProd>
      
      <MiniProdContainer
        className="section-margin mini"
      >
        <div
          className="mprod-img-wrap"
        >
          <div className="mprod-img desktop-img round-border">
            <Image
              width={540}
              height={320}
              layout="fixed"
              src="/media/home/jamz.jpg"
              className="hprod-img"
            />
          </div>
          <div 
          className="mprod-img tablet-img hide-wide-m round-border"
          >
            <Image
              width={421 * 1.15}
              height={578 * 1.15}
              layout="fixed"
              src="/media/home/jamz-tb.jpg"
              className="hprod-img"
            />
          </div>
          <div className="mprod-img mobile-wide-img round-border">
            <Image
              width={421 * .95}
              height={578 * .95}
              layout="fixed"
              src="/media/home/jamz-tb.jpg"
              className="hprod-img"
            />
          </div>
          <div className="mprod-img mobile-img round-border">
            <Image
              width={540}
              height={320}
              layout="fixed"
              src="/media/home/jamz.jpg"
              className="hprod-img"
            />
          </div>
        </div>

        <div className="mprod-text-wrap">
          <div className="mprod-text">
            <h4>JAMZ EARPHONES</h4>
            
            <a href="/product/JAMZ100">
              <ButtonBorder>SEE PRODUCT</ButtonBorder>
            </a>
          </div>
        </div>
      </MiniProdContainer>

      {/* About Products */}

      <div
        className="section-margin"
      >
        <ProductSection
          className="about-product main-about"
        >
          <AboutText
            className="about-text"
          >
            <AboutTitle
              className="hide-tablet show-mobile"
            >
              BRINGING&nbsp;YOU&nbsp;THE
              <br />
              <span className="pop-word">BEST&nbsp;</span>
              AUDIO&nbsp;GEAR
            </AboutTitle>
            <AboutTitle
              className="show-tablet hide-mobile hide-desktop"
            >
              BRINGING&nbsp;YOU&nbsp;THE&nbsp;
              <span className="pop-word">BEST</span>
              <br />
              AUDIO&nbsp;GEAR
            </AboutTitle>
            <p>
              Located at the heart of New York City, Syphon is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Syphon the best place to buy your portable audio equipment.
            </p>
          </AboutText>
          <div
            className="desktop-img round-border"
          >
            <AboutIMG
              src="/media/about/about-dt.jpg" // get from server link
              width={540}
              height={588}
              layout="responsive"
            />
          </div>
          <div className="tablet-img round-border">
            <AboutIMG
              src="/media/about/about-tb.jpg" // get from server link
              width={689}
              height={300}
              layout="responsive"
            />
          </div>
          <div className="mobile-img round-border">
            <AboutIMG
              src="/media/about/about-m.jpg" // get from server link
              width={327}
              height={300}
              layout="responsive"
            />
          </div>
        </ProductSection>
      </div>
    </HomeContainer>
  )
}

// export const getServerSideProps = async () => {

// };
