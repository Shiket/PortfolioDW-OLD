import styled from 'styled-components';

export const NavigationIcon = styled.img`
    width:${props => props.logo ? '36px' : '23px'};
    height: ${props => props.logo ? '36px' : '23px'};
    margin-right: ${props => props.logo ? '10px' : '25px'};

@media (max-width: 1100px) {
    margin-bottom:5px;
    margin-right: ${props => props.logo ? '0px' : '0px'};
}
`