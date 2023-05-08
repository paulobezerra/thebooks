import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  :root {
    --white: #FDFEFE;
    --light-gray: #D7D5D6;
    --gray: #525250;
    --black: #010204;
    --green: #3C9B74;
    --yellow: #E8C417;
    --red: #DE0227;
  }

  * {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    box-sizing: border-box;
  }

  html, body {
    background-color: var(--white);
  }

  img {
    position: relative !important;
    width: 100%;
    object-fit: cover;
    display: block;
  }
`;


const AppContainer = styled.div`
  width: 100%;
`