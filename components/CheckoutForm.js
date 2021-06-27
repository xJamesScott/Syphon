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

export const CheckoutForm = styled(Form)`
* {
    display: block;
}
`;

export const CheckoutInput = styled(Input)`
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
   
`;

export const InputWrapper = styled.div`

`;




