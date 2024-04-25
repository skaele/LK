import { sites } from './get-form'

export const getCabinetMask = (address: string): 'BS' | 'other' => {
    if (address === sites[0].title) return 'BS'
    // if (
    //     address === sites[1].title ||
    //     address === sites[2].title ||
    //     address === sites[3].title ||
    //     address === sites[4].title
    // )
    return 'other'
}
