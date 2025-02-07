import React from 'react'

import TemplateFormPage from 'widgets/template-form-page'

import { teacherStatementModel } from '@entities/teachers-statement'

import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'

import getForm from './lib/get-form'

const QuestionSedPage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            formId={ApplicationTeachersFormCodes.QUESTION_SED}
        />
    )
}

export default QuestionSedPage
