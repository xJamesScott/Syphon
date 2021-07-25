import styled from 'styled-components';
import { theme, mq } from '../constants/theme';
import { motion } from "framer-motion";
import { useState } from "react";

const { colors } = theme;

const Button = styled.button`
    border: none;
    /* background: ${colors.accent1}; */
    background: transparent;
    height: fit-content;

    :hover {
        p { 
            color: ${colors.main} !important;
            opacity: 1;
            transition: all .25s ease;
        } 
    }
    transition: all .25s ease;

    /* layout */
    display: flex;
    gap: 1.3rem;
    align-items: center;
 
    p {
        font-size: 1.3rem;
        font-weight: bold;
        letter-spacing: .1rem;
        line-height: auto;
        color: ${colors.mainText};
        text-transform: uppercase;
        opacity: 60%;
        margin: 0;
        transition: all .25s ease;
    }

    &.prod-types {
        margin-bottom: 3rem;
    }
`;

const ButtonHollow = ({ value, className }) => {
    return (
        <Button
            className={className}
        >
            <p>{value}</p>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2" />
            </svg>
        </Button >
    );
};

export default ButtonHollow;