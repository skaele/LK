import React from 'react'

import { ApplicationFormCodes } from '@utility-types/application-form-codes'

import { teacherStatementModel } from '@entities/teachers-statement'

import TemplateFormPage from '@shared/widgets/template-form-page'

import getForm from './lib/get-form'

const ArbitraryRequestPage = () => {
    return (
        <TemplateFormPage model={teacherStatementModel} getForm={getForm} formId={ApplicationFormCodes.FREE_REQUEST} />
    )
}

export default ArbitraryRequestPage
