import { jsonStringifyGraphql } from '@shared/lib/json-stringify-graphql'
import { STUDENT_PAGE_SIZE } from '../constants'

export const getPEStudentsQuery = (
    page: number,
    filters: Record<string, unknown> | null = null,
    pageSize = STUDENT_PAGE_SIZE,
) => {
    const stringifyFilters = jsonStringifyGraphql(filters, ['course'])
    return `query {
      students (take:${STUDENT_PAGE_SIZE}, skip: ${
        pageSize * page
    }, where: ${stringifyFilters}, order: [{fullName:ASC}]){
        items {
            fullName
            groupNumber
            studentGuid
            visits
            additionalPoints
            pointsForStandards
            group {
                visitValue
            }
            hasDebtFromPreviousSemester
            archivedVisitValue
            course
            department
            pointsHistory(where: {workType: {eq: ONLINE_WORK}}) {
              points
            }
        }
        totalCount
      }
    }`
}

export const getPEStudentQuery = (studentId: string) => `{
    student(guid: "${studentId}") {
        fullName
        groupNumber
        studentGuid
        hasDebtFromPreviousSemester
        archivedVisitValue
        visits
        additionalPoints
        pointsForStandards
        course
        department
        standardsHistory {
          id
          points
          standardType
          date
          comment
          teacherGuid
          teacher {
            fullName
          }
        }
        group {
          visitValue
        }
        visitsHistory {
          id
          date
          teacherGuid
          teacher {
            fullName
          }
        }
        pointsHistory{
          id
          workType
          comment
          date
          points
          teacherGuid
          teacher{
            fullName
          }
        }
      }
}`

export const getPEStudentsTotalCountQuery = (filters: Record<string, unknown> | null = null) => {
    const stringifyFilters = jsonStringifyGraphql(filters, ['course'])

    return `{
      students(where: ${stringifyFilters}) {
        totalCount
      }
    }`
}
