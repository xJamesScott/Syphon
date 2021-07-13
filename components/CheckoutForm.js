import {
    Form,
    Input,
    Submit,
    FormError,
    FormLabel,
    FormSectionTitle
} from './FormStyles';

import Image from 'next/image';

import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 1 1 70%;
    gap: 1.6rem;
    padding: 4.8rem;
    padding-top: 0;
    h3, h4, h5 {
        margin: 0 0;
        flex: 1 1 100%;
    }
`;

export const CheckoutFormWrapper = styled.div`

`;

export const CheckoutForm = styled(Form)`
    display: flex;
    gap: 2.4rem;
    justify-content: space-between;

/* 
    * {
        display: block;
    } */
`;

export const CheckoutInput = styled(Input)`
    width: 100%;
    
    &#card-number {

    }

    &#expiration {

    }

    &#security-code {

    }

`;


export const CheckoutSubmit = styled(Submit)`
`;

export const CheckoutFormError = styled(FormError)`
`;

export const CheckoutInputLabel = styled(FormLabel)`
`;

export const CheckoutSectionTitle = styled(FormSectionTitle)`
`;

export const PaymentsContainer = styled.div`

`;

export const PaymentButton = styled.label`
    border: 1px solid black;
`;

export const PaymentIcon = styled(Image)`

`;

export const CardInfo = styled.div`
   display: flex;
   gap: 2rem;
   justify-content: center;
   /* align-items: center; */
   align-items: flex-end;

`;

export const InputWrapper = styled.div`
    flex: 1 2 40%;
    justify-content: flex-end;
   
    .label-error {
        display: flex;
        gap: 10%;
    }

    &.card-details {
        flex: 1 2 50%;
    }

    &.quarter {
        flex: 1 1 25%;
    }
`;




