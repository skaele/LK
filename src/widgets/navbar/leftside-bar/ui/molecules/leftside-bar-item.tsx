import React from 'react'

<<<<<<<< HEAD:src/widgets/navbar/leftside-bar/ui/molecules/leftside-bar-item.tsx
import LinkMoreButton from '@features/link-more-button'

import { Page } from '@shared/routing'
import Notification from '@shared/ui/notification'
========
import { IRoute } from '@app/routes/general-routes'

import LinkMoreButton from '@features/link-more-button'

import Notification from '@ui/notification'
>>>>>>>> master:src/widgets/leftside-bar/ui/molecules/leftside-bar-item.tsx

import LeftsideBarItemWrapper from '../atoms/leftside-bar-item-wrapper'

type Props = Page & { isCurrent: boolean }

const LeftsideBarItem = (props: Props) => {
    const { menuPath, path, icon: LinkIcon, title, isCurrent, isAdmin, color, notifications } = props

    return (
        <LeftsideBarItemWrapper
            to={menuPath ?? path}
            className="leftside-bar-item"
            color={color ?? 'blue'}
            isCurrent={isCurrent}
            title={title}
        >
            <Notification className="notification" top="50%" visible={isAdmin} right="-20px" color="pink">
                A
            </Notification>
            <Notification
                className="notification"
                top="50%"
                visible={!!notifications}
                right={isAdmin ? '0px' : '-20px'}
                color="red"
            >
                {notifications}
            </Notification>
            {LinkIcon && <LinkIcon />}
            <span className="title">{title}</span>
            <LinkMoreButton route={props} />
        </LeftsideBarItemWrapper>
    )
}

export default React.memo(LeftsideBarItem)
