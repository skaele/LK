import React from 'react'
import getForm from './lib/get-form'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'
import TemplateFormPage from 'widgets/template-form-page'
import { teacherStatementModel } from '@entities/teachers-statement'

const IncreaseAntiplagiatLimits = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            isSpecialField={true}
            formId={ApplicationTeachersFormCodes.INCREASE_ANTIPLAGIAT_LIMITS}
        />
    )
}

export default IncreaseAntiplagiatLimits
