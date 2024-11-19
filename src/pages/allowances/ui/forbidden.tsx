import { getAllowancesErrorCode } from '@entities/allowances/lib/get-error-code'
import { JobRoles } from '@shared/api/allowances-api'
import { Forbidden } from '@shared/ui/forbidden'
import React from 'react'

export const AllowancesForbidden = ({ jobRoles }: { jobRoles: JobRoles | null }) => {
    return (
        <Forbidden
            text={
                !jobRoles
                    ? 'Сервис временно недоступен'
                    : 'У вас нет доступа к этому разделу. Обратитесь к администратору.'
            }
            errorCodes={jobRoles !== null ? getAllowancesErrorCode(jobRoles) : []}
        />
    )
}
