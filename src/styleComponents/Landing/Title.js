import styled from 'styled-components';
import beforeTitle from '../../assets/beforeTitle.png'
import afterTitle from '../../assets/afterTitle.png'

export const Title = styled.div`
    font-size:25px;
    background-color: #e04040;
    color: #fff;
    margin-top:30px;
    position:relative;
    padding-left:10%;
    padding-right:10%;
    display:flex;
    align-items:center;
    height:58px;

      &::before {
        position: absolute;
        content: '';
        left:-54px;
        top:0;
        width:54px;
        height:65px;
        background-image: url(${beforeTitle});
    }
      &::after {
        position: absolute;
        content: '';
        right:-54px;
        top:0;
        width:54px;
        height:65px;
        background-image: url(${afterTitle});
    }

@media (max-width:700px){
  width:100%;
  display:flex;
  justify-content:center;
  font-size:21px;

  &::before {
          display:none;
  }

  &::after {
        display:none
  }

}

`