import styled from 'styled-components';

export const IconRow = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-top:30px;

@media (max-width: 1100px){
    display: ${props => props.notMedium ? 'none' : 'flex' }
}

@media (min-width: 1100px){
    display: ${props => props.isMedium ? 'none' : 'flex' }
}
`