import styled from 'styled-components'

export const RowWrapper = styled.div`
    display:flex;
    flex-direction: row;
    margin-top:20px;
    margin-bottom:20px;
    justify-content:space-around;

@media (max-width: 1300px){
    flex-direction:column;
    align-items:center;
}
`