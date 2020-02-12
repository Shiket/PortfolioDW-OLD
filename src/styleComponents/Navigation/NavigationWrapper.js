import styled, { keyframes } from 'styled-components'
import { slideInLeft } from 'react-animations';

const SlideIn = keyframes`${slideInLeft}`;

export const NavigationWrapper = styled.div`
    min-height:100vh;
    font-family: 'Roboto', sans-serif;
    animation: 0.3s ${SlideIn};
    position:fixed;
    z-index: 1;
`

export const NavigationContentWrapper = styled.div`
    background-color: #303030;
    padding-top:40px;
    color: #fff;
    max-width:200px;
    height:100vh;

@media (max-width: 1100px){
    max-width:95px;
    padding-top:10px;
}

@media (max-width: 500px){
    width:45px;
}
`