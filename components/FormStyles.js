import styled from 'styled-components'
import { theme, mq } from '../constants/theme';

const { colors } = theme;

export const Form = styled.form`

`;

export const Input = styled.input`
`;

export const Submit = styled.input.attrs({ type: 'submit' })`
`;

export const FormError = styled.div`
    color: red;
        margin: 0;
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: -.021rem;
        line-height: auto;
`;

export const FormLabel = styled.label`
        margin: 0;
    /* } */
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: -.021rem;
        line-height: auto;
`;

export const FormSectionTitle = styled.h4`
`;

export const FormSelect = styled.select`
    border: 1px solid rgba(207, 207, 207, .4);
    border-radius: .8rem;
    padding: 1.8rem 2rem;
    appearance: none;

    outline-color: ${colors.main} !important;
   

    /* font */
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: -.025rem;
    line-height: auto;
    color: rgba(0, 0, 0, .4);

    :focus {
        background-color: yellow t;
    }

    /* :hover {
     color: red;
     background: green;
    } */
    select {
        appearance: none;
    }    
    select:focus{
    border-color: gray;
    outline:none;
}

    .option:focus {
        appearance: none;
        :hover {
            color: red;
        }
    }
    
    option:hover, option:active{
    
    background:red !important;
    outline-color: red;
    }
    
    /* select:active, select:hover {
        outline: none;
    }    
    select:active, select:hover {
        outline-color: red;
    } */
    /* option:hover {
        background: green;
    }
    :focus > :checked { 
         background: #000 !important;
    }

    :focus {
        border-color: red !important;
    } */
    
    
`;

