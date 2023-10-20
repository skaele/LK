import { MenuItemType } from '../types'

export const getBoxShadow = ({
    type,
}: {
    disabled: boolean
    background: string
    color: string
    type: MenuItemType
}) => {
    if (type !== 'vertical') return 'none'

    return 'var(--very-mild-shadow)'
}
