import { createStore, sample } from 'effector'
import { $userStore } from '@entities/user/model'
import { $schedule } from '@entities/schedule/model'

type Role = 'admin' | 'teacher' | 'staff' | 'student' | 'freshman' | null

export const $roles = createStore<Set<Role>>(new Set())

sample({
    clock: $userStore,
    source: $roles,
    fn: (roles, user) => {
        const user_status = user.currentUser?.user_status
        if (user_status === 'staff') {
            roles.add('staff')
        }
        if (user_status === 'stud') {
            if (user.currentUser?.course === '1') roles.add('freshman')
            roles.add('student')
        }
        return roles
    },
    target: $roles,
})

sample({
    clock: $schedule,
    source: $roles,
    fn: (roles, schedule) => {
        if (schedule.data.schedule) {
            if (roles.has('staff')) {
                roles.add('teacher')
            }
        }
        return roles
    },
    target: $roles,
})
