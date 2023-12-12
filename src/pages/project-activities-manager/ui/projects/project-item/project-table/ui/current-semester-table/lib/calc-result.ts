import { StudentActivitiesColumn, StudentActivityResult } from '@features/table-project-activities-manager'
import { PROJECT_ACTIVITIES_PASS_POINTS } from '@features/table-project-activities-manager/config'

export const calcResult = (points: {
    [StudentActivitiesColumn.firstValidation]: number
    [StudentActivitiesColumn.secondValidation]: number
    [StudentActivitiesColumn.defensePoints]: number
}): {
    resultPoints: number
    result: StudentActivityResult
} => {
    const resultPoints =
        points[StudentActivitiesColumn.firstValidation] +
        points[StudentActivitiesColumn.secondValidation] +
        points[StudentActivitiesColumn.defensePoints]

    return {
        resultPoints,
        result:
            resultPoints >= PROJECT_ACTIVITIES_PASS_POINTS
                ? StudentActivityResult.passed
                : StudentActivityResult.notPassed,
    }
}
