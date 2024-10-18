import { popUpMessageModel } from '@entities/pop-up-message'
import { getJwtToken } from '@entities/user/lib/jwt-token'
import axios from 'axios'

const downloadFile = async (guid: string, type: string, service: 'Vacation' | 'MedicalExamination') => {
    try {
        const response = await axios<{
            fileName: string
            fileExtension: string
            documentNumber: string
            documentType: number
            fileContent: string
        }>({
            url: `https://api.mospolytech.ru/serviceforfrontpersonnelorders/${service}.DownloadFile?DocumentGuid=${guid}&Type=${type}`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${getJwtToken()}`,
            },
        })
        const link = document.createElement('a')
        link.href = `data:${response.data.fileExtension};base64,` + response.data.fileContent
        link.setAttribute('download', `${type === '0' ? 'Заявление' : 'Приказ'} - ${response.data.fileName}`)
        document.body.appendChild(link)
        link.click()
    } catch (error) {
        popUpMessageModel.events.evokePopUpMessage({
            message: 'Не удалось загрузить файл',
            type: 'failure',
        })
    }
}

export default downloadFile
