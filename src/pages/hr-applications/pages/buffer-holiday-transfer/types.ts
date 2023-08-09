export interface BufferHolidayTransferForm {
    employeeGuid: string
    reason: string
    period: {
        from: {
            startDate: string
            endDate: string
        }
        to: {
            startDate: string
            endDate: string
        }
    }
}
