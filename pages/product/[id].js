// import { headphones } from '../utils/testSyphonCart';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Loader } from '../../components/Loader';
import {
    ProductPage,
    ProductSection,
    MainIMG,
    ProductInfoWrapper,
    ProductTitle,
    Increment,
    NewTag,
    ProductPrice,
    CartRow,
    QuantityWrapper,
    Quantity,
    AddCart,
    SubSectionTitle,
    SubSectionWrapper,
    Info,
    InfoWrapper,
    BoxItemCount,
    BoxItem,
    IMGWrapper,
    ProductIMG,
    IMGSmallContainer,
    ProductWrapper,
    ProductGallery,
    ProductName,
    ProductThumbnail,
    ProductTypeWrapper,
    TypeIMGWrapper,
    TypeIMG,
    TypeTitle,
    ShopWrapper,
    ShopText,
    ShopArrow,
    AboutText,
    AboutTitle,
    AboutIMG
} from '../../components/ProductPage';


export const getStaticPaths = async () => {
    // TESING

    // const res = [{
    //     name: "yooo",
    //     productId: "REGT200"
    // }]

    // return {
    //     params: {
    //         paths: [{ id: "REGT200" }],
    //         fallback: false
    //     }
    // }


    // TESING

    // try {
    //    

    const res = await axios.get(`${process.env.AUTH_APP_URL}/api/products?call=all`);
    const paths = res.data.map((product) => {
        console.log({ "product!!!!": product })
        return {
            params: {
                id: product.productId
            }
        }

        // return {
        //     params: {
        //         id: "REGT200"
        //     }
        // }
    });
    return {
        paths,
        fallback: false
    }
    // } catch (error) {
    //     return error
    // }


}

