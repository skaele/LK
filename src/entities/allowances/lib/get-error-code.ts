import { JobRoles } from '@shared/api/allowances-api'

export function getAllowancesErrorCode(jobRoles: JobRoles) {
    return jobRoles.map((job) => {
        // Map roles to 'I' or 'A' (Initiator -> 'I', Approver -> 'A')
        const roleAbbreviations = job.roles
            .map((role) => {
                if (role === 'Initiator') return 'I'
                if (role === 'Approver') return 'A'
                return 'N'
            })
            .join('')

        // Combine the first part of the employeeId with the role abbreviations
        return `${job.employeeId}${roleAbbreviations ? `-${roleAbbreviations}` : ''}`
    })
}
