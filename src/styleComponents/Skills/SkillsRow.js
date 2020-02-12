import styled from 'styled-components'

export const SkillsRow = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-around;
    margin-bottom:30px;
    margin-left:5%;
    width:80%;
    flex-wrap:wrap;


    @media (max-width: 1100px){
        width:97%;
        margin-left:2%;
    }

    @media (max-width: 500px){
        width:100%;
        margin-left:0;
    }
`