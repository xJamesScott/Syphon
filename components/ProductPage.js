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
`;

export const ProductSection = styled.div`
    display: flex;

    margin-top: 25rem;
    > * {
        flex-basis: 100%;
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

        gap: ;
        > * {
            flex: 1 1 50%;
        }

    }

    &.tm-right {
        flex-direction: row-reverse;
    }
   
`;

export const MainIMG = styled(Image)`
   /* width: 800px; */
`;

export const ProductInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto 0;
    height: 100%;
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
      /* justify-content: center; */
      justify-content: space-between;
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
    /* margin: auto; */
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
    > * {
        flex: 1 1 284px;
    }
    /* margin: auto; */

    /* > * {
        flex: 1 1 min-content;
    } */
`;

export const ProductTypeWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    /* padding-bottom: 3rem; */
    

    .type-bg {
        position: absolute;
        bottom: 0;
        background: ${colors.accent3};
        height: 75%;
        width: 100%;
        z-index: -1;
    }
`;

export const TypeIMGWrapper = styled.div`
    
`;

export const TypeIMG = styled(Image)`
  
`;

export const TypeTitle = styled.h5`

`;

export const ShopWrapper = styled(ButtonHollow)` // link
    display: flex;

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

`;