import {
    ARBITRARY_REQUEST_ROUTE,
    CLARIFICATION_OF_PASSPORT_DATA_ROUTE,
    SOCIAL_SCOLLARSHIP,
    PAPER_CALL,
    CERTIFICATE_OF_ATTENDANCE,
    SOCIAL_AGENCIES,
    REGULAR_ACCOMMODATION,
    ACCOMMODATION_CORRESPONDENCE_FORM,
    ACADEMIC_LEAVE_ACCOMMODATION,
    PREFERENTIAL_ACCOMMODATION,
    FAMILY_ROOM,
    TERMINATION_OF_EMPLOYMENT_CONTRACT,
    RELOCATION_TO_ANOTHER_HOSTEL,
    RELOCATION_INSIDE_HOSTEL,
    PAYMENT_RECIPIENT,
    MILITARY_REGISTRATION_DOCUMENTS,
    RETAKE_FOR_DIPLOMA,
    INCREASED_STATE_ACADEMIC_SCHOLARSHIP,
    RESTORING_THE_MAGNETIC_PASS,
    FINANCIAL_ASSISTANCE,
    FINANCIAL_SUPPORT,
    CHANGING_PERSONAL_DATA,
    STATE_ACCREDITATION,
    STUDENT_STATUS,
    HOLIDAYS_AFTER_TRAINING,
    PROVISION_ACADEMIC_LEAVE,
    INDEPENDENTLY_DEDUCTED,
    EXTENSION_ATTESTATION,
    FULL_TIME_PART_TIME_FORM,
    ACCOMMODATION_FOR_GRADUATES,
    MILITARY_REGISTRATION,
    EXIT_ACADEMIC_LEAVE,
    STUDENT_EMPLOYMENT_ROUTE,
    MEDICAL_CERTIFICATES_086,
    FAMILY_CONTACTS,
    MILITARY_COPIES,
    MILITARY_FORM_4,
    MILITARY_FORM_5,
} from '@app/routes/routes'
import { isProduction, RECEPTION_COMMISSION, UNION_ORGANIZATION } from '@shared/constants'
import { Section } from '@features/applications/ui/molecules/create-application-list'
import { TECHNICAL_MAINTENANCE } from '@app/routes/teacher-routes'
import { MEDICAL_CERTIFICATE } from '@app/routes/general-routes'

