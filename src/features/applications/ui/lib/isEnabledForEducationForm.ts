import { User } from '@shared/api/model'

const isEnabledForEducationForm = (
    currentEducationForm: User['educationForm'] | undefined,
    exceptionalFormEducationList: User['educationForm'][] | undefined,
) => {
    if (!exceptionalFormEducationList?.length || !currentEducationForm) return true
    return !exceptionalFormEducationList?.includes(currentEducationForm)
}

export default isEnabledForEducationForm
