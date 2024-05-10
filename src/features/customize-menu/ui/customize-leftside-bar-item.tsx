import { PageLinkProps } from '@features/all-pages/ui/molecules/page-link'
import PageLinkContent from '@features/all-pages/ui/molecules/page-link-content'
import React from 'react'
import { LeftsideBarItemWrapper } from './customize-leftside-bar-wrapper'
import AddToMenuButton from './add-to-menu-buttom'

type Props = PageLinkProps & {
    chosen: boolean
    shortItemChosen?: boolean
    switchMenuItem: (id: string) => void
    switchShortChosen?: (id: string) => void
}

export const CustomizeLeftsideBarItem = (props: Props) => {
    const { id, chosen, switchMenuItem } = props
    return (
        <LeftsideBarItemWrapper chosen={chosen} onClick={() => switchMenuItem(id)}>
            <PageLinkContent
                background="transparent"
                maxWordLength={100}
                orientation="horizontal"
                shadow={false}
                {...props}
            />
            <div className="buttons">
                <AddToMenuButton
                    chosen={chosen}
                    onClick={() => {
                        switchMenuItem(id)
                    }}
                />
            </div>
        </LeftsideBarItemWrapper>
    )
}
