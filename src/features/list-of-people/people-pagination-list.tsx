import React from 'react'

import { EventCallable, Store } from 'effector'
import { useStore } from 'effector-react'
<<<<<<<< HEAD:src/features/list-of-people/people-pagination-list.tsx

import User from '@features/user'

import PagintaionList from '@shared/ui/pagination-list'
import { Hint } from '@shared/ui/search'
import { SelectPage } from '@shared/ui/select'
========
import User from 'widgets/user'
>>>>>>>> master:src/widgets/list-of-people/people-pagination-list.tsx

import { SelectPage } from '@features/select'

import PagintaionList from '@shared/ui/pagination-list'
import { Hint } from '@shared/ui/search'

type TUser = {
    id: string
    division?: string
    group?: string
    fio: string
    avatar?: string
    faculty?: string
}

type Props<T extends TUser> = {
    paginationList: {
        $items: Store<T[] | null>
        $isPending: Store<boolean>
        $hasNext: Store<boolean>
        next: EventCallable<ServerListRequest<SelectPage | null>>
        load: EventCallable<ServerListRequest<SelectPage | null>>
    }
    noResultContent?: JSX.Element | null
    filter?: Hint | null
}

const PeoplePaginationList = <T extends TUser>({ filter, paginationList, noResultContent }: Props<T>) => {
    const { $items, $isPending, $hasNext, next, load } = paginationList
    const isPending = useStore($isPending)
    const hasNext = useStore($hasNext)

    const handleNext = () => {
        next({ filter })
    }

    const handleReload = () => {
        load({ filter })
    }

    return (
        <PagintaionList
            items={$items.getState()}
            renderItem={renderItem}
            handleNext={handleNext}
            isPending={isPending}
            hasNext={hasNext}
            filter={filter}
            handleReload={handleReload}
            showAlphabetLetters
            noResultContent={noResultContent}
        />
    )
}

function renderItem<T extends TUser>(item: T, isMe: boolean, index?: number) {
    return (
        <User
            id={item.id}
            name={item.fio}
            type={item.division ? 'staff' : 'stud'}
            key={index}
            avatar={item.avatar}
            faculty={item.faculty}
            group={item.group}
            isMe={isMe}
            division={item.division}
            indexNumber={(index ?? 0) + 1}
        />
    )
}

export default PeoplePaginationList
