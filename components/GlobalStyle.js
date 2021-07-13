import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  /* background-color: transparent; */
  
  .section-margin {
      display: flex;
      margin: auto;
      width: 84%;
   }

   .checkout-panels{
      background-color: #ffffff; // TODO: CREATE AND USE THEME VARIABLE
      margin-top: 5rem;
      padding-top: 2rem;
   }

   .section-wrapper {
      display: flex;
   }

   .checkout-page {
      background-color: #f1f1f1; // TODO: CREATE AND USE THEME VARIABLE
      z-index: -100;
   }
`;

export default GlobalStyle