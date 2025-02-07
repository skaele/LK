import { Payments } from '@shared/api/model'

const changeCanSign = (payments: Payments | null, contractId: string, value: boolean): Payments | null => {
    if (!payments) return null

    const newDormitoryData = payments.dormitory.map((dorm) => {
        if (dorm.id === contractId) {
            return { ...dorm, can_sign: value }
        }
        return dorm
    })

    const newEduData = payments.education.map((edu) => {
        if (edu.id === contractId) {
            return { ...edu, can_sign: value }
        }
        return edu
    })

    return {
        dormitory: newDormitoryData,
        education: newEduData,
    }
}

export default changeCanSign
