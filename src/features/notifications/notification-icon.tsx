import React from 'react'
import { BiNews, BiRuble } from 'react-icons/bi'
import { FiClock, FiFileText, FiInfo, FiMessageCircle, FiStar } from 'react-icons/fi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

<<<<<<<< HEAD:src/features/notifications/notification-icon.tsx
import { NotificationType } from '@entities/lk-notifications'

import NewVersionMessage from '@shared/ui/new-version-message'

import { IconWrapper } from './icon-wrapper'
========
import { Icon } from '@features/all-pages'

import { NotificationType } from '@entities/lk-notifications'

import { IColors } from '@shared/constants'
import NewVersionMessage from '@shared/ui/new-version-message'

const IconWrapper = ({ color, children }: { color: keyof IColors; children: JSX.Element }) => {
    return <Icon color={color}>{children}</Icon>
}
>>>>>>>> master:src/widgets/lk-notification-list/ui/notification-icon.tsx

export const iconObject = (): Record<NotificationType, ChildrenType> => ({
    info: (
        <IconWrapper color="grey">
            <FiInfo />
        </IconWrapper>
    ),
    message: (
        <IconWrapper color="red">
            <FiMessageCircle />
        </IconWrapper>
    ),
    alert: (
        <IconWrapper color="purple">
            <BiNews />
        </IconWrapper>
    ),
    'payment-dorm': (
        <IconWrapper color="green">
            <BiRuble />
        </IconWrapper>
    ),
    'payment-ed': (
        <IconWrapper color="green">
            <BiRuble />
        </IconWrapper>
    ),
    'digital-services': (
        <IconWrapper color="red">
            <FiFileText />
        </IconWrapper>
    ),
    'doc-for-review': (
        <IconWrapper color="blue">
            <FiFileText />
        </IconWrapper>
    ),
    'kpi-pps': (
        <IconWrapper color="pink">
            <FiStar />
        </IconWrapper>
    ),
    schedule: (
        <IconWrapper color="pink">
            <FiClock />
        </IconWrapper>
    ),
    'version-update': <NewVersionMessage />,
    'electronic-interaction': (
        <IconWrapper color="blue">
            <HiOutlineClipboardCheck />
        </IconWrapper>
    ),
    allowance: (
        <IconWrapper color="orange">
            <FiStar />
        </IconWrapper>
    ),
})
