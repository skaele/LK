import React from 'react'

import { userModel } from '@entities/user'

import GoBackButton from '@shared/ui/go-back-button'
import PageBlock from '@shared/ui/page-block'

import { HelpLinks, OtherContacts } from '../organisms'

export function ContentPage() {
    const {
        data: { user },
    } = userModel.selectors.useUser()
    return (
        <PageBlock>
            {!user && <GoBackButton />}
            <HelpLinks />
            <OtherContacts />
            {/*<AskForm />*/}
        </PageBlock>
    )
}
