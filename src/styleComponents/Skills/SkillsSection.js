import styled, { keyframes } from 'styled-components'
import { slideInDown } from 'react-animations';

const SlideIn = keyframes`${slideInDown}`;

export const SkillsSection= styled.div`
    display:flex;
    flex-direction:column;
    animation: 0.5s ${SlideIn};
    width:100%;
    min-height:60vh;
    font-family: 'Roboto', sans-serif;
`