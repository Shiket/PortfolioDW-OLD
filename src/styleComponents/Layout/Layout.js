import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        margin:0;
        padding:0;
    }

    body {
        margin:0;
        padding:0;
        background-color:#EFEFEF;
        color: #1E1E1E;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    .wrapper{
        display:flex;
        flex-direction:row;
    }
`;

export const Layout = ({ children }) => (
    <div className='wrapper'>
        <GlobalStyle />
        {children}
    </div>

);
