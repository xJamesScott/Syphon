import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from './Loader';
import { useEffect, useState, useRef } from 'react';
import { cartActions } from '../store/cart'
import Cart from './Cart';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { get } from "lodash";
import axios from 'axios';
import Link from 'next/link';
import { theme, mq } from '../constants/theme';
import { ButtonOrange, ButtonWhite } from '../components/Buttons';
import ButtonHollow from '../components/ButtonHollow';


const { colors } = theme;

const CartWindow = styled.div`
    z-index: 10; 
    position: sticky;
    top: 0;
`;
const BannerWrapper = styled.div`
    background-color: ${colors.accent5};
    height: 9.7rem;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    position: relative;
    display: flex;

    &.sub-menus {
        background: transparent;
    }
`;

const CartCount = styled.div`
    background: white;
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CartCountWrapper = styled.div`
    color: ${colors.main};
    position: absolute;
    top: -67%;
    right: -67%;
    display: flex;
    justify-content: center;
    align-items: center;

    p { 
        font-size: 2rem;
        font-weight: 700;
        line-height: 1rem;
    } 
`;

const ButtonContainer = styled.div`
    position: relative;
    width: fit-content;
    justify-content: flex-end;
`;
const CartButton = styled.button`
`;

const NavContainer = styled.div`
   display: flex;
   justify-content: center;
   height: 100%;
`;

const NavWrapper = styled.div`
    width: 100% !important;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-logo {
    }
    
    .nav-group {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      > * {
        text-align: center;  
      }
  }

  .nav-links {
    display: flex;
    justify-items: center;
    align-items: center;
    height: 100%;
    
    > * {
        display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
      }
    }

    .link-group-motion {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .link-group { // submenu links
        display: flex;

        /* font */
        font-size: 1.3rem;
        letter-spacing: .2rem;
    }

    .nav-icons {
        display: flex;
        justify-content: flex-end;
    }
`;

const Nav = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 3.4rem;

   .menu-group-links {
        display: flex;
        align-items: center;
        margin: auto;
        padding: 0 2px;
        border-bottom: 0 solid white;

        /* font */
        font-size: 1.3rem;
        letter-spacing: .2rem;
        line-height: 2.5rem;
       
    }
`;

export const NavLink = styled(Link)`
    display: flex;
    height: 100% !important;
    justify-content: flex-start;
    align-items: start;
    text-align: left;

    a { 
        width: 100%;
        text-align: left;
        font-size: 1.3rem;
    }
`;

const NavLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: .75rem;
    transition: all .25s ease;

    a { 
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
       
        :hover { 
            filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 1));
            transition: all .25s ease;
        }
    }
