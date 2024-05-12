import { HOME_ROUTE } from '@app/routes/general-routes'

export type Module = {
    id: TutorialId
    completed: boolean
    steps: TutorialStep[]
    path: string
}

export type TutorialStep = {
    title: string
    description: string
}

export const commonTutorialIds = ['intro'] as const
export type TutorialId = (typeof commonTutorialIds)[number]
export type ModuleData = {
    [id in TutorialId]: Pick<Module, 'steps' | 'path'>
}

export const commonTutorials: ModuleData = {
    intro: {
        path: HOME_ROUTE,
        steps: [
            {
                title: 'Боковая панель',
                description: 'Боковая панель всегда находится в поле зрения и содержит основную навигацию в приложении',
            },
            {
                title: 'Профиль',
                description: 'Для доступа к профилю пользователя, кликните на иконку профиля в правом верхнем углу',
            },
            {
                title: 'Поиск',
                description:
                    'Используйте поле поиска в верхней части страницы для быстрого поиска информации или контента',
            },
            {
                title: 'Меню быстрого доступа',
                description: 'В этом меню вы можете получить быстрый доступ к часто используемым функциям',
            },
            {
                title: 'Переход на главную',
                description: 'Нажмите на логотп, чтобы мгновенно перейти на главную страницу',
            },
            {
                title: 'Главная',
                description: 'На главной странице собрана основная информация приложения',
            },
            {
                title: 'Поиск',
                description: 'На главной странице также есть поиск для быстрого поиска информации или контента',
            },
            {
                title: 'Меню быстрого доступа',
                description: 'На главной странице находится другое меню быстрого доступа',
            },
            {
                title: 'Уведомления',
                description: 'Просмотрите уведомления о важных событиях или сообщениях, щелкнув по иконке колокольчика',
            },
            {
                title: 'Виджеты',
                description:
                    'Используйте виджеты для быстрого доступа к информации или функциям, размещенным на главной странице',
            },
        ],
    },
}
