import React from 'react'
import * as ICONS from '../../assets/index'
import { IconText, SocialMediaIcon, SocialMediaWrapper, ColumnWrapper } from '../../styleComponents/index'

export const SocialMedia = () => (
    <SocialMediaWrapper>
        <ColumnWrapper>
            <SocialMediaIcon src={ICONS.IMAGES.fbIcon} alt='icon' />
            <IconText>Facebook</IconText>
        </ColumnWrapper>
        <ColumnWrapper>
            <SocialMediaIcon src={ICONS.IMAGES.emailSocialMediaIcon} alt='icon' />
            <IconText>dwrona9@gmail.com</IconText>
        </ColumnWrapper>
        <ColumnWrapper>
            <SocialMediaIcon src={ICONS.IMAGES.githubIcon} alt='icon' />
            <IconText>Github</IconText>
        </ColumnWrapper>
        <ColumnWrapper>
            <SocialMediaIcon src={ICONS.IMAGES.linkedIcon} alt='icon' />
            <IconText>LinkedIn</IconText>
        </ColumnWrapper>
    </SocialMediaWrapper>
)