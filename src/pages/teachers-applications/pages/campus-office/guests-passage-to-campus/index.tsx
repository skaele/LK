import { teacherStatementModel } from '@entities/teachers-statement'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import React from 'react'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'

const GuestsPassageToCampus = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            isSpecialField={true}
            formId={ApplicationTeachersFormCodes.GUESTS_PASSAGE_TO_CAMPUS}
        />
    )
}

export default GuestsPassageToCampus
