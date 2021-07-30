import { createGlobalStyle } from 'styled-components';
import { theme, mq } from '../constants/theme';

const { colors } = theme;

const GlobalStyle = createGlobalStyle`
  
  /* background-color: transparent; */
  
  .section-margin {
      display: flex;
      margin: auto;
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
      
   }

   .round-border {
      border-radius: .8rem !important;
      display: flex;
      align-items: center;
      justify-content: center;
      > * {
         flex: 1 1 100%;
      }
      /* overflow: hidden; */
   }

   .hide-desktop {
      display: none;
   }

  

   // IMAGE MEDIA QUERIES
   
   .tablet-img {
      display: none !important;
   }

   .mobile-img {
      display: none !important;
   }
   
   @media ${mq.tablet.narrow.max} {
      
      .desktop-img {
         display: none !important;
      }
      
      .tablet-img {
         display: flex !important;
      }
   }

   @media ${mq.phone.narrow.max} {

      .tablet-img {
         display: none !important;
      }
      .mobile-img {
         display: flex !important;
      }

   }

   // global media queries

   @media ${mq.tablet.narrow.max} { 
      .hide-tablet {
         display: none;
      }

      .show-tablet {
         display: unset;
      }
   }
   
   @media ${mq.desktop.small.max} { 
      .section-margin{
         width: 90%;
      }
   }

   @media ${mq.phone.narrow.max} { 
      .hide-mobile {
         display: none;
      }

      .show-mobile {
         display: unset;
      }
   }

   
   
`;

export default GlobalStyle