import { Module, TutorialId, TutorialRoles, TutorialStep } from '../types'

export const commonTutorialIds = [
    'home',
    'settings',
    'chat',
    'applications',
    'payments',
    'stud-project-activity',
    // 'schedule',
    // 'medical-certificate',
    // 'stud-physical-education',
] as const

export type ModuleData = {
    [id in TutorialId]: Pick<Module, 'steps' | 'path' | 'name'>
}

export const createTutorials = (roles: TutorialRoles): ModuleData => {
    return {
        // sidebar: {
        //     path: '',
        //     name: 'Боковая панель',
        //     steps: [
        //         {
        //             title: 'Боковая панель',
        //             description: 'Боковая панель всегда находится в поле зрения и содержит основную навигацию в приложении',
        //         },
        //         {
        //             title: 'Профиль',
        //             description: 'Для доступа к профилю пользователя, кликните на иконку профиля в правом верхнем углу',
        //         },
        //         {
        //             title: 'Поиск',
        //             description:
        //                 'Используйте поле поиска в верхней части страницы для быстрого поиска информации или контента',
        //         },
        //         {
        //             title: 'Меню быстрого доступа',
        //             description: 'В этом меню вы можете получить быстрый доступ к часто используемым функциям',
        //         },
        //         {
        //             title: 'Переход на главную',
        //             description: 'Нажмите на логотп, чтобы мгновенно перейти на главную страницу',
        //         },
        //     ],
        // },
        home: {
            path: '/home',
            name: 'Главная',
            steps: [
                {
                    title: 'Главная',
                    description: 'На главной странице собрана основная информация приложения',
                },
                {
                    title: 'Поиск',
                    description: 'Здесь есть поиск для быстрого поиска информации, раздела или контента',
                },
                {
                    title: 'Меню быстрого доступа',
                    description: 'А также меню быстрого доступа к разделам. Его можно изменить или убрать в настройках',
                },
                {
                    title: 'Уведомления',
                    description:
                        'Просмотрите уведомления о важных событиях или сообщениях, щелкнув по иконке колокольчика. Уведомления можно выключить или изменить в настройках',
                },
                ...(roles.includes('has widgets')
                    ? [
                          {
                              title: 'Виджеты',
                              description:
                                  'Используйте виджеты для быстрого доступа к информации или функциям, размещенным на главной странице. Виджеты можно изменить в настройках',
                          },
                      ]
                    : []),
            ],
        },
        applications: {
            path: '/applications',
            name: 'Цифровые сервисы',
            steps: [
                {
                    title: 'Цифровые сервисы',
                    description: 'В этом разделе можно заказать необходимую справку, подать заявление или запрос',
                },
                {
                    title: 'Цифровые сервисы',
                    description:
                        'В таблице можно посмотреть статус заявления и скачать файлы документов. Доступны поиск и фильтрация по запросам',
                },
                {
                    title: 'Цифровые сервисы',
                    description:
                        'В колонке «Структурное подразделение, адрес» указывается название подразделения и адрес, куда необходимо приехать за готовым документом',
                },
                {
                    title: 'Подать заявление',
                    description: 'Чтобы подать заявление, нажмите на эту кнопку',
                },
            ],
        },
        payments: {
            path: '/payments',
            name: 'Договоры и оплаты',
            steps: initPaymentsSteps(roles),
        },
        chat: {
            path: '/chat',
            name: 'Сообщения',
            steps: [
                {
                    title: 'Список диалогов',
                    description: 'Здесь будут указаны все ваши чаты',
                },
                {
                    title: 'Новое сообщение',
                    description: 'Чтобы создать новый чат, нажмите на эту кнопку',
                },
                {
                    title: 'Поиск',
                    description: 'Для быстрого поиска диалога можно воспользоваться поиском',
                },
            ],
        },
        // 'medical-certificate': {
        //     path: '/medical-certificate',
        //     name: 'Предоставление медицинских справок',
        //     steps: [
        //         {
        //             title: 'Приложите справки',
        //             description: 'В этом разделе можно приложить медицинские справки для проживания в общежитии',
        //         },
        //         {
        //             title: 'Заполните завление',
        //             description: 'Введите обязательные поля и приложите справки',
        //         },
        //     ],
        // },
        // schedule: {
        //     path: '/schedule',
        //     name: 'Расписание',
        //     steps: [
        //         {
        //             title: 'Расписание',
        //             description:
        //                 'В этом разделе можно посмотреть свое расписание, расписание других групп или преподавателей',
        //         },
        //         {
        //             title: 'Пересдачи',
        //             description: 'При нажатии на кнопку пересдач можно посмотреть список пересдач',
        //         },
        //     ],
        // },
        settings: {
            path: '/configurations',
            name: 'Настройки',
            steps: [
                {
                    title: 'Настройки',
                    description:
                        'Мы стараемся предоставить широкий набор настроек для персонализации Личного кабинета. В этом разделе можно все настроить под себя',
                },
                {
                    title: 'Аккаунт',
                    description:
                        'В этом разделе можно обновить контактную информацию, изменить фото профиля, поменять пароль или включить синхронизацию настроек между устройствами',
                },
                {
                    title: 'Меню',
                    description: 'В этом разделе можно изменить список разделов для быстрого доступа с боковой панели',
                },
                {
                    title: 'Внешний вид',
                    description:
                        'Пока что в этом разделе можно изменить только визуальную тему Личного кабинета, но скоро появится больше возможностей для персонализации',
                },
                {
                    title: 'Главная страница',
                    description:
                        'Здесь можно настроить разделы быстрого доступа домашней страницы и отображение виджетов',
                },
                {
                    title: 'Уведомления',
                    description: 'В этом разделе можно настроить получение и отображение уведомлений по темам',
                },
                {
                    title: 'Обучение',
                    description:
                        'В этом разделе можно выключить обучение, посмотреть прогресс обучения или запустить программу для выбранного раздела',
                },
            ],
        },
        'stud-project-activity': {
            path: '/project-activity',
            name: 'Проектная деятельность',
            steps: [
                {
                    title: 'Преоктная деятельность',
                    description: 'В этом разделе можно узнать информацию о твоем проекте по проектной деятельности',
                },
                {
                    title: 'Проект',
                    description: 'Здесь указано название проекта и полезная информация',
                },
                {
                    title: 'Текущий семестр',
                    description: 'Раздел с текущим семестром. Для зачета нужно набрать 60 баллов',
                },
                {
                    title: 'Предыдущий семестр',
                    description:
                        'Если за предыдущий семсетр стоит "не зачтено", то нужно донабрать баллы в текущем семестре',
                },
                {
                    title: 'Итого',
                    description: 'В последнем разделе посчитано итоговое количество баллов и предварительная оценка',
                },
            ],
        },
        // 'stud-physical-education': {
        //     path: '/physical-education/student',
        //     name: 'Физическая культура',
        //     steps: [
        //         {
        //             title: 'Чат',
        //             description: 'В этом разделе можно общаться в чате',
        //         },
        //         {
        //             title: 'Чат',
        //             description: 'В этом разделе можно общаться в чате',
        //         },
        //     ],
        // },
    }
}

const initPaymentsSteps = (roles: TutorialRoles): TutorialStep[] => {
    const step2 = 'Тут отображается задолженность или переплата по договору'
    const step3 =
        'Чтобы оплатить договор, нужно нажать на кнопку и отсканировать QR-код в банковском приложении. Если задолженности нет, то будет отображаться зеленая галочка'

    return [
        ...(roles.includes('education') && roles.includes('dormitory')
            ? [
                  {
                      title: 'Договоры и оплаты',
                      description:
                          'В этом разделе можно посмотреть задолженность и другую информацию по договору. У тебя есть договор на общежитие и на обучение. Их можно переключать в этом меню',
                  },
                  {
                      title: 'Задолженность',
                      description: step2,
                  },
                  {
                      title: 'Оплата',
                      description: step3,
                  },
              ]
            : roles.includes('education')
            ? [
                  {
                      title: 'Договоры и оплаты',
                      description: 'В этом разделе можно посмотреть задолженность и другую информацию по договору',
                  },
                  {
                      title: 'Задолженность',
                      description: step2,
                  },
                  {
                      title: 'Оплата',
                      description: step3,
                  },
              ]
            : roles.includes('dormitory')
            ? [
                  {
                      title: 'Договоры и оплаты',
                      description: 'В этом разделе можно посмотреть задолженность и другую информацию по договору',
                  },
                  {
                      title: 'Задолженность',
                      description: step2,
                  },
                  {
                      title: 'Оплата',
                      description: step3,
                  },
              ]
            : []),
    ]
}
