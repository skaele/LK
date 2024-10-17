import { UserApplication } from '@shared/api/model'
import { VacationSchedule } from '@shared/api/model/vacation-schedule'

export const findVacationByJobGuid = (
    vacationList: VacationSchedule[] | null,
    jobGuid: string | null,
    dataUserApplication: UserApplication | null,
) => {
    if (!jobGuid) return null
    if (!vacationList) return null
    if (!dataUserApplication) return null

    const { subdivisions } = dataUserApplication

    const post = subdivisions?.find((subdivision) => subdivision.guid_staff === jobGuid)

    return vacationList.find((value) => value.post === `${post?.post}, ${post?.jobType}, ${post?.wage} ст.`)
}
