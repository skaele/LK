import React from 'react'

import { SliderPage } from 'widgets'

import { STUDENTS_LOGINS_ROUTE } from '@app/routes/teacher-routes'

import PageIsNotReady from '@pages/page-is-not-ready'

import { adminLinksModel } from '@entities/admin-links'

import { CenterPage } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'

import DownloadAccepts from './pages/accepts'
import AdditionalAgreements from './pages/additional-agreements'
import DownloadCheckdata from './pages/checkdata'
import { DownloadPhonebookData } from './pages/phonebook'

const DownloadAdminFilesPage = () => {
    const { data } = adminLinksModel.selectors.useData()
    return (
        <CenterPage padding="10px">
            <PageBlock>
                <SliderPage
                    appearance={false}
                    pages={[
                        { title: 'Анкета', content: <DownloadCheckdata />, condition: !!data?.checkdata.length },
                        { title: 'Акцепт', content: <DownloadAccepts />, condition: !!data?.accepts.length },
                        {
                            title: 'Доп. соглашения',
                            content: <AdditionalAgreements />,
                            condition: !!data?.agreements.length,
                        },
                        {
                            title: 'Телефонный справочник',
                            content: <DownloadPhonebookData />,
                            condition: !!data?.phonebook.length,
                        },
                        {
                            title: 'Логины студентов',
                            content: <PageIsNotReady oldVersionUrl={STUDENTS_LOGINS_ROUTE} />,
                            condition: !!data?.studLogins?.length,
                        },
                    ]}
                />
            </PageBlock>
        </CenterPage>
    )
}

export default DownloadAdminFilesPage
