import styled from 'styled-components';
import buttonAfter from '../../assets/afterMenu.png'
import logoAfter from '../../assets/darker.png'

export const ButtonWrapper = styled.div`
    display:flex;
    align-items:center;
    position:relative;
    height:57px;
    align-items:center;
    margin-top:20px;
    padding-left: ${props => props.name ? '21px' : '27px'};
    margin-bottom: ${props => props.marginBottom ? '110px' : '30px'};
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

@media (max-width: 1100px) {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-size: ${props => props.name ? '21px' : '14px'};
    text-align:center;
    margin-bottom: ${props => props.marginBottom ? '30px' : '0px'};
    padding-left: ${props => props.name ? '0px' : '0px'};
    margin-top:4vh;

       &:after{
        display:none;
}

`