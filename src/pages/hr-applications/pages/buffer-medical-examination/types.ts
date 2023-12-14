export interface BufferMedicalExamination {
    isError: false
    error: string
    age: number
    employeeMedicalExaminations: BufferMedicalExaminationOrder[]
}
export interface BufferMedicalExaminationOrder {
    tutor: boolean
    notTaken: BufferMedicalExaminationNotTaken[]
    employeeGuid: string
    documentGuid: string
    creationDate: string
    registrationDate: string
    hasApplication: boolean
    displayApplication: boolean
    displayOrder: boolean
    canBeDownloaded: boolean
    status: string
    orderRegistrationStatus: string
    orderNumber: string
}

export interface BufferMedicalExaminationNotTaken {
    creationDate: string
    signedDate: string
    hasApplication: true
    documentGuid: string
    hasOrder: true
    orderNumber: string
    displayApplication: true
    displayOrder: true
    orderStatus: string
    applicationApporvalStatus: string
    orderApprovalStatus: string
    downloadApplication: true
    downloadOrder: true
    startDate: string
    endDate: string
}

export interface BufferMedicalExaminationForm {
    employeeGuid: string
    start: string
    end: string
}
