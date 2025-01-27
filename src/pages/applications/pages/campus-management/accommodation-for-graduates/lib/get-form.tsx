import React from 'react'

import { UserApplication } from '@api/model'
import listHostelsOptions from '@features/applications/lib/get-list-hostels'
import { IInputArea } from '@ui/input-area/model'

const statusesStudentForHostelOptions = [
    {
        id: 0,
        title: 'Поступающий в бакалавриат, специалитет, магистратуру',
    },
    {
        id: 1,
        title: 'Поступающий в аспирантуру',
    },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic, group, email, phone } = dataUserApplication
    return {
        title: 'Предоставление права проживания в каникулярный период (для выпускников университета, проживающих в общежитиях)',
        data: [
            {
                title: 'ФИО',
                fieldName: 'fio',
                value: surname + ' ' + name + ' ' + patronymic,
                editable: false,
            },
            {
                title: 'Учебная группа',
                fieldName: 'group',
                type: 'tel',
                value: group,
                editable: false,
            },
            {
                title: 'Электронная почта',
                fieldName: 'email',
                type: 'email',
                value: email,
                editable: true,
                required: true,
            },
            {
                title: 'Телефон',
                fieldName: 'phone',
                type: 'tel',
                value: phone,
                editable: true,
                required: true,
            },
            {
                title: 'Общежитие',
                fieldName: 'hostel',
                value: null,
                type: 'select',
                width: '100%',
                editable: true,
                required: true,
                items: listHostelsOptions,
            },
            {
                title: 'Комната',
                placeholder: 'Укажите номер комнаты, в которую хотите переселиться',
                fieldName: 'room',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Статус',
                fieldName: 'status-for-hostel',
                value: null,
                type: 'select',
                width: '100%',
                editable: true,
                required: true,
                items: statusesStudentForHostelOptions,
            },
        ],
        hint: (
            <>
                <p>Прикрепите расписку из приемной комиссии о подаче документов для поступления</p>
                <br />
                <p>Подача заявок будет доступна до 07.08.2024 включительно</p>
            </>
        ),
        documents: { files: [], fieldName: 'docs', required: false, maxFiles: 3, allowedTypes: ['pdf'] },
    }
}

export default getForm
