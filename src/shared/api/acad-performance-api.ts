import { $api } from '@shared/api/config'
import token from '@shared/lib/token'

import { AcadPerformance } from './model/acad-performance'

type AcadPerformanceResponse = {
    academicPerformance: AcadPerformance[]
}

export const get = async ({ semestr }: { semestr: string }) => {
    return (await $api.get<AcadPerformanceResponse>(`?getAcademicPerformance&semestr=${semestr}&token=${token()}`))
        ?.data?.academicPerformance
}
