import styled from 'styled-components';
import { Spinner } from '@chakra-ui/react';

export const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    > div {
        position: fixed;
        right: 0;
        left: 0;
        top: 50%;
        margin-right: auto;
        margin-left: auto;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        > * {
            margin: auto;
            position: absolute;
        }
        
    }

    .load-text {
        text-align: center;
        background: rgba(255, 255, 255, 0.5);
        /* margin: auto; */
        animation: opacity 1.8s ease-in-out infinite;
        opacity: 1;
    }

    @keyframes opacity {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0
        }

        100% {
            opacity: 1;
        }
    }

    visibility: hidden;
    transition: opacity .3s ease;
    .processing {
        visibility: visible;
        opacity: 1;
        transition: opacity .3s ease;
    }

`;

export const Loader = styled(Spinner)`
    /* position: fixed;
    right: 0;
    left: 0;
    top: 50%;
    margin-right: auto;
    margin-left: auto; */
    height: 20rem;
    width: 20rem;
    /* z-index: 20; */
    /* /* min-height: 10em;
    width: 90%; */
    /* width: 30%; */

    &.button {
        height: 20px;
        width: 20px;
    }
`;