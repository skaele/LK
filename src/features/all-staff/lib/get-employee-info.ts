import { Employee } from '@shared/api/model/phonebook'

import { PhonebookInfo } from '../ui/phonebook-modal'

export const getEmployeeInfo = (employee: Employee): PhonebookInfo[] =>
    employee.job.map((job) => ({
        subdivision: job.subdivision,
        post: job.post,
        attributes: [
            {
                id: 'jobType',
                title: 'Тип работы',
                text: job.jobType,
            },
            {
                id: 'email',
                title: 'Корпоративная электронная почта',
                text: job.email,
            },
            { id: 'innerPhone', title: 'Внутренний телефон', text: job.phone_inner },
            { id: 'mobile', title: 'Служебный мобильный телефон', text: job.phone_mobile },
            { id: 'address', title: 'Адрес рабочего места', text: job.address },
            { title: 'Номер кабинета', text: job.room },
        ],
    }))
