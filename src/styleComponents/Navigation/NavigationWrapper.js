import styled, { keyframes } from 'styled-components'
import { slideInLeft } from 'react-animations';

const SlideIn = keyframes`${slideInLeft}`;

export const NavigationWrapper = styled.div`
    height:100vh;
    font-family: 'Roboto', sans-serif;
    animation: 0.3s ${SlideIn};
    position:fixed;
    z-index: 1;
`

export const NavigationContentWrapper = styled.div`
    background-color: #303030;
    padding-top:40px;
    color: #EFEFEF;
    max-width:200px;
    height:100vh;
`