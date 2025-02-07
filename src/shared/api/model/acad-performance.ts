import { IGrade } from '@shared/consts'

export interface AcadPerformance {
    bill_num: string
    bill_type: string
    chair: string
    course: string
    doc_type: string
    exam_date: string
    exam_time: string
    exam_type: string
    grade: keyof IGrade | undefined
    id: string
    name: string
    teacher: string
    ticket_num: string
    year: string
    semestr: string
}
