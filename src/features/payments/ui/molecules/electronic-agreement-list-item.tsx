import React, { useEffect } from 'react'
import { FiCheck, FiDownload } from 'react-icons/fi'
import { useHistory } from 'react-router'

import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { paymentsModel, thirdPartyAgreementModel, thirdPartyInteractionModel } from '@entities/payments'

import { Agreement } from '@shared/api/model'
import localizeDate from '@shared/lib/dates/localize-date'
import { THIRD_PARTY_ELECTRONIC_INTERACTION } from '@shared/routing'
import Accordion from '@shared/ui/accordion/accordion'
import { LinkButton, Message, SubmitButton, Title } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import useCurrentDevice from '@shared/ui/hooks/use-current-device'
import { useModal } from '@shared/ui/modal'
import { popUpMessageModel } from '@shared/ui/pop-up-message'
import Subtext from '@shared/ui/subtext'

import { ThirdPartyModal } from './third-party'

interface Props {
    data: Agreement
    isContractSigned: boolean
}

const SignBlock = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`

const ElectronicAgreementListItem = ({ data, isContractSigned }: Props) => {
    const history = useHistory()
    const { isTablet } = useCurrentDevice()
    const { id, signed_user: signedUser, name, can_sign: isActive, date, reason } = data
    const [done, completed, loading, signed, TPAgreement] = useUnit([
        paymentsModel.stores.$done,
        paymentsModel.stores.$completed,
        paymentsModel.stores.$loading,
        thirdPartyAgreementModel.stores.signed,
        thirdPartyInteractionModel.stores.thirdPartyInteractionAgreement,
    ])

    const height = signedUser || done || signed ? 140 : isTablet ? 120 : 100

    const { open, close } = useModal()

    useEffect(() => {
        if (signed) close()
    }, [signed])

    const handleSubmit = (isThirdParty: boolean) => {
        if (isThirdParty) {
            if (!TPAgreement) {
                popUpMessageModel.events.evokePopUpMessage({
                    message: 'Чтобы продолжить, подпишите соглашение об электронном взаимодействии',
                    type: 'failure',
                    time: 10000,
                })
                history.push(THIRD_PARTY_ELECTRONIC_INTERACTION)
                return
            }
            thirdPartyAgreementModel.events.signStarted()
            open(<ThirdPartyModal agreement={data} />)
            return
        }
        paymentsModel.events.signAgreement(id)
    }
    const setCompleted = paymentsModel.events.setCompleted
    const isThirdParty = data.sides === '3'

    return (
        <Accordion height={height} title={name} confirmed={signedUser || done || signed}>
            <SignBlock>
                <Flex d="column" ai="flex-start" gap="4px">
                    <Title size={5} align="left">
                        {name}
                    </Title>
                    <Subtext>{localizeDate(date)}</Subtext>
                </Flex>
                <Flex gap="8px" w="100%" jc="flex-end">
                    <LinkButton
                        href={data.file}
                        onClick={() => null}
                        width="40px"
                        icon={<FiDownload />}
                        isActive={!!data.file}
                        // background="transparent"
                    />
                    {!(signedUser || done || signed) && (
                        <SubmitButton
                            text={!(signedUser || done || signed) ? 'Подписать' : 'Подписано'}
                            action={() => handleSubmit(isThirdParty)}
                            isLoading={loading}
                            completed={completed || signed}
                            isDone={signedUser || done || signed}
                            width="160px"
                            setCompleted={setCompleted}
                            isActive={!(signedUser || done || signed) && !!isActive}
                            popUpFailureMessage={
                                !isActive
                                    ? isContractSigned
                                        ? reason
                                        : 'Необходимо сначала подписать договор'
                                    : 'Согласие уже подписано'
                            }
                            popUpSuccessMessage="Согласие успешно подписано"
                        />
                    )}
                    <Message
                        type={'success'}
                        title={'Подписано'}
                        icon={<FiCheck />}
                        align="center"
                        width="130px"
                        visible={(signedUser || done || signed) && isActive}
                    />
                </Flex>
            </SignBlock>
            {(done || signedUser || signed) && (
                <Subtext>
                    Дата подписания: {localizeDate(data.signed_user_date || new Date())},{' '}
                    {data.signed_user_time || `${new Date().getHours()}:${new Date().getMinutes()}`}
                </Subtext>
            )}
        </Accordion>
    )
}

export default ElectronicAgreementListItem
