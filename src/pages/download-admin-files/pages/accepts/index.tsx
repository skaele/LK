import { adminLinksModel } from '@entities/admin-links'
import { useUnit } from 'effector-react'
import React from 'react'
import AdminLinksTemplate from 'widgets/admin-links-template'

const DownloadAccepts = () => {
    const data = useUnit(adminLinksModel.stores.data)
    return <AdminLinksTemplate title={'Скачать отчеты по акцептам'} links={data?.accepts} />
}

export default DownloadAccepts
