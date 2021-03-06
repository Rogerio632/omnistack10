import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    height: 100%;
  }
  body, input, button{
    background: #E5E6F0;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
  }
`;