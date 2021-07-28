import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { cartActions } from '../store/cart'
import { useDispatch } from 'react-redux';
import { Loader } from '../components/Loader';
import styled from 'styled-components';
import { theme, mq } from '../constants/theme';
import {
    ProductPage,
    ProductSection,
    MainIMG,
    ProductInfoWrapper,
    NewTag,
    ProductTitle,
    Info,
    AddCart,
    ProductTypesContainer,
    ProductTypeWrapper,
    TypeIMGWrapper,
    TypeIMG,
    TypeTitle,
    ShopWrapper,
    AboutText,
    AboutTitle,
    AboutIMG
} from '../components/ProductPage';

export const getStaticPaths = async () => {
    const res = await axios.get(`${process.env.AUTH_APP_URL}/api/products?call=types`);
    const paths = res.data.map((product) => {
        return {
            params: {
                productType: product
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    try {
        const res = await axios.get(`${process.env.AUTH_APP_URL}/api/products?call=productType&productType=${context.params.productType}`);

        return {
            props: {
                products: res.data,
                prodType: context.params.productType
            }
        }
    } catch (error) {
        return error
    };
};

const ProdTypeInfo = ({ products, prodType }) => {

    const { colors } = theme;
    const TypeBanner = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 16.5rem;
        /* background: ${colors.accent5}; */
        background: ${colors.accent7};
        color: white;
        .banner-divider{
            /* width: 100%; */
            border-top: 1px solid ${colors.accent1};
            opacity: 30%;
            margin: 0;

        }
        
        h2 { 
            margin: auto;
        }

    `;

    const router = useRouter();
    if (typeof window === 'undefined') {
        if (router.query.post?.startsWith('redir')) {
            throw new Error('render should not occur for redirect');
        };
    };

    if (typeof window !== 'undefined' && !window.initialHref) {
        window.initialHref = window.location.href

    };

    if (router.isFallback) return <Loader speed=".65s" thickness=".2rem" /> // only runs if fallback is set to true

    return (
        <div
            className="page"
        >
            <TypeBanner>
                <div
                    className="section-margin banner-divider"
                />
                <h2>
                    {prodType}
                </h2>
            </TypeBanner>
            <ProductPage
                className="section-margin">
                {
                    products.map((product, i) => {
                        return (
                            <ProductSection
                                className={i % 2 === 0 ? "main-product type-main tm-left" : "main-product type-main tm-right"}
                            >
                                <MainIMG
                                    src="/media/placeholderIMG.png" // product.thumbnailIMG - (smaller version is used on other pages (diff component))
                                    width={540}
                                    height={560}
                                />
                                <ProductInfoWrapper>
                                    {
                                        product.newProduct &&
                                        <NewTag>
                                            NEW PRODUCT
                                        </NewTag>
                                    }
                                    <ProductTitle>
                                        {product.name}
                                    </ProductTitle>
                                    <Info>
                                        <p>{product.description}</p>
                                    </Info>
                                    <AddCart>SEE PRODUCT</AddCart>
                                </ProductInfoWrapper>
                            </ProductSection>
                        );
                    })
                }

                <ProductTypesContainer>
                    {/* HEADPHONES */}
                    <ProductTypeWrapper>
                        <div className="type-bg" />
                        <TypeIMGWrapper>
                            <TypeIMG
                                src="/media/prod-types/headphones.png" // get from server link
                                width={123}
                                height={160}
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
                        <TypeIMGWrapper>
                            <TypeIMG
                                src="/media/prod-types/speakers.png" // get from server link
                                width={123}
                                height={160}
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
                        <TypeIMGWrapper>
                            <TypeIMG
                                src="/media/prod-types/earphones.png" // get from server link
                                width={178}
                                height={161}
                                fill="intrinsic"
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

                <ProductSection
                    className="about-product"
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
            </ProductPage>
        </div>
    );
};

export default ProdTypeInfo;