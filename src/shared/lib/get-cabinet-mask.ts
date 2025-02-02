export const POLYTECH_SITES = [
    {
        id: '0',
        title: 'ул. Большая Семёновская, 38',
    },
    {
        id: '1',
        title: 'ул. Прянишникова, 2А',
    },
    {
        id: '2',
        title: 'ул. Автозаводская, 16',
    },
    {
        id: '3',
        title: 'ул. Павла Корчагина, 22',
    },
    {
        id: '4',
        title: 'ул. Михалковская, 7',
    },
    {
        id: '5',
        title: 'ул. Садовая-Спасская, 6',
    },
    {
        id: '6',
        title: 'ул. Малая Семеновская, 12',
    },
    {
        id: '7',
        title: 'ул. Лефортовский вал, 26',
    },
    {
        id: '8',
        title: 'ул. 1-я Дубровская, 16а',
    },
    {
        id: '9',
        title: 'ул. 7-я Парковая, 9/26',
    },
    {
        id: '10',
        title: 'ул. 800-летия Москвы, 28 корп. 1',
    },
    {
        id: '11',
        title: 'ул. Михалковская, 7, корп. 3',
    },
    {
        id: '12',
        title: 'ул. Бориса Галушкина, 9',
    },
    {
        id: '13',
        title: 'ул. Павла Корчагина, 20А, корп. 3',
    },
    {
        id: '14',
        title: 'Рижский проезд, 15, корп. 1',
    },
    {
        id: '15',
        title: 'Рижский проезд, 15, корп. 2',
    },
    {
        id: '16',
        title: '1-й Балтийский переулок, 6/21, корп. 3',
    },
] as const
export type SiteName = (typeof POLYTECH_SITES)[number]['title']
export const sites = [...POLYTECH_SITES]

export const BUILDINGS = {
    БС: 'БС',
    ПР: 'ПР',
    АВ: 'АВ',
    ПК: 'ПК',
    МИХ: 'МИХ',
    СС: 'СС',
    РП: 'РП',
    БАЛТ: 'БАЛТ',
    Д: 'Д',
    ПАРК: 'ПАРК',
    ВЛМ: 'ВЛМ',
    БГ: 'БГ',
    МС: 'МС',
    '': '',
} as const

export type Buildings = keyof typeof BUILDINGS

export const getCabinetMask = (address: string): Buildings => {
    const isBS = () => address === sites[0].title
    const isPR = () => address === sites[1].title
    const isAV = () => address === sites[2].title
    const isPK = () => address === sites[3].title || address === sites[13].title
    const isMIH = () => address === sites[4].title
    const isSS = () => address === sites[5].title
    const isBALT = () => address === sites[16].title
    const isRP = () => address === sites[14].title || address === sites[15].title
    const isD = () => address === sites[8].title
    const isPARK = () => address === sites[9].title
    const isVLM = () => address === sites[10].title
    const isBG = () => address === sites[12].title
    const isMS = () => address === sites[6].title

    if (isBS()) return 'БС'
    if (isPR()) return 'ПР'
    if (isAV()) return 'АВ'
    if (isPK()) return 'ПК'
    if (isMIH()) return 'МИХ'
    if (isSS()) return 'СС'
    if (isRP()) return 'РП'
    if (isBALT()) return 'БАЛТ'
    if (isD()) return 'Д'
    if (isPARK()) return 'ПАРК'
    if (isVLM()) return 'ВЛМ'
    if (isBG()) return 'БГ'
    if (isMS()) return 'МС'
    return ''
}