const getSectionLinks = (): Section[] => {
    const additionalHeaderClosedService = isProduction ? ' (Сервис временно недоступен)' : ''
    return [
        {
            title: 'Многофункциональный центр',
            links: [
                {
                    link: CERTIFICATE_OF_ATTENDANCE,
                    title: 'Справка о прослушанных дисциплинах за период обучения (справка об обучении)',
                },
                {
                    link: STUDENT_STATUS,
                    title: 'Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования',
                },
                { link: SOCIAL_AGENCIES, title: 'Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)' },
                { link: PAPER_CALL, title: 'Справка-вызов' },
                { link: RETAKE_FOR_DIPLOMA, title: 'Заявление на пересдачу для получения диплома с отличием' },
                { link: CHANGING_PERSONAL_DATA, title: 'Запрос на изменение персональных данных' },
                { link: RESTORING_THE_MAGNETIC_PASS, title: 'Запрос на восстановление магнитного пропуска' },
                { link: CLARIFICATION_OF_PASSPORT_DATA_ROUTE, title: 'Уточнение паспортных данных' },
                { link: STATE_ACCREDITATION, title: 'Выдача лицензий и свидетельств о государственной аккредитации' },
                { link: HOLIDAYS_AFTER_TRAINING, title: 'Предоставление каникул в связи с окончанием университета' },
                { link: PROVISION_ACADEMIC_LEAVE, title: 'Предоставление академического отпуска' },
                { link: EXIT_ACADEMIC_LEAVE, title: 'Выход из академического отпуска' },
                { link: INDEPENDENTLY_DEDUCTED, title: 'Отчисление по инициативе обучающегося' },
                { link: EXTENSION_ATTESTATION, title: 'Продление промежуточной аттестации или ГИА' },
            ],
        },
        {
            title: 'Управление студенческим городком',
            links: [
                {
                    link: MEDICAL_CERTIFICATE,
                    title: 'Предоставление медицинских справок для проживающих в общежитии',
                },
                {
                    link: REGULAR_ACCOMMODATION,
                    title: 'Предоставление права проживания (очная форма)',
                    exceptionalFormEducationList: ['Очно-заочная', 'Заочная'],
                },
                {
                    link: FULL_TIME_PART_TIME_FORM,
                    title: 'Предоставление права проживания (очно-заочная форма)',
                    exceptionalFormEducationList: ['Очная', 'Заочная'],
                },
                {
                    link: ACCOMMODATION_CORRESPONDENCE_FORM,
                    title: 'Предоставление права проживания (заочная форма)',
                    exceptionalFormEducationList: ['Очная', 'Очно-заочная'],
                },
                {
                    link: PREFERENTIAL_ACCOMMODATION,
                    title: 'Предоставление права проживания льготной категории граждан',
                },
                {
                    link: ACADEMIC_LEAVE_ACCOMMODATION,
                    title: 'Предоставление права проживания в период академического отпуска',
                    exceptionalFormEducationList: ['Очно-заочная', 'Заочная'],
                },
                {
                    link: FAMILY_ROOM,
                    title: 'Предоставление права проживания в семейной комнате',
                    exceptionalFormEducationList: ['Очно-заочная', 'Заочная'],
                },
                {
                    link: RELOCATION_INSIDE_HOSTEL,
                    title: 'Переселение внутри общежития',
                    exceptionalFormEducationList: ['Заочная'],
                },
                {
                    link: RELOCATION_TO_ANOTHER_HOSTEL,
                    title: 'Переселение в другое общежитие',
                    exceptionalFormEducationList: ['Заочная'],
                },
                {
                    link: TERMINATION_OF_EMPLOYMENT_CONTRACT,
                    title: 'Расторжение договора найма',
                },
                {
                    link: ACCOMMODATION_FOR_GRADUATES,
                    title: 'Предоставление права проживания в период каникул',
                },
            ],
        },
        {
            title: 'Профсоюзная организация',
            links: [
                {
                    link: UNION_ORGANIZATION,
                    title: 'Вступить в Профсоюз',
                    isExternalLink: true,
                    isOpenInNewWindow: true,
                },
                {
                    link: FINANCIAL_SUPPORT,
                    title: 'Оформить материальную поддержку остронуждающимся студентам (Дотацию)',
                },
                { link: FINANCIAL_ASSISTANCE, title: 'Заявка на материальную помощь' },
                { link: SOCIAL_SCOLLARSHIP, title: 'Оформить социальную стипендию' },
                {
                    link: INCREASED_STATE_ACADEMIC_SCHOLARSHIP,
                    title: 'Отправка документов на получение стипендии Московского Политеха',
                    exceptionalFormEducationList: ['Очно-заочная', 'Заочная'],
                    exceptionalDegreeLevelList: ['Аспирантура'],
                },
            ],
        },
        {
            title: 'Мобилизационный отдел',
            links: [
                { link: MILITARY_REGISTRATION_DOCUMENTS, title: 'Отправить документы воинского учета' },
                {
                    link: MILITARY_REGISTRATION,
                    title: 'Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призыва на военную службу (форма 10)',
                },
                {
                    link: MILITARY_FORM_4,
                    title: 'Заказать справку об обучении для студентов в военкомат (форма 4)',
                    description: 'Доступна после заполнения формы № 10',
                },
                {
                    link: MILITARY_FORM_5,
                    title: 'Заказать справку об обучении для аспирантов в военкомат (форма 5)',
                    description: 'Доступна после заполнения формы № 10',
                },
                {
                    link: MILITARY_COPIES,
                    title: 'Заверенные копии документов по воинскому учету из личного дела',
                },
            ],
        },
        {
            title: 'Отдел платных образовательных услуг' + additionalHeaderClosedService,
            disabled: isProduction,
            links: [
                { link: PAYMENT_RECIPIENT, title: 'Оформить дополнительное соглашение к договору об обучении' },
                { link: PAYMENT_RECIPIENT, title: 'Отправить квитанцию об оплате обучения или пени' },
            ],
        },
        {
            title: 'Приемная комиссия',
            links: [
                {
                    link: RECEPTION_COMMISSION,
                    isExternalLink: true,
                    title: 'Изменение условий обучения (направление подготовки (специальность), форма), в том числе перевод с платного обучения на бесплатное',
                },
            ],
        },
        {
            title: 'Прочее',
            links: [
                {
                    link: MEDICAL_CERTIFICATES_086,
                    title: 'Предоставление справок о группе здоровья',
                },
                {
                    link: FAMILY_CONTACTS,
                    title: 'Контактные данные родителей',
                },
                {
                    link: TECHNICAL_MAINTENANCE,
                    title: 'Техническая эксплуатация',
                },
                {
                    link: ARBITRARY_REQUEST_ROUTE,
                    title: 'Произвольный запрос',
                },
            ],
        },
        {
            title: 'Прочее (в разработке)',
            disabled: isProduction,
            links: [
                {
                    link: STUDENT_EMPLOYMENT_ROUTE,
                    title: 'Трудоустройство студентов',
                },
            ],
        },
    ]
}

export default getSectionLinks
