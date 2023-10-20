import { IRoute } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import { Error } from '@shared/ui/error'
import Flex from '@shared/ui/flex'
import { MenuItem } from '@shared/ui/menu-item'
import React from 'react'

type Props = {
    list: string[][] | null
    listOfSettings: IRoute[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SearchResultField = ({ list, listOfSettings }: Props) => {
    const { allRoutes } = menuModel.selectors.useMenu()
    if (!allRoutes) return null

    return (
        <Flex d="column" gap="8px" ai="flex-start">
            {list?.length === 0 && <Error text={'Не удалось ничего найти'} />}
            {list?.map((el) => {
                const menuItem = listOfSettings.find((route) => {
                    return route.title.slice(11, route.title.length) === el[0]
                })

                if (menuItem) {
                    return (
                        <MenuItem
                            {...menuItem}
                            title={el[el.length - 1]}
                            type="horizontal"
                            subtext={el.map((d) => d).join(' > ')}
                            key={menuItem.id}
                        />
                    )
                }
            })}
        </Flex>
    )
}

export default SearchResultField
