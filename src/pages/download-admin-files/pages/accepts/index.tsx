import React from 'react'

import { adminLinksModel } from '@entities/admin-links'
import AdminLinksTemplate from 'widgets/admin-links-template'

const DownloadAccepts = () => {
    const { data } = adminLinksModel.selectors.useData()
    return <AdminLinksTemplate title={'Скачать отчеты по акцептам'} links={data?.accepts} />
}

export default DownloadAccepts
