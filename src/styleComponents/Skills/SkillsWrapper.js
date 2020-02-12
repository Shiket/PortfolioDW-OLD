import styled from 'styled-components'

export const SkillsWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    min-height:100vh;
    font-family: 'Roboto', sans-serif;
    padding-left:199px;

    @media (max-width: 1100px){
        padding-left:95px;
        width:100%;
    }

    @media (max-width: 500px){
        padding-left:45px;
    }
`