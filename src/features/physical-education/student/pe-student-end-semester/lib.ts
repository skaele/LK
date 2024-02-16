export const getEndSemesterMutation = (studentGuid: string) => `mutation EndSemesterForStudent {
    archiveStudent (input: {studentGuid: "${studentGuid}"}){
      archivedStudentEntity {
        studentGuid
        fullName
      }
      errors {
        ... on Error {
          message
        }
      }
    }
  }  
`
