import { LinkItemType } from '../types'

export const getBoxShadow = ({
    type,
    showBoxShadow,
}: {
    disabled: boolean
    background: string
    color: string
    type: LinkItemType
    showBoxShadow: boolean
}) => {
    if (!showBoxShadow || type !== 'vertical') return 'none'

    return 'var(--very-mild-shadow)'
}
