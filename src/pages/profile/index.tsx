import React from 'react'
import { useHistory } from 'react-router'

import { Error } from '@sha@shared/session'
import styled from 'styled-components'

import { ContactDetailsProfile } from '@pages/teachers-applications/pages/contact-details/contact-details-profile'

import AllInfo from '@features/home/ui/molecules/all-info'
import Orders from '@features/home/ui/molecules/orders'
import { UserInfo } from '@features/profile'

import { menuModel } from '@entities/menu'

import useQueryParams from '@shared/lib/hooks/use-query-params'
import { userModel } from '@shared/session'
import { CenterPage, Wrapper } from '@shared/ui/atoms'
import Block from '@shared/ui/block'
import { AvailableAccounts } from '@shared/widgets'

import Top from './ui/top'

const ContentList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    align-items: center;
`

const ProfilePage = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()
    const history = useHistory()
    const query = useQueryParams()
    const page = query.get('page')
    const { allRoutes } = menuModel.selectors.useMenu()

    if (!user || !allRoutes) return null

    if (!!error) return <Error text={error} />

    const studentPages = [
        { title: 'Учетная карточка', content: <AllInfo user={user} />, id: 'userCard' },
        { title: 'Приказы', content: <Orders orders={user.orders} />, id: 'orders' },
    ]

    const teacherPages = [
        { title: 'Учетная карточка', content: <AllInfo user={user} />, id: 'userCard' },
        {
            title: 'Контактные данные',
            content: <ContactDetailsProfile user={user} />,
            id: 'contactDetails',
        },
        // {
        //     title: 'Сведения о вакцинации',
        //     content: (
        //         <div style={{ justifyContent: 'start' }}>
        //             <PageIsNotReady oldVersionUrl={VAX_ROUTE} />
        //         </div>
        //     ),
        // },
        // {
        //     title: 'Дети и внуки',
        //     content: (
        //         <div style={{ justifyContent: 'start' }}>
        //             <PageIsNotReady oldVersionUrl={CHILDREN_ROUTE} />
        //         </div>
        //     ),
        // },
    ]

    const pages = user.user_status === 'stud' ? studentPages : teacherPages

    const index = pages.findIndex((p) => p.id === page) || 0
    const currentPage = index === -1 ? 0 : index
    const setCurrentPage = (page: number) => {
        history.push({ search: `?page=${pages[page].id}` })
    }
    return (
        <Wrapper load={function () {}} loading={false} data={[]} error={null}>
            <ContentList>
                <Top user={user} currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />

                <CenterPage>
                    <Block height="100%" maxWidth="750px">
                        <AvailableAccounts />
                    </Block>
                </CenterPage>
                <UserInfo currentPage={currentPage} pages={pages.map((p) => p.content)} />
            </ContentList>
        </Wrapper>
    )
}

export default ProfilePage
