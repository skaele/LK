import { SelectPage } from '@features/select'
import { $technicalMaintenanceApi } from './config/technical-maintenance-config'

export type TechnicalMaintenance = {
    note: string
    name: string
    phone: string
    email: string
    location: SelectPage
    stack: SelectPage
    files: File[]
}

export const postTechnicalMaintenance = async (req: TechnicalMaintenance) => {
    const formData = new FormData()
    formData.append('note', req.note)
    formData.append('name', req.name)
    formData.append('phone', req.phone)
    formData.append('email', req.email)
    formData.append('locationId', req.location.id as string)
    formData.append('stackId', req.stack.id as string)
    formData.append('file', req.files[0])
    const { data } = await $technicalMaintenanceApi.post<{ applicationNumber: string }>(`/robot`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    return data
}
