import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'
import React from 'react'
import styled from 'styled-components'

const maritalStatus = [
    { id: 0, title: 'Холост' },
    { id: 1, title: 'Женат' },
    { id: 2, title: 'В разводе' },
    { id: 3, title: 'Вдовец' },
]

const languageProficiency = [
    { id: 0, title: 'Начальный' },
    { id: 1, title: 'Базовый' },
    { id: 2, title: 'Со словарем' },
    { id: 3, title: 'Разговорный' },
    { id: 4, title: 'Свободно' },
]

const education = [
    { id: 0, title: 'Cреднее общее' },
    { id: 1, title: 'Cреднее профессиональное' },
    { id: 2, title: 'Высшее - бакалавриат' },
    { id: 3, title: 'Высшее - специалитет, магистратура' },
]

const familyMembers = [
    { id: 0, title: 'Мать' },
    { id: 1, title: 'Отец' },
    { id: 2, title: 'Жена' },
    { id: 3, title: 'Брат' },
    { id: 2, title: 'Сестра' },
]

const documentType = [
    { id: 0, title: 'Удостоверение гражданина, подлежащего призыву на военную службу' },
    { id: 1, title: 'Военный билет' },
    { id: 2, title: 'Временное удостоверение, выданное взамен военного билета' },
    { id: 3, title: 'Справка взамен военного билета' },
]

export const getPersonalData = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic, email, phone, birthday } = dataUserApplication
    return {
        title: 'Персональные данные',
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
                value: phone,
                required: true,
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
                title: 'Дата рождения',
                fieldName: 'birth_date',
                type: 'date',
                value: birthday,
                editable: true,
                required: true,
            },
            {
                title: 'Место рождения',
                fieldName: 'birth_place',
                value: '',
                editable: true,
                required: true,
                hint: 'Республика, край, область, район, город, населенный пункт',
            },
            {
                title: 'Состояние в браке',
                value: null,
                fieldName: 'marital_status',
                type: 'select',
                items: maritalStatus,
                width: '100%',
                editable: true,
                required: true,
            },
        ],
    }
}

export const getForeignLanguages = (): IInputArea => {
    return {
        title: 'Владение иностранными языками',
        id: 'foreign_languages',
        data: [],
        default: [
            [
                {
                    fieldName: 'lang',
                    title: 'Иностранный язык',
                    value: '',
                    editable: true,
                    width: '50%',
                },
                {
                    fieldName: 'proficiency',
                    title: 'Степень владения',
                    value: null,
                    type: 'select',
                    items: languageProficiency,
                    width: '50%',
                    editable: true,
                },
            ],
        ],
        addNew: true,
    }
}

export const getEducation = (): IInputArea => {
    return {
        title: 'Образование и профессия',
        data: [
            {
                title: 'Образование',
                fieldName: '',
                value: 'Образование',
                type: 'text-header',
                visible: true,
            },
            {
                title: 'Уровень образования',
                value: null,
                fieldName: 'education',
                type: 'select',
                items: education,
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Наименование образовательной организации',
                fieldName: 'edu_name',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Квалификация',
                fieldName: 'edu_qualification',
                value: '',
                editable: true,
            },
            {
                title: 'Специальность, направление подготовки',
                fieldName: 'edu_specialty',
                value: '',
                editable: true,
            },
            {
                title: 'Серия и номер диплома, свидетельства',
                fieldName: 'edu_document',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Год окончания',
                fieldName: 'edu_graduation_year',
                value: '',
                type: 'number',
                editable: true,
                required: true,
            },
            {
                title: 'Профессия',
                fieldName: '',
                value: 'Профессия',
                type: 'text-header',
                visible: true,
            },
            {
                title: 'Основная',
                fieldName: 'prof_main',
                value: '',
                editable: true,
            },
            {
                title: 'Дополнительная',
                fieldName: 'prof_add',
                value: '',
                editable: true,
            },
        ],
    }
}

export const getFamilyCompositionForm = (): IInputArea => {
    return {
        title: 'Состав семьи',
        id: 'family_members',
        data: [],
        default: [
            [
                {
                    fieldName: 'relation',
                    title: 'Степень родства',
                    value: null,
                    type: 'select',
                    items: familyMembers,
                    width: '100%',
                    required: true,
                },
                {
                    fieldName: 'fio',
                    title: 'ФИО',
                    value: '',
                    required: true,
                    width: '40%',
                },
                {
                    fieldName: 'birth_date',
                    title: 'Дата рождения',
                    value: '',
                    type: 'date',
                    required: true,
                    width: '30%',
                },
            ],
        ],
        addNew: true,
        optionalCheckbox: {
            title: 'Близкие родственники отсутствуют',
            fieldName: 'no_family_members',
            value: false,
        },
    }
}

