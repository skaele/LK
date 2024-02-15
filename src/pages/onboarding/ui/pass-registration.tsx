import React from 'react'
import { ScheduleTable } from './schedule-table'
import { Contacts } from './contacts'
import { Telephone } from '@shared/ui/telephone'

export const PassRegistration = () => (
    <>
        <p>
            Для получения постоянного электронного пропуска Вам необходимо явиться в Бюро пропусков и предъявить
            паспорт.
        </p>
        <ScheduleTable
            title="Режим работы и контакты Бюро пропусков:"
            content={{
                'Понедельник – Четверг': '9:00-18:00',
                Пятница: '9:00 – 17:00',
                'Суббота, Воскресенье': 'Выходной',
            }}
        />
        <Contacts>
            г. Москва, ул. Большая Семеновская, д. 38, каб. Н-514
            <br />
            <Telephone tel="+74952230523,1520">+7 (495) 223-05-23 доб. 1520</Telephone>
        </Contacts>
    </>
)