export const getStaticProps = async (context) => {
    // try {
    //     // const res = await axios.get(`${process.env.AUTH_APP_URL}/api/products?call=productId&productId=${context.params.id}`);

    //     // if (!res.data.productId) { // on runs if fallback is set to true
    //     //     return {
    //     //         redirect: {
    //     //             destination: process.env.AUTH_APP_URL,
    //     //             permanent: false,
    //     //         },
    //     //     }
    //     // };
    //     // return {
    //     //     props: { product: res.data }
    //     // }

    //     return {
    //         props: {
    //             product: {
    //                 productId: "REGT200",
    //                 name: "yo"
    //             }
    //         }
    //     }
    // } catch (error) {
    //     return error
    // };

    return {
        props: {
            product: {
                productId: "REGT200",
                name: "yo"
            }
        }
    }
};
const ProductInfo = ({ product }) => {
    // TESTING

    // return (
    //     <div>
    //         yo
    //     </div>
    // )


    // TESTING

    // TODO: GET ACTIONS, REFACTOR WITH CODE FROM items.js page

    // console.log("yoooo!")
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

    // TODO: CONVERT NUMBERS TO COMMA FORMAT - (1234567.89).toLocaleString('en') 

    return (
        <ProductPage
            className="section-margin"
        >
            {/* SECTION - MAIN */}
            <ProductSection>
                <MainIMG
                    src="/media/placeholderIMG.png" // product.thumbnailIMG - (smaller version is used on other pages (diff component))
                    width={540}
                    height={560}
                />
                <ProductInfoWrapper>
                    {
                        //  ONLY RENDER IF newProduct TRUE
                        <NewTag>
                            NEW PRODUCT
                        </NewTag>
                    }

                    <ProductTitle>
                        {/* product.name */}
                    </ProductTitle>
                    <Info>
                        {/* product.description */}
                    </Info>
                    <ProductPrice>
                        $ {/* product.price.toLocaleString('en')  */}
                    </ProductPrice>
                    <CartRow>
                        <QuantityWrapper>
                            <Increment>
                                -
                            </Increment>
                            <Quantity>
                                {/* value is controlled by state via increment buttons */}
                            </Quantity>
                            <Increment>
                                +
                            </Increment>
                        </QuantityWrapper>
                        <AddCart>
                            {/* sends cart action via redux with quantity from useState */}
                            ADD TO CART
                        </AddCart>
                    </CartRow>
                </ProductInfoWrapper>
            </ProductSection>

            {/* SECTION - FEATURES */}
            <ProductSection>
                <SubSectionWrapper>
                    <SubSectionTitle>
                        FEATURES
                    </SubSectionTitle>
                    <Info>
                        {/* product.features */}
                    </Info>
                </SubSectionWrapper>
                <SubSectionWrapper>
                    <SubSectionTitle>
                        IN THE BOX
                    </SubSectionTitle>
                    <InfoWrapper>
                        {
                            // MAP OVER product.intTheBox object
                            <>
                                <BoxItemCount>
                                    {/* each key or val for product.inTheBox (object) - box item count*/}x
                                </BoxItemCount>
                                <BoxItem>
                                    {/* each key or val for product.inTheBox (object)  */}
                                </BoxItem>
                            </>
                        }
                    </InfoWrapper>
                </SubSectionWrapper>
            </ProductSection>

            {/* IMAGES SECTION */}

            <ProductSection>
                <IMGWrapper>
                    <IMGSmallContainer>
                        <ProductIMG
                            className="prod-img-small"
                            src="/media/placeholderIMG.png" // product.supportIMG1
                            width={445}
                            height={280}
                        />
                        <ProductIMG
                            className="prod-img-small"
                            src="/media/placeholderIMG.png" // product.supportIMG2
                            width={445}
                            height={280}
                        />
                    </IMGSmallContainer>
                    <ProductIMG
                        src="/media/placeholderIMG.png" // product.featureIMG
                        width={635}
                        height={592}
                    />
                </IMGWrapper>
            </ProductSection>

            {/* SECTION - YOU MAY ALSO LIKE */}

            <ProductSection className="also-products">
                <SubSectionTitle
                    className="also-products"
                >
                    YOU MAY ALSO LIKE
                </SubSectionTitle>
                <ProductGallery>

                    {
                        // MAP OVER ALL OF THE OTHER PRODUCTS AND RETURN FIRST 3
                        <ProductWrapper>
                            <ProductThumbnail
                                src="/media/placeholderIMG.png" // product.thumbnailIMG
                                width={350}
                                height={318}
                            />
                            <ProductName>
                                {/* product.name */}
                            </ProductName>
                            <AddCart>
                                SEE PRODUCT
                            </AddCart>
                        </ProductWrapper>

                    }

                    {/* HEADPHONES */}
                    <ProductTypeWrapper>
                        <TypeIMG
                            src="/media/placeholderIMG.png" // get from server link
                            width={123}
                            height={160}
                        />
                        <TypeTitle>
                            HEADPHONES
                        </TypeTitle>
                        <ShopWrapper>
                            <ShopText>
                                SHOP
                            </ShopText>
                            <ShopArrow>
                                {">"}
                            </ShopArrow>
                        </ShopWrapper>
                    </ProductTypeWrapper>

                    {/* SPEAKERS */}
                    <ProductTypeWrapper>
                        <TypeIMG
                            src="/media/placeholderIMG.png" // get from server link
                            width={123}
                            height={160}
                        />
                        <TypeTitle>
                            SPEAKERS
                        </TypeTitle>
                        <ShopWrapper>
                            <ShopText>
                                SHOP
                            </ShopText>
                            <ShopArrow>
                                {">"}
                            </ShopArrow>
                        </ShopWrapper>
                    </ProductTypeWrapper>

                    {/* EARPHONES */}
                    <ProductTypeWrapper>
                        <TypeIMG
                            src="/media/placeholderIMG.png" // get from server link
                            width={123}
                            height={160}
                        />
                        <TypeTitle>
                            EARPHONES
                        </TypeTitle>
                        <ShopWrapper>
                            <ShopText>
                                SHOP
                            </ShopText>
                            <ShopArrow>
                                {">"}
                            </ShopArrow>
                        </ShopWrapper>
                    </ProductTypeWrapper>
                </ProductGallery>
            </ProductSection>

            <ProductSection>
                <AboutText>
                    <AboutTitle>
                        BRINGING YOU THE
                        <div className="pop-word">BEST</div>
                        AUDIO GEAR
                    </AboutTitle>
                    <Info>
                        Located at the heart of New York City, Syphon is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Syphon the best place to buy your portable audio equipment.
                    </Info>
                </AboutText>
                <AboutIMG
                    src="/media/placeholderIMG.png" // get from server link
                    width={540}
                    height={588}
                />
            </ProductSection>


        </ProductPage>
    );
};

export default ProductInfo;