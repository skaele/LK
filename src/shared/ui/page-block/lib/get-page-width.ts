import { ExtSize } from '@shared/ui/types'

const sizes: Record<ExtSize, string> = {
    small: '600px',
    middle: '700px',
    big: '963px',
    large: 'calc(100% - 35px)',
}

export const getPageWidth = (pageSize?: ExtSize) => sizes[pageSize ?? 'middle']