export const getContacts = (): IInputArea => {
    return {
        title: 'Адрес места жительства',
        data: [
            {
                title: 'Адрес места жительства в соответствии с регистрацией',
                fieldName: 'reg_address',
                value: '',
                hint: 'Область, город, улица, дом, корпус, квартира',
                editable: true,
                required: true,
            },
            {
                title: 'Индекс',
                fieldName: 'reg_index',
                value: '',
                editable: true,
                required: true,
                width: '40%',
            },
            {
                fieldName: 'reg_date',
                title: 'Дата регистрации по месту жительства',
                value: '',
                editable: true,
                type: 'date',
                required: true,
            },
            {
                title: 'Адрес места жительства фактический',
                fieldName: 'act_address',
                value: '',
                editable: true,
                required: true,
            },
            {
                title: 'Индекс',
                fieldName: 'act_index',
                value: '',
                hint: 'Область, город, улица, дом, корпус, квартира',
                editable: true,
                required: true,
                width: '40%',
            },
            {
                fieldName: 'act_date',
                title: 'Дата начала проживания',
                value: '',
                editable: true,
                type: 'date',
                required: true,
            },
        ],
        documents: {
            files: [],
            fieldName: 'address_doc',
            required: true,
            maxFiles: 1,
            allowedTypes: ['pdf'],
        },
        alert: (
            <p>
                Загрузить сканы документов для воинского учета (все заполненные страницы):
                <Ul>
                    <li>документ для временной регистрации;</li>
                </Ul>
            </p>
        ),
    }
}

export const getDriversLicenseData = (): IInputArea => {
    return {
        title: 'Водительское удостоверение',
        data: [
            {
                fieldName: 'driver_series',
                title: 'Серия',
                value: '',
                editable: true,
                width: '40%',
            },
            {
                fieldName: 'driver_number',
                title: 'Номер',
                value: '',
                editable: true,
                width: '40%',
            },
            {
                fieldName: 'driver_category',
                title: 'Категории ТС',
                value: '',
                editable: true,
            },
            {
                fieldName: 'drivers_date_of_issue',
                title: 'Дата выдачи',
                value: '',
                type: 'date',
                editable: true,
                width: '40%',
            },
        ],
    }
}

export const getPassport = (): IInputArea => {
    return {
        title: 'Паспортные данные',
        data: [
            {
                fieldName: 'passport_series',
                title: 'Серия',
                value: '',
                editable: true,
                required: true,
                width: '40%',
            },
            {
                fieldName: 'passport_number',
                title: 'Номер',
                value: '',
                editable: true,
                required: true,
                width: '40%',
            },
            {
                title: 'Кем выдан',
                type: 'textarea',
                fieldName: 'passport_issued_by',
                value: '',
                editable: true,
            },
            {
                fieldName: 'passport_date_of_issue',
                title: 'Дата выдачи',
                value: '',
                type: 'date',
                editable: true,
                required: true,
                width: '40%',
            },
            {
                fieldName: 'passport_division_code',
                title: 'Код подразделения',
                value: '',
                editable: true,
                required: true,
                width: '40%',
            },
        ],
        documents: {
            files: [],
            fieldName: 'passport_doc',
            required: true,
            maxFiles: 1,
            allowedTypes: ['pdf'],
        },
        alert: (
            <p>
                Загрузить сканы документов для воинского учета (все заполненные страницы):
                <Ul>
                    <li>паспорт (стр. 1-2 и регистрацию);</li>
                </Ul>
            </p>
        ),
    }
}

export const getMilitaryRegistrationDocument = (): IInputArea => {
    return {
        title: 'Сведения воинского учета',
        data: [
            {
                fieldName: 'military_enlistment_office',
                title: 'Наименование военного комиссариата по месту жительства',
                value: '',
                required: true,
                editable: true,
            },
            {
                fieldName: 'military_document_type',
                title: 'Вид документа',
                value: null,
                type: 'select',
                items: documentType,
                width: '100%',
                required: true,
                editable: true,
            },
            {
                fieldName: 'military_series',
                title: 'Серия',
                value: '',
                editable: true,
                width: '40%',
            },
            {
                fieldName: 'military_number',
                title: 'Номер',
                value: '',
                required: true,
                editable: true,
                width: '40%',
            },
            {
                fieldName: 'military_issued_by',
                title: 'Кем выдан',
                value: '',
                width: '100%',
                required: true,
                editable: true,
            },
            {
                fieldName: 'military_date_of_issue',
                title: 'Дата выдачи',
                value: '',
                type: 'date',
                required: true,
                editable: true,
                width: '30%',
            },
        ],
        documents: {
            files: [],
            fieldName: 'military_doc',
            required: true,
            maxFiles: 1,
            allowedTypes: ['pdf'],
        },
        alert: (
            <p>
                Загрузить сканы документов для воинского учета (все заполненные страницы):
                <Ul>
                    <li>удостоверение гражданина, подлежащего призыву;</li>
                    <li>военный билет.</li>
                </Ul>
            </p>
        ),
    }
}

const Ul = styled.ul`
    padding-left: 1rem;
`
