import { Groups, IRoutes } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { peTeacherModel } from '@entities/pe-teacher'
import { userModel } from '@entities/user'
import { FoundPages } from '@features/all-pages'
import getGroupPages, { routesOrder } from '@features/all-pages/lib/get-group-pages'
import search from '@features/all-pages/lib/search'
import LinksList from '@features/home/ui/organisms/links-list'
import { CenterPage } from '@shared/ui/atoms'
import Flex from '@shared/ui/flex'
import PageBlock from '@shared/ui/page-block'
import { LocalSearch } from '@ui/molecules'
import { useUnit } from 'effector-react'
import React, { useMemo, useState } from 'react'

const AllPages = () => {
    const { visibleRoutes, allRoutes } = menuModel.selectors.useMenu()
    const [foundPages, setFoundPages] = useState<IRoutes | null>(null)
    const [searchValue, setSearchValue] = useState<string>('')
    const peTeacher = useUnit(peTeacherModel.stores.peTeacher)
    const userGuid = useUnit(userModel.stores.userGuid)
    const groupedPages = useMemo(() => getGroupPages(visibleRoutes, peTeacher, userGuid), [visibleRoutes, peTeacher])

    const {
        data: { user },
    } = userModel.selectors.useUser()

    if (!visibleRoutes) return null

    return (
        <CenterPage padding="10px">
            <PageBlock>
                <LocalSearch
                    placeholder="Поиск разделов"
                    whereToSearch={allRoutes ?? {}}
                    searchEngine={search}
                    setResult={setFoundPages}
                    setExternalValue={setSearchValue}
                    validationCheck
                    loadingOnType
                />
                {!foundPages && (
                    <Flex d="column" gap="24px">
                        {searchValue.length === 0 &&
                            Object.keys(groupedPages)
                                .sort((a, b) => {
                                    return routesOrder[a as Groups] - routesOrder[b as Groups]
                                })
                                .map((group) => {
                                    const links = groupedPages[group as Groups]
                                    return (
                                        <LinksList
                                            title={
                                                group === 'Кадровая среда' && user?.user_status === 'stud'
                                                    ? 'Договоры и оплаты'
                                                    : group
                                            }
                                            key={group}
                                            doNotShow="all"
                                            align="left"
                                            links={links}
                                        />
                                    )
                                })}
                    </Flex>
                )}
                <FoundPages pages={foundPages} />
            </PageBlock>
        </CenterPage>
    )
}

export default AllPages
