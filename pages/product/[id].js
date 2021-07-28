import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { cartActions } from '../../store/cart'
import { useDispatch } from 'react-redux';
import DOMPurify from 'dompurify';
import Cookie from 'js-cookie';
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
    // Quantity,
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
    ProductsContainer,
    ProductName,
    ProductThumbnail,
    ProductTypesContainer,
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

import ButtonHollow from '../../components/ButtonHollow';



export const getStaticPaths = async () => {
    const res = await axios.get(`${process.env.AUTH_APP_URL}/api/products?call=all`);
    const paths = res.data.map((product) => {
        return {
            params: {
                id: product.productId,
                all: product
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
        const res = await axios.get(`${process.env.AUTH_APP_URL}/api/products?call=productId&productId=${context.params.id}`);

        return {
            props: {
                product: res.data,
            }
        }
    } catch (error) {
        return error
    };
};


const ProductInfo = ({ product }) => {

    // TODO: GET ACTIONS, REFACTOR WITH CODE FROM items.js page

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

    const [productCount, setProductCount] = useState(1);
    const [alsoProducts, setAlsoProducts] = useState([]);

    const getProducts = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/products?call=all&not=${product.productId}`);
            setAlsoProducts(res.data);

        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const currentProduct = {
        name: product.name,
        productId: product.productId,
        type: product.productType,
        price: product.price,
        quantity: productCount
    }

    const addItem = async () => {
        dispatch(cartActions.setCartCurrent(currentProduct))
    };

    // const features = DOMPurify.sanitize(product.features);
    const features = product.features;

    return (
        <ProductPage
            className="section-margin page"
        >
            {/* SECTION - MAIN */}

            <ProductSection className="main-product">
                <MainIMG
                    src="/media/placeholderIMG.png" // product.thumbnailIMG - (smaller version is used on other pages (diff component))
                    width={540}
                    height={560}
                />
                <ProductInfoWrapper >
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
                    <ProductPrice>
                        $ {product.price.toLocaleString('en')}
                    </ProductPrice>
                    <CartRow>
                        <QuantityWrapper>
                            <Increment
                                onClick={productCount > 1 ? () => setProductCount(productCount - 1) : null}
                            >
                                -
                            </Increment>
                            <p>
                                {productCount}
                            </p>
                            <Increment
                                onClick={() => setProductCount(productCount + 1)}
                            >
                                +
                            </Increment>
                        </QuantityWrapper>
                        <AddCart
                            onClick={addItem}
                        >
                            {/* sends cart action via redux with quantity from useState */}
                            ADD TO CART
                        </AddCart>
                    </CartRow>
                </ProductInfoWrapper>
            </ProductSection>

            {/* SECTION - FEATURES */}

            <ProductSection
                className="features"
            >
                <SubSectionWrapper className="features">
                    <SubSectionTitle>
                        FEATURES
                    </SubSectionTitle>

                    <Info
                        dangerouslySetInnerHTML={{ __html: features }}
                    />
                </SubSectionWrapper>
                <SubSectionWrapper>
                    <SubSectionTitle>
                        IN THE BOX
                    </SubSectionTitle>
                    {
                        product.inTheBox.map((items, i) => {
                            return (
                                <>
                                    <InfoWrapper key={"in-box" + i}>
                                        <BoxItemCount>
                                            {Object.keys(items)}
                                        </BoxItemCount>
                                        <BoxItem>
                                            {Object.values(items)}
                                        </BoxItem>
                                    </InfoWrapper>
                                </>
                            )
                        })

                    }
                </SubSectionWrapper>
            </ProductSection>

            {/* IMAGES SECTION */}

            <ProductSection
                class="product-images"
            >
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
                    <ProductsContainer
                        className="product-gallery"
                    >
                        {
                            alsoProducts.filter((item, i) => i < 3).map((item, j) => {
                                return (
                                    <ProductWrapper
                                        id={item.name + j}
                                    >
                                        <ProductThumbnail
                                            src="/media/placeholderIMG.png" // product.thumbnailIMG
                                            width={350}
                                            height={318}
                                        />
                                        <ProductName>
                                            {item.name}
                                        </ProductName>
                                        <AddCart
                                            className="also-products"
                                        >
                                            SEE PRODUCT
                                        </AddCart>
                                    </ProductWrapper>
                                )
                            })
                        }
                    </ProductsContainer>

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
                </ProductGallery>
            </ProductSection >

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
        </ProductPage >
    );
};

export default ProductInfo;