import React from 'react'

import TemplateFormPage from '@widgets/template-form-page'

import { teacherStatementModel } from '@entities/teachers-statement'

import { ApplicationFormCodes } from '@shared/consts/models/application-form-codes'

import getForm from './lib/get-form'

const ArbitraryRequestPage = () => {
    return (
        <TemplateFormPage model={teacherStatementModel} getForm={getForm} formId={ApplicationFormCodes.FREE_REQUEST} />
    )
}

export default ArbitraryRequestPage
