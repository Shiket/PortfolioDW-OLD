import styled from 'styled-components';

export const NavigationIcon = styled.img`
    width:${props => props.logo ? '36px' : '23px'};
    height: ${props => props.logo ? '36px' : '23px'};
    margin-right: ${props => props.logo ? '10px' : '25px'};
`