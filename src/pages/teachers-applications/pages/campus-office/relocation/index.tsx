import React from 'react'

import { teacherStatementModel } from '@entities/teachers-statement'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'
import TemplateFormPage from 'widgets/template-form-page'

import getForm from './lib/get-form'

const Relocation = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            isSpecialField={true}
            formId={ApplicationTeachersFormCodes.RELOCATION}
        />
    )
}

export default Relocation
