import styled from 'styled-components';
import { theme, mq } from '../constants/theme';

const { colors } = theme;

export const Button = styled.button`

`;

export const ButtonOrange = styled.button`
    border: none;
    background: ${colors.main};
    height: fit-content;
    padding: 1.5rem 3rem;
    cursor: pointer !important;

    :hover {
        background: ${colors.accent4}; 
        cursor: pointer !important;
        transition: color .25s ease; 
    }
    transition: color .25s ease;
    /* font */
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: .1rem;
    color: ${colors.accent1};
    text-transform: uppercase;
`;

export const ButtonBlack = styled(ButtonOrange)`
    background: ${colors.accent5};
    cursor: pointer;
    :hover {
        color: ${colors.accent5};
        background: ${colors.accent1};
    }
`;

export const ButtonWhite = styled.button`
    border: none;
    background: ${colors.accent1};
    height: fit-content;
    padding: 1.5rem 3rem;
    border: .1rem solid ${colors.mainText};

    :hover {
        background: ${colors.mainText};
        color: ${colors.accent1};
        transition: all .25s ease;
    }
    transition: all .25s ease;
    /* font */
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: .1rem;
    color: ${colors.mainText};
    text-transform: uppercase;
`;

export const ButtonBorder = styled(ButtonBlack)`
    background: transparent;
    color: ${colors.mainText};
    border: 1px solid ${colors.mainText};

    :hover {
        color: ${colors.accent1};
        background: ${colors.accent5};
    }
`;

export const ButtonHollow2 = styled.div`
      border: none;
    background: ${colors.accent1};
    height: fit-content;
    border: .1rem solid ${colors.mainText};

    :hover {
        background: ${colors.mainText};
        color: ${colors.accent1};
    }

    /* font */
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: .1rem;
    color: ${colors.mainText};
    text-transform: uppercase;
`;