import React from 'react'

import { teacherStatementModel } from '@entities/teachers-statement'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'
import TemplateFormPage from 'widgets/template-form-page'

import getForm from './lib/get-form'

const CopyOfEmploymentRecordPage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            isSpecialField={true}
            formId={ApplicationTeachersFormCodes.COPY_OF_EMPLOYMENT_RECORD}
        />
    )
}

export default CopyOfEmploymentRecordPage
