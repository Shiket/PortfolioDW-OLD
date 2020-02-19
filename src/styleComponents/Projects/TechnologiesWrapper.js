import styled from 'styled-components'

export const TechnologiesWrapper = styled.div`
    display:flex;
    flex-direction: row;
    border-top: 1px solid #707070;
    border-bottom: 1px solid #707070;
    margin-top:70px;
    min-height:90px;
    justify-content:space-around;

@media (max-width: 700px){
    flex-wrap:wrap;
}
`