import { IRoute } from '@app/routes/general-routes'
import { Direction } from '../types'

export type LinkItemType = Direction

export type LinkItemProps = Omit<IRoute, 'Component' | 'isTemplate'> & {
    type?: LinkItemType
    chosen?: boolean
    onChoose?: (id: string) => void
    disabled?: boolean
    showCurrent?: boolean
    subtext?: string
    showFullTitle?: boolean
    onClick?: (e: any) => void
    collapsed?: boolean
    isOpenInNewWindow?: boolean
    showBoxShadow?: boolean
    textIconGap?: string
    height?: string
    minWidth?: string
    showMore?: boolean
    smallInMobile?: boolean
    as?: string
}

export type StyleType = {
    type: LinkItemType
}
