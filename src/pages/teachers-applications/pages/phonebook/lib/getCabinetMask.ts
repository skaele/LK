import { sites } from './get-form'

export type Buildings = 'БС' | 'ПР' | 'АВ' | 'ПК' | 'МИХ' | 'СС' | 'other'
export const getCabinetMask = (address: string): Buildings => {
    if (address === sites[0].title) return 'БС'
    if (address === sites[1].title) return 'ПР'
    if (address === sites[2].title) return 'АВ'
    if (address === sites[3].title) return 'ПК'
    if (address === sites[4].title) return 'МИХ'
    if (address === sites[5].title) return 'СС'
    return 'other'
}

export const getCabinetInitialValue = (address: string): string => {
    if (address === sites[0].title) return 'БС '
    if (address === sites[1].title) return 'ПР-'
    if (address === sites[2].title) return 'АВ-'
    if (address === sites[3].title) return 'ПК-'
    if (address === sites[4].title) return 'МИХ-'
    if (address === sites[5].title) return 'СС-'
    return ''
}
