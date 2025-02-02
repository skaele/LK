import { BiHeadphone } from 'react-icons/bi'
import { FiXCircle } from 'react-icons/fi'

import {
    CANT_ACCESS_ROUTE,
    FEEDBACK_ROUTE,
    FORGOT_PASSWORD_ROUTE,
    GET_YOUR_LOGIN_ROUTE,
    LOGIN_ROUTE,
    MEMO_FRESHMEN_ROUTE,
    MEMO_TEACHER_ROUTE,
    Route,
} from '@shared/routing'

import {
    CantAccessPage,
    FeedbackPage,
    ForgotPasswordPage,
    GetYourLoginPage,
    LoginPage,
    MemoFreshmenPage,
    MemoTeacherPage,
} from './pages'

export const publicRoutes: Route[] = [
    {
        id: 'login',
        path: LOGIN_ROUTE,
        Component: LoginPage,
    },
    {
        id: 'forgot-password',
        path: FORGOT_PASSWORD_ROUTE,
        Component: ForgotPasswordPage,
    },
    {
        id: 'feedback',
        title: 'Обратная связь',
        icon: BiHeadphone,
        path: FEEDBACK_ROUTE,
        Component: FeedbackPage,
    },
    {
        id: 'cant-access',
        title: 'Не получается войти в Личный кабинет',
        icon: FiXCircle,
        path: CANT_ACCESS_ROUTE,
        Component: CantAccessPage,
    },
    {
        id: 'get-login',
        title: 'Узнать свой логин ЕУЗ',
        path: GET_YOUR_LOGIN_ROUTE,
        Component: GetYourLoginPage,
    },
    {
        id: 'student-attention',
        title: 'Вниманию студентов 1 курса!',
        path: MEMO_FRESHMEN_ROUTE,
        Component: MemoFreshmenPage,
    },
    {
        id: 'employee-attention',
        title: 'Вниманию сотрудников!',
        path: MEMO_TEACHER_ROUTE,
        Component: MemoTeacherPage,
    },
]
