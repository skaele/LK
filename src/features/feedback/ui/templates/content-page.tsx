import React from 'react'

import PageBlock from '@sha@shared/sessionblock'

import { userModel } from '@shared/session'
import GoBackButton from '@shared/ui/go-back-button'

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
