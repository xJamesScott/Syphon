import styled from "styled-components"
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from './Loader';
import { useEffect, useState } from 'react';
import { cartActions } from '../store/cart'
import Cart from './Cart';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { get } from "lodash";
import axios from 'axios';
import Link from 'next/link';


const CartWindow = styled.div`
    z-index: 10; 
`;
const BannerWrapper = styled.div`
    background-color: black;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    position: relative;
`;

const CartCount = styled.div`
    color: red;
    position: absolute;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    // border: 1px solid red;
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
`;
const CartButton = styled.button`
`;

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Nav = styled.div`
   display: flex;
   gap: 5%;
   justify-content: space-between;
   
`;

export const NavLink = styled(Link)`

`;

export const LinksContainer = styled.div`

`;

export const LinkGroupWrapper = styled.div`
    /* position: relative; */
    position: absolute;
`;

export const LinkGroup = styled.div`
    position: relative;
    background: magenta;
    height: 200px;
    display: flex;   
    flex-direction: column;
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

function Banner({
    // isAuthenticated, // TODO: ADD AUTHENTICATION LOGIC
    products
}) {


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

    useEffect(() => {
        typeof window !== "undefined" && getCart();
    }, [])



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

    // console.log({ totalItems: totalItems })

    useEffect(() => {
        setCartArray(cartArrayObj);
    }, [isLoading, cart]);

    console.log({ cartArrayObj: cartArrayObj });

    const [showHeadphones, setShowHeadphones] = useState();

    return (
        !isLoading ?
            <CartWindow >
                <BannerWrapper >
                    <NavContainer className="section-margin">
                        <Nav>
                            <NavLink
                                href="/"
                            >
                                <a>HOME</a>
                            </NavLink>
                            <LinksContainer>
                                <LinkGroupWrapper
                                    onMouseLeave={() => setShowHeadphones(false)}
                                >
                                    <NavLink
                                        href="/product/REGT200"

                                    >
                                        <a
                                            // onMouseEnter={() => console.log("mousey!!!!")}
                                            onMouseEnter={() => setShowHeadphones(true)}

                                        >HEADPHONES</a>
                                    </NavLink>
                                    {

                                        <motion.div
                                            animate={{ scaleY: showHeadphones ? 1 : 0 }}
                                            transition={{ duration: 0.2 }}
                                            style={{ originY: 0 }}
                                        >
                                            <LinkGroup>
                                                <svg className="nav-group-active" width="108" height="9" viewBox="0 0 108 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1="2.5" x2="108" y2="2.5" stroke="white" strokeWidth="3" />
                                                    <path d="M54 9L49.6699 2.25L58.3301 2.25L54 9Z" fill="white" />
                                                </svg>
                                                <NavLink
                                                    href="/product/REGT200"
                                                >
                                                    <a>RocketEar GT</a>
                                                </NavLink>
                                            </LinkGroup>
                                        </motion.div>

                                    }
                                </LinkGroupWrapper>
                            </LinksContainer>
                        </Nav>
                        <ButtonContainer>
                            <CartCount>
                                {/* TODO: PULL COUNT VALUE FROM USESTATE INSTEAD OF REDUX */}
                                <p>{totalItems}</p>
                            </CartCount>
                            <CartButton
                                onClick={() => setCartVisible(() => !cartVisible)}
                            >
                                Cart
                            </CartButton>
                        </ButtonContainer>
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
                />
                {/* </motion.div> */}
            </CartWindow >
            : <Loader />
    )
};



export default Banner;
