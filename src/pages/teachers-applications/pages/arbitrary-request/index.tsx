import React from 'react'

import { ApplicationFormCodes } from '@utility-types/application-form-codes'
import TemplateFormPage from 'widgets/template-form-page'

import { teacherStatementModel } from '@entities/teachers-statement'

import getForm from './lib/get-form'

const ArbitraryRequestPage = () => {
    return (
        <TemplateFormPage model={teacherStatementModel} getForm={getForm} formId={ApplicationFormCodes.FREE_REQUEST} />
    )
}

export default ArbitraryRequestPage
