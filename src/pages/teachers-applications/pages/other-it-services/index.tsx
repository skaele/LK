import React from 'react'

import { teacherStatementModel } from '@entities/teachers-statement'

import { ApplicationTeachersFormCodes } from '@shared/consts/models/application-form-codes'
import TemplateFormPage from '@shared/widgets/template-form-page'

import getForm from './lib/get-form'

const OtherItServicesPage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            formId={ApplicationTeachersFormCodes.OTHER_IT_SERVICES}
        />
    )
}

export default OtherItServicesPage
