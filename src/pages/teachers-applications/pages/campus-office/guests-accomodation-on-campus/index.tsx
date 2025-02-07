import React from 'react'

import TemplateFormPage from 'widgets/template-form-page'

import { teacherStatementModel } from '@entities/teachers-statement'

import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'

import getForm from './lib/get-form'

const GuestsAccomodationOnCampus = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            isSpecialField={true}
            formId={ApplicationTeachersFormCodes.GUESTS_ACCOMODATION_ON_CAMPUS}
        />
    )
}

export default GuestsAccomodationOnCampus
