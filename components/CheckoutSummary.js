import styled from 'styled-components';
import Image from 'next/image';
import { Button } from './Buttons'


export const CheckoutSummary = styled.div`
    flex: 1 1 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: min-content;
    gap: 1.6rem;
    
    h3, h4, h5 {
        margin: 0 0;
        flex: 1 1 100%;
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
    justify-content: center;
    width: 100%;
    gap: 5%;

    &.confirmation {
        flex-direction: column;
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
     * {
            margin: 0;
        }
    }
`;


export const TotalWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SummaryTotals = styled.h5`
    cursor: pointer;
`;

export const Cost = styled.h3`
    text-align: right;
`;

export const TextWrapper = styled.div`
`;

export const ProductTitle = styled.h4`

`;

export const ProductPrice = styled.p`

`;

export const PayButton = styled(Button)`

`;


