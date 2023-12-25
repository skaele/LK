import { contactInfoActualizationModel } from '@entities/contact-info-actualization'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import React from 'react'
import { applicationsModel } from '@entities/applications'
import Flex from '@shared/ui/flex'

const ContactInfoActualizationPage = () => {
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()

    return (
        <Flex>
            {dataUserApplication &&
                dataUserApplication.subdivisions?.map((subdivision) => (
                    <>
                        <TemplateFormPage
                            title={subdivision.post}
                            key={subdivision.guid_staff}
                            model={contactInfoActualizationModel}
                            getForm={getForm}
                        />
                    </>
                ))}
        </Flex>
    )
}

export default ContactInfoActualizationPage
