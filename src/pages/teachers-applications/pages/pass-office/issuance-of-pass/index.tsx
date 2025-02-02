import React from 'react'

import { teacherStatementModel } from '@entities/teachers-statement'

import { ApplicationTeachersFormCodes } from '@shared/consts/models/application-form-codes'
import TemplateFormPage from '@shared/widgets/template-form-page'

import getForm from './lib/get-form'

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
