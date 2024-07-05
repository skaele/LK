import { userModel } from '@entities/user'
import GoBackButton from '@shared/ui/go-back-button'
import React from 'react'
import { HelpLinks, OtherContacts } from '../organisms'
import PageBlock from '@shared/ui/page-block'
import { useUnit } from 'effector-react'

export function ContentPage() {
    const { currentUser: user } = useUnit(userModel.stores.user)
    return (
        <PageBlock>
            {!user && <GoBackButton />}
            <HelpLinks />
            <OtherContacts />
            {/*<AskForm />*/}
        </PageBlock>
    )
}
