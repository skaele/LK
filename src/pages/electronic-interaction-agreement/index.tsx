import { electronicInteractionModel } from '@entities/electronic-interaction'
import PageBlock from '@shared/ui/page-block'
import { SubmitButton, Title, Wrapper } from '@ui/atoms'
import localizeDate from '@shared/lib/dates/localize-date'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'
import { ElectornicAgreement } from 'widgets/electonic-agreement'
import { useHistory, useParams } from 'react-router'
import { SliderPage, useModal } from 'widgets'
import { ELECTRONIC_INTERACTION_AGREEMENT_ROUTE } from '@app/routes/general-routes'
import Flex from '@shared/ui/flex'
import { Email } from './steps/email'
import { Code } from './steps/code'
import { Modal } from './modal'

const ElectronicInteractionAgreementPage = () => {
    const history = useHistory()
    const [preparedData, error, loading] = useUnit([
        electronicInteractionModel.stores.$electronicInteractionStore,
        electronicInteractionModel.stores.$error,
        electronicInteractionModel.stores.$loading,
    ])
    const { type } = useParams<{ type: string }>()
    const { open, close } = useModal()
    const [step, setStep] = useState(0)

    const load = () => electronicInteractionModel.events.getElectronicInteraction()

    return (
        <Wrapper load={load} loading={loading} error={error} data={preparedData} loadEveryVisit>
            <PageBlock>
                <SliderPage
                    currentPage={type === 'third-party' ? 1 : 0}
                    onChangePage={(id) => history.push(ELECTRONIC_INTERACTION_AGREEMENT_ROUTE + `/${id}`)}
                    pages={[
                        {
                            id: 'personal',
                            title: 'Персональное соглашение',
                            content: preparedData && (
                                <ElectornicAgreement>
                                    <div className="info-text">
                                        Я, <b>{preparedData.fio}</b>,
                                        <p>
                                            <b>Паспорт: </b>
                                            {preparedData.passSer} {preparedData.passNum}, выдан{' '}
                                            {localizeDate(preparedData.passDate)} {preparedData.passDiv}
                                            <br />
                                            <b>Дата рождения: </b>
                                            {preparedData.bdate}
                                            <br />
                                            <b>Номер мобильного телефона: </b>
                                            {preparedData.phone}
                                            <br />
                                            <b>Адрес электронной почты: </b>
                                            {preparedData.email}
                                        </p>
                                        <p>
                                            настоящим безоговорочно без каких-либо изъятий или ограничений на условиях
                                            присоединения принимаю условия{' '}
                                            <a
                                                target="_blank"
                                                href="https://e.mospolytech.ru/old/storage/files/EAccept.pdf"
                                                rel="noreferrer"
                                            >
                                                СОГЛАШЕНИЯ
                                            </a>{' '}
                                            об электронном взаимодействии, опубликованного на официальном сайте
                                            Университета, и выражаю согласие на подписание электронных документов в
                                            личном кабинете.
                                        </p>
                                    </div>
                                </ElectornicAgreement>
                            ),
                        },
                        {
                            id: 'third-party',
                            title: 'Соглашение для третьей стороны',
                            content: preparedData && (
                                <div>
                                    <div>
                                        Я, <b>{preparedData.fio}</b>,
                                        <p>
                                            <b>Паспорт: </b>
                                            {preparedData.passSer} {preparedData.passNum}, выдан{' '}
                                            {localizeDate(preparedData.passDate)} {preparedData.passDiv}
                                            <br />
                                            <b>Дата рождения: </b>
                                            {preparedData.bdate}
                                            <br />
                                            <b>Номер мобильного телефона: </b>
                                            {preparedData.phone}
                                            <br />
                                            <b>Адрес электронной почты: </b>
                                            {preparedData.email}
                                        </p>
                                        <p>
                                            настоящим безоговорочно без каких-либо изъятий или ограничений на условиях
                                            присоединения принимаю условия{' '}
                                            <a
                                                target="_blank"
                                                href="https://e.mospolytech.ru/old/storage/files/EAccept.pdf"
                                                rel="noreferrer"
                                            >
                                                СОГЛАШЕНИЯ
                                            </a>{' '}
                                            об электронном взаимодействии, опубликованного на официальном сайте
                                            Университета, и выражаю согласие на подписание электронных документов в
                                            личном кабинете.
                                        </p>
                                    </div>
                                    <SubmitButton
                                        text={'Подписать'}
                                        action={() => {
                                            open(<Modal />)
                                        }}
                                        isLoading={false}
                                        completed={false}
                                        isDone={false}
                                        setCompleted={() => {}}
                                    />
                                </div>
                            ),
                        },
                    ]}
                />
            </PageBlock>
        </Wrapper>
    )
}
const titles = ['Введите e-mail заказчика', 'Введите код, полученный на почту']

export default ElectronicInteractionAgreementPage
