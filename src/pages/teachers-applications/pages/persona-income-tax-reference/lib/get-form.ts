import { IInputArea } from '@ui/input-area/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import { UserApplication } from '@api/model'
import getAddressFields from '@features/applications/lib/get-address-fields'
import getTeacherSubdivisions from '@pages/teachers-applications/lib/get-teacher-subdivisions'
import getMethodObtainingFields from '@features/applications/lib/get-method-obtaining-fields'
import { getLastYearForPeriod } from '@pages/teachers-applications/lib/get-last-year-for-period'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Справка по форме 2-НДФЛ',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            {
                title: 'Период',
                type: 'select',
                value: null,
                fieldName: 'period',
                editable: true,
                width: '100',
                required: true,
                items: getLastYearForPeriod(),
            },
            {
                title: 'Количество копий',
                value: null,
                fieldName: 'number_copies',
                type: 'number',
                editable: true,
                required: true,
            },
            ...getMethodObtainingFields(),
            ...getTeacherSubdivisions('buhg'),
            ...getAddressFields(),
            {
                title: 'Текст заявки',
                type: 'textarea',
                fieldName: 'commentary',
                value: '',
                editable: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: false },
    }
}

export default getForm
