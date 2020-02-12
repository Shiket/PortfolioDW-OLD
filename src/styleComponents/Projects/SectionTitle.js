import styled from 'styled-components';
import beforeTitle from '../../assets/beforeTitle.png'

export const SectionTitle = styled.div`
    height:58px;
    font-size:25px;
    width:25%;
    display:flex;
    align-items:center;
    margin-left:75%;
    padding-left:2%;
    margin-top:20px;
    background-color:#e04040;
    color: #fff;
    position:relative;

    &::before {
        position: absolute;
        content: '';
        left:-54px;
        top:0;
        width:54px;
        height:65px;
        background-image: url(${beforeTitle});
    }
@media (max-width:1100px){
    height:45px;
    &::before{
        display:none;
    }
}
@media (max-width:500px){
    width:60%;
    margin-left:40%;
    height:35px;

     &::before {
        display:none;
    }
}
`