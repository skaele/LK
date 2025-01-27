import React from 'react'

import { teacherStatementModel } from '@entities/teachers-statement'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'
import TemplateFormPage from 'widgets/template-form-page'

import getForm from './lib/get-form'

const GettingComputerEquipmentPage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            formId={ApplicationTeachersFormCodes.GETTING_COMPUTER_EQUIPMENT}
        />
    )
}

export default GettingComputerEquipmentPage
