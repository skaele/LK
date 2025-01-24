import React from 'react'

import AdminLinksTemplate from 'widgets/admin-links-template'

import { adminLinksModel } from '@entities/admin-links'

const AdditionalAgreements = () => {
    const { data } = adminLinksModel.selectors.useData()
    return <AdminLinksTemplate title={'Скачать отчеты по доп.соглашениям'} links={data?.agreements} />
}

export default AdditionalAgreements
