import React from 'react'

import AdminLinksTemplate from '@widgets/admin-links-template'

import { adminLinksModel } from '@entities/admin-links'

const DownloadAccepts = () => {
    const { data } = adminLinksModel.selectors.useData()
    return <AdminLinksTemplate title={'Скачать отчеты по акцептам'} links={data?.accepts} />
}

export default DownloadAccepts
