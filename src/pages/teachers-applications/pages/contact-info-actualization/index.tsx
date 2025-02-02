import React from 'react'

import { contactInfoActualizationModel } from '@entities/contact-info-actualization'

import TemplateFormPage from '@shared/widgets/template-form-page'

import getForm from './lib/get-form'

const ContactInfoActualizationPage = () => {
    return <TemplateFormPage model={contactInfoActualizationModel} getForm={getForm} />
}

export default ContactInfoActualizationPage
