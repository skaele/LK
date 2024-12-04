import { IInputArea } from '@ui/input-area/model'

export const getForm = (): IInputArea => {
    return {
        title: 'Состав семьи',
        hint: 'Укажите ваших детей и внуков в возрасте от 2 до 14 лет',
        data: [
            [
                {
                    fieldName: 'fio',
                    title: 'ФИО',
                    value: '',
                    required: true,
                    width: '40%',
                },
                {
                    fieldName: 'birthdate',
                    title: 'Дата рождения',
                    value: '',
                    type: 'date',
                    required: true,
                    width: '40%',
                },
            ],
        ],
        default: [
            [
                {
                    fieldName: 'fio',
                    title: 'ФИО',
                    value: '',
                    required: true,
                    width: '40%',
                },
                {
                    fieldName: 'birthdate',
                    title: 'Дата рождения',
                    value: '',
                    type: 'date',
                    required: true,
                    width: '40%',
                },
            ],
        ],
        addNew: true,
    }
}
