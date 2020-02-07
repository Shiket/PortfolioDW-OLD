import styled from 'styled-components';

export const Line = styled.div`
    height:1px;
    margin-top:25px;
    width:${props => props.wide ? '70%' : '50%'};
    background-color:#1E1E1E;
`