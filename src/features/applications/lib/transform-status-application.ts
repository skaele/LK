import { ApplicationsConstants, FilterStatusType } from '@entities/applications/consts'
import { Application } from '@shared/api/model'

type ApplicationStatusType = Pick<Application, 'status'>['status']

const transformStatusApplication = (status: ApplicationStatusType): FilterStatusType => {
    switch (status) {
        case 'На рассмотрении':
            return ApplicationsConstants.pending
        case 'Принято в работу':
            return ApplicationsConstants.pending
        case 'Получено':
            return ApplicationsConstants.ready
        case 'Выдано':
            return ApplicationsConstants.ready
        default:
            return status
    }
}

export default transformStatusApplication
