import styled from 'styled-components';

export const NavigationButton = styled.a`
    color: #fff;
    display: ${props => props.small ? 'none' : 'flex'};

@media (max-width: 1100px){
    font-size:20px
    align-text:center;
}

@media (max-width: 500px){
    display: ${props => props.small ? 'flex' : 'none'};
}
`

export const Author = styled.p`
    position:absolute;
    color: #EFEFEF;
    font-weight:300;
    margin-left:23px;
    font-size:14px;
    bottom:0;

@media (max-width: 1100px){
    font-size:13;
    text-align:center;
    margin-left:0px;
}
@media (max-width:500px){
    display:none;
}
`