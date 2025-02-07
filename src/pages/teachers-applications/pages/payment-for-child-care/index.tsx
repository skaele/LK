import React from 'react'

import TemplateFormPage from '@widgets/template-form-page'

import { teacherStatementModel } from '@entities/teachers-statement'

import { ApplicationTeachersFormCodes } from '@shared/consts/models/application-form-codes'

import getForm from './lib/get-form'

const PaymentForChildCarePage = () => {
    return (
        <TemplateFormPage
            model={teacherStatementModel}
            getForm={getForm}
            isSpecialField={true}
            formId={ApplicationTeachersFormCodes.PAYMENT_FOR_CHILD_CARE}
        />
    )
}

export default PaymentForChildCarePage
