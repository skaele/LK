import { Subdivision } from '@shared/api/model/phonebook'

import { PhonebookInfo } from '../ui/phonebook-modal'

export const getSubdivisionInfo = (subdivision: Subdivision): PhonebookInfo[] => {
    return [
        {
            attributes: [
                { id: 'head', title: 'Руководитель', text: subdivision.head.fio },
                {
                    title: 'Корпоративная электронная почта подразделения',
                    text: subdivision.email,
                },
                {
                    id: 'innerPhone',
                    title: 'Внутренний телефон',
                    text: subdivision.phone_inner,
                },
                {
                    id: 'mobile',
                    title: 'Прямой телефон',
                    text: subdivision.phone_direct,
                },
                { id: 'address', title: 'Адрес рабочего места', text: subdivision.address },
                { title: 'Номер кабинета', text: subdivision.room },
            ],
        },
    ]
}
