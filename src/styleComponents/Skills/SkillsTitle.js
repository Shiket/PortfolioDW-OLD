import styled from 'styled-components'

export const SkillsTitle = styled.span`
    margin-left:70px;
    margin-top: ${ props => props.top ? '5%' : '3%'};
    margin-bottom:4%;
    padding-bottom:20px;
    font-size:85px;
    font-weight:700;
    border-bottom: 1px solid;

    @media (max-width: 1100px){
        margin-left:10px;
        font-size:53px;
    }

    @media (max-width: 500px){
        font-size:30px;
    }
`