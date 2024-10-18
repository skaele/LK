export interface BufferHolidayPlanningForm {
    employeeGuid: string
    type: number
    start: string
    end: string
    files: (File[] | undefined)[]
}
