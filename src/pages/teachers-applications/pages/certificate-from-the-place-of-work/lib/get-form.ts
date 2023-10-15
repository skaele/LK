import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'
import getMethodObtainingFields from '@features/applications/lib/get-method-obtaining-fields'
import getTeacherSubdivisions from '@pages/teachers-applications/lib/get-teacher-subdivisions'
import getAddressFields from '@features/applications/lib/get-address-fields'

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Справка с места работы',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
            ...getMethodObtainingFields(),
            ...getTeacherSubdivisions('kadr'),
            ...getAddressFields(),
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: false },
    }
}

export default getForm
