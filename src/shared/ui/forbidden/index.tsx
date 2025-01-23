import React from 'react'
import { FiChevronDown, FiHome } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { HOME_ROUTE } from '@app/routes/general-routes'
import { Button, Error as ErrorUI, Message } from '@shared/ui/atoms'

import AutoAccordion from '../auto-accordion'
import Flex from '../flex'

export const Forbidden = ({ text, errorCodes }: { text: string; errorCodes?: string[] }) => {
    return (
        <ErrorUI text={text}>
            <Flex d="column" gap="1rem">
                <Link to={HOME_ROUTE}>
                    <Button text="На главную" icon={<FiHome />} />
                </Link>
                {!!errorCodes?.length && (
                    <AutoAccordion
                        forceState={true}
                        title={
                            <Message
                                type="failure"
                                fontSize="0.95rem"
                                title={
                                    <Flex>
                                        <span>Суть ошибки</span>
                                        <FiChevronDown />
                                    </Flex>
                                }
                            />
                        }
                    >
                        <Message type="failure" fontSize="0.95rem" title={''} icon={''}>
                            {errorCodes.map((code) => (
                                <div key={code}>Error: {code}</div>
                            ))}
                        </Message>
                    </AutoAccordion>
                )}
            </Flex>
        </ErrorUI>
    )
}
