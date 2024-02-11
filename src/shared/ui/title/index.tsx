import { Align, FontWeight, HeaderSize } from '@ui/types'
import React from 'react'
import { CreateHeader } from './create-header'
import { ChildrenWrapper, RedStar, TitleWrapper } from './styles'

export type TitleProps = {
    children: ChildrenType
    width?: string
    size?: HeaderSize
    align?: Align
    bottomGap?: boolean | string
    icon?: React.ReactNode
    iconColor?: string
    required?: boolean
    visible?: boolean
    weight?: FontWeight
}

export function Title(props: TitleProps) {
    const {
        icon,
        iconColor,
        children,
        size = 1,
        required,
        width,
        align = 'center',
        bottomGap = false,
        visible = true,
        weight,
    } = props

    if (!visible) return null

    return (
        <TitleWrapper
            size={size}
            className="title-wrapper"
            align={align}
            bottomGap={bottomGap}
            iconColor={iconColor}
            weight={weight}
        >
            {icon}
            <CreateHeader size={size} width={width}>
                {required && <RedStar>*</RedStar>}
                <ChildrenWrapper width={width}>{children}</ChildrenWrapper>
            </CreateHeader>
        </TitleWrapper>
    )
}
