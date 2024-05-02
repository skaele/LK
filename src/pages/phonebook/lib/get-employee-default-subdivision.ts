import { Employee } from '@shared/api/model/phonebook'

export const getEmployeeDefaultSubdivision = (employee: Employee) => {
    if (employee.job.length === 1) return employee.job[0].subdivision
    const mainJob = employee.job.find((job) => job.jobType === 'Основное место работы')
    if (mainJob) return mainJob.subdivision
    return employee.job[0].subdivision
}
