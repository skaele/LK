import React from 'react'

import { adminLinksModel } from '@entities/admin-links'
import AdminLinksTemplate from 'widgets/admin-links-template'

const AdditionalAgreements = () => {
    const { data } = adminLinksModel.selectors.useData()
    return <AdminLinksTemplate title={'Скачать отчеты по доп.соглашениям'} links={data?.agreements} />
}

export default AdditionalAgreements
