import styled from 'styled-components';
import { theme, mq } from '../constants/theme';

const { colors } = theme;

export const HomeContainer = styled.div`
    
    @media ${mq.tablet.narrow.max} { 
        
        .home-banner-wrap {
            height: 100%;
            > *, home-bnr-img{
            }
        }
        
        .feature-prod {
            align-items: center;
            justify-content: center;
            
            .home-feature.home {
                width: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 6.4rem;
                padding: 4rem 0;
                > * {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
            } 

            .fprod-text {
                margin: 0;
                width: 50vw;
                padding: 0;
                text-align: center;
            }
        }
        
        .prod-type-container, .prod-type-wrap {
            /* height: auto !important; */
            flex: 1 1 30%;
            width: 100%;
            > * {
                /* height: auto !important; */
            }

            .type-bg {
                /* max-height: 165px;
                height: 100%;
                width: 100%; */
                /* background: blue !important; */
            }

            h5, button {
                margin: 0;
            }

            h5 {
                margin-top: 4rem;
            }

            a {
                margin-top: 1.7rem;
            }
        }

        .hprod {
           
            /* .hpro */
            position: absolute;

            left: 0;
            .hprod-img-container.tablet-img {
            right: -20% !important;
            /* left: auto !important; */
           }
           
            .hprod-img-container.mobile-wide-img {
                left: auto;
                right: -400px !important;
                > * {
                    position: absolute;
                /* right: -40%; */
                left: 0;
                }
                
            }

            .hprod-img-container.mobile-img {
                right: -100px !important;
                > * {
                    position: absolute;
                /* right: -40%; */
                left: 0;
                }
            }
        }

        .mini {
            gap: 1.5rem;
            flex-wrap: wrap;
            overflow: hidden;
            height: 100%;
            /* height: 100%; */
            > * {
                flex: 1 1 48% !important;
                height: 320px !important;
                /* width: 100% !important; */
                
            }
            .mprod-text {
                padding: 0 4rem;
            }

            .mprod-img {
                height: auto;
            }
            .mprod-img-wrap {
                position: relative;
            }
            
            .mprod-img.tablet-img {
                display: block ;
                /* position: relative !important; */
                /* left: -10% !important; */
                top: -45%;
                /* right: auto !important; */
                > * {
                    position: relative;
                }
            }
        }
    } 
    
    @media ${mq.phone.wide.max} { 
        .mini {
            .mprod-img.tablet-img.hide-wide-m {
            display: none ;
        }

        .mprod-img.mobile-wide-img {
            display: block;
            top: -40%;
            /* left: -20%; */
        }
        .mprod-text {
                padding: 0 1rem;
        }
    }
    }
   
    @media ${mq.phone.narrow.max} { 
        
        .home-banner {
            height: 600px;

            .home-text {
                padding: 0 3rem;
            }
        }

        .prod-types {
            margin-top: 4rem;
            .prod-type-container {
                margin-top: 0;
            }
        }

        .feature-prod {
            .fprod-text {
                width: 100%;
                padding: 0 2rem; 
            }
            .fprod-title {
                font-size: 3.6rem;
                line-height: 4rem;
            }
            .fprod-img-bg {
                max-height: 558px;
                max-width: 558px;
            }
        }
        
        .prod-type-container, .prod-type-wrap {
            flex-direction: column;
        }
        
        .mini {
            .mprod-img.mobile-img {
                display: block !important;
                /* left: -10%; */
                > * {
                    /* left: -50%; */
                }
            }
        }
    }
    
`;

export const HomeBanner = styled.div`
    justify-self: center;
    align-self: center;
    background: ${colors.accent7};
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

    /* responsive for all children */

    /* tablet */
    
    @media ${mq.tablet.narrow.max} { 
        .home-banner-wrap { 
            position: relative;
            display: flex;
            margin: auto;
            text-align: center;
            justify-content: center;
        }

        .home-text { 
            z-index: 2;
            display: flex;
            align-items: center;
            max-width: 380px;
            button {
                margin: 0;
            }
        }

        .home-bnr-img { 
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            z-index: 1;
        }

       
    }

    /* mobile */

    @media ${mq.phone.narrow.max} { 
        .home-text { 
            h3 {
                font-size: 3.6rem;
            }
        }
    }
        
`;

export const FeatureProd = styled.div`
    position: relative;
    background: ${colors.main};
    color: ${colors.accent1};
    border-radius: .8rem;
    margin-top: 16.8rem;
    overflow: hidden;
    display: flex;
    
    &.home {
        margin-top: 16.8rem;
        justify-content: center;
        width: 100%;
    }
    
    .fprod-image { 
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 1 60%;
        transform: translateY(2%);
    }

    .fprod-img-bg { 
        position: absolute;
        display: flex;
        width: 944px;
        height: 944px;
          /* transform: translateX(10%); */
        /* left: 5%; */
        /* left: -50%; */
        /* height: 100%; */
        /* width: 700px; */
        /* background: magenta; */
        
        
    }

    .fprod-img-main { 
        /* z-index: 11; */
        /* width: 100%; */
        /* height: 100%; */
        z-index: 0;
    }
    
    .fprod-speaker-img{
        /* transform: translateY(10%); */
    }

    /* TEXT */
    
    .fprod-text { 
        padding: 0 6rem;
        margin-top: 13rem;
        > * { 
            margin: 0;
        }
        z-index: 1;
    }

    .fprod-title { 
        color: ${colors.accent1};
        font-size: 5.6rem;
        line-height: 5.8rem;
        letter-spacing: .2rem;
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
    border-radius: .8rem;
    overflow: hidden;

    &.home {
        margin-top: 4.8rem;
        position: relative;

        /* display: flex;
        justify-content: center; */
    }

    .hprod-img-container {
       
       
        position: absolute;
        top: 0;
        right: 0;
        &.desktop-img {
            /* position: static; */
            top: auto;
            right: auto;
        }
        
        /* display: flex; */
        /* align-items: flex-end; */
        > * { 
            /* position: absolute !important; */
            /* left: 100%; */
            /* top: 0; */
        }
    }

    
    .hprod-img {
        z-index:-2;
    }
    .hprod-text { 
        margin: auto 0;
        margin-left: 10%;
        z-index: 15;
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

    &.mini {
        margin-top: 4.8rem;
    }
    
    height: 320px;

    > * {
        flex: 1 1 50%;
        border-radius: .8rem;
        overflow: hidden;
    }
    
    .mpro-img-wrap {
        position: relative;
    }

    .mprod-img{
        position: relative;
        width: 100%;
        height: 100%;
    }

    .mprod-text {
        margin: auto 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 9.5rem;
    }

    .mprod-text-wrap {
        background: ${colors.accent3};
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .mprod-button {

    }

`;