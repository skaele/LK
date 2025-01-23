import { IColors, isProduction } from '@shared/constants'
import React, { LazyExoticComponent } from 'react'

import LoginPage from '@pages/login'
import { BiGroup, BiHeadphone, BiInfoCircle, BiMessageRounded, BiNews, BiPalette, BiUserCircle } from 'react-icons/bi'

import { HelpfulInformation } from '@app/routes/teacher-routes/pages'
import {
    AlertsPage,
    AllPages,
    AllStudentsPage,
    AllTeachersPage,
    CantAccessPage,
    DecreisDirectivesPage,
    ElectronicInteractionAgreementPage,
    FeedbackPage,
    ForgotPasswordPage,
    GetYourLoginPage,
    Home,
    InstructionsPage,
    LkNotificationsPage,
    MemoFreshmenPage,
    MemoTeacherPage,
    ProfilePage,
    SafetyInformation,
    ScheduleCurrent,
    // ChatPage,
    SchedulePage,
    ScheduleRetake,
    ScheduleSemestr,
    ScheduleSession,
    TechnicalMaintenance,
} from './pages'

import { PETeacher } from '@entities/pe-teacher/types'
import MainPageSettings from '@pages/settings/pages/main-page'
import MenuSettings from '@pages/settings/pages/menu'
import NotificationsSettings from '@pages/settings/pages/notifications'
import PersonalSettings from '@pages/settings/pages/personal'
import { ExtSize } from '@shared/ui/types'
import { AiOutlineReload } from 'react-icons/ai'
import { BsFileMedical } from 'react-icons/bs'
import { FiBell, FiClipboard, FiClock, FiFileText, FiHome, FiMenu, FiSettings, FiUser, FiXCircle } from 'react-icons/fi'
import {
    HiOutlineAcademicCap,
    HiOutlineCalendar,
    HiOutlineClipboardCheck,
    HiOutlineFlag,
    HiOutlineViewGrid,
} from 'react-icons/hi'
import { DOCLIST_ROUTE, TECHNICAL_MAINTENANCE } from '../teacher-routes'
import AppearanceSettings from '@pages/settings/pages/appearance'
import SettingsPage from '@pages/settings'
import ChatPage from '@pages/chat'
import { TutorialSettings } from '@pages/settings/pages/tutorial'

export const LOGIN_ROUTE = '/login'
export const FORGOT_PASSWORD_ROUTE = '/forgot-password'
export const MEDICAL_CERTIFICATE = '/medical-certificate'
export const VACCINATION = '/vaccination'

export const ALL_ROUTE = '/all'
export const HOME_ROUTE = '/home'
export const PROFILE_ROUTE = '/profile'
export const CHAT_ROUTE = '/chat'
export const OLD_CHAT_ROUTE = '/messages'
export const TEMPLATE_CHAT_ROUTE = CHAT_ROUTE + '/:chatId'
export const ELECTRONIC_INTERACTION_AGREEMENT_ROUTE = '/electronic-interaction-agreement'
export const PAYMENTS_ROUTE = '/payments'
export const SCHEDULE_ROUTE = '/schedule'

export const ALL_STUDENTS_ROUTE = '/all-students'
export const FILTERED_ALL_STUDENTS_ROUTE = '/all-students/:filter'
export const ALL_TEACHERS_ROUTE = '/all-teachers'
export const FILTERED_ALL_TEACHERS_ROUTE = '/all-teachers/:filter'
export const PORTFOLIO_ROUTE = '/portfolio'
export const DECREIS_DIRECTIVES = '/decreis-directives'
export const FEEDBACK_ROUTE = '/feedback'
export const CANT_ACCESS_ROUTE = '/cant-access'
export const MEMO_FRESHMEN_ROUTE = '/memo-freshmen'
export const GET_YOUR_LOGIN_ROUTE = '/get-your-login'
export const MEMO_TEACHER_ROUTE = '/memo-teacher'

export const SETTINGS_ROUTE = '/configurations'
export const TEMPLATE_SETTINGS_ROUTE = SETTINGS_ROUTE + '/:id'
export const SETTINGS_APPEARANCE_ROUTE = SETTINGS_ROUTE + '/settings-appearance'
export const SETTINGS_PERSONAl_ROUTE = SETTINGS_ROUTE + '/settings-personal'
export const SETTINGS_HOME_PAGE_ROUTE = SETTINGS_ROUTE + '/settings-home-page'
export const SETTINGS_CUSTOMIZE_MENU_PAGE_ROUTE = SETTINGS_ROUTE + '/settings-customize-menu'
export const SETTINGS_NOTIFICATIONS = SETTINGS_ROUTE + '/settings-notifications'
export const SETTINGS_TUTORIAL = SETTINGS_ROUTE + '/settings-tutorial'

export const INSTRUCTIONS_ROUTE = '/instructions'
export const PROJECT_ACTIVITIES_ROUTE = '/project-activity'
export const SOFTSKILLS_ROUTE = '/softskills'
export const ALERTS_ROUTE = '/alerts'
export const LK_NOTIFICATIONS_ROUTE = '/lk-notifications'

export const USEFUL_INFO_ROUTE = '/helpful-information'
export const SAFETY_INFORMATION = '/safety-information'

// hidden
export const SCHEDULE_FILTER_ROUTE = SCHEDULE_ROUTE + '/:page/:filter'
export const SCHEDULE_CURRENT_ROUTE = SCHEDULE_ROUTE + '/current'
export const SCHEDULE_SEMESTR_ROUTE = SCHEDULE_ROUTE + '/semestr'
export const SCHEDULE_SESSION_ROUTE = SCHEDULE_ROUTE + '/session'
export const SCHEDULE_RETAKE_ROUTE = SCHEDULE_ROUTE + '/retake'
export const TEMPLATE_USEFUL_INFO_ROUTE = USEFUL_INFO_ROUTE + '/:infoType'

export const ELECTRONIC_INTERACTION_TYPE = ELECTRONIC_INTERACTION_AGREEMENT_ROUTE + '/:type'
export const PERSONAL_ELECTRONIC_INTERACTION = ELECTRONIC_INTERACTION_AGREEMENT_ROUTE + '/personal'
export const THIRD_PARTY_ELECTRONIC_INTERACTION = ELECTRONIC_INTERACTION_AGREEMENT_ROUTE + '/third-party'
export interface IRoutes {
    [id: string]: IRoute
}

export enum Groups {
    GENERAL = 'Основное',
    FINANCES_DOCS = 'Кадровая среда',
    LEARNING_ACTIVITIES = 'Учебная деятельность',
    OTHER = 'Находится в разработке',
    COMMUNICATION = 'Коммуникация',
    COMPETENCE_CENTER = 'Центр компетенций',
    SCIENCE = 'Научная деятельность',
}

export interface IRoute {
    id: string
    title: string
    fullTitle?: string
    hiddenTitle?: boolean
    icon: ChildrenType
    menuPath?: string
    path: string
    color: keyof IColors
    Component: (() => JSX.Element | null) | LazyExoticComponent<() => JSX.Element | null>
    isTemplate: boolean
    shortTitle?: string
    isAdmin?: boolean
    isNew?: boolean
    show?: boolean
    notifications?: number
    group?: keyof typeof Groups
    keywords?: string[]
    withoutHeader?: boolean
    withoutBackButton?: boolean
    isSubPage?: boolean
    backButtonText?: string
    subPageHeaderTitle?: string
    fallbackPrevPage?: string
    planeHeader?: boolean
    pageSize?: ExtSize
    isExternalPage?: boolean
    isOldLkPage?: boolean
    getIsVisibleForCurrentUser?: (peTeacher: PETeacher | null) => boolean
    guidsAllowed?: string[]
}

export const publicRoutes = [
    {
        id: 0,
        title: '',
        icon: '',
        path: LOGIN_ROUTE,
        Component: LoginPage,
    },
    {
        id: 1,
        title: '',
        icon: '',
        path: FORGOT_PASSWORD_ROUTE,
        Component: ForgotPasswordPage,
    },
    {
        id: 2,
        title: 'Обратная связь',
        icon: <BiHeadphone />,
        path: FEEDBACK_ROUTE,
        Component: FeedbackPage,
    },
    {
        id: 3,
        title: 'Не получается войти в Личный кабинет',
        icon: <FiXCircle />,
        path: CANT_ACCESS_ROUTE,
        Component: CantAccessPage,
    },
    {
        id: 4,
        title: 'Узнать свой логин ЕУЗ',
        icon: '',
        path: GET_YOUR_LOGIN_ROUTE,
        Component: GetYourLoginPage,
    },
    {
        id: 5,
        title: 'Вниманию студентов 1 курса!',
        icon: '',
        path: MEMO_FRESHMEN_ROUTE,
        Component: MemoFreshmenPage,
    },
    {
        id: 6,
        title: 'Вниманию сотрудников!',
        icon: '',
        path: MEMO_TEACHER_ROUTE,
        Component: MemoTeacherPage,
    },
]

export const generalRoutes: IRoutes = {
    all: {
        id: 'all',
        title: 'Все разделы',
        icon: <HiOutlineViewGrid />,
        path: ALL_ROUTE,
        Component: AllPages,
        color: 'lightGreen',
        isTemplate: false,
        show: false,
        group: 'GENERAL',
        withoutBackButton: true,
        pageSize: 'big',
    },
    doclist: {
        id: 'doclist',
        title: 'Ознакомление с документами',
        icon: <FiFileText />,
        path: DOCLIST_ROUTE,
        Component: DecreisDirectivesPage,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    alerts: {
        id: 'alerts',
        title: 'Новости',
        icon: <BiNews />,
        path: ALERTS_ROUTE,
        Component: AlertsPage,
        color: 'purple',
        isTemplate: false,
        group: 'COMMUNICATION',
        keywords: ['Оповещения'],
    },
    home: {
        id: 'home',
        title: 'Главная',
        icon: <FiHome />,
        path: HOME_ROUTE,
        Component: Home,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
        keywords: ['домой'],
        withoutHeader: true,
    },
    settings: {
        id: 'settings',
        title: 'Настройки',
        icon: <FiSettings />,
        path: SETTINGS_ROUTE,
        Component: SettingsPage,
        color: 'lightGreen',
        isTemplate: true,
        show: true,
        group: 'GENERAL',
    },
    profile: {
        id: 'profile',
        title: 'Профиль',
        icon: <BiUserCircle />,
        path: PROFILE_ROUTE,
        Component: ProfilePage,
        color: 'purple',
        isTemplate: false,
        group: 'GENERAL',
        withoutHeader: true,
    },
    'lk-notifications': {
        id: 'lk-notifications',
        title: 'Уведомления',
        icon: <FiBell />,
        path: LK_NOTIFICATIONS_ROUTE,
        Component: LkNotificationsPage,
        color: 'orange',
        isTemplate: false,
        group: 'GENERAL',
        keywords: ['Оповещения'],
    },
    'electronic-interaction-agreement': {
        id: 'electronic-interaction-agreement',
        title: 'Соглашение об электронном взаимодействии',
        shortTitle: 'Соглашение об электр...',
        icon: <HiOutlineClipboardCheck />,
        path: ELECTRONIC_INTERACTION_TYPE,
        Component: ElectronicInteractionAgreementPage,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
        pageSize: 'small',
        menuPath: PERSONAL_ELECTRONIC_INTERACTION,
    },
    chat: {
        id: 'chat',
        title: 'Сообщения',
        icon: <BiMessageRounded />,
        path: CHAT_ROUTE,
        Component: ChatPage,
        color: 'red',
        group: 'COMMUNICATION',
        keywords: ['чат', 'сообщения', 'написать'],
        pageSize: 'big',
        isTemplate: false,
        planeHeader: false,
        hiddenTitle: true,
    },
    'specific-chat': {
        id: 'specific-chat',
        title: 'Сообщения',
        icon: <BiMessageRounded />,
        path: TEMPLATE_CHAT_ROUTE,
        Component: ChatPage,
        color: 'red',
        pageSize: 'big',
        isTemplate: false,
        planeHeader: false,
        hiddenTitle: true,
        group: 'COMMUNICATION',
        isSubPage: true,
        show: false,
    },
    schedule: {
        id: 'schedule',
        title: 'Расписание',
        icon: <FiClock />,
        path: SCHEDULE_ROUTE,
        menuPath: SCHEDULE_CURRENT_ROUTE,
        Component: SchedulePage,
        color: 'pink',
        isTemplate: true,
        show: true,
        group: 'LEARNING_ACTIVITIES',
        pageSize: 'large',
    },
    'all-students': {
        id: 'all-students',
        title: 'Студенты',
        icon: <BiGroup />,
        path: ALL_STUDENTS_ROUTE,
        Component: AllStudentsPage,
        color: 'lightBlue',
        isTemplate: false,
        group: 'COMMUNICATION',
        keywords: ['одногруппники', 'ученики'],
    },
    feedback: {
        id: 'feedback',
        title: 'Обратная связь',
        icon: <BiHeadphone />,
        path: FEEDBACK_ROUTE,
        Component: FeedbackPage,
        color: 'blue',
        isTemplate: false,
        group: 'COMMUNICATION',
    },
    instructions: {
        id: 'instructions',
        title: 'Полезная информация',
        icon: <FiClipboard />,
        path: INSTRUCTIONS_ROUTE,
        Component: InstructionsPage,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
        show: false,
    },
    vaccination: {
        id: 'vaccination',
        title: 'Вакцинация',
        icon: <BsFileMedical />,
        path: VACCINATION,
        Component: () => {
            React.useEffect(() => {
                window.location.replace('https://e.mospolytech.ru/old/index.php?p=vaccination')
            }, [])

            return null
        },
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
        keywords: ['медицинская', 'справка', 'грипп', 'dfrwbyfwbz'],
        isOldLkPage: true,
        show: !isProduction,
    },
    'safety-information': {
        id: 'safety-information',
        title: 'Безопасность',
        icon: <BiInfoCircle />,
        path: SAFETY_INFORMATION,
        Component: SafetyInformation,
        color: 'red',
        isTemplate: true,
        group: 'GENERAL',
    },
    'technical-maintenance': {
        id: 'technical-maintenance',
        hiddenTitle: true,
        title: 'КСУТО',
        icon: <FiFileText />,
        color: 'blue',
        path: TECHNICAL_MAINTENANCE,
        Component: TechnicalMaintenance,
        isTemplate: false,
        group: 'GENERAL',
        isSubPage: true,
    },
}

export const scheduleRoutes: IRoutes = {
    'schedule-current': {
        id: 'schedule-current',
        title: 'Текущее расписание',
        shortTitle: 'Текущее',
        icon: <FiClock />,
        path: SCHEDULE_CURRENT_ROUTE,
        Component: ScheduleCurrent,
        color: 'pink',
        isTemplate: false,
        show: false,
        group: 'OTHER',
        pageSize: 'large',
    },
    'schedule-semestr': {
        id: 'schedule-semestr',
        title: 'Расписание на семестр',
        shortTitle: 'Семестр',
        icon: <HiOutlineCalendar />,
        path: SCHEDULE_SEMESTR_ROUTE,
        Component: ScheduleSemestr,
        color: 'orange',
        isTemplate: false,
        show: true,
        group: 'OTHER',
        pageSize: 'large',
    },
    'schedule-session': {
        id: 'schedule-session',
        title: 'Расписание сессии',
        shortTitle: 'Сессия',
        icon: <HiOutlineFlag />,
        path: SCHEDULE_SESSION_ROUTE,
        Component: ScheduleSession,
        color: 'red',
        isTemplate: false,
        show: true,
        group: 'OTHER',
        pageSize: 'large',
    },
    'schedule-retake': {
        id: 'schedule-retake',
        title: 'Пересдачи',
        icon: <AiOutlineReload />,
        path: SCHEDULE_RETAKE_ROUTE,
        Component: ScheduleRetake,
        color: 'red',
        isTemplate: false,
        show: true,
        group: 'OTHER',
        pageSize: 'large',
    },
}

export const generalHiddenRoutes: IRoutes = {
    // 'teachers-schedule': {
    //     id: 'teachers-schedule',
    //     title: 'Расписание преподавателя',
    //     icon: <BiIdCard />,
    //     path: FILTER_SCHEDULE,
    //     Component: TeachersSchedule,
    //     color: 'blue',
    //     isTemplate: false,
    //     show: false,
    //     group: 'OTHER',
    //     pageSize: 'large',
    // },
    'schedule-filter': {
        id: 'schedule-filter',
        title: 'Расписание',
        icon: <FiClock />,
        path: SCHEDULE_FILTER_ROUTE,
        Component: SchedulePage,
        color: 'pink',
        isTemplate: false,
        show: false,
        group: 'OTHER',
        pageSize: 'large',
    },
    ...scheduleRoutes,
    'filtered-all-students': {
        id: 'filtered-all-students',
        title: 'Все студенты',
        icon: <BiGroup />,
        path: FILTERED_ALL_STUDENTS_ROUTE,
        Component: AllStudentsPage,
        color: 'blue',
        isTemplate: false,
        show: false,
        group: 'OTHER',
    },
    // move to student's after #ASM
    'filtered-all-teachers': {
        id: 'filtered-all-teachers',
        title: 'Все сотрудники',
        icon: <BiGroup />,
        path: FILTERED_ALL_TEACHERS_ROUTE,
        Component: AllTeachersPage,
        color: 'blue',
        isTemplate: false,
        show: false,
        group: 'OTHER',
    },
    // #region settings pages
    'settings-appearance': {
        id: 'settings-appearance',
        title: 'Настройки. Внешний вид',
        icon: <BiPalette />,
        path: SETTINGS_APPEARANCE_ROUTE,
        Component: AppearanceSettings,
        color: 'purple',
        isTemplate: true,
        show: true,
        group: 'OTHER',
        isSubPage: true,
        subPageHeaderTitle: 'Внешний вид',
        fallbackPrevPage: SETTINGS_ROUTE,
        backButtonText: 'Настройки',
    },
    'settings-personal': {
        id: 'settings-personal',
        title: 'Настройки. Аккаунт',
        icon: <FiUser />,
        path: SETTINGS_PERSONAl_ROUTE,
        Component: PersonalSettings,
        color: 'pink',
        isTemplate: true,
        show: true,
        group: 'OTHER',
        isSubPage: true,
        subPageHeaderTitle: 'Аккаунт',
        fallbackPrevPage: SETTINGS_ROUTE,
        backButtonText: 'Настройки',
    },
    'settings-home-page': {
        id: 'settings-home-page',
        title: 'Настройки. Главная страница',
        icon: <FiHome />,
        path: SETTINGS_HOME_PAGE_ROUTE,
        Component: MainPageSettings,
        color: 'blue',
        isTemplate: true,
        show: true,
        group: 'OTHER',
        isSubPage: true,
        subPageHeaderTitle: 'Главная страница',
        fallbackPrevPage: SETTINGS_ROUTE,

        backButtonText: 'Настройки',
    },
    'settings-customize-menu': {
        id: 'settings-customize-menu',
        title: 'Настройки. Меню',
        icon: <FiMenu />,
        path: SETTINGS_CUSTOMIZE_MENU_PAGE_ROUTE,
        Component: MenuSettings,
        color: 'red',
        isTemplate: true,
        show: true,
        isSubPage: true,
        subPageHeaderTitle: 'Меню',
        fallbackPrevPage: SETTINGS_ROUTE,

        backButtonText: 'Настройки',
    },
    'settings-notifications': {
        id: 'settings-notifications',
        title: 'Настройки. Уведомления',
        icon: <FiBell />,
        path: SETTINGS_NOTIFICATIONS,
        Component: NotificationsSettings,
        color: 'orange',
        isTemplate: true,
        show: true,
        isSubPage: true,
        subPageHeaderTitle: 'Уведомления',
        fallbackPrevPage: SETTINGS_ROUTE,

        backButtonText: 'Настройки',
    },
    'settings-tutorial': {
        id: 'settings-tutorial',
        title: 'Настройки. Обучение',
        icon: <HiOutlineAcademicCap />,
        path: SETTINGS_TUTORIAL,
        Component: TutorialSettings,
        color: 'green',
        isTemplate: true,
        show: true,
        isSubPage: true,
        subPageHeaderTitle: 'Обучение',
        fallbackPrevPage: SETTINGS_ROUTE,

        backButtonText: 'Настройки',
    },
    // #endregion

    'useful-info-template': {
        id: `useful-info-template`,
        title: `Полезная информация`,
        icon: '',
        path: TEMPLATE_USEFUL_INFO_ROUTE,
        Component: HelpfulInformation,
        color: 'grey',
        isTemplate: true,
        show: false,
    },
}
