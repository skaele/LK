import { StudentActivitiesColumn, StudentActivityData } from '@features/table-project-activities-manager'

export const extractPoints = (
    data: StudentActivityData,
    editedData: StudentActivityData | undefined,
): { firstValidationPoints: number; secondValidationPoints: number; defensePoints: number } => {
    // Так как работаем с таблицей по текущему семестру, такой ситуации быть не должно,
    // но проверку типов сделать нужно
    if (data.isPrevSemester || editedData?.isPrevSemester) {
        return {
            defensePoints: 0,
            firstValidationPoints: 0,
            secondValidationPoints: 0,
        }
    }

    return {
        firstValidationPoints: (editedData ?? data)[StudentActivitiesColumn.firstValidation],
        secondValidationPoints: (editedData ?? data)[StudentActivitiesColumn.secondValidation],
        defensePoints: (editedData ?? data)[StudentActivitiesColumn.defensePoints],
    }
}
