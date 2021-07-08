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
    IMGWrapper,
    ProductWrapper,
    ProductThumbnail,
    TypeIMGWrapper,
    TypeTitle,
    ShopWrapper,
    ShopText,
    ShopArrow,
    AboutTitle,
    AboutIMG
} from '../../components/ProductPage';


export const getStaticPaths = async () => {
    try {
        const res = await axios.get(`${process.env.AUTH_APP_URL}/api/products?call=all`);
        const paths = res.data.map((product) => {
            return {
                params: {
                    id: product.productId
                }
            }
        });
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        return error
    }
}

export const getStaticProps = async (context) => {
    try {
        const res = await axios.get(`${process.env.AUTH_APP_URL}/api/products?call=productId&productId=${context.params.id}`);

        if (!res.data.productId) { // on runs if fallback is set to true
            return {
                redirect: {
                    destination: process.env.AUTH_APP_URL,
                    permanent: false,
                },
            }
        };
        return {
            props: { product: res.data }
        }
    } catch (error) {
        return error
    };
};
const ProductInfo = ({ product }) => {
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
            <ProductSection>
                <MainIMG
                    src="/media/placeholderIMG.png" // product.featureIMG
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


        </ProductPage>
    );
};

export default ProductInfo;