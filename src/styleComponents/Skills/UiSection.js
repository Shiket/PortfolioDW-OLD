import styled, { keyframes } from 'styled-components'
import { slideInUp } from 'react-animations';

const SlideIn = keyframes`${slideInUp}`;

export const UiSection = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    min-height:40vh;
    background-color: #303030;
    color: #fff;
    animation: 0.5s ${SlideIn};
`