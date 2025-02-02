import { PageComponent } from '@shared/routing'

import {
    CantAccessPage,
    FeedbackPage,
    ForgotPasswordPage,
    GetYourLoginPage,
    LoginPage,
    MemoFreshmenPage,
    MemoTeacherPage,
} from './pages'

export const publicPages: Record<string, PageComponent> = {
    login: LoginPage,
    'forgot-password': ForgotPasswordPage,
    feedback: FeedbackPage,
    'cant-access': CantAccessPage,
    'get-login': GetYourLoginPage,
    'student-attention': MemoFreshmenPage,
    'employee-attention': MemoTeacherPage,
}
