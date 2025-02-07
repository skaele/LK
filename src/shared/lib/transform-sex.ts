import { Sex } from '@shared/consts/models/sex'

const transformSex = (sex: Sex) => {
    return sex === 'Male' ? 'Мужской' : 'Женский'
}

export default transformSex
