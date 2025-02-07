import { createStore, sample } from 'effector'

import { PageRoute } from '@shared/routing'
import { userModel } from '@shared/session'

import { employeeHiddenPages, employeePages } from '../employee'
import { privateHiddenPages, privatePages } from '../private'
import { hiddenStudentPages, studentPages } from '../student'

export const $allPages = createStore<PageRoute | null>(null)

sample({
    clock: userModel.stores.user,
    source: userModel.stores.userRole,
    fn: (userRoles) => ({
        ...privatePages,
        ...privateHiddenPages,
        ...(userRoles === 'stud'
            ? { ...studentPages, ...hiddenStudentPages }
            : { ...employeePages, ...employeeHiddenPages }),
    }),
    target: $allPages,
})
