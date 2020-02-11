import styled, { keyframes } from 'styled-components'
import slideInRight from 'react-animations/lib/slide-in-right';

const SlideIn = keyframes`${slideInRight}`;

export const ProjectsWrapper = styled.div`
    min-height: 100vh;
    background-color: #1E1E1E;
    width:100%;
    animation: 0.5s ${SlideIn};
    margin-left:199px;
    padding-left:33px;
    color: #fff;
`