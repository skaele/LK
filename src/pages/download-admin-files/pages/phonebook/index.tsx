import { adminLinksModel } from '@entities/admin-links'
import React from 'react'
import AdminLinksTemplate from 'widgets/admin-links-template'

export const DownloadPhonebookData = () => {
    const { data } = adminLinksModel.selectors.useData()
    return <AdminLinksTemplate title={'Скачать отчеты по телефонному справочнику'} links={data?.phonebook} />
}
