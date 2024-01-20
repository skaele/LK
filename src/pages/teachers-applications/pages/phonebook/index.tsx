import React, { useEffect, useState } from 'react'
import { Message, Wrapper } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import { FiInfo } from 'react-icons/fi'
import { LinkField } from '@pages/settings/fields'
import { applicationsModel } from '@entities/applications'
import { useHistory } from 'react-router'
import { PHONEBOOK } from '@app/routes/teacher-routes'
import PhonebookForm from './form'

const PhonebookPage = () => {
    const [hasPartTime, setHasPartTime] = useState(false)
    const history = useHistory()

    const {
        data: { dataUserApplication },
        error,
    } = applicationsModel.selectors.useApplications()

    useEffect(() => {
        if (!!dataUserApplication?.subdivisions?.length && dataUserApplication?.subdivisions?.length > 1)
            setHasPartTime(true)
    }, [dataUserApplication])

    if (hasPartTime)
        return (
            <Wrapper load={() => {}} data={dataUserApplication} error={error}>
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

    return <PhonebookForm />
}

export default PhonebookPage
