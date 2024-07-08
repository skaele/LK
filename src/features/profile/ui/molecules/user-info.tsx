import React from 'react'
import { userModel } from '@entities/user'
import Block from '@shared/ui/block'
import { CenterPage } from '@shared/ui/atoms'
import { useUnit } from 'effector-react'

type Props = {
    pages: ChildrenType[]
    currentPage: number
}

const UserInfo = ({ pages, currentPage }: Props) => {
    const { currentUser: user } = useUnit(userModel.stores.user)

    if (!user) return null

    return (
        <CenterPage>
            <Block height="100%" noAppearanceInMobile maxWidth="750px">
                {pages[currentPage]}
            </Block>
        </CenterPage>
    )
}

export default UserInfo
