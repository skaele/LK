export interface BufferHolidayPlanning {
    isError: boolean
    error: string
    employeeVacations: {
        division: string
        jobTitle: string
        employeeGuid: string
        schedule: [
            {
                documentGuid: string
                status: Status
                isCarriedOver: boolean
                vacation: Vacation
                carriedOver: {
                    period: {
                        startDate: string
                        endDate: string
                        totalDays: 0
                    }
                    status: Status
                }
            },
        ]
        spent: {
            vacation: Vacation
            documentGuid: string
        }[]
        notTaken: {
            vacation: {
                period: {
                    startDate: string
                    endDate: string
                    totalDays: number
                }
                status: Status
            }
            documentGuid: string
        }[]
    }[]
}

export interface BufferHolidayPlanningForm {
    employeeGuid: string
    type: number
    start: string
    end: string
}

interface Vacation {
    period: {
        startDate: string
        endDate: string
        totalDays: 0
    }
    status: Status
}

interface Status {
    creationDate: string
    signedDate: string
    hasApplication: boolean
    hasOrder: boolean
    orderNumber: string
    displayApplication: boolean
    displayOrder: boolean
    orderStatus: string
    applicationApporvalStatus: string
    orderApprovalStatus: string
    downloadApplication: boolean
    downloadOrder: boolean
}
