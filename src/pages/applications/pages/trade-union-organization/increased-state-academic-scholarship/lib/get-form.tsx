import { UserApplication } from '@api/model'
import { IInputArea } from '@ui/input-area/model'
import React from 'react'
import styled from 'styled-components'

const TypeOfActivityOptions = [
    { id: 0, title: 'учебная деятельность' },
    { id: 1, title: 'научно-исследовательская деятельность' },
    { id: 3, title: 'общественная деятельность' },
    { id: 4, title: 'культурно-творческая деятельность' },
    { id: 5, title: 'спортивная деятельность' },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic, email, phone } = dataUserApplication
    return {
        title: 'Характеристика-рекомендация на получение повышенной государственной академической стипендии',
        data: [
            {
                title: 'ФИО',
                fieldName: 'fio',
                value: surname + ' ' + name + ' ' + patronymic,
                editable: false,
            },
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                editable: true,
                required: true,
                value: phone,
            },
            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: email,
                editable: true,
                required: true,
            },
            {
                title: 'Вид деятельности',
                type: 'select',
                fieldName: 'typeOfActivity',
                value: null,
                editable: true,
                required: true,
                items: TypeOfActivityOptions,
                width: '100%',
            },
            {
                title: 'Перечень достижений в выбранном виде деятельности:',
                type: 'textarea',
                fieldName: 'listOfAchievements',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Критерии',
                type: 'text-header',
                fieldName: '',
                value: 'Критерии',
                visible: true,
            },
            {
                title: 'Систематическое участие студента в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, в проведении (обеспечении проведения) общественно значимой деятельности социального, культурного, правозащитного, общественно полезного характера, организуемой федеральной государственной образовательной организацией высшего образования или с её участием, подтверждаемое документально',
                type: 'checkbox',
                fieldName: 'participation-check',
                value: false,
                visible: true,
                editable: true,
            },
            {
                title: 'Систематическое участие студента в течение 1 года, предшествующего назначению повышенной государственной академической стипендии, в деятельности по информационному обеспечению общественно значимых мероприятий, общественной жизни федеральной государственной образовательной организации высшего образования, подтверждаемое документально',
                type: 'checkbox',
                fieldName: 'info-support-check',
                value: false,
                visible: true,
                editable: true,
            },
        ],
        links: [
            {
                title: 'Порядок подачи',
                link: 'https://e.mospolytech.ru/old/storage/files/Poryadok_priema_dokumentov_PGAS.pdf',
                type: 'document',
            },
        ],
        alert: (
            <p>
                Присоединить файлы, не более трех:
                <Ul>
                    <li>выписка из решения профсоюзной организации университета;</li>
                    <li>диплом;</li>
                    <li>грамота;</li>
                    <li>документы, подтверждающие участие в мероприятиях;</li>
                    <li>иные документы, подтверждающие достижения студента.</li>
                </Ul>
            </p>
        ),
        documents: { files: [], fieldName: 'docs', maxFiles: 3, required: true, allowedTypes: ['application/pdf'] },
    }
}

const Ul = styled.ul`
    margin-left: 1rem;
`

export default getForm
