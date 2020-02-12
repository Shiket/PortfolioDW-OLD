import styled from 'styled-components';

export const IconsWrapper = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:50px;
    margin-bottom: 60px;
    width:100%;
    justify-content: space-around;

@media (max-width: 700px){
    flex-direction:column;
    align-items:center;
    margin-top:30px;
    margin-bottom:30px;
}
`