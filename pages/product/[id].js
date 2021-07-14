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
            const res = await axios.get(`/api/products?call=all&not=${product.productId}`);
            setAlsoProducts(res.data);

        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

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

    const features = DOMPurify.sanitize(product.features);

    return (
        <ProductPage
            className="section-margin"
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
                        {product.description}
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
                            <Quantity>
                                {productCount}
                            </Quantity>
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

                    <Info>
                        <div
                            dangerouslySetInnerHTML={{ __html: features }}
                        // TODO: PROOFREAD
                        >
                        </div>
                    </Info>
                </SubSectionWrapper>
                <SubSectionWrapper>
                    <SubSectionTitle>
                        IN THE BOX
                    </SubSectionTitle>
                    {
                        product.inTheBox.map(items => {
                            return (
                                <>
                                    <InfoWrapper>
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
                    <ProductsContainer>
                        {
                            alsoProducts.filter((item, i) => i < 3).map((item) => {
                                return (
                                    <ProductWrapper>
                                        <ProductThumbnail
                                            src="/media/placeholderIMG.png" // product.thumbnailIMG
                                            width={350}
                                            height={318}
                                        />
                                        <ProductName>
                                            {item.name}
                                        </ProductName>
                                        <AddCart>
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
                                    {/* use icon-arrow-right.svg */}
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
                                    {/* TODO: use source from server */}
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
                    </ProductTypesContainer>
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


        </ProductPage >
    );
};

export default ProductInfo;