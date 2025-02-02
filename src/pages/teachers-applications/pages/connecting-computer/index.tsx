import React from 'react'

import { teacherStatementModel } from '@entities/teachers-statement'

import { ApplicationTeachersFormCodes } from '@shared/consts/models/application-form-codes'
import TemplateFormPage from '@shared/widgets/template-form-page'

import getForm from './lib/get-form'

const ConnectingComputerPage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            formId={ApplicationTeachersFormCodes.CONNECTING_COMPUTER}
        />
    )
}

export default ConnectingComputerPage
