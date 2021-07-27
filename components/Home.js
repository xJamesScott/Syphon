import styled from 'styled-components';
import { theme, mq } from '../constants/theme';

const { colors } = theme;

export const HomeBanner = styled.div`
    background: ${colors.accent5};
    color: ${colors.accent1};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 650px;
    overflow: hidden;
    /* z-index: 100; */

    .banner-divider {
        border-top: 1px solid ${colors.accent1};
        opacity: 30%;
        margin: 0; 
        /* z-index: -100; */
    }
    
    .home-banner-wrap {
        /* margin-top: ; */
        /* z-index: 10; */
        display: flex;
        justify-content: space-between;
    }

    .home-text { 
        /* z-index: -100; */
        flex: 1 1 35%;
    }

    .home-new {
        /* z-index: -100; */
    }

    .home-title { 
        /* z-index: -100; */
    }

    p { 
        /* z-index: -100; */
    }

    .home-bnr-img { 
        position: relative;
        flex: 1 1 50%;
        /* height: auto; */
        /* width: 632px;  */
        /* height: 100%;
        width: 100%; */
        border: 1px solid magenta;
        display: flex;
        justify-content: flex-end;
        align-items: center; 
        
        /* z-index: 100; */

        > * { 
            position: absolute;
            /* width: 100%; */
            /* height: 700px;
            max-width: 886px; */
            /* margin: auto; */
            /* width: 500px; */
            /* height: 500px; */
            /* left: -50%; */
            /* top: -50%; */
            z-index: 9;
        }
    }  
        
`;

export const FeatureProd = styled.div`
    position: relative;
    background: ${colors.main};
    


    
    
    .fprod-image { 
        position: relative;
        display: flex;
        justify-content: center;
    }

    .fprod-img-bg { 
        position: absolute;
    }

    .fprod-text { 

    }

    .fprod-button { 
        
    }
`;

export const HightLightProd = styled.div`
    .hprod-text { 

    }

    .hprod-button { 

    }

`;

export const MiniProdContainer = styled.div`

    .mprod-img{

    }

    .mprod-text-wrap {

    }

    .mprod-button {

    }

`;