import React from 'react'

import LinksList from '@pages/helpful-information/ui/molecules/links-list'

import { safetyPages } from '@features/helpful-information/safety-information/config'

import { CenterPage } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'

const SafetyInformation = () => {
    return (
        <CenterPage padding="10px">
            <PageBlock>
                <LinksList
                    blocks={safetyPages}
                    // Поиск по материалам
                    title="материалам"
                    isStaff={false}
                />
            </PageBlock>
        </CenterPage>
    )
}

export default SafetyInformation
