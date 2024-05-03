// First tut: 2 parts
// 1. Sidebar: profile, search, quick menu and logo
// 2. Main Page: search, quick menu (different from sidebar), notifications, widgets

// I need to find elements I want to highlight
// I need to write tutorial texts
// I need to implement stepper

// How do I store elements??

export type Tutorial = {
    id: TutorialId
    steps: TutorialStep[]
}

export type TutorialStep = {
    title: string
    description: string
}

export type TutorialId = 'intro'

export const tutorials: Tutorial[] = [
    {
        id: 'intro',
        steps: [
            {
                title: 'Боковая панель',
                description: 'Боковая панель всегда находится в поле зрения и содержит основную навигацию в приложении',
            },
            {
                title: 'Профиль',
                description: 'Для доступа к профилю пользователя, кликните на иконку профиля в правом верхнем углу',
            },
            {
                title: 'Поиск',
                description:
                    'Используйте поле поиска в верхней части страницы для быстрого поиска информации или контента',
            },
            {
                title: 'Меню быстрого доступа',
                description: 'В этом меню вы можете получить быстрый доступ к часто используемым функциям',
            },
            {
                title: 'Переход на главную',
                description: 'Нажмите на логотп, чтобы мгновенно перейти на главную страницу',
            },
            {
                title: 'Главная',
                description: 'На главной странице собрана основная информация приложения',
            },
            {
                title: 'Поиск',
                description: 'На главной странице также есть поиск для быстрого поиска информации или контента',
            },
            {
                title: 'Меню быстрого доступа',
                description: 'На главной странице находится другое меню быстрого доступа',
            },
            {
                title: 'Уведомления',
                description: 'Просмотрите уведомления о важных событиях или сообщениях, щелкнув на иконке колокольчика',
            },
            {
                title: 'Виджеты',
                description:
                    'Используйте виджеты для быстрого доступа к информации или функциям, размещенным на главной странице',
            },
        ],
    },
]
