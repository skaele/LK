import React from 'react'

import { teacherStatementModel } from '@entities/teachers-statement'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'
import TemplateFormPage from 'widgets/template-form-page'

import getForm from './lib/get-form'

const VisaCertificatePage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            isSpecialField={true}
            formId={ApplicationTeachersFormCodes.VISA_CERTIFICATE}
        />
    )
}

export default VisaCertificatePage
