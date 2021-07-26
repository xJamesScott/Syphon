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
      border-radius: .5rem;
   }

   .section-wrapper {
      display: flex;
   }

   .checkout-page {
      background-color: #f1f1f1; // TODO: CREATE AND USE THEME VARIABLE
      z-index: -100;
      
   }

   option:hover {
   background-color: yellow !important;

  
}
`;

export default GlobalStyle