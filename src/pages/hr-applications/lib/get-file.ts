import axios from 'axios'

import { getJwtToken } from '@shared/session/lib/jwt-tokenken'

const downloadFile = async (guid: string, type: string) => {
    const url = `https://api.mospolytech.ru/serviceforfrontpersonnelorders/Vacation.DownloadFile?DocumentGuid=${guid}&Type=${type}`

    const headers = {
        Authorization: `Bearer ${getJwtToken()}`,
    }

    const response = await axios({
        url: url,
        method: 'GET',
        responseType: 'blob',
        headers: headers,
    })
    const downloadUrl = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = downloadUrl
    link.setAttribute('download', 'order.pdf') // or any other extension
    document.body.appendChild(link)
    link.click()
}

export default downloadFile
