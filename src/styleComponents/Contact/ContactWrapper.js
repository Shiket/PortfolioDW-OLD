import styled, { keyframes } from 'styled-components'
import slideInLeft from "react-animations/lib/slide-in-left";

const SlideIn = keyframes`${slideInLeft}`;
export const ContactWrapper = styled.div`
    width:100%;
    min-height:100vh;
    background-color: #1E1E1E;
    animation: 0.7s ${SlideIn};
    padding-left:231px;
    display:flex;
    flex-direction:column;
    align-items:center;

@media (max-width: 1100px){
    padding-left:95px;
}

@media (max-width: 500px){
    padding-left:40px;
}
`