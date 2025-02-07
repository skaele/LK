import { getCabinetMask } from '@shared/lib'

export const getCabinetInitialValue = (address: string): string => {
    const result = getCabinetMask(address)
    return result ? result + ' ' : ''
}
