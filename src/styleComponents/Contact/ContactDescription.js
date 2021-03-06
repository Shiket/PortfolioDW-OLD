import styled from 'styled-components'

export const ContactDescription = styled.span`
         font-size: 40px;
         display: flex;
         font-weight: 700;
         color: #fff;
         margin-top: 100px;
         margin-bottom: 30px;
         text-align: center;
         width: 70%;
         justify-content: center;
         border-bottom: 1px solid #fff;
         border-top: 1px solid #fff;
         padding-bottom: 50px;
         padding-top: 50px;

         @media (max-width: 1100px) {
           font-size: 30px;
           margin-top: 50px;
         }
         @media (max-width: 500px) {
           margin-top: 50px;
           width: 90%;
           font-size: 20px;
         }
       `;