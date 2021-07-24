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
    color: red;
    position: absolute;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    top: -20%;
    right: -20%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;

    p { 
        font-size: 1rem;
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
      /* flex: 1 1 0px; */

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
        .link-group {
        position: absolute;
        top: 100%; 
      }
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
        /* height: 100%; */
        display: flex;
        align-items: center;
        margin: auto;
        padding: 0 2px;
        /* width: 100%; */
        border-bottom: 0 solid white;
       
    }
`;

export const NavLink = styled(Link)`
    display: flex;
    height: 100% !important;
    /* a {
        height: 100% !important;
    } */
    a { 
        width: 100%;
    }
`;

export const NavLinkWrapper = styled.div`
    display: flex;
    height: 100% !important;
    position: relative;

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
        /* height: 20rem; */
        width: 4rem;
        transform: translateY(-1rem)
    }
`;

export const MenuActiveBar = styled.svg`
    
`;

export const LinksContainer = styled.div`
    height: 100%;
    padding: 0 1rem ;

    a { 
        text-align: center !important;
    }
`;

export const LinkGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100% !important;
    width: 100%;
`;

export const LinkGroup = styled.div`
    position: relative;
    background: magenta;
    display: flex;   
    flex-direction: column;

    > * {
        padding: 0 1.5rem;
        width: 100%;
    }
`;


const Logo = styled(Image)`

`;

export async function getStaticProps() {
    // try {
    //     const products = await axios.get(`${process.env.AUTH_APP_URL}/api/products?call=productType&productType=headphones`);
    //     return {
    //         props: {
    //             products: "products.data"
    //         }
    //     }
    // } catch (err) {
    //     return "Error fetching products by type";
    // }
    return {
        props: {
            products: "produuuuuccccctttsss!!!!!!!!!"
        }
    }
};

function Banner() {

    useEffect(() => {
        typeof window !== "undefined" && getCart();
    }, []);

    const router = useRouter();

    // console.log({ products: products })
    // useEffect(() => {
    //     console.log({ router: router.domainLocales })
    //     console.log({ products: products })
    // })

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
        home: true,
        headphones: true,
        speakers: false,
        earphones: false
    }


    const [activateNavLink, setActivateNavLink] = useState(activateNavInit); // make an object for each product type

    const hideCart = () => setCartVisible(false);

    return (
        !isLoading ?
            <CartWindow >
                <BannerWrapper >
                    <ButtonWhite>Yoooo</ButtonWhite>
                    <ButtonOrange>Yoooo</ButtonOrange>
                    <ButtonHollow
                        value="Broooooo"
                    />
                    <NavContainer className="section-margin">
                        <NavWrapper>
                            <div
                                ref={ref}
                                className="nav-logo">LOGO</div>
                            <Nav className="nav-group">

                                {/* HOME */}

                                <LinksContainer className="nav-links">
                                    <LinkGroupWrapper>
                                        <NavLinkWrapper>
                                            <NavLink
                                                href="/"
                                                onMouseLeave={() => setActivateNavLink({ home: false })} // TODO: ENABLE AFTER TESTING
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
                                            <motion.div
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
                                    >
                                        {/* GROUP LINK */}
                                        <NavLinkWrapper>

                                            <NavLink
                                                href="/product/headphones"
                                            >
                                                <a
                                                    className="menu-group-links"
                                                    onMouseEnter={() => setActivateNavLink({ headphones: true })}

                                                >HEADPHONES</a>
                                            </NavLink>
                                            {/* MENU BAR */}
                                            <motion.div
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
                                                    {/* <line y1="2.5" x2="108" y2="2.5" stroke="white" strokeWidth="1" /> */}
                                                    <path d="M54 9L49.6699 2.25L58.3301 2.25L54 9Z" fill="white" />
                                                </MenuActiveBar>

                                            </motion.div>

                                        </NavLinkWrapper>

                                        {/* HEADPHONES PROUDUCT LINKS */}
                                        {
                                            <motion.div
                                                key="link-group"
                                                animate={{
                                                    scaleY: activateNavLink.headphones ? 1 : 0,
                                                    opacity: activateNavLink.headphones ? 1 : 0
                                                }}
                                                transition={{ duration: 0.25 }}
                                                style={{ originY: 0, originX: 0 }}
                                                className="link-group-motion"
                                            >
                                                <LinkGroup
                                                    className="link-group"
                                                >

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
                                                </LinkGroup>
                                            </motion.div>
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

                                                >SPEAKERS</a>
                                            </NavLink>
                                            {/* MENU BAR */}
                                            <motion.div
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
                                                    {/* <line y1="2.5" x2="108" y2="2.5" stroke="white" strokeWidth="1" /> */}
                                                    <path d="M54 9L49.6699 2.25L58.3301 2.25L54 9Z" fill="white" />
                                                </MenuActiveBar>

                                            </motion.div>

                                        </NavLinkWrapper>

                                        {/* SPEAKERS PROUDUCT LINKS */}
                                        {
                                            <motion.div
                                                key="link-group"
                                                animate={{
                                                    scaleY: activateNavLink.speakers ? 1 : 0,
                                                    opacity: activateNavLink.speakers ? 1 : 0
                                                }}
                                                transition={{ duration: 0.25 }}
                                                style={{ originY: 0, originX: 0 }}
                                                className="link-group-motion"
                                            >
                                                <LinkGroup
                                                    className="link-group"
                                                >

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
                                                </LinkGroup>
                                            </motion.div>
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

                                                >EARPHONES</a>
                                            </NavLink>
                                            {/* MENU BAR */}
                                            <motion.div
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
                                                    {/* <line y1="2.5" x2="108" y2="2.5" stroke="white" strokeWidth="1" /> */}
                                                    <path d="M54 9L49.6699 2.25L58.3301 2.25L54 9Z" fill="white" />
                                                </MenuActiveBar>

                                            </motion.div>

                                        </NavLinkWrapper>

                                        {/* EARPHONES PROUDUCT LINKS */}
                                        {
                                            <motion.div
                                                key="link-group"
                                                animate={{
                                                    scaleY: activateNavLink.earphones ? 1 : 0,
                                                    opacity: activateNavLink.earphones ? 1 : 0
                                                }}
                                                transition={{ duration: 0.25 }}
                                                style={{ originY: 0, originX: 0 }}
                                                className="link-group-motion"
                                            >
                                                <LinkGroup
                                                    className="link-group"
                                                >

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
                                                </LinkGroup>
                                            </motion.div>
                                        }
                                    </LinkGroupWrapper>
                                </LinksContainer>


                            </Nav>
                            <div className="nav-icons">
                                <ButtonContainer>
                                    <CartCount>
                                        {/* TODO: PULL COUNT VALUE FROM USESTATE INSTEAD OF REDUX */}
                                        <p>{totalItems}</p>
                                    </CartCount>
                                    <CartButton

                                        onClick={() => setCartVisible(() => !cartVisible)}


                                    // ref={ref}
                                    >
                                        Cart
                                    </CartButton>
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
                />
                {/* </motion.div> */}
            </CartWindow >
            : <Loader />
    )
};



export default Banner;
