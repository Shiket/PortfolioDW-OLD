import styled, { keyframes } from 'styled-components'
import slideInLeft from 'react-animations/lib/slide-in-left';

const SlideIn = keyframes`${slideInLeft}`;

export const ProjectsWrapper = styled.div`
         min-height: 100vh;
         background-color: #1e1e1e;
         animation: 0.7s ${SlideIn};
         margin-left: 199px;
         padding-left: 33px;
         color: #fff;

         @media (max-width: 1100px) {
           padding-left: 0px;
           margin-left: 95px;
         }

         @media (max-width: 500px) {
           margin-left: 45px;
         }
       `;