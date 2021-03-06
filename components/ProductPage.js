import styled from 'styled-components';
import Image from 'next/image';
import { PopText } from './Text';
import { Quantity, IncrementQTY } from './Cart';
import { ButtonOrange } from './Buttons';
import ButtonHollow from './ButtonHollow';
import { theme, mq } from '../constants/theme';

const { colors } = theme;

export const ProductPage = styled.div`
    display: flex;
    flex-direction: column;

    @media ${mq.tablet.narrow.max} { 
        .type-main, .type-main.tm-right, .type-main.tm-left {
            flex-direction: column;
            align-items: center;
            text-align: center;

            margin-top: 12rem;
            > * {
            
            }
            
            .product-info{
                margin-top: 5.2rem;
            }
            
            h2 {
                margin-bottom: 3.2rem;
            }
            
            a {
                margin: 0 auto;
            }
            
            p {
                width: 65%;
                align-self: center;
                margin: 0 auto;
            }

            .info-desc {
                margin-top: 0;
                margin-bottom: 2.4rem;
            }

        }

        .about-product.main-about.prod-type {
            margin-bottom: 12rem;

        }
    }

    @media ${mq.phone.narrow.max} { 
        .type-main, .type-main.tm-right, .type-main.tm-left {
            p {
                width: 100%;
            }
            
        }
    }
`;

export const ProductSection = styled.div`
    display: flex;
    margin-top: 25rem;

    > * {
        flex-basis: 100%;
    }

    &.home {
        margin-top: 0;
    }

    &.main-product {
        gap: 10%;
    }

    &.features {
        gap: 12%;
        margin-top: 16rem;
        justify-content: space-between;
        /* flex-wrap: wrap; */
    }

   

    &.product-images {
        margin: auto;
        margin-top: 16rem;
        justify-content: space-between;
        
    }

    &.also-products {
        flex-direction: column;
        margin-top: 16rem;
    }
    

    &.about-product {
        margin: 16rem 0;

        > * {
            flex: 1 1 50%;
        }
    }

    &.main-about { 
        margin-top: 20rem;
    }

    &.tm-right {
        flex-direction: row-reverse;
    }
   
    /* responive including all children */

    /* tablet */

    @media ${mq.tablet.narrow.max} { 
         
       
        
        /* features section */

        &.features {
            flex-direction: column;
            gap: 12rem;
            margin-top: 12rem;

            .in-the-box {
                display: flex;
                justify-content: space-between;
                > * {
                    margin: 0;
                    flex: 1 1 50%;
                }

                .box-items {
                    display: flex;
                    flex-direction: column;
                    gap: 1.8rem;
                    * {
                        margin: 0;
                    }
                }
            }
        }

        /* product images section */

        &.product-images{
            margin-top: 12rem !important;
            .img-small-container{
                gap: 2rem;
                
            }
        }

        /* also products */

        &.also-products {
            width: 100%;
            .product-gallery {
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: 5rem;
                width: 100%;
                > * {
                    display: flex;
                    margin: 0;
                    flex: 1 1 33%;
                }
            }
        }

        &.main-about {
            flex-direction: column-reverse;
            text-align: center;
            margin-bottom: 12rem;

            .about-text {
                margin-top: 6.3rem;
                padding: 0 3vw;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            h3 {
                font-size: 5vw;
                margin-top: 0;
                margin-bottom: 2rem;
            }
        }
    }
    
    /* mobile */

    @media ${mq.phone.narrow.max} {
        flex-direction: column;

        /* Main section */

        &.main-product {
            margin-top: 6.5rem;
            gap: 3.2rem;
            
            * {
                margin: 0;
                gap: 3.2rem;
            }
            
            .cart-row{
                gap: 1.6rem;
                flex-wrap: wrap;
                > * {
                    flex: 1 0 45%;
                }

                .add-cart {
                    height: 100%;
                    margin: auto;
                    padding: 1rem;
                }
            }
        }

        /* features section */

        &.features {
            gap: 8.8rem;
            .in-the-box { 
                flex-direction: column;
                gap: 2.4rem;
            }
        }

        &.product-images {
            
            .img-wrapper {
                flex-direction: column;
                align-items: center;
            }
        }

        /* also like */

        &.also-products {
            width: 100%;
            .also-title {
                margin: 0;
                margin-bottom: 4rem;

            }
            .product-gallery {
                display: flex;
                gap: 5.6rem;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                > * {
                    width: 100%;
                }
            }
        }
        
        /* about section */

        &.main-about {
            .about-text {
                padding: 0;
            }
            h3 {
                font-size: 2.8rem;
            }
        }
    }

`;

export const MainIMGContainer = styled.div`

   
`;
export const MainIMG = styled(Image)`

`;

export const ProductInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 0;
    height: 100%;

    a {
        margin-right: auto;
    }
`;

export const NewTag = styled(PopText)`

`;

export const ProductTitle = styled.h2`
    margin: 1.6rem 0;
`;

export const ProductPrice = styled.h5`
    margin: 1.6rem 0;
`;

export const CartRow = styled.div`
    display: flex;
    gap: 1.6rem;
    height: 4.8rem;
    margin-top: 3rem;
`;

export const QuantityWrapper = styled(Quantity)`
    display: flex;
    height: 100%;
`;


export const Increment = styled(IncrementQTY)`
    // use style from cart
`;

// export const Quantity = styled.p`

// `;

export const AddCart = styled(ButtonOrange)` // button
        cursor: pointer !important;
        margin-right: auto;
        margin: 0;
        

        &.also-products {
             margin: auto;
        }
`;

export const SubSectionWrapper = styled.div`
    &.features {
        flex: 1 auto;
    }
`;

export const SubSectionTitle = styled.h3`
     &.also-products{
        text-align: center;
    }
`;

export const Info = styled.div`
    margin: 1.6rem 0;
`;

export const InfoWrapper = styled.div`
    display: flex;
    gap: 3%;

    
`;

export const BoxItemCount = styled.p`
    font-weight: bold;
    color: ${colors.main};
`;

export const BoxItem = styled.p`

`;

export const IMGWrapper = styled.div`
      display: flex;
      justify-content: space-between;
      justify-content: center;
      gap: 2rem;

    .prod-img-small {
    }
`;

export const IMGSmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ProductIMG = styled(Image)`

`;

export const ProductGallery = styled.div`
    display: flex;
    flex-direction: column;
    > * {
        flex-basis: 35rem;
    }
`;

export const ProductsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;

    > * {
        flex: 1 10 auto;
        width: 0;
        margin: auto;
        > * {
            margin: auto;
        }
    }

    @media ${mq.tablet.narrow.max} { 
        gap: 1rem;
    }
    
    .product-gallery {

    }
`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
  
    
`;

export const ProductThumbnail = styled(Image)`
      background: ${colors.accent3};
`;

export const ProductName = styled.h3`
    margin: auto;
    margin-top: 4rem;
    margin-bottom: 3.2rem;
`;

export const ProductTypesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    gap: 3rem;
    margin-top: 16rem;

    .mobile-types {
        display: flex;
        justify-self: center;
        width: 100%;
    }


    > * {
        flex: 1 1 284px;
    }
    
    @media ${mq.tablet.narrow.max} { 
        gap: 1rem;
        
        > * {
            flex: 1 1 223px;
        }
    }

    

    @media ${mq.phone.wide.max} { 
        flex-wrap: wrap;
        
        > * {
            flex: 1 0 100%;
        }
    }

`;

export const ProductTypeWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    margin-top: auto;

    &.mobile-menu {
        margin: auto 0;
        height: min-content;
        

    }


    .type-bg {
        position: absolute;
        bottom: 0;
        background: ${colors.accent3};
        height: 75%;
        max-height: 204px;
        width: 100%;
        z-index: 0;
        * {
             height: 100%;
        }
    }

    

    @media ${mq.tablet.narrow.max} { 
        .type-bg {
            max-height: 165px;
        }
    }
`;

export const TypeIMGWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    z-index: 10;

    ::before {
        content: "";
        position: absolute;
        background: transparent;
        z-index: -1;
        bottom: 0;
        width: 75%;
        box-shadow: 0px 2px 25px 10px #000000;
        opacity: 30%;
    }

    &.desktop-img.earphones {
        height: 125%;
        margin-bottom: 2rem;
    }
   
`;

export const TypeIMG = styled(Image)`
    
`;

export const TypeTitle = styled.h5`
    z-index: 10;
`;

export const ShopWrapper = styled(ButtonHollow)` // link
    display: flex;
    * {
        z-index: 10;
    }

`;

export const ShopText = styled.p`

    `;

export const ShopArrow = styled.div`

    `;

export const AboutText = styled.div`
padding-right: 12.5rem;
margin: auto 0;
`;

export const AboutTitle = styled.h3`
    font-size: 4rem;
    letter-spacing: .14rem;
    line-height: 4.4rem;
    
    .pop-word { // used for orange word "BEST"
        color: ${colors.main}
    }

`;

export const AboutIMG = styled(Image)`
    border-radius: .8rem;
`;