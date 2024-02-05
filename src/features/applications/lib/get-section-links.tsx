import {
    ACADEMIC_LEAVE_ACCOMMODATION,
    ACCOMMODATION_CORRESPONDENCE_FORM,
    ACCOMMODATION_FOR_GRADUATES,
    ARBITRARY_REQUEST_ROUTE,
    CERTIFICATE_OF_ATTENDANCE,
    CHANGING_PERSONAL_DATA,
    CLARIFICATION_OF_PASSPORT_DATA_ROUTE,
    EXTENSION_ATTESTATION,
    FAMILY_ROOM,
    FINANCIAL_ASSISTANCE,
    FINANCIAL_SUPPORT,
    FULL_TIME_PART_TIME_FORM,
    HOLIDAYS_AFTER_TRAINING,
    INCREASED_STATE_ACADEMIC_SCHOLARSHIP,
    INDEPENDENTLY_DEDUCTED,
    MILITARY_REGISTRATION,
    MILITARY_REGISTRATION_DOCUMENTS,
    PAPER_CALL,
    PAYMENT_RECIPIENT,
    PREFERENTIAL_ACCOMMODATION,
    PROVISION_ACADEMIC_LEAVE,
    REGULAR_ACCOMMODATION,
    RELOCATION_INSIDE_HOSTEL,
    RELOCATION_TO_ANOTHER_HOSTEL,
    RESTORING_THE_MAGNETIC_PASS,
    RETAKE_FOR_DIPLOMA,
    SOCIAL_AGENCIES,
    SOCIAL_SCOLLARSHIP,
    STATE_ACCREDITATION,
    STUDENT_EMPLOYMENT_ROUTE,
    STUDENT_STATUS,
    TERMINATION_OF_EMPLOYMENT_CONTRACT,
} from '@app/routes/routes'
import { Section } from '@features/applications/ui/molecules/create-application-list'
import { RECEPTION_COMMISSION, UNION_ORGANIZATION, isProduction } from '@shared/constants'
import React from 'react'
import { BiRuble } from 'react-icons/bi'
import { FiRotateCcw } from 'react-icons/fi'
import {
    HiOutlineCalendar,
    HiOutlineClipboard,
    HiOutlineHand,
    HiOutlineIdentification,
    HiOutlineKey,
    HiOutlineLibrary,
    HiOutlineLogout,
    HiOutlineOfficeBuilding,
    HiOutlineStar,
    HiOutlineUserGroup,
    HiOutlineX,
} from 'react-icons/hi'

