import { Agreement } from '@api/model'
import { paymentsModel, thirdPartyAgreementModel, thirdPartyInteractionModel } from '@entities/payments'
import Flex from '@shared/ui/flex'
import Subtext from '@shared/ui/subtext'
import Accordion from '@ui/accordion/accordion'
import { LinkButton, SubmitButton, Title } from '@ui/atoms'
import { Message } from '@ui/message'
import localizeDate from '@shared/lib/dates/localize-date'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'
import { FiCheck, FiDownload } from 'react-icons/fi'
import styled from 'styled-components'
import { useModal } from 'widgets'
import { ThirdPartyModal } from './third-party'
import { popUpMessageModel } from '@entities/pop-up-message'
import { useHistory } from 'react-router'
import { THIRD_PARTY_ELECTRONIC_INTERACTION } from '@app/routes/general-routes'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'

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
                        visible={signedUser || done || signed}
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
