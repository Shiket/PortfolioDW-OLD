import styled from 'styled-components';
import buttonAfter from '../../assets/afterMenu.png'
import logoAfter from '../../assets/darker.png'

export const ButtonWrapper = styled.div`
    display:flex;
    align-items:center;
    position:relative;
    height:58px;
    width:250px;
    align-items:center;
    margin-top:20px;
    padding-left: ${props => props.name ? '10px' : '40px'};
    margin-bottom: ${props => props.marginBottom ? '100px' : '0px'};
    font-size: ${props => props.name ? '25px' : '17px'};
    font-family: ${props => props.name ? 'Rubik' : 'Roboto' };
    background-color: ${props => props.name ? '#e04040' : '#00A5A5'} ;


    &:after{
        position:absolute;
        right: -33;
        top:0;
        content: '';
        width:33px;
        height:65px;
        ${props => props.name ? 'background: url('+logoAfter+') no-repeat' : 'background: url('+buttonAfter+') no-repeat'}
    }
`