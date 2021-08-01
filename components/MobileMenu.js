import styled from 'styled-components';
import { theme, mq } from '../constants/theme';

const { colors } = theme;

export const MenuButton = styled.svg`
    cursor: pointer;
`;

export const MobileBanner = styled.div`
    height: 9rem;
    gap: 4.2rem;

    .mobile-menu-btn {
        display: flex;
        align-items: center;
    }

    .nav-icons {
        justify-self: end;
        flex:1 1 100%;
        display: flex;
        justify-content: flex-end;
    }

    a {
        justify-self: start;
        display: flex;
        align-items: center;
        svg {
            display: flex;
            align-items: center; 
        }
    }

    @media ${mq.tablet.narrow.max} { 
        display: flex;
        align-items: center;
    }

    @media ${mq.phone.narrow.max} { 
        justify-content: space-between;
        > * {
            flex: 1 1 100%;
        }
       
        .nav-icons{
            justify-content: flex-end;
        
        }
    }
    
`;

export const MobileMenu = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 0;
    background: ${colors.opaque1};
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    z-index: 15;

    .mobile-types.mobile {
        justify-content: space-between !important;
        display: flex;
        align-items: center;
        min-height: 340px;
        
        @media ${mq.tablet.narrow.max} { 
            min-height: 750px;
            margin: 3.5rem !important;
        }
    }

    .mobile-menu-container{
        display: flex;
        width: 100%;
        background: ${colors.accent1};
    }
`;

export const MobileContainer = styled.div`
    display: none;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;

    .mobile-container {
        height: 9rem;
        background: ${colors.accent7};
    }

    @media ${mq.tablet.narrow.max} { 
        display: flex;
        flex-direction: column;
    }

`;
