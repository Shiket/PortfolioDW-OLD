import React from 'react'
import * as ICONS from '../../assets/index'
import { IconText, SocialMediaIcon, SocialMediaWrapper, ColumnWrapper } from '../../styleComponents/index'

export const SocialMedia = () => (
         <SocialMediaWrapper>
           <ColumnWrapper
             target="_blank"
             href="https://www.facebook.com/shiket95"
             rel="noopener noreferrer">
             <SocialMediaIcon src={ICONS.IMAGES.fbIcon} alt="icon" />
             <IconText notSmall>Facebook</IconText>
           </ColumnWrapper>

           <ColumnWrapper href="mailto:dwrona9@gmail.com">
             <SocialMediaIcon
               src={ICONS.IMAGES.emailSocialMediaIcon}
               alt="icon" />
             <IconText notSmall>dwrona9@gmail.com</IconText>
           </ColumnWrapper>

           <ColumnWrapper
             target="_blank"
             href="https://github.com/Shiket"
             rel="noopener noreferrer">

             <SocialMediaIcon src={ICONS.IMAGES.githubIcon} alt="icon" />
             <IconText notSmall>Github</IconText>
           </ColumnWrapper>

           <ColumnWrapper
             target="_blank"
             href="https://www.linkedin.com/in/dominik-wrona-78b984180/"
             rel="noopener noreferrer">

             <SocialMediaIcon src={ICONS.IMAGES.linkedIcon} alt="icon" />
             <IconText notSmall>LinkedIn</IconText>
           </ColumnWrapper>
         </SocialMediaWrapper>
       );