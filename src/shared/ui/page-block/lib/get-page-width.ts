import { IRoute } from '@app/routes/general-routes'
import { ExtSize } from '@shared/ui/types'

const sizes: Record<ExtSize, string> = {
    small: '600px',
    middle: '700px',
    big: '963px',
    large: 'calc(100% - 35px)',
}

export const getPageWidth = (exactCurrentPage: IRoute | null) => sizes[exactCurrentPage?.pageSize ?? 'middle']
