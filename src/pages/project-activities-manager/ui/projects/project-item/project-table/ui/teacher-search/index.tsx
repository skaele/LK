import SearchWithHints from '@features/search-with-hints'
import { teacherApi } from '@shared/api'
import { AxiosResponse } from 'axios'
import React from 'react'
import { Hint } from '@ui/search'

type Props = {
    value: string
    setValue: (value: string) => void
    onHintClick: (hint: Hint | undefined) => void
    width?: string
}

export const TeacherSearch = ({ value, setValue, width, onHintClick }: Props) => {
    const request = async (value: string): Promise<AxiosResponse<{ items: any[] }>> => {
        return await teacherApi.get(value, '', 1, 20)
    }

    return (
        <SearchWithHints
            value={value}
            width={width}
            setValue={setValue}
            placeholder="Поиск"
            transformRequest={(el) => el.fio}
            request={request}
            hintsListPortalMode
            requestOnMount={false}
            hideInputCross
            leftIcon=""
            onHintClick={onHintClick}
        />
    )
}
