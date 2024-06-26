import useDebounce from '@shared/lib/hooks/use-debounce'
import { Button, Message } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import Search from '@shared/ui/search'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'
import { AllowancesQuery } from '@entities/allowances/model/allowances-query'
import { FiInfo, FiPlus } from 'react-icons/fi'
import Table from '@shared/ui/table'
import { getAllowancesColumns } from '../lib/get-allowances-columns'
import { useHistory } from 'react-router'
import { CREATE_ALLOWANCE } from '@app/routes/teacher-routes'

export const Initiator = () => {
    const history = useHistory()
    const [Allowances] = useUnit([AllowancesQuery.$data])

    const [lastSearch, setLastSearch] = useState('')
    const [fio, setFio] = useState('')
    const [searchValue, setSearchValue, loading] = useDebounce({
        onDebounce: setFio,
        delay: 400,
        defaultValue: fio,
        triggerDelay: 200,
        triggerOn: (val) => {
            setLastSearch(val)
            return lastSearch !== val
        },
        onClear: setFio,
    })

    const handleCreateApplication = () => {
        history.push(CREATE_ALLOWANCE)
    }

    return (
        <PageBlock
            topRightCornerElement={
                <Button
                    onClick={handleCreateApplication}
                    text="Подать заявку"
                    background="var(--reallyBlue)"
                    textColor="#fff"
                    icon={<FiPlus />}
                    minWidth="35px"
                    height="36px"
                    shrinkTextInMobile
                />
            }
        >
            <Message type="info" title="Информация" icon={<FiInfo />} lineHeight="1.4rem" fontSize="0.85rem">
                <p>Интерфейс все еще находится в разработке</p>
            </Message>
            <Search value={searchValue} setValue={setSearchValue} loading={loading} placeholder={'Сотрудник'} />
            <Table
                // loading={!Allowances}
                loading={false}
                columns={getAllowancesColumns()}
                data={Allowances}
                maxOnPage={7}
            />
        </PageBlock>
    )
}
