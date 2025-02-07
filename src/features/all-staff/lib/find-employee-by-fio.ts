import { Employee, Subdivision } from '@shared/api/model/phonebook'
import { uniqueByProperty } from '@shared/lib/uniq'

export const findEmployeeByFio = (subdivisions: Subdivision[], fio: string) => {
    const lowerCaseFio = fio.toLowerCase()
    if (subdivisions.length === 0) return []
    const result: Employee[] = []
    subdivisions.forEach((subdiv) => {
        if (subdiv.head?.fio?.toLowerCase().includes(lowerCaseFio)) {
            result.push(subdiv.head)
        }
        subdiv.staff.forEach((employee) => {
            if (employee.fio.toLowerCase().includes(lowerCaseFio)) {
                result.push(employee)
            }
        })
        const nestedResult = findEmployeeByFio(subdiv.subdivs, lowerCaseFio)
        result.push(...nestedResult)
    })
    return uniqueByProperty(result, 'guid_person')
}