const getSectionLinks = (): Section[] => {
    const additionalHeaderClosedService = isProduction ? ' (Сервис временно недоступен)' : ''
    return [
        {
            title: 'Многофункциональный центр',
            links: [
                {
                    link: CERTIFICATE_OF_ATTENDANCE,
                    title: 'Справка о прослушанных дисциплинах за период обучения (справка об обучении)',
                    icon: <HiOutlineCalendar />,
                    color: 'purple',
                },
                {
                    link: STUDENT_STATUS,
                    title: 'Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования',
                    icon: <HiOutlineLibrary />,
                    color: 'purple',
                },
                {
                    link: SOCIAL_AGENCIES,
                    title: 'Справка в социальные учреждения (Пенсионный фонд, УСЗН и пр.)',
                    icon: <HiOutlineLibrary />,
                    color: 'purple',
                },
                { link: PAPER_CALL, title: 'Справка-вызов', color: 'purple' },
                {
                    link: RETAKE_FOR_DIPLOMA,
                    title: 'Заявление на пересдачу для получения диплома с отличием',
                    icon: <FiRotateCcw />,
                    color: 'purple',
                },
                {
                    link: CHANGING_PERSONAL_DATA,
                    title: 'Запрос на изменение персональных данных',
                    icon: <HiOutlineKey />,
                    color: 'purple',
                },
                {
                    link: RESTORING_THE_MAGNETIC_PASS,
                    title: 'Запрос на восстановление магнитного пропуска',
                    icon: <HiOutlineClipboard />,
                    color: 'purple',
                },
                {
                    link: CLARIFICATION_OF_PASSPORT_DATA_ROUTE,
                    title: 'Уточнение паспортных данных',
                    icon: <HiOutlineIdentification />,
                    color: 'purple',
                },
                {
                    link: STATE_ACCREDITATION,
                    title: 'Выдача лицензий и свидетельств о государственной аккредитации',
                    color: 'purple',
                },
                {
                    link: HOLIDAYS_AFTER_TRAINING,
                    title: 'Предоставление каникул в связи с окончанием университета',
                    color: 'purple',
                },
                { link: PROVISION_ACADEMIC_LEAVE, title: 'Предоставление академического отпуска', color: 'purple' },
                { link: EXTENSION_ATTESTATION, title: 'Продление промежуточной аттестации или ГИА', color: 'purple' },
                {
                    link: INDEPENDENTLY_DEDUCTED,
                    title: 'Отчисление по инициативе обучающегося',
                    icon: <HiOutlineLogout />,
                    color: 'red',
                },
            ],
        },
        {
            title: 'Управление студенческим городком',
            links: [
                {
                    link: REGULAR_ACCOMMODATION,
                    title: 'Предоставление права проживания (очная форма)',
                    exceptionalFormEducationList: ['Очно-заочная', 'Заочная'],
                    icon: <HiOutlineOfficeBuilding />,
                    color: 'lightBlue',
                },
                {
                    link: FULL_TIME_PART_TIME_FORM,
                    title: 'Предоставление права проживания (очно-заочная форма)',
                    exceptionalFormEducationList: ['Очная', 'Заочная'],
                    icon: <HiOutlineOfficeBuilding />,
                    color: 'lightBlue',
                },
                {
                    link: ACCOMMODATION_CORRESPONDENCE_FORM,
                    title: 'Предоставление права проживания (заочная форма)',
                    exceptionalFormEducationList: ['Очная', 'Очно-заочная'],
                    icon: <HiOutlineOfficeBuilding />,
                    color: 'lightBlue',
                },
                {
                    link: PREFERENTIAL_ACCOMMODATION,
                    title: 'Предоставление права проживания льготной категории граждан',
                    icon: <HiOutlineOfficeBuilding />,
                    color: 'lightBlue',
                },
                {
                    link: ACADEMIC_LEAVE_ACCOMMODATION,
                    title: 'Предоставление права проживания в период академического отпуска',
                    exceptionalFormEducationList: ['Очно-заочная', 'Заочная'],
                    icon: <HiOutlineOfficeBuilding />,
                    color: 'lightBlue',
                },
                {
                    link: FAMILY_ROOM,
                    title: 'Предоставление права проживания в семейной комнате',
                    exceptionalFormEducationList: ['Очно-заочная', 'Заочная'],
                    icon: <HiOutlineOfficeBuilding />,
                    color: 'lightBlue',
                },
                {
                    link: RELOCATION_INSIDE_HOSTEL,
                    title: 'Переселение внутри общежития',
                    exceptionalFormEducationList: ['Заочная'],
                    icon: <HiOutlineOfficeBuilding />,
                    color: 'lightBlue',
                },
                {
                    link: RELOCATION_TO_ANOTHER_HOSTEL,
                    title: 'Переселение в другое общежитие',
                    exceptionalFormEducationList: ['Заочная'],
                    icon: <HiOutlineOfficeBuilding />,
                    color: 'lightBlue',
                },
                {
                    link: ACCOMMODATION_FOR_GRADUATES,
                    title: 'Предоставление права проживания в период каникул',
                    icon: <HiOutlineOfficeBuilding />,
                    color: 'lightBlue',
                },
                {
                    link: TERMINATION_OF_EMPLOYMENT_CONTRACT,
                    title: 'Расторжение договора найма',
                    icon: <HiOutlineX />,
                    color: 'red',
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
                    icon: <HiOutlineUserGroup />,
                    color: 'pink',
                },
                {
                    link: FINANCIAL_SUPPORT,
                    title: 'Оформить материальную поддержку остронуждающимся студентам (Дотацию)',
                    icon: <HiOutlineHand />,
                    color: 'pink',
                },
                { link: FINANCIAL_ASSISTANCE, title: 'Заявка на материальную помощь' },
                {
                    link: SOCIAL_SCOLLARSHIP,
                    title: 'Оформить социальную стипендию',
                    icon: <HiOutlineHand />,
                    color: 'pink',
                },
                {
                    link: INCREASED_STATE_ACADEMIC_SCHOLARSHIP,
                    title: 'Отправить характеристику-рекомендацию на получение повышенной государственной академической стипендии',
                },
            ],
        },
        {
            title: 'Мобилизационный отдел' + additionalHeaderClosedService,
            disabled: isProduction,
            links: [
                {
                    link: MILITARY_REGISTRATION_DOCUMENTS,
                    title: 'Отправить документы воинского учета',
                    color: 'red',
                    icon: <HiOutlineStar />,
                },
                { link: MILITARY_REGISTRATION, title: 'Воинский учет', color: 'red', icon: <HiOutlineStar /> },
                // {
                //     link: '',
                //     title: 'Заполнить личную карточку обучающегося по воинскому учету для получения отсрочки от призывана военную службу',
                // },
            ],
        },
        {
            title: 'Отдел платных образовательных услуг' + additionalHeaderClosedService,
            disabled: isProduction,
            links: [
                {
                    link: PAYMENT_RECIPIENT,
                    title: 'Оформить дополнительное соглашение к договору об обучении',
                    color: 'green',
                    icon: <BiRuble />,
                },
                {
                    link: PAYMENT_RECIPIENT,
                    title: 'Отправить квитанцию об оплате обучения или пени',
                    color: 'green',
                    icon: <BiRuble />,
                },
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
