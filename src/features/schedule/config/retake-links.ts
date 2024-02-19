import { RetakeLink } from '../types/retake-types'

const RETAKE_LINKS: Record<string, RetakeLink> = {
    feiu: {
        fullTitle: 'Факультет экономики и управления',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/FEU.zip?4',
        links: [],
    },
    fuigh: {
        fullTitle: 'Факультет урбанистики и городского хозяйства',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/FUiGH.zip?7',
        links: [],
    },
    fbk: {
        fullTitle: 'Факультет базовых компетенций',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/FBK.zip?8',
        links: [],
    },
    fhtib: {
        fullTitle: 'Факультет химической технологии и биотехнологии',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/FHTiB.zip?5',
        links: [],
    },
    tf: {
        fullTitle: 'Транспортный факультет',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/TF.zip?6',
        links: [],
    },
    fm: {
        fullTitle: 'Факультет машиностроения',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/FM.zip?8',
        links: [],
    },
    fit: {
        fullTitle: 'Факультет информационных технологий',
        links: [
            {
                title: 'ФИТ 2022-2023-лето, кафедра ИБ',
                href: 'https://e.mospolytech.ru/old/storage/files/arrears/FIT_2023-2024-zima__kafedra_IB.pdf',
            },
            {
                title: 'ФИТ 2022-2023-лето, кафедра ИКТ',
                href: 'https://e.mospolytech.ru/old/storage/files/arrears/FIT_2023-2024-zima__kafedra_IKT.pdf?1',
            },
            {
                title: 'ФИТ 2022-2023-лето, кафедра ПИ',
                href: 'https://e.mospolytech.ru/old/storage/files/arrears/FIT_2023-2024-zima__kafedra_PI.pdf',
            },
            {
                title: 'ФИТ 2022-2023-лето, кафедра ИиИТ',
                href: 'https://e.mospolytech.ru/old/storage/files/arrears/FIT_2023-2024-zima_kafedra_IiIT.pdf?1',
            },
            {
                title: 'ФИТ 2022-2023-лето, кафедра СМАРТ',
                href: 'https://e.mospolytech.ru/old/storage/files/arrears/FIT_2023-2024-zima__kafedra_SMART.pdf?1',
            },
        ],
        href: '',
    },
    pi: {
        fullTitle: 'Полиграфический институт',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/PI.zip?6',
        links: [],
    },
    iidizh: {
        fullTitle: 'Институт издательского дела и журналистики',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/IIDiZh.zip?1',
        links: [],
    },
    igrik: {
        fullTitle: 'Институт графики и искусства книги имени В.А.Фаворского',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/IGRIK.zip?4',
        links: [],
    },
    pishe: {
        fullTitle: 'Передовая инженерная школа электротранспорта',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/PIShE.zip?2',
        links: [],
    },
    cpd: {
        fullTitle: 'Центр проектной деятельности',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/TsPD.zip?7',
        links: [],
    },
    nid: {
        fullTitle: 'График приема задолженностей по НИД (аспиранты)',
        href: 'https://e.mospolytech.ru/old/storage/files/arrears/Grafik_priema_zadolzhennostej_po_NID_(aspiranty).pdf?1',
        links: [],
    },
}

export default RETAKE_LINKS