`;

export const NavLinkWrapper = styled.div`
    display: flex;
    height: 100% !important;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .menu-bar {
       position: absolute; 
        top: 70%; 
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .link-line {
        background: white;
        height: .1rem;
        width: 4rem;
        transform: translateY(-1rem)
    }
`;

export const MenuActiveBar = styled.svg`
    
`;

export const LinksContainer = styled.div`
    height: 100%;
    padding: 0 1rem ;
    transition: all .25s ease;
    
    a { 
        text-align: center !important;
        transition: all .25s ease;
    }

    .link-group-motion {
        position: relative;
        position: absolute;
        top: 100%;
        left: 0;
        background: ${colors.opaque1};
        width: 100%;
        height: 100%;
        padding: 0 1.2rem;
    }
`;

export const LinkGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100% !important;
    width: 100%;
    padding: 0 2rem;
    transition: all .25s ease;
`;

export const LinkGroup = styled.div`
    position: relative;
    display: flex;   
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.3rem;
    transform: scaleY(0);
    transform-origin: 0 0;
    opacity: 0;
    transition: all .4s ease;


    &.show-menu {
        transition: all .4s ease;
        opacity: 1;
        transform-origin: 0 0;
        transform: scaleY(1);
    }
`;

const CartIcon = styled.img`
        transition: all .27s ease;
        cursor: pointer;
        
        &.cart-hover {
            filter: drop-shadow(0 0 3px rgb(225, 225, 225, 1));
            transition: all .27s ease;
        }
`;


const Logo = styled(Image)`

`;

function Banner() {


    useEffect(() => {
        typeof window !== "undefined" && getCart();
    }, []);

    const router = useRouter();

    const dispatch = useDispatch();

    const getCart = () => {
        dispatch(cartActions.getCartCookie({}));
        dispatch(cartActions.setCartFinishLoading({}));

    };
    const ref = useRef();
    const [cartVisible, setCartVisible] = useState(false); // TODO: UNSET FROM TRUE, ONLY FOR TESTING

    const cartState = useSelector((state) => state.cart);
    const {
        isLoading,
        items: cart
    } = cartState

    const cartArrayObj = Object.values(cart);
    const [cartArray, setCartArray] = useState([]);

    const totalItems = cartArrayObj.reduce((sum, item) => {
        return sum += item.quantity
    }, 0);

    useEffect(() => {
        setCartArray(cartArrayObj);
    }, [isLoading, cart]);




    const activateNavInit = {
        home: false,
        headphones: false,
        speakers: false,
        earphones: false
    }

    const [activateNavLink, setActivateNavLink] = useState(activateNavInit); // make an object for each product type
    console.log({ activateNavLink: activateNavLink })

    // useEffect(() => {
    //     setActivateNavLink({
    //         home: false,
    //         headphones: false,
    //         speakers: false,
    //         earphones: false
    //     })
    // })

    const hideCart = () => setCartVisible(false);

    const [cartHover, setCartHover] = useState(false);

    return (
        !isLoading ?
            <CartWindow >
                <BannerWrapper >
                    <NavContainer className="section-margin">
                        <NavWrapper>
                            {/* LOGO */}
                            <a href="/">
                                <svg width="106" height="30" viewBox="0 0 106 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.4302 22.45C9.5502 22.45 11.2102 21.975 12.4102 21.025C13.6102 20.075 14.2102 18.77 14.2102 17.11C14.2102 15.85 13.8202 14.855 13.0402 14.125C12.2702 13.395 10.9602 12.79 9.1102 12.31C7.8502 11.99 6.9102 11.73 6.2902 11.53C5.6802 11.33 5.2752 11.135 5.0752 10.945C4.8852 10.755 4.7902 10.52 4.7902 10.24C4.7902 9.77002 5.0152 9.41002 5.4652 9.16002C5.9252 8.91002 6.5302 8.81002 7.2802 8.86002C8.8702 8.98002 9.7402 9.66003 9.8902 10.9L14.0602 10.15C13.8502 8.68003 13.1302 7.51503 11.9002 6.65503C10.6702 5.78503 9.1002 5.35003 7.1902 5.35003C5.2302 5.35003 3.6652 5.81003 2.4952 6.73003C1.3252 7.65002 0.740195 8.89002 0.740195 10.45C0.740195 11.69 1.1452 12.67 1.9552 13.39C2.7652 14.1 4.1602 14.71 6.1402 15.22C7.3102 15.53 8.1702 15.78 8.72019 15.97C9.2802 16.16 9.6402 16.355 9.8002 16.555C9.9602 16.745 10.0402 17 10.0402 17.32C10.0402 17.83 9.8402 18.23 9.4402 18.52C9.0402 18.8 8.4702 18.94 7.7302 18.94C6.8302 18.94 6.0852 18.725 5.4952 18.295C4.9152 17.865 4.5402 17.27 4.3702 16.51L0.200195 17.14C0.470195 18.83 1.2302 20.14 2.4802 21.07C3.7402 21.99 5.3902 22.45 7.4302 22.45Z" fill="white" />
                                    <path d="M18.9905 29.2H22.7705L31.9205 5.80002H27.8405L23.6105 16.825L19.3505 5.80002H15.1205L21.6605 21.865L18.9905 29.2Z" fill="white" />
                                    <path d="M33.9999 29.2H38.1099V21.415C38.6399 21.745 39.2249 22 39.8649 22.18C40.5149 22.36 41.2199 22.45 41.9799 22.45C43.4699 22.45 44.7749 22.075 45.8949 21.325C47.0149 20.575 47.8849 19.555 48.5049 18.265C49.1349 16.975 49.4499 15.52 49.4499 13.9C49.4499 12.25 49.1299 10.785 48.4899 9.50502C47.8599 8.21502 46.9699 7.20002 45.8199 6.46002C44.6699 5.72003 43.3199 5.35003 41.7699 5.35003C40.9299 5.35003 40.1599 5.47002 39.4599 5.71002C38.7699 5.94002 38.1499 6.27002 37.5999 6.70002V5.80002H33.9999V29.2ZM41.3199 18.82C39.9599 18.82 38.9999 18.37 38.4399 17.47C37.8799 16.56 37.5999 15.37 37.5999 13.9C37.5999 12.43 37.8749 11.245 38.4249 10.345C38.9849 9.43503 39.8999 8.98002 41.1699 8.98002C42.0799 8.98002 42.8249 9.20503 43.4049 9.65503C43.9949 10.095 44.4299 10.69 44.7099 11.44C44.9899 12.18 45.1299 13 45.1299 13.9C45.1299 14.81 44.9949 15.64 44.7249 16.39C44.4549 17.13 44.0399 17.72 43.4799 18.16C42.9199 18.6 42.1999 18.82 41.3199 18.82Z" fill="white" />
                                    <path d="M52.7206 22H56.8606V13.78C56.8606 12.77 56.9706 11.96 57.1906 11.35C57.4206 10.74 57.7106 10.28 58.0606 9.97002C58.4106 9.65002 58.7856 9.43502 59.1856 9.32502C59.5856 9.21502 59.9606 9.16002 60.3106 9.16002C61.1806 9.16002 61.8506 9.35502 62.3206 9.74502C62.8006 10.135 63.1456 10.62 63.3556 11.2C63.5656 11.78 63.6906 12.36 63.7306 12.94C63.7706 13.51 63.7906 13.98 63.7906 14.35V22H67.9306V12.91C67.9306 12.64 67.9106 12.21 67.8706 11.62C67.8306 11.03 67.7156 10.38 67.5256 9.67002C67.3356 8.95002 67.0156 8.26002 66.5656 7.60002C66.1256 6.94002 65.5056 6.39502 64.7056 5.96502C63.9056 5.53502 62.8706 5.32002 61.6006 5.32002C60.4306 5.32002 59.4106 5.51502 58.5406 5.90502C57.6706 6.29502 56.9406 6.81502 56.3506 7.46502V0.400024H52.7206V22Z" fill="white" />
                                    <path d="M79.1129 22.45C80.7329 22.45 82.1579 22.09 83.3879 21.37C84.6279 20.64 85.5928 19.635 86.2829 18.355C86.9828 17.065 87.3329 15.58 87.3329 13.9C87.3329 12.23 86.9879 10.755 86.2979 9.47503C85.6078 8.18503 84.6429 7.17502 83.4029 6.44502C82.1729 5.71502 80.7429 5.35003 79.1129 5.35003C77.5129 5.35003 76.0979 5.71002 74.8679 6.43002C73.6378 7.15002 72.6729 8.15503 71.9729 9.44503C71.2729 10.725 70.9229 12.21 70.9229 13.9C70.9229 15.57 71.2628 17.05 71.9428 18.34C72.6329 19.62 73.5928 20.625 74.8229 21.355C76.0529 22.085 77.4829 22.45 79.1129 22.45ZM79.1129 18.64C77.8429 18.64 76.8779 18.215 76.2178 17.365C75.5678 16.505 75.2429 15.35 75.2429 13.9C75.2429 12.49 75.5528 11.35 76.1729 10.48C76.8028 9.60003 77.7829 9.16002 79.1129 9.16002C80.4029 9.16002 81.3728 9.59002 82.0229 10.45C82.6828 11.31 83.0129 12.46 83.0129 13.9C83.0129 15.29 82.6879 16.43 82.0378 17.32C81.3979 18.2 80.4229 18.64 79.1129 18.64Z" fill="white" />
                                    <path d="M90.6014 22H94.7414V13.78C94.7414 12.77 94.8514 11.96 95.0714 11.35C95.3015 10.74 95.5914 10.28 95.9414 9.97002C96.2914 9.65002 96.6664 9.43502 97.0664 9.32502C97.4664 9.21502 97.8414 9.16002 98.1914 9.16002C99.0614 9.16002 99.7314 9.35502 100.201 9.74502C100.681 10.135 101.026 10.62 101.236 11.2C101.446 11.78 101.571 12.36 101.611 12.94C101.651 13.51 101.671 13.98 101.671 14.35V22H105.811V12.91C105.811 12.64 105.791 12.21 105.751 11.62C105.711 11.03 105.596 10.38 105.406 9.67002C105.216 8.95002 104.896 8.26002 104.446 7.60002C104.006 6.94002 103.386 6.39502 102.586 5.96502C101.786 5.53502 100.751 5.32002 99.4814 5.32002C98.3114 5.32002 97.2915 5.51502 96.4214 5.90502C95.5514 6.29502 94.8214 6.81502 94.2314 7.46502V5.80002H90.6014V22Z" fill="white" />
                                </svg>
                            </a>
                            <Nav className="nav-group">

                                {/* HOME */}

                                <LinksContainer className="nav-links">
                                    <LinkGroupWrapper>
                                        <NavLinkWrapper>
                                            <NavLink
                                                href="/"
                                                onMouseLeave={() => setActivateNavLink({ home: false })} // TODO: ENABLE AFTER TESTING
                                                onClick={() => setActivateNavLink({ home: false })} // TODO: ENABLE AFTER TESTING
                                            >
                                                <a
                                                    onMouseEnter={() => setActivateNavLink({ home: true })}
                                                    ref={ref["menu"]}
                                                    className="menu-group-links"
                                                >
                                                    HOME
                                                </a>
                                            </NavLink>

                                            {/* MENU BAR */}
                                            <motion.div // ENABLE AFTER TESTING
                                                key="menu-bar"
                                                animate={{
                                                    opacity: activateNavLink.home ? 1 : 0
                                                }}
                                                transition={{ duration: 0.25 }}
                                                className="menu-bar"
                                            >
                                                <div className="link-line"></div>

                                            </motion.div>
                                        </NavLinkWrapper>
                                    </LinkGroupWrapper>
                                </LinksContainer>

                                {/* HEADPHONES */}

                                <LinksContainer className="nav-links">
                                    <LinkGroupWrapper
                                        onMouseLeave={() => setActivateNavLink({ headphones: false })} // TODO: ENABLE AFTER TESTING
                                        onClick={() => setActivateNavLink({ home: false })} // TODO: ENABLE AFTER TESTING
                                    >
                                        {/* GROUP LINK */}
                                        <NavLinkWrapper>

                                            <NavLink
                                                href="/product/headphones"
                                            >
                                                <a
                                                    className="menu-group-links"
                                                    onMouseEnter={() => setActivateNavLink({ headphones: true })}
                                                >
                                                    HEADPHONES
                                                </a>
                                            </NavLink>
                                            {/* MENU BAR */}
                                            <motion.div // ENABLE AFTER TESTING
                                                key="menu-bar"
                                                animate={{
                                                    opacity: activateNavLink.headphones ? 1 : 0
                                                }}
                                                transition={{ duration: 0.25 }}
                                                className="menu-bar"
                                            >
                                                <div className="link-line"></div>
                                                <MenuActiveBar
                                                    className="nav-group-active menu-bar" width="108" height="9" viewBox="0 0 108 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M54 9L49.6699 2.25L58.3301 2.25L54 9Z" fill="white" />
                                                </MenuActiveBar>

                                            </motion.div>

                                        </NavLinkWrapper>

                                        {/* HEADPHONES PROUDUCT LINKS */}
                                        {
                                            // <motion.div // ENABLE AFTER TESTING
                                            //     key="link-group"
                                            //     animate={{
                                            //         // scaleY: activateNavLink.headphones ? 1 : 0,
                                            //         opacity: activateNavLink.headphones ? 1 : 0
                                            //     }}
                                            //     transition={{ duration: 0.25 }}
                                            //     style={{ originY: 0, originX: 0 }}
                                            //     className="link-group-motion "
                                            // >
                                            <LinkGroup
                                                className="link-group"
                                                key="link-group"
                                                className={activateNavLink.headphones ? "show-menu link-group-motion" : "link-group-motion"}
                                            >
                                                <NavLinksContainer>
                                                    <NavLink
                                                        href="/product/REGT200"
                                                    >
                                                        <a>RocketEar&nbsp;GT</a>
                                                    </NavLink>
                                                    <NavLink
                                                        href="/product/REGT200"
                                                    >
                                                        <a>Rocket&nbsp;Ear </a>
                                                    </NavLink>
                                                    <NavLink
                                                        href="/product/REGT200"
                                                    >
                                                        <a>Dyno</a>
                                                    </NavLink>
                                                </NavLinksContainer>
                                            </LinkGroup>
                                            // </motion.div>
                                        }
                                    </LinkGroupWrapper>
                                </LinksContainer>


                                {/* SPEAKERS */}

                                <LinksContainer className="nav-links">
                                    <LinkGroupWrapper
                                        onMouseLeave={() => setActivateNavLink({ speakers: false })} // TODO: ENABLE AFTER TESTING
                                    >
                                        {/* GROUP LINK */}
                                        <NavLinkWrapper>

                                            <NavLink
                                                href="/product/speakers"
                                            >
                                                <a
                                                    className="menu-group-links"
                                                    onMouseEnter={() => setActivateNavLink({ speakers: true })}

                                                >
                                                    SPEAKERS
                                                </a>
                                            </NavLink>
                                            {/* MENU BAR */}
                                            <motion.div // ENABLE AFTER TESTING
                                                key="menu-bar"
                                                animate={{
                                                    opacity: activateNavLink.speakers ? 1 : 0
                                                }}
                                                transition={{ duration: 0.25 }}
                                                className="menu-bar"
                                            >
                                                <div className="link-line"></div>
                                                <MenuActiveBar
                                                    className="nav-group-active menu-bar" width="108" height="9" viewBox="0 0 108 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M54 9L49.6699 2.25L58.3301 2.25L54 9Z" fill="white" />
                                                </MenuActiveBar>

                                            </motion.div>
                                        </NavLinkWrapper>

                                        {/* SPEAKERS PROUDUCT LINKS */}

                                        {
                                            // <motion.div // ENABLE AFTER TESTING
                                            //     key="link-group"
                                            //     animate={{
                                            //         scaleY: activateNavLink.speakers ? 1 : 0,
                                            //         opacity: activateNavLink.speakers ? 1 : 0
                                            //     }}
                                            //     transition={{ duration: 0.25 }}
                                            //     style={{ originY: 0, originX: 0 }}
                                            //     className="link-group-motion "
                                            // >
                                            <LinkGroup
                                                className="link-group"
                                                key="link-group"
                                                className={activateNavLink.speakers ? "show-menu link-group-motion" : "link-group-motion"}
                                            >
                                                <NavLinksContainer>
                                                    <NavLink
                                                        href="/product/REGT200"
                                                    >
                                                        <a>RocketEar&nbsp;GT</a>
                                                    </NavLink>
                                                    <NavLink
                                                        href="/product/REGT200"
                                                    >
                                                        <a>Rocket&nbsp;Ear </a>
                                                    </NavLink>
                                                    <NavLink
                                                        href="/product/REGT200"
                                                    >
                                                        <a>Dyno</a>
                                                    </NavLink>
                                                </NavLinksContainer>
                                            </LinkGroup>
                                            // </motion.div>
                                        }
                                    </LinkGroupWrapper>
                                </LinksContainer>

                                {/* EARPHONES */}

                                <LinksContainer className="nav-links">
                                    <LinkGroupWrapper
                                        onMouseLeave={() => setActivateNavLink({ earphones: false })} // TODO: ENABLE AFTER TESTING
                                    >
                                        {/* GROUP LINK */}
                                        <NavLinkWrapper>
                                            <NavLink
                                                href="/product/earphones"
                                            >
                                                <a
                                                    className="menu-group-links"
                                                    onMouseEnter={() => setActivateNavLink({ earphones: true })}

                                                >
                                                    EARPHONES
                                                </a>
                                            </NavLink>

                                            {/* MENU BAR */}
                                            <motion.div // ENABLE AFTER TESTING
                                                key="menu-bar"
                                                animate={{
                                                    opacity: activateNavLink.earphones ? 1 : 0
                                                }}
                                                transition={{ duration: 0.25 }}
                                                className="menu-bar"
                                            >
                                                <div className="link-line"></div>
                                                <MenuActiveBar
                                                    className="nav-group-active menu-bar" width="108" height="9" viewBox="0 0 108 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M54 9L49.6699 2.25L58.3301 2.25L54 9Z" fill="white" />
                                                </MenuActiveBar>

                                            </motion.div>

                                        </NavLinkWrapper>

                                        {/* EARPHONES PROUDUCT LINKS */}
                                        {
                                           
                                            <LinkGroup
                                            className="link-group"
                                            key="link-group"
                                            className={activateNavLink.earphones ? "show-menu link-group-motion" : "link-group-motion"}
                                            >
                                                <NavLinksContainer>
                                                    <NavLink
                                                        href="/product/REGT200"
                                                    >
                                                        <a>RocketEar&nbsp;GT</a>
                                                    </NavLink>
                                                    <NavLink
                                                        href="/product/REGT200"
                                                    >
                                                        <a>Rocket&nbsp;Ear </a>
                                                    </NavLink>
                                                    <NavLink
                                                        href="/product/REGT200"
                                                    >
                                                        <a>Dyno</a>
                                                    </NavLink>
                                                </NavLinksContainer>
                                            </LinkGroup>
                                        }
                                    </LinkGroupWrapper>
                                </LinksContainer>

                            </Nav>
                            {/* CART AND ACCOUNT ICONS (TODO: ADD ACCOUNT ICON WITH AUTH/ACCOUNT FEATURE)*/}
                            <div className="nav-icons">
                                <ButtonContainer
                                    onMouseEnter={() => setCartHover(true)}
                                    onMouseLeave={() => setCartHover(false)}
                                >
                                    <CartCountWrapper>
                                        <motion.div
                                            animate={{ scale: totalItems > 0 ? [.1, 1.5, 1] : 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <CartCount>
                                                {/* TODO: PULL COUNT VALUE FROM USESTATE INSTEAD OF REDUX */}
                                                <p>{totalItems}</p>
                                            </CartCount>
                                        </motion.div>
                                    </CartCountWrapper>
                                    <CartIcon
                                        width="24"
                                        height="20"
                                        onClick={() => setCartVisible(() => !cartVisible)}
                                        className={cartHover ? "cart-hover" : ""}
                                        src="/media/icons/cart.svg"
                                    />
                                </ButtonContainer>
                            </div>
                        </NavWrapper>
                    </NavContainer>
                </BannerWrapper>
                {/* <motion.div
                    animate={{ scale: cartVisible ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                > */}
                <Cart
                    // className="visible"
                    visible={cartVisible}
                    onClick={(e) => e.preventDefault}
                    // cartArray={cartArray}
                    isLoading={isLoading}
                    hideCart={hideCart}
                    totalItems={totalItems}
                />
                {/* </motion.div> */}
            </CartWindow >
            : <Loader />
    )
};

export default Banner;
