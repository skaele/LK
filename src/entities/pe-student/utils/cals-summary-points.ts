import { PEStudent } from '../types'

export const calcSummaryPoints = ({
    hasDebtFromPreviousSemester,
    archivedVisitValue,
    group,
    visits,
    additionalPoints,
    pointsForStandards,
}: PEStudent): number => {
    return hasDebtFromPreviousSemester
        ? Math.round(archivedVisitValue * visits + additionalPoints + pointsForStandards)
        : Math.round(group.visitValue * visits + additionalPoints + pointsForStandards)
}
