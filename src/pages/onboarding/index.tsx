import React from 'react'

import { CenterPage } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'

import { LinkList } from './ui/link-list'
import { TextFields } from './ui/text-fields'

const Onboarding = () => {
    return (
        <CenterPage padding="10px">
            <PageBlock>
                <TextFields />
                <LinkList />
            </PageBlock>
        </CenterPage>
    )
}

export default Onboarding
