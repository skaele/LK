import React from 'react'

import styled from 'styled-components'

import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Отправить документы воинского учета',
        data: [
            {
                title: 'Телефон',
                type: 'tel',
                mask: true,
                fieldName: 'phone',
                editable: true,
                required: true,
                value: dataUserApplication.phone,
            },

            {
                title: 'Email',
                type: 'email',
                fieldName: 'email',
                value: dataUserApplication.email,
                editable: true,
                required: true,
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: true, maxFileSizeInMegaBytes: 10 },
        alert: (
            <p>
                Прикрепите сканы документов для воинского учета (все заполненные страницы):
                <Ul>
                    <li>удостоверение гражданина, подлежащего призыву; </li>
                    <li>военный билет;</li>
                </Ul>
            </p>
        ),
    }
}

const Ul = styled.ul`
    padding-left: 1rem;
`

export default getForm
