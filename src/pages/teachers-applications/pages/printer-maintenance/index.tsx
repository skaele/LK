import React from 'react'

import { teacherStatementModel } from '@entities/teachers-statement'
import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'
import TemplateFormPage from 'widgets/template-form-page'

import getForm from './lib/get-form'

const PrinterMaintenancePage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            formId={ApplicationTeachersFormCodes.PRINTER_MAINTENANCE}
        />
    )
}

export default PrinterMaintenancePage
