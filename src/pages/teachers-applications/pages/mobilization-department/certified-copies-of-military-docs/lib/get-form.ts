import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import getTeacherSubdivisions from '@pages/teachers-applications/lib/get-teacher-subdivisions'

const docs = [
    {
        id: 0,
        title: 'сведения о поступлении в образовательную организацию',
    },
    {
        id: 1,
        title: 'cведения об отчислении из образовательной организации',
    },
    {
        id: 2,
        title: 'cведения об уходе в академический отпуск',
    },
    {
        id: 3,
        title: 'cведения о выходе из академического отпуска',
    },
]

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Заверение и выдача копий внутренних документов',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            ...getTeacherSubdivisions('mob'),
            {
                fieldName: 'requested_docs',
                title: 'Запрашиваемые документы',
                type: 'select',
                items: docs,
                value: null,
                width: '100',
                required: true,
                editable: true,
            },
            {
                fieldName: 'to_mil_commisariats_or_courts',
                title: 'Документы предоставляются в военные комиссариаты Российской Федерации, суды',
                type: 'checkbox',
                value: '',
                editable: true,
            },
            {
                fieldName: 'commentary',
                title: 'Комментарий',
                type: 'textarea',
                value: '',
                editable: true,
            },
        ],
    }
}

export default getForm
