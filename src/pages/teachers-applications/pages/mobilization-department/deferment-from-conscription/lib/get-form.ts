import { UserApplication } from '@api/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import { IInputArea } from '@ui/input-area/model'

// const languageItems = [
//     { id: '0', title: 'начальный' },
//     { id: '1', title: 'базовый' },
//     { id: '2', title: 'со словарем' },
//     { id: '3', title: 'разговорный' },
//     { id: '4', title: 'свободно' },
// ]

// const LevelOfEducation = [
//     { id: '0', title: 'начальный' },
//     { id: '1', title: 'базовый' },
//     { id: '2', title: 'со словарем' },
//     { id: '3', title: 'разговорный' },
//     { id: '4', title: 'свободно' },
// ]

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Личная карточка по воинскому учету',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            // {
            //     fieldName: 'birth_date',
            //     title: 'Дата рождения',
            //     type: 'date',
            //     value: '',
            //     editable: true,
            //     required: true,
            // },
            // {
            //     fieldName: 'birth_place',
            //     title: 'Место рождения\n(республика, край, область, район, город, населенный пункт)',
            //     value: '',
            //     editable: true,
            //     required: true,
            // },
            // [
            //     {
            //         fieldName: 'language',
            //         title: 'Язык',
            //         required: true,
            //         value: '',
            //     },
            //     {
            //         fieldName: 'level',
            //         title: 'Уровень владения',
            //         value: null,
            //         type: 'select',
            //         items: languageItems,
            //         width: '100%',
            //     },
            // ],
            // addNew: true,
            // {
            //     fieldName: '',
            //     title: 'Образование',
            //     type: 'text-header',
            //     value: '',
            // },
            // {
            //     fieldName: 'level_of_education',
            //     title: 'Уровень образования',
            //     type: 'select',
            //     items: LevelOfEducation,
            //     value: null,
            //     editable: true,
            //     required: true,
            // },

            {
                fieldName: 'commentary',
                title: 'Комментарий (укажите, какие документы и сколько копий вам необходимо)',
                placeholder: 'Комментарий',
                type: 'textarea',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', required: false },
    }
}

export default getForm
