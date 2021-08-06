import axios from 'axios';
import products from '../backend/dbHelper';
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
    MainIMGContainer,
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
    const res = await products("types", {});
    const paths = res.map((product) => {
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
        console.log("productType Try!")
        const res = await products("productType", { productType: context.params.productType });
        return {
            props: {
                products: JSON.parse(JSON.stringify(res)),
                prodType: JSON.parse(JSON.stringify(context.params.productType))
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
        background: ${colors.accent7};
        color: white;
        .banner-divider{
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

                                {/* desktop image */}

                                <div
                                    className="desktop-img round-border"
                                >
                                    <MainIMG
                                        src={product.thumbnailIMG.desktop}
                                        width={540}
                                        height={560}

                                    />
                                </div>

                                {/* tablet image */}

                                <div
                                    className="tablet-img round-border"
                                >
                                    <MainIMG
                                        src={product.thumbnailIMG.tabletType}
                                        width={689}
                                        height={352}
                                    />
                                </div>

                                {/* mobile image */}

                                <div
                                    className="mobile-img round-border"
                                >
                                    <MainIMG
                                        src={product.thumbnailIMG.mobile}
                                        width={327}
                                        height={352}
                                    />
                                </div>
                                <ProductInfoWrapper
                                    className="product-info"
                                >
                                    {
                                        product.newProduct &&
                                        <NewTag className="new-product">
                                            NEW PRODUCT
                                        </NewTag>
                                    }
                                    <ProductTitle>
                                        {product.name}
                                    </ProductTitle>
                                    <Info
                                        className="info-desc"
                                    >
                                        <p>{product.description}</p>
                                    </Info>
                                    <a href={`/product/${product.productId}`}>
                                        <AddCart>SEE PRODUCT</AddCart>
                                    </a>
                                </ProductInfoWrapper>
                            </ProductSection>
                        );
                    })
                }

                <ProductTypesContainer>
                    {/* HEADPHONES */}
                    <ProductTypeWrapper
                        className="product-info"
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
                    <ProductTypeWrapper>
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
                    <ProductTypeWrapper>
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

                <ProductSection
                    className="about-product main-about prod-type"
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
            </ProductPage>
        </div>
    );
};

export default ProdTypeInfo;