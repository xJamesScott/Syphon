import { createGlobalStyle } from 'styled-components';
import { theme, mq } from '../constants/theme';

const { colors } = theme;

const GlobalStyle = createGlobalStyle`
  
  /* background-color: transparent; */
  
  .section-margin {
      display: flex;
      margin: auto;
      max-width: 1100px !important;
      width: 65%;
      
   }

   .checkout-panels{
      background-color: #ffffff; // TODO: CREATE AND USE THEME VARIABLE
      margin-top: 5.5rem;
      
      /* padding-top: 2rem; */
      border-radius: .8rem;
   }

   .section-wrapper {
      display: flex;
   }

   .checkout-page {
      background-color: #f1f1f1; // TODO: CREATE AND USE THEME VARIABLE
      z-index: -100;
      /* overflow: hidden; */
      
      .ty-bg.not-complete {
         max-height: 0;
      }

      .ty-bg.complete {
         /* height: 100vh; */
         /* width: 100vw; */
         overflow: hidden;
         img {
            object-fit: contain;
            overflow: hidden;
         }
      }

      .complete {
         opacity: 1;
         visibility: visible;
      }

      .not-complete {
         visibility: hidden;
         opacity: 0;
         display: none;
      }
   }

   .round-border {
      border-radius: .8rem !important;
      display: flex;
      align-items: center;
      justify-content: center;
      > * {
         flex: 1 1 100%;
      }
      overflow: hidden;
   }

   .hide-desktop, footer > .hide-desktop {
      display: none !important;
   }

  

   // IMAGE & DISPLAY MEDIA QUERIES
   
   .tablet-img {
      display: none;
   }

   .mobile-img {
      display: none !important;
   }

   .mobile-wide-img {
      display: none;
   }
   
   @media ${mq.tablet.narrow.max} {
      
      .desktop-img {
         display: none !important;
      }
      
      .tablet-img {
         display: flex;
      }

      .show-tablet.hide-desktop {
         display: none;
      }

      .hide-tablet {
         display: none !important;
      }
   }

   @media ${mq.phone.wide.max} { 
      .tablet-img.hide-wide-m {
         display: none;
      }

      .mobile-wide-img {
         display: flex;
      }

      .hide-mobile {
         display: none;
      }
   }
   
   @media ${mq.phone.narrow.max} {
      
      .tablet-img {
         display: none ;
      }

      .mobile-wide-img {
         display: none !important;
      }
      
      .mobile-img {
         display: flex !important;
      }

   }

   // global media queries

   @media ${mq.tablet.narrow.max} { 
      .hide-tablet, footer > .hide-tablet {
         display: none;
      }

      .show-tablet, footer > .show-tablet {
         display: unset !important;
      }
   }
   
   @media ${mq.desktop.small.max} { 
      .section-margin {
         width: 90%;
      }
   }

   @media ${mq.phone.narrow.max} { 
      .hide-mobile, footer > .hide-mobile {
         display: none !important;
      }

      .show-mobile, footer > .show-mobile  {
         display: unset;
      }
   }

   
   
`;

export default GlobalStyle