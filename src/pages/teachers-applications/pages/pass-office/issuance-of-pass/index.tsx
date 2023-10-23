import { teacherStatementModel } from '@entities/teachers-statement'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import React from 'react'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'

const IssuanceOfPass = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            isSpecialField={true}
            formId={ApplicationTeachersFormCodes.ISSUANCE_OF_PASS}
        />
    )
}

export default IssuanceOfPass
