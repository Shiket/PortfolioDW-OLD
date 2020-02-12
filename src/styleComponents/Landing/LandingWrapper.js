import styled, { keyframes } from 'styled-components'
import { slideInLeft } from 'react-animations';

const SlideIn = keyframes`${slideInLeft}`;

export const LandingWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    animation: 0.5s ${SlideIn};
    width:100%;
    min-height:100vh;
    font-family: 'Roboto', sans-serif;
    font-weight:300;
    margin-left:231px;

@media (max-width: 1100px){
    margin-left:95px;
}
`