import findSemestr from '@shared/lib/find-semestr'
import { SelectPage } from '@shared/ui/select'

const createSelectItems = (course: number | string) => {
    const count = findSemestr(new Date().toISOString(), course)

    const result: SelectPage[] = []
    for (let i = 1; i <= count; i++) {
        result.push({ id: i, title: `${i} семестр` })
    }

    result.push({ id: -1, title: 'Все семестры' })

    return result
}

export default createSelectItems
