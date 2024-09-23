import { UserApplication } from '@shared/api/model'
import { IInputArea } from '@shared/ui/input-area/model'

const docTypes = [
    { id: 0, title: 'Сведения о поступлении в образовательную организацию' },
    { id: 1, title: 'Сведения об отчислении из образовательной организации' },
    { id: 2, title: 'Сведения об уходе в академический отпуск' },
    { id: 3, title: 'Сведения о выходе из академического отпуска' },
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
                title: 'Запрашиваемые документы',
                value: null,
                type: 'select',
                fieldName: 'doc_type',
                items: docTypes,
                width: '100%',
                editable: true,
                required: true,
            },
            {
                title: 'Документы предоставляются в военные комиссариаты Российской Федерации, суды',
                value: false,
                type: 'checkbox',
                fieldName: 'to_commissariats_or_courts',
                width: '100%',
                editable: true,
            },
            {
                title: 'Комментарий',
                type: 'textarea',
                fieldName: 'comment',
                value: '',
                editable: true,
            },
        ],
    }
}
