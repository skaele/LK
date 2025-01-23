import React from 'react'
import { useHistory, useParams } from 'react-router'

import { ELECTRONIC_INTERACTION_AGREEMENT_ROUTE } from '@app/routes/general-routes'
import { electronicInteractionModel } from '@entities/electronic-interaction'
import { thirdPartyInteractionModel } from '@entities/payments'
import localizeDate from '@shared/lib/dates/localize-date'
import PageBlock from '@shared/ui/page-block'
import { Wrapper } from '@ui/atoms'
import { useUnit } from 'effector-react'
import { SliderPage, useModal } from 'widgets'
import { ElectornicAgreement } from 'widgets/electonic-agreement'

import { Modal } from './modal'

const ElectronicInteractionAgreementPage = () => {
    const history = useHistory()
    const [preparedData, error, loading] = useUnit([
        electronicInteractionModel.stores.$electronicInteractionStore,
        electronicInteractionModel.stores.$error,
        electronicInteractionModel.stores.$loading,
    ])
    const { type } = useParams<{ type: string }>()

    const load = () => electronicInteractionModel.events.getElectronicInteraction()

    return (
        <Wrapper load={load} loading={loading} error={error} data={preparedData} loadEveryVisit>
            <PageBlock>
                {preparedData?.clients?.length && preparedData.clients.length > 0 ? (
                    <SliderPage
                        currentPage={type === 'third-party' ? 1 : 0}
                        onChangePage={(id) => history.push(ELECTRONIC_INTERACTION_AGREEMENT_ROUTE + `/${id}`)}
                        pages={[
                            {
                                id: 'personal',
                                title: 'Персональное соглашение',
                                content: <PersonalAgreement />,
                            },
                            {
                                id: 'third-party',
                                title: 'Соглашение для третьей стороны',
                                content: <ThirdPartyAgreement />,
                            },
                        ]}
                    />
                ) : (
                    <PersonalAgreement />
                )}
            </PageBlock>
        </Wrapper>
    )
}

const PersonalAgreement = () => {
    const [done, completed, workerLoading, data] = useUnit([
        electronicInteractionModel.stores.$done,
        electronicInteractionModel.stores.$completed,
        electronicInteractionModel.stores.$workerLoading,
        electronicInteractionModel.stores.$electronicInteractionStore,
    ])
    if (!data) return null
    return (
        <ElectornicAgreement
            done={done}
            data={data}
            completed={completed}
            loading={workerLoading}
            handleSubmit={() => {
                electronicInteractionModel.events.postElectronicInteraction()
            }}
        >
            <div className="info-text">
                Я, <b>{data.fio}</b>,
                <p>
                    <b>Паспорт: </b>
                    {data.passSer} {data.passNum}, выдан {localizeDate(data.passDate)} {data.passDiv}
                    <br />
                    <b>Дата рождения: </b>
                    {data.bdate}
                    <br />
                    <b>Номер мобильного телефона: </b>
                    {data.phone}
                    <br />
                    <b>Адрес электронной почты: </b>
                    {data.email}
                </p>
                <p>
                    настоящим безоговорочно без каких-либо изъятий или ограничений на условиях присоединения принимаю
                    условия{' '}
                    <a target="_blank" href="https://e.mospolytech.ru/old/storage/files/EAccept.pdf" rel="noreferrer">
                        СОГЛАШЕНИЯ
                    </a>{' '}
                    об электронном взаимодействии, опубликованного на официальном сайте Университета, и выражаю согласие
                    на подписание электронных документов в личном кабинете.
                </p>
            </div>
        </ElectornicAgreement>
    )
}

const ThirdPartyAgreement = () => {
    const { open } = useModal()
    const [data, TPADone, TPALoading] = useUnit([
        electronicInteractionModel.stores.$electronicInteractionStore,
        thirdPartyInteractionModel.mutations.signAgreement.$succeeded,
        thirdPartyInteractionModel.mutations.signAgreement.$pending,
    ])

    if (!data) return null

    return (
        <>
            {data.clients?.map((client) => (
                <ElectornicAgreement
                    completed={TPADone}
                    done={TPADone}
                    loading={TPALoading}
                    data={client}
                    key={client.guid}
                    handleSubmit={() => {
                        open(<Modal guid={client.guid} email={client.email} />)
                    }}
                >
                    <>
                        <div className="info-text">
                            Я, <b>{client.fio}</b>,
                            <p>
                                <b>Паспорт: </b>
                                {client.passSer} {client.passNum}, выдан {localizeDate(client.passDate)}{' '}
                                {client.passDiv}
                                <br />
                                <b>Дата рождения: </b>
                                {client.bdate}
                                <br />
                                <b>Номер мобильного телефона: </b>
                                {client.phone}
                                <br />
                                <b>Адрес электронной почты: </b>
                                {client.email}
                            </p>
                            <p>
                                настоящим безоговорочно без каких-либо изъятий или ограничений на условиях присоединения
                                принимаю условия{' '}
                                <a
                                    target="_blank"
                                    href="https://e.mospolytech.ru/old/storage/files/EAccept.pdf"
                                    rel="noreferrer"
                                >
                                    СОГЛАШЕНИЯ
                                </a>{' '}
                                об электронном взаимодействии, опубликованного на официальном сайте Университета, и
                                выражаю согласие на подписание электронных документов в личном кабинете.
                            </p>
                        </div>
                    </>
                </ElectornicAgreement>
            ))}
        </>
    )
}

export default ElectronicInteractionAgreementPage
