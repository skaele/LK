<<<<<<<< HEAD:src/pages/teachers-applications/pages/campus-office/guests-accommodation-on-campus/lib/get-form.ts
import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'

import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'
========
import { UserApplication } from '@api/model'

import getBasicFieldsApplicationTeacher from '@pages/teachers-applications/lib/get-basic-fields-application-teacher'

import { IInputArea } from '@ui/input-area/model'
>>>>>>>> master:src/pages/teachers-applications/pages/campus-office/guests-accomodation-on-campus/lib/get-form.ts

const getForm = (data: UserApplication): IInputArea => {
    return {
        title: 'Временное размещение гостей в студгородке',
        data: [
            ...getBasicFieldsApplicationTeacher(data),
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
