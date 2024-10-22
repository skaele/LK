import React from 'react'
import { userModel } from '@entities/user'
import Block from '@shared/ui/block'
import { CenterPage } from '@shared/ui/atoms'

type Props = {
    pages: ChildrenType[]
    currentPage: number
}

const UserInfo = ({ pages, currentPage }: Props) => {
    const {
        data: { user },
    } = userModel.selectors.useUser()

    if (!user) return null

    return (
        <CenterPage padding="0 0 10px 0">
            <Block height="100%" noAppearanceInMobile maxWidth="750px">
                {pages[currentPage]}
            </Block>
        </CenterPage>
    )
}

export default UserInfo
