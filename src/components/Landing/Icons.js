import React from 'react'
import { Icon, IconColumn, IconsWrapper, IconText, IconRow } from '../../styleComponents/index'
import * as ICONS from '../../assets/index'

export const Icons = () => (
    <IconsWrapper>
        <IconColumn>
            <IconRow>
                <Icon src={ICONS.IMAGES.nameIcon} alt='icon' />
                <IconText>Dominik Wrona</IconText>
            </IconRow>
            <IconRow>
                <Icon src={ICONS.IMAGES.locationIcon} alt='icon' />
                <IconText>Wieliczka, Cracow, Poland</IconText>
            </IconRow>
            <IconRow isMedium>
                <Icon src={ICONS.IMAGES.educationIcon} alt='icon' />
                <IconText>
                    University of Economics, Cracow (5th year) IT
                </IconText>
            </IconRow>
        </IconColumn>
        <IconColumn>
            <IconRow notMedium>
                <Icon src={ICONS.IMAGES.educationIcon} alt='icon' />
                <IconText>
                    University of Economics, Cracow (5th year) IT
                </IconText>
            </IconRow>
            <IconRow notMedium>
                <Icon src={ICONS.IMAGES.jsIcon} alt='icon' />
                <IconText>Javascript, react</IconText>
            </IconRow>
        </IconColumn>
        <IconColumn>
            <IconRow isMedium>
                <Icon src={ICONS.IMAGES.jsIcon} alt='icon' />
                <IconText>Javascript, react</IconText>
            </IconRow>
            <IconRow>
                <Icon src={ICONS.IMAGES.calendarIcon} alt='icon' />
                <IconText>24 years old</IconText>
            </IconRow>
            <IconRow>
                <Icon src={ICONS.IMAGES.emailIcon} alt='icon' />
                <IconText>dwrona9@gmail.com</IconText>
            </IconRow>
        </IconColumn>
    </IconsWrapper>
)
