import { TitleProps } from '@shared/ui/title'

export const TITLE_CONFIG: Omit<TitleProps, 'children'> = {
    size: 4,
    align: 'left',
    bottomGap: '12px',
    style: {
        marginLeft: '8px',
    },
}
