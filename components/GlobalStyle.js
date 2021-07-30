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
      overflow: hidden;
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
         display: unset !important;
      }
   }

   @media ${mq.phone.narrow.max} {

      .tablet-img {
         display: none !important;
      }
      .mobile-img {
         display: block !important;
      }

   }

   // global media queries

   @media ${mq.tablet.narrow.max} { 

   }
   
   @media ${mq.desktop.small.max} { 
      .section-margin{
         width: 90%;
      }
   }

   @media ${mq.phone.narrow.max} { 

   }

   
   
`;

export default GlobalStyle