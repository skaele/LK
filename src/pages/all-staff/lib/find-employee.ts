import { Employee, Subdivision } from '@shared/api/model/phonebook'
import { uniqueByProperty } from '@shared/lib/uniq'

export const findEmployee = (subdivisions: Subdivision[], query: string) => {
    const lowerCaseQuery = query.toLowerCase()
    if (subdivisions.length === 0) return []
    const result: Employee[] = []
    subdivisions.forEach((subdiv) => {
        if (
            subdiv.head?.post?.toLowerCase().includes(lowerCaseQuery) ||
            subdiv.head?.fio?.toLowerCase().includes(lowerCaseQuery)
        ) {
            result.push(subdiv.head)
        }
        subdiv.staff.forEach((employee) => {
            if (
                employee.post?.toLowerCase().includes(lowerCaseQuery) ||
                employee.fio?.toLowerCase().includes(lowerCaseQuery)
            ) {
                result.push(employee)
            }
        })
        const nestedResult = findEmployee(subdiv.subdivs, lowerCaseQuery)
        result.push(...nestedResult)
    })
    return uniqueByProperty(result, 'guid_person')
}
