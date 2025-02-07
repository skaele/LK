import React from 'react'

import TemplateFormPage from 'widgets/template-form-page'

import { teacherStatementModel } from '@entities/teachers-statement'

import { ApplicationTeachersFormCodes } from '@shared/models/application-form-codes'

import getForm from './lib/get-form'

const CertificationAndIssuanceOfDocs = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            isSpecialField={true}
            formId={ApplicationTeachersFormCodes.CERTIFICATION_AND_ISSUANCE_OF_DOCS}
        />
    )
}

export default CertificationAndIssuanceOfDocs
