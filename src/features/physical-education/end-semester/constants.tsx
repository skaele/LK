import { Loading } from '@shared/ui/loading'
import { Status } from '../student/pe-student-end-semester/model'
import React from 'react'
import { FiAlertOctagon, FiCheck } from 'react-icons/fi'
import { Colors } from '@shared/constants'

export const STATUSES_TEXT = {
    [Status.LOADING]: 'Загрузка',
    [Status.ERROR]: 'Не зачтено',
    [Status.SUCCESS]: 'Успешно',
}

export const STATUS_ICON = {
    [Status.LOADING]: <Loading />,
    [Status.ERROR]: <FiAlertOctagon color={Colors.red.main} />,
    [Status.SUCCESS]: <FiCheck color={Colors.green.main} />,
}
