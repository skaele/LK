import { adminLinksModel } from '@entities/admin-links'
import { useUnit } from 'effector-react'
import React from 'react'
import AdminLinksTemplate from 'widgets/admin-links-template'

const DownloadCheckdata = () => {
    const data = useUnit(adminLinksModel.stores.data)

    return <AdminLinksTemplate title={'Скачать отчеты по анкете'} links={data?.checkdata} />
}

export default DownloadCheckdata
