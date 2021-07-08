import styled from 'styled-components';
import { Spinner } from '@chakra-ui/react';

export const LoaderContainer = styled.div`
    display: flex;

`;

export const Loader = styled(Spinner)`
    position: fixed;
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    height: 20rem;
    width: 20rem;
    /* /* min-height: 10em;
    width: 90%; */
    /* width: 30%; */
`;