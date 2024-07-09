import { IInputArea } from '@ui/input-area/model'
import { UserApplication } from '@api/model'
import listHostelsOptions from '@features/applications/lib/get-list-hostels'
import React from 'react'

const statusesStudentForHostelOptions = [
    {
        id: 0,
        title: 'Поступающий в бакалавриат, специалитет, магистратуру',
    },
    {
        id: 1,
        title: 'Поступающий в аспирантуру',
    },
    {
        id: 2,
        title: 'Не поступающий, на период каникул',
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
                <p>
                    Прикрепите справку из приемной комиссии о подаче документов для поступления и/или выписку из приказа
                    о предоставлении каникул
                </p>
                <br />
                <p>Подача заявок будет недоступна с 01.08.2024</p>
            </>
        ),
        documents: { files: [], fieldName: 'docs', required: false, maxFiles: 3, allowedTypes: ['application/pdf'] },
    }
}

export default getForm
