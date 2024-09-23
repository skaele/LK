import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const education = [
    { id: 0, title: 'Среднее общее' },
    { id: 1, title: 'Среднее профессиональное' },
    { id: 2, title: 'Высшее - бакалавриат' },
    { id: 3, title: 'Высшее - специалитет, магистратура' },
]

export const getForm = (dataUserApplication: UserApplication): IInputArea => {
    const { surname, name, patronymic, email, phone, divisions_crs } = dataUserApplication
    return {
        title: 'Заверенные копии документов по воинскому учету из личного дела',
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
                title: 'Выберите подразделение',
                value: null,
                type: 'select',
                fieldName: 'stuctural_subdivision',
                items: divisions_crs.map((division) => {
                    return {
                        id: +division.id,
                        title: division.name + ' ' + division.contact,
                    }
                }),
                width: '100%',
                editable: true,
                required: true,
                isSpecificSelect: true,
            },
            {
                title: 'Образование на момент поступления в университет',
                value: null,
                type: 'select',
                fieldName: 'education',
                items: education,
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Наименование военного комиссариата, куда направляется справка',
                value: '',
                fieldName: 'comissariat_name',
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Комментарий к заявке',
                placeholder: 'Комментарий',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
    }
}
