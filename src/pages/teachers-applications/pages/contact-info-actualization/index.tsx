import React from 'react'

import TemplateFormPage from 'widgets/template-form-page'

import { contactInfoActualizationModel } from '@entities/contact-info-actualization'

import getForm from './lib/get-form'

const ContactInfoActualizationPage = () => {
    return <TemplateFormPage model={contactInfoActualizationModel} getForm={getForm} />
}

export default ContactInfoActualizationPage
