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
import { theme, mq } from '../constants/theme';

const { colors } = theme;

// export const CheckoutPage = styled.div`
//     visibility: visible;
//     opacity: 1;
//     transition: opacity .3s ease;
    
//     &.processing {
//         visibility: hidden;
//         opacity: 0;
//         transition: opacity .3s ease;
//     }
// `;

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

    h3 { 
        letter-spacing: .114rem;
        margin-bottom: 4.1rem;
    }

    h4 { 
        font-size: 1.3rem;
        line-height: 2.5rem;
        letter-spacing: .093rem;
        color: ${colors.main};
    }

    .section-title {
        margin-bottom: 1.6rem;
    }

    .payment-details {
        margin-top: 6.1rem;
    }

    .payment-method {
        margin-bottom: 3.2rem;
    }

    
`;

export const CheckoutFormWrapper = styled.div`

`;

export const CheckoutForm = styled(Form)`
    display: flex;
    gap: 2.4rem;
    justify-content: space-between;
    position: relative;
    /* margin-bottom: 27.4rem; */

    .panel-container {
        margin-top: 14.5rem;
        background: ${colors.accent1};
        border-radius: .5rem;
        height: min-content;
        margin-bottom: 27.4rem;
    }

    .checkout-panel {
        flex: 1 1 70%;
    }
    .summary {
         flex: 1 1 30%;
         position: sticky;
         top: 15%;
    }
    
    .submit-error {
        font-size: 1.8rem;
        position: absolute; 
        width: 50%;
        color: rgba(255, 71, 71, 1);
        
    }

/* 
    * {
        display: block;
    } */
`;

export const CheckoutInput = styled(Input)`
    width: 100%;
    border: 1px solid rgba(207, 207, 207, .4);
    border-radius: .5rem;
    padding: 2.4rem 1.8rem;
    outline: none;

    /* font */
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: -.025rem;
    line-height: auto;
    color: rgba(0, 0, 0, .4);

    ::placeholder {
        opacity: 50%;
    }

    &.error {
        border: 1.5px solid red;
    }

    
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
    display: flex;
    flex-direction: column;
    gap: .9rem;
   
    .label-error {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10%;
    }

    &.card-details {
        flex: 1 2 50%;
    }

    &.quarter {
        flex: 1 1 25%;
    }
`;

export const NoItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10rem 0;

    a { 
        width: 50%;
    }

`;




