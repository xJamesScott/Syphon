import styled from 'styled-components';
import Image from 'next/image';
import { Button, ButtonOrange } from './Buttons'
import { theme, mq } from '../constants/theme';

const { colors } = theme;

export const CheckoutSummary = styled.div`
    flex: 1 1 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: min-content;
    gap: 1.6rem;

    margin: 2rem 3.3rem;
    
    
    h3, h4, h5 {
        margin: 0 0;
        flex: 1 1 100%;
    }

    h3 { 
        font-size: 1.5rem;
        line-height: 2.5rem;
        letter-spacing: 0;
    }

    .item-info {
        h4 { 
            font-size: 1.4rem;
            line-height: 2.5rem;
            letter-spacing: 0;
            opacity: 50%;
        }
    }

    p { 
            font-size: 1.5rem;
            font-weight: bold;
            line-height: 2.5rem;
            letter-spacing: 0;
            opacity: 50%;
            margin: 0;
        }


    > * {
        width: 100%;
        margin: 0;

    }
`;

export const CheckoutProdIMG = styled(Image)`
    border: 1px solid black;
`;

export const ProductWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 5%;
    position: relative;

    .active-area {
        position: absolute;
        background: transparent;
        width: 110%;
        height: 110%;
        left: 0;
        right: 0;
        z-index: -1 ;
    }

    &.confirmation {
        gap: 1rem;
        
        > * {
            flex: 1 1 33%;
            /* display: flex;
            justify-content: flex-start;
            align-items: flex-start; */
            
        }
        h3 { 
            font-size: 1.3rem;
            line-height: 2.5rem;
            font-weight: bold;
            letter-spacing: 0;
        }
        
        h4 { 
            font-size: 1.4rem;
            line-height: 2.5rem;
            letter-spacing: 0;
            opacity: 50%;
        }

        p { 
            font-size: 1.5rem;
            font-weight: bold;
            opacity: 50%;
            text-align: right;
            flex: 2 1 10%;
        }
    }

    .prod-img-ty {
        /* align-self: center; */
        align-self: flex-start;
        width: 50px;
        flex: 0 0 50px;
    }

    h3 {

    }

    h4 {

    }

    p {
    }

    img {

    }

    .item-photo {
    }

    .item-info {
      display: flex;
      flex: 1 1 70%;
      flex-direction: column;
    }

    .name-quantity {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex: 2 1 45%;
        gap: 0;
        margin-bottom: auto;
     * {
            margin: 0;
        }
    }
`;

export const TotalWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const SummaryTotals = styled.p`
    cursor: pointer;

    &.checkout-summary {
        cursor: auto;
        font-size: 1.5rem;

    }

    &.ty-cost {
        opacity: 50%;
    }
`;

export const Cost = styled.h5`
    text-align: right;
    font-size: 1.8rem;
    &.ty-cost {
        font-size: 1.8rem;
        letter-spacing: 0;
    }
`;

export const TextWrapper = styled.div`
    justify-self: start;
    flex: 1 1 30%;
    p { 
        font-weight: bold;
        margin: 0;
    }
    .price {
        opacity: 50%;
    }
`;

export const ProductTitle = styled.h4`

`;

export const ProductPrice = styled.p`

`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    a { 
        width: 100%;
    }
`;
export const PayButton = styled(ButtonOrange)`
     width: 100%;

     &.processing {
        background: ${colors.accent4}; 
        pointer-events: none;
        cursor: not-allowed;
     }
     span { 
         display: flex;
         align-items: center;
         justify-content: center;
         gap: 1rem;
     }
`;


