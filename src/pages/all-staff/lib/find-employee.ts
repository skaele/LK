import { Employee, Subdivision } from '@shared/api/model/phonebook'

export const findEmployee = (subdivisions: Subdivision[], query: string) => {
    const lowerCaseQuery = query.toLowerCase()
    if (subdivisions.length === 0) return []
    const result: Employee[] = []
    subdivisions.forEach((subdiv) => {
        if (
            subdiv.head?.job?.some((j) => j.post?.toLowerCase().includes(lowerCaseQuery)) ||
            subdiv.head?.fio?.toLowerCase().includes(lowerCaseQuery)
        ) {
            result.push(subdiv.head)
        }
        subdiv.staff.forEach((employee) => {
            if (
                employee.job?.some((j) => j.post?.toLowerCase().includes(lowerCaseQuery)) ||
                employee.fio?.toLowerCase().includes(lowerCaseQuery)
            ) {
                result.push(employee)
            }
        })
        const nestedResult = findEmployee(subdiv.subdivs, lowerCaseQuery)
        result.push(...nestedResult)
    })
    return result.filter((person, index, self) => index === self.findIndex((p) => p.fio === person.fio))
}
