import styled from 'styled-components';
import Image from 'next/image';

export const ProductPage = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProductSection = styled.div`
    display: flex;
    > * {
        flex-basis: 100%;
    }

    &.main-product {
        gap: 10%;
    }

    &.also-products {
        flex-direction: column;
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

export const NewTag = styled.p`

`;

export const ProductTitle = styled.h2`

`;

export const ProductPrice = styled.div`
    // use style from cart
`;

export const CartRow = styled.div`
    display: flex;
`;

export const QuantityWrapper = styled.div`
    display: flex;
`;


export const Increment = styled.p`
    // use style from cart
`;

export const Quantity = styled.p`

`;

export const AddCart = styled.button` // button
    
`;

export const SubSectionWrapper = styled.div`

`;

export const SubSectionTitle = styled.h3`
     &.also-products{
        text-align: center;
    }
`;

export const Info = styled.p`

`;

export const InfoWrapper = styled.div`

`;

export const BoxItemCount = styled.p`

`;

export const BoxItem = styled.p`

`;

export const IMGWrapper = styled.div`
      display: flex;
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
    > * {
        flex-basis: 35rem;
    }
`;

export const ProductWrapper = styled.div`
    
`;

export const ProductThumbnail = styled(Image)`

`;

export const ProductName = styled.h3`

`;

export const ProductTypeWrapper = styled.div`

`;

export const TypeIMGWrapper = styled.div`
    
`;

export const TypeIMG = styled(Image)`
  
`;

export const TypeTitle = styled.h4`

`;

export const ShopWrapper = styled.div` // link
    display: flex;
`;

export const ShopText = styled.p`

`;

export const ShopArrow = styled.div`

`;

export const AboutText = styled.div`

`;

export const AboutTitle = styled.h3`
    &.pop-word { // used for orange word "BEST"

    }

`;

export const AboutIMG = styled(Image)`

`;