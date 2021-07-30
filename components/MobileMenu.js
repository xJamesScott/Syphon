import styled from 'styled-components';
import { theme, mq } from '../constants/theme';

const { colors } = theme;

export const MenuButton = styled.svg`

`;

export const MobileBanner = styled.div`
    /* display: none; */
    height: 9rem;
    /* width: 100%; */
    /* background: ${colors.accent7}; */
    /* background: magenta; */
    /* position: fixed; */
    /* top: 0; */
    /* left: 0;
    right: 0;
    z-index: 5; */
    gap: 4.2rem;



    /* > * {
        flex:1 1 auto;
    } */
    

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
    /* color: magenta; */
    /* background: blue; */
    background: ${colors.opaque1};
    /* opacity: 30%; */
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    /* left: 0; */
    z-index: 15;

    .mobile-types {
        justify-content: space-between !important;
        /* width: 100%; */
        /* background: green; */
        /* background: ${colors.accent1}; */
        /* margin: 0; */
        display: flex;
        align-items: center;
        height: 340px;
        /* padding: 0 3.9rem; */
    }

    .mobile-menu-container{
        display: flex;
        width: 100%;
        background: ${colors.accent1};
    }
`;

export const MobileContainer = styled.div`
    display: none;
    /* height: 9rem; */
    /* width: 100%; */
    /* background: ${colors.accent7}; */
    /* background: magenta; */
    /* position: sticky; */
    position: relative;
    /* height: 100vh; */
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    /* gap: 4.2rem; */

    .mobile-container {
        height: 9rem;
        background: ${colors.accent7};
    }

    @media ${mq.tablet.narrow.max} { 
        display: flex;
        /* flex-direction: column-reverse; */
        flex-direction: column;
    }

    /* > * {
        flex:1 1 auto;
    } */
    

`;

// const MobileMenu = () => {
//     return(
//         <MenuContainer>
//                 <div>yoooooooooooooooooooo</div>
//         </MenuContainer>
//     )
// };

// export default MobileMenu;