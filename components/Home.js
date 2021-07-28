import styled from 'styled-components';
import { theme, mq } from '../constants/theme';

const { colors } = theme;

export const HomeBanner = styled.div`
    /* background: ${colors.accent5}; */
    /* background: #0E0E0E; */
    justify-self: center;
    align-self: center;
    background: ${colors.accent7};
    /* background: #141414; */
    color: ${colors.accent1};
    display: flex;
    flex-direction: column;
    height: 700px;
    overflow: hidden;
    position: relative;
    


    > * {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin: 0 auto;
    }

    .banner-divider {
        border-top: 1px solid ${colors.accent1};
        width: 100%;
        opacity: 30%;
        margin: 0; 
        z-index: 10;
    }

    .home-img {
        position: absolute;
    }
    
    .home-banner-wrap {
        /* margin-top: ; */
        /* z-index: 10; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .home-text { 
        /* z-index: -100; */
        flex: 1 1 35%;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        > * {
            margin: 0;
        }

        button { 
            margin: 0 auto;
            margin-left: 0;
        }
    }

    .home-new {
        font-size: 1.4rem;
        letter-spacing: 1rem;
        font-weight: 400;
        opacity: 50%;
    }

    .home-title { 
        /* z-index: -100; */
        font-size: 5.6rem;
        line-height: 5.8rem;
    }

    p { 
        /* z-index: -100; */
        opacity: 50%;
    }

    .home-bnr-img { 
        position: relative;
        flex: 1 1 70%;
        /* border: 1px solid magenta; // testing for image container */
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
    color: ${colors.accent1};
    border-radius: .5rem;
    margin-top: 16.8rem;
    overflow: hidden;
    

    > * { 
        flex: 1 1 50%;
        margin-top: 6.6rem;
    }
    
    .fprod-image { 
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .fprod-img-bg { 
        position: absolute;
        width: 150%;
        height: 150%;
        /* left: -50%; */
        /* height: 100%; */
        /* width: 700px; */
        background: magenta;
        
    }

    .fprod-img-main { 
        /* z-index: 11; */
        /* width: 100%; */
        /* height: 100%; */
        z-index: 0;
    }
    

    /* TEXT */
    
    .fprod-text { 
        padding: 0 6rem;
        > * { 
            margin: 0;
        }
        z-index: 1;
        
    }

    .fprod-title { 
        color: ${colors.accent1}
    }

    .fprod-description { 
        line-height: 2.5rem;
        margin: 4.4rem 0;
    }

    .fprod-button { 
        
    }
`;

export const HighLightProd = styled.div`
    position: relative;
    margin-top: 4.8rem;
    height: 320px;

    .hprod-img {
        z-index:-1;
    }
    .hprod-text { 
        margin: auto 0;
        margin-left: 10%;
    }

    .hprod-button { 

    }

`;

export const MiniProdContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    margin-top: 4.8rem;
    

    height: 320px;

    > * {
        flex: 1 1 50%;
    }
    
    .mpro-img-wrap {
        position: relative;
    }

    .mprod-img{
        position: relative;
        width: 100%;
        height: 100%;
    }

    .mprod-text-wrap {
        background: ${colors.accent3};
       height: 100%;
       padding: 0 10rem;
        /* padding: 10rem; */
        /* margin: auto 10rem; */
    }

    .mprod-button {

    }

`;