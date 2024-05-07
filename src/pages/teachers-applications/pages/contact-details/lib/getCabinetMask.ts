import { sites } from './get-form'

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

export const getCabinetInitialValue = (address: string): string => {
    const result = getCabinetMask(address)
    return result ? result + ' ' : ''
}
