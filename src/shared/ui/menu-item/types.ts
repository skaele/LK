import { IRoute } from '@app/routes/general-routes'
import { Direction } from '../types'

export type MenuItemType = Direction

export type MenuItemProps = Omit<IRoute, 'Component' | 'isTemplate'> & {
    type?: MenuItemType
    chosen?: boolean
    onChoose?: (id: string) => void
    disabled?: boolean
    showCurrent?: boolean
    subtext?: string
    showFullTitle?: boolean
    onClick?: (e: any) => void
    collapsed?: boolean
}

export type StyleType = {
    type: MenuItemType
}
