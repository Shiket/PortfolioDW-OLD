import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #fff;
}

::-webkit-scrollbar-thumb {
  background: #e04040;
}

::-webkit-scrollbar-thumb:hover {
  background: #303030;
}
    html {
        margin:0;
        padding:0;
    }

    body {
        margin:0;
        padding:0;
        background-color:#EFEFEF;
        color: #1E1E1E;
        font-family: 'Roboto', sans-serif;
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
