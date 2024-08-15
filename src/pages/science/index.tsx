import PageBlock from '@shared/ui/page-block'
import Table from '@shared/ui/table'
import React, { useEffect } from 'react'
import { useUnit } from 'effector-react'
import { scienceModel } from '@entities/science'
import { getScienceColumns } from './lib/get-columns'
import { Button } from '@shared/ui/atoms'
import { FiPlus } from 'react-icons/fi'

const Science = () => {
    const [pageMounted, articles, loading] = useUnit([
        scienceModel.events.pageMounted,
        scienceModel.stores.articles,
        scienceModel.stores.articlesLoading,
    ])

    useEffect(() => {
        pageMounted()
    }, [])

    return (
        <PageBlock
            topRightCornerElement={
                <Button
                    onClick={() => {}}
                    text="Загрузить"
                    background="var(--reallyBlue)"
                    textColor="#fff"
                    icon={<FiPlus />}
                    minWidth="35px"
                    height="36px"
                    shrinkTextInMobile
                />
            }
        >
            <Table loading={loading} columns={getScienceColumns()} data={articles} maxOnPage={7} />
        </PageBlock>
    )
}

export default Science
