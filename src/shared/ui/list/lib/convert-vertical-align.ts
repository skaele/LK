import { VerticalAlign } from '@shared/ui/types'

const convertVerticalAlign = (align?: VerticalAlign) => {
    switch (align) {
        case 'center':
            return 'center'
        case 'bottom':
            return 'flex-end'
        case 'space-between':
            return 'space-between'
    }
    return 'flex-start'
}

export default convertVerticalAlign
