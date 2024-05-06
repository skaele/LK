import { Employee, Subdivision } from '@shared/api/model/phonebook'

export const findEmployeeByFio = (subdivisions: Subdivision[], fio: string) => {
    if (subdivisions.length === 0) return []
    const result: Employee[] = []
    subdivisions.forEach((subdiv) => {
        if (subdiv.head?.fio?.toLowerCase().includes(fio)) {
            result.push(subdiv.head)
        }
        subdiv.staff.forEach((employee) => {
            if (employee.fio.toLowerCase().includes(fio)) {
                result.push(employee)
            }
        })
        const nestedResult = findEmployeeByFio(subdiv.subdivs, fio)
        result.push(...nestedResult)
    })
    return result.filter((person, index, self) => index === self.findIndex((p) => p.fio === person.fio))
}
