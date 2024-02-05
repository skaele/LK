import { AddStudentVisits } from '../types/add-student-visits'

export const getAddVisitMutation = ({ studentGuid, date }: AddStudentVisits) => `mutation IncreaseStudentVisits {
    increaseStudentVisits(input: { studentGuid: "${studentGuid}", date: "${date}" }) {
      success
      errors {
        ... on Error {
          message
        }
      }
    }
  }  
`

export const getRemoveVisitMutation = (id: string) => `mutation RemoveStudentVisits {
  deleteStudentVisit(input: { historyId: ${id} }) {
    success
    errors {
      ... on Error {
        message
      }
    }
  }
}`
