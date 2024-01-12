import { contactInfoActualizationModel } from '@entities/contact-info-actualization'
import React from 'react'
import { Message, Wrapper } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import { FiInfo } from 'react-icons/fi'
import { LinkField } from '@pages/settings/fields'
import { applicationsModel } from '@entities/applications'
import { useHistory } from 'react-router'
import { PHONEBOOK } from '@app/routes/teacher-routes'

const ContactInfoActualizationPage = () => {
    const { data, error } = contactInfoActualizationModel.selectors.useForm()
    const {
        data: { dataUserApplication },
        error: errorApplication,
    } = applicationsModel.selectors.useApplications()

    const history = useHistory()

    return (
        <Wrapper
            load={contactInfoActualizationModel.effects.getFormFx}
            data={data && dataUserApplication}
            error={error || errorApplication}
        >
            <PageBlock>
                <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                    Выберите должность, чтобы заполнить контактные данные по должности.
                </Message>
                {dataUserApplication?.subdivisions?.map((subdivision) => (
                    <LinkField
                        key={subdivision.guid_staff}
                        title={subdivision.subdivision + ' (' + subdivision.post + ')'}
                        type="link"
                        action={() => history.push(PHONEBOOK + '/' + subdivision.guid_staff)}
                    />
                ))}
            </PageBlock>
        </Wrapper>
    )
}

export default ContactInfoActualizationPage
