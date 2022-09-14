import { UserApplication } from '@api/model'
import { IInputArea } from '@ui/input-area/model'

const justificationGrantOptions = [
    {
        id: 0,
        title: 'Нуждающиеся в дорогостоящем лечении и (или) восстановлении здоровья, в том числе в компенсации расходов на операцию, приобретение дорогостоящих медикаментов при наличии соответствующих медицинских рекомендаций, проведении необходимых платных медицинских осмотров и обследований, профилактических прививок',
    },
    { id: 1, title: 'Дети-сироты и дети, оставшиеся без попечения родителей' },
    { id: 2, title: 'Лица из числа детей-сирот и детей, оставшихся без попечения родителей' },
    { id: 3, title: 'Потерявшие в период обучения обоих или единственного родителя' },
    {
        id: 4,
        title: 'Признанные в установленном порядке инвалидами I, II группы, инвалидами с детства (вне зависимости от установленной группы инвалидности)',
    },
    { id: 5, title: 'Дети-инвалиды' },
    { id: 6, title: 'Инвалиды и ветераны боевых действий' },
    { id: 7, title: 'Пострадавшие в результате аварии на Чернобыльской АЭС и других радиационных катастроф' },
    {
        id: 8,
        title: 'Обучающиеся, признанные в установленном порядке инвалидами III группы (за исключением инвалидов III группы – инвалидов с детства)',
    },
    {
        id: 9,
        title: 'Обучающиеся из малоимущих семей или одиноко проживающие обучающиеся, среднедушевой доход которых ниже величины прожиточного минимума, установленного в соответствующем субъекте РФ и (или) получившие государственную социальную помощь',
    },
    {
        id: 10,
        title: 'Обучающиеся, имеющие обоих родителей (единственного родителя), являющихся инвалидом и (или) пенсионером',
    },
    {
        id: 11,
        title: 'Обучающиеся, потерявшие во время обучения в университете одного из родителей (потеря кормильца)',
    },
    { id: 12, title: 'Обучающиеся из неполных семей' },
    { id: 13, title: 'Обучающиеся из многодетных семей' },
    { id: 14, title: 'В связи с бракосочетанием' },
    { id: 15, title: 'Обучающиеся женского пола, вставшим на учет в медицинском учреждении по беременности' },
    { id: 16, title: 'В связи с рождением ребенка' },
    { id: 17, title: 'Обучающиеся, являющиеся одинокой матерью (отцом)' },
    { id: 18, title: 'Обучающиеся, имеющие на иждивении ребенка (детей)' },
    { id: 19, title: 'Семьи обучающихся с ребенком (детьми)' },
    {
        id: 20,
        title: 'В связи со смертью близкого родственника (супруг (супруга), ребенок (дети), мать, отец, брат и/или сестра (полнородные и неполнородные), бабушка, дедушка)',
    },
    {
        id: 21,
        title: 'Обучающиеся, пострадавшие при чрезвычайных обстоятельствах (стихийных бедствиях, техногенных авариях, вооруженных конфликтах, экологических катастрофах, пожарах, несчастных случаях)',
    },
    { id: 22, title: 'В целях компенсации расходов на проезд от места постоянного жительства к месту учебы и обратно' },
    {
        id: 23,
        title: 'В целях компенсации расходов в связи с мотивированной необходимостью улучшения жилищных условий',
    },
    { id: 24, title: 'Временно оказавшиеся в сложной жизненной ситуации, в иных ситуациях по решению Комиссии' },
]

const getForm = (dataUserApplication: UserApplication): IInputArea => {
    return {
        title: 'Заявка на оказание материальной помощи',
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
            {
                title: 'Факультет (институт)/структурное подразделение:',
                fieldName: 'faculty',
                value: dataUserApplication.faculty,
                editable: true,
                required: true,
            },
            {
                title: 'Основания для получения материальной помощи:',
                fieldName: 'justification_grant',
                value: null,
                type: 'multiselect',
                width: '100%',
                editable: true,
                required: true,
                items: justificationGrantOptions,
            },
            {
                title: 'Прошу оказать мне материальную помощь из средств стипендиального фонда университета в связи:',
                fieldName: 'reason',
                type: 'textarea',
                value: '',
                editable: true,
                required: true,
                placeholder: 'Укажите причину',
            },
        ],
        links: [
            {
                title: 'Необходимо загрузить следующие документы',
                link: 'https://e.mospolytech.ru/old/storage/files/matpom_docs.pdf',
                type: 'document',
            },
        ],
        documents: { files: [], fieldName: 'docs', maxFiles: 4, required: true },
        alert: 'Загрузите документы, подтверждающие право на получение материальной помощи',
    }
}

export default getForm
