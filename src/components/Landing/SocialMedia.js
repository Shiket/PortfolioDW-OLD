import React from 'react'
import * as ICONS from '../../assets/index'
import { IconText, SocialMediaIcon, SocialMediaWrapper, ColumnWrapper } from '../../styleComponents/index'

export const SocialMedia = () => (
    <SocialMediaWrapper>
        <ColumnWrapper>
            <SocialMediaIcon src={ICONS.IMAGES.fbIcon} alt='icon' />
            <IconText notSmall>Facebook</IconText>
        </ColumnWrapper>
        <ColumnWrapper>
            <SocialMediaIcon src={ICONS.IMAGES.emailSocialMediaIcon} alt='icon' />
            <IconText notSmall>dwrona9@gmail.com</IconText>
        </ColumnWrapper>
        <ColumnWrapper>
            <SocialMediaIcon src={ICONS.IMAGES.githubIcon} alt='icon' />
            <IconText notSmall>Github</IconText>
        </ColumnWrapper>
        <ColumnWrapper>
            <SocialMediaIcon src={ICONS.IMAGES.linkedIcon} alt='icon' />
            <IconText notSmall>LinkedIn</IconText>
        </ColumnWrapper>
    </SocialMediaWrapper>
)