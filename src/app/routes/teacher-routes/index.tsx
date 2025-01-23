import PageIsNotReady from '@pages/page-is-not-ready'

import {
    HelpfulInformation,
    HrApplicationsPage,
    PartTimeEmployment,
    Dismissal,
    ExtraHolidayColl,
    HolidayWork,
    HolidayPlanning,
    IssuanceOfLicensesPage,
    GettingComputerEquipmentPage,
    ConnectingComputerPage,
    OtherItServicesPage,
    CertificateFromPlaceOfWorkPage,
    CertificateOfWorkExperiencePage,
    NumberOfUnusedVacationDaysPage,
    CopyOfEmploymentRecordPage,
    CopiesOfDocumentsFromPersonalFilePage,
    CertificateTimeParentalLeavePage,
    ArbitraryRequestPage,
    CourierPage,
    PaymentForChildCarePage,
    PaymentOfChildBirthAllowancePage,
    PersonaIncomeTaxReferencePage,
    ContactInfoActualizationPage,
    HolidayTransfer,
    DataVerificationPage,
    TeacherPhysicalEducation,
    PhysicalEducationStudent,
    MedicalExamination,
    WorkTransferChangeRate,
    PersonalNotificationsPage,
    PrinterMaintenancePage,
    QuestionPersonalAccountPage,
    QuestionSedPage,
    TeachersApplicationsPage,
    VacationSchedule,
    VisaCertificatePage,
    WorkOnTermsOfExternalConcurrencyPage,
    WorkTransfer,
    LivingInResidentialPremises,
    GuestsAccomodationOnCampus,
    GuestsPassageToCampus,
    Relocation,
    TerminationOfAgreement,
    IssuanceOfPass,
    GuestPass,
    CertificationAndIssuanceOfDocs,
    CertifiedCopiesOfMilitaryDocs,
    DefermentFromConscription,
    EditPhonebookSubdivision,
    EditPhonebookInnerPhone,
    EditPhonebookEmail,
    ContactDetails,
    ContactDetailsForm,
    IncreaseAntiplagiatLimits,
    Allowances,
    CreateAllowance,
    AllowanceInfo,
    Science,
    ArticleList,
    Article,
    Onboarding,
    Children,
    AdminCompetenceCenter,
} from './pages'

import { isProduction, OLD_LK_URL } from '@shared/constants'
import React from 'react'
import { Redirect } from 'react-router-dom'
import {
    BiBookOpen,
    BiBookReader,
    BiBuildings,
    BiGroup,
    BiHeadphone,
    BiIdCard,
    BiPlusMedical,
    BiRuble,
    BiWifi,
} from 'react-icons/bi'
import { FaRegLightbulb } from 'react-icons/fa'
import { FiArrowDownCircle, FiCalendar, FiFileText, FiMonitor, FiStar } from 'react-icons/fi'
import { RiNotificationBadgeLine, RiPassValidLine } from 'react-icons/ri'
import {
    ALL_TEACHERS_ROUTE,
    generalHiddenRoutes,
    generalRoutes,
    IRoutes,
    PAYMENTS_ROUTE,
    PROJECT_ACTIVITIES_ROUTE,
} from '../general-routes'
import DismissalBufferPage from '@pages/hr-applications/pages/buffer-dismissal'
import HolidayWorkBufferPage from '@pages/hr-applications/pages/buffer-holiday-work'
import HolidayPlanningBufferPage from '@pages/hr-applications/pages/buffer-holiday-planning'
import HolidayTransferBufferPage from '@pages/hr-applications/pages/buffer-holiday-transfer'
import MedicalExaminationBufferPage from '@pages/hr-applications/pages/buffer-medical-examination'
//import PartTimeEmploymentBufferPage from '@pages/hr-applications/pages/buffer-part-time-employment'
import WorkTransferBufferPage from '@pages/hr-applications/pages/buffer-work-transfer'
import DownloadAdminFilesPage from '@pages/download-admin-files'
import { MdGroups, MdPsychology } from 'react-icons/md'
import PaymentsPage from '@pages/payments'
import { BsPeople } from 'react-icons/bs'
import AllStaff from '@pages/all-staff'
import AllTeachersPage from '@pages/all-teachers'
import { IoNewspaperOutline } from 'react-icons/io5'
import { Role } from '@entities/allowances/types'

export const APPLICATIONS_ROUTE = '/applications'
export const HR_APPLICATIONS_ROUTE = '/hr-applications'
export const ALLOWANCES = '/allowances'
export const ALLOWANCES_ROLE = ALLOWANCES + '/:role'
export const ALLOWANCES_INITIATOR = ALLOWANCES + '/initiator'
export const ALLOWANCES_APPROVER = ALLOWANCES + '/approver'
export const CREATE_ALLOWANCE = '/allowances-create'
export const ALLOWANCE_INFO_CUT = '/allowances-info'
export const ALLOWANCE_INFO = ALLOWANCE_INFO_CUT + '/:id'
export const JOB_ROUTE = '/job'
export const ORDERS_ROUTE = '/staff_orders'
export const DOCUMENT_BLANKS_ROUTE = '/staff_blanks'
export const STUDENTS_LOGINS_ROUTE = '/ad_logins'
export const VAX_ROUTE = '/vaccination'
export const DOCLIST_ROUTE = '/doclist'
export const DOCLIST_TYPE = '/doclist/:type'
export const DOCLIST_ALLOWANCES = '/doclist/allowances'
export const PPS_VOTE_ROUTE = '/pps_vote2020'
export const CHILDREN_ROUTE = '/children'
export const PPS_CONTEST_ROUTE = '/pps_contest'
export const ElECTRONIC_STATEMENTS = '/electronic-statements'
export const ONBOARDING = '/onboarding'
export const STRUCTURE_OF_THE_UNIVERSITY = '/structure-of-the-university'
export const ADDRESSES_AND_CONTACTS = '/addresses-and-contacts'
export const BRANDBOOK = '/brandbook'
export const WIFI_AT_THE_UNIVERSITY = '/wifi-at-the-university'
export const HEALTH_CARE = '/health-care'
export const PSYCHOLOGICAL_HELP = '/psychological-help'
export const SOICAL_ENVIROMENT = '/social-environment'
export const VACATION_ROUTE = '/vacation'
export const KPI_PPS_ROUTE = '/kpi_pps'
export const KPI_ADMIN_ROUTE = '/kpi_admin'
export const SC_NEWS_ROUTE = '/sc_news'
export const OOP_ROUTE = '/oop'
export const CENTERS_ROUTE = '/centers'
export const PORTFOLIO_ROUTE = '/portfolio'
export const INFO_ROUTE = '/helpful-information'
export const HELP_SERVICE_ROUTE = '/help_service'
export const DOWNLOAD_AGREEMENTS_FILES_ROUTE = '/download-agreements'
export const PERSONAL_NOTIFICATIONS = '/personal-notifications'
export const PHYSICAL_EDUCATION = '/physical-education/main'
export const ALL_STAFF_ROUTE = '/all-staff'
export const PUBLICATION_ACTIVITY = '/publication-activity'
export const ARTICLE_LIST = '/article-list'
export const ARTICLES = '/articles'
export const ARTICLE = '/articles/:id'
export const OPEN_PUBLICATION = '/open-publication'
export const EXPORT_CONTROL = '/export-control'
export const COMPETENCE_CENTER = '/competence-center'
export const COMPETENCE_CENTER_LIST = '/competence-center-list'
export const COMPETENCE_CENTER_FORM = '/competence-center-form'

//hidden routes
export const PHYSICAL_EDUCATION_STUDENT = '/physical-education/student/:studentId'
export const CONTACT_INFO_ACTUALIZATION = APPLICATIONS_ROUTE + '/contact-info-actualization'
export const DATA_VERIFICATION_ROUTE = APPLICATIONS_ROUTE + '/data-verification'
export const ISSUANCE_OF_LICENSES = APPLICATIONS_ROUTE + '/issuance-of-licenses'
export const GETTING_COMPUTER_EQUIPMENT = APPLICATIONS_ROUTE + '/getting-computer-equipment'
export const CONNECTING_COMPUTER = APPLICATIONS_ROUTE + '/connecting-computer'
export const PRINTER_MAINTENANCE = APPLICATIONS_ROUTE + '/printer-maintenance'
export const QUESTION_SED = APPLICATIONS_ROUTE + '/question-sed'
export const QUESTION_PERSONAL_ACCOUNT = APPLICATIONS_ROUTE + '/question-personal-account'
export const OTHER_IT_SERVICES = APPLICATIONS_ROUTE + '/other-it-services'
export const CERTIFICATE_FROM_PLACE_OF_WORK = APPLICATIONS_ROUTE + '/certificate-from-the-place-of-work'
export const VISA_CERTIFICATE = APPLICATIONS_ROUTE + '/visa-certificate'
export const CERTIFICATE_OF_WORK_EXPERIENCE = APPLICATIONS_ROUTE + '/certificate-of-work-experience'
export const NUMBER_OF_UNUSED_VACATION_DAYS = APPLICATIONS_ROUTE + '/number-of-unused-vacation-days'
export const INCREASE_ANTIPLAGIAT_LIMITS = APPLICATIONS_ROUTE + '/increase-antiplagiat-limits'

export const CONTACT_DETAILS = APPLICATIONS_ROUTE + '/contact-details'
export const CONTACT_DETAILS_FORM = APPLICATIONS_ROUTE + '/contact-details/:guid'

export const EDIT_PHONEBOOK_SUBDIVISION = APPLICATIONS_ROUTE + '/edit-phonebook-subdivision'
export const EDIT_PHONEBOOK_INNER_PHONE = APPLICATIONS_ROUTE + '/edit-phonebook-inner-phone'
export const EDIT_PHONEBOOK_EMAIL = APPLICATIONS_ROUTE + '/edit-phonebook-email'

export const TECHNICAL_MAINTENANCE = APPLICATIONS_ROUTE + '/technical-maintenance'

export const COPY_OF_EMPLOYMENT_RECORD = APPLICATIONS_ROUTE + '/copy-of-the-employment-record'
export const COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE = APPLICATIONS_ROUTE + '/copies-of-documents-from-the-personal-file'
export const WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY = APPLICATIONS_ROUTE + '/work-on-the-terms-of-external-concurrency'
export const CERTIFICATE_TIME_PARENTAL_LEAVE = APPLICATIONS_ROUTE + '/certificate-time-parental-leave'
export const ARBITRARY_REQUEST = APPLICATIONS_ROUTE + '/arbitrary-request'
export const COURIER = APPLICATIONS_ROUTE + '/courier'
export const PERSONA_INCOME_TAX_REFERENCE = APPLICATIONS_ROUTE + '/persona-income-tax-reference'
export const PAYMENT_OF_CHILD_BIRTH_ALLOWANCE = APPLICATIONS_ROUTE + '/payment-of-child-birth-allowance'
export const PAYMENT_FOR_CHILD_CARE = APPLICATIONS_ROUTE + '/payment-for-child-care'
export const PARTTIME_EMPLOYMENT = HR_APPLICATIONS_ROUTE + '/part-time-employment/'
export const HOLIDAY_POSTPONED = HR_APPLICATIONS_ROUTE + '/holiday-postponed'
export const DISMISSAL = HR_APPLICATIONS_ROUTE + '/dismissal/:id'
export const WORK_TRANSFER = HR_APPLICATIONS_ROUTE + '/work-transfer/:id'
export const EXTRA_HOLIDAY_COLL = HR_APPLICATIONS_ROUTE + '/extra-holiday-coll'
export const HOLIDAY_PLANNING = HR_APPLICATIONS_ROUTE + '/holiday-planning'
export const HOLIDAY_TRANSFER = HR_APPLICATIONS_ROUTE + '/holiday-transfer/:id'
export const HOLIDAY_WORK = HR_APPLICATIONS_ROUTE + '/holiday-work/:id'
export const WORK_TRANSFER_CHANGE_RATE = HR_APPLICATIONS_ROUTE + '/work-transfer-change-rate/:id'
export const MEDICAL_EXAMINATION = HR_APPLICATIONS_ROUTE + '/medical-examination'
export const BUFFER_DISMISSAL = HR_APPLICATIONS_ROUTE + '/buffer-dismissal'
// export const BUFFER_EXTRA_HOLIDAY_COLL = HR_APPLICATIONS_ROUTE + '/buffer-extra-holiday-coll'
export const BUFFER_HOLIDAY_PLANNING = HR_APPLICATIONS_ROUTE + '/buffer-holiday-planning'
export const BUFFER_HOLIDAY_TRANSFER = HR_APPLICATIONS_ROUTE + '/buffer-holiday-transfer'
export const BUFFER_HOLIDAY_WORK = HR_APPLICATIONS_ROUTE + '/buffer-holiday-work'
export const BUFFER_MEDICAL_EXAMINATION = HR_APPLICATIONS_ROUTE + '/buffer-medical-examination'
export const BUFFER_WORK_TRANSFER = HR_APPLICATIONS_ROUTE + '/buffer-work-transfer'
// export const BUFFER_HOLIDAY_POSTPONED = HR_APPLICATIONS_ROUTE + '/buffer-holiday-postponed'
export const BUFFER_PARTTIME_EMPLOYMENT = HR_APPLICATIONS_ROUTE + '/buffer-part-time-deployment'
export const BUFFER_HOLIDAY_POSTPONED = HR_APPLICATIONS_ROUTE + '/buffer-holiday-postponed'

export const LIVING_IN_RESIDENTIAL_PREMISES = APPLICATIONS_ROUTE + '/living-in-residential-premises'
export const GUESTS_ACCOMODATION_ON_CAMPUS = APPLICATIONS_ROUTE + '/guests-accomodation-on-campus'
export const GUESTS_PASSAGE_TO_CAMPUS = APPLICATIONS_ROUTE + '/guests-passage-to-campus'
export const RELOCATION = APPLICATIONS_ROUTE + '/relocation'
export const TERMINATION_OF_AGREEMENT = APPLICATIONS_ROUTE + '/termination-of-agreement'

export const ISSUANCE_OF_PASS = APPLICATIONS_ROUTE + '/issuance-of-pass'
export const GUEST_PASS = APPLICATIONS_ROUTE + '/guest-pass'

export const CERTIFICATION_AND_ISSUANCE_OF_DOCS = APPLICATIONS_ROUTE + '/certification-and-issuance-of-docs'

export const DEFERMENT_FROM_CONSCRIPTION = APPLICATIONS_ROUTE + '/deferment-from-conscription'
export const CERTIFIED_COPIES_OF_MILITARY_DOCS = APPLICATIONS_ROUTE + '/certified-copies-of-military-docs'

// export const GENERATE_SCHEDULE = '/generate-schedule'

const ApplicationRedirect = () => PageIsNotReady({ oldVersionUrl: '/sprav' })

export const teachersPrivateRoutes: (params: { allowancesRoles: Role[] }) => IRoutes = ({ allowancesRoles }) => ({
    onboarding: {
        id: 'onboarding',
        title: 'Новому работнику',
        icon: <BiIdCard />,
        path: ONBOARDING,
        Component: Onboarding,
        color: 'orange',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        pageSize: 'big',
    },
    ...generalRoutes,

    // свою основную задачу форма выполнила, а дальше ее скрываем. на случай, если надо будет проводить очередную сверку
    'contact-details': {
        id: 'contact-details',
        title: 'Контактные данные',
        icon: <FiFileText />,
        color: 'blue',
        path: CONTACT_DETAILS,
        Component: isProduction
            ? () =>
                  PageIsNotReady({ errorText: 'Страница еще находится в разработке.', isRedirectButtonVisible: false })
            : ContactDetails,
        isTemplate: false,
        group: 'GENERAL',
        show: !isProduction,
    },
    'contact-details-form': {
        id: 'contact-details-form',
        title: 'Контактные данные',
        hiddenTitle: true,
        icon: <FiFileText />,
        color: 'blue',
        path: CONTACT_DETAILS_FORM,
        Component: isProduction
            ? () =>
                  PageIsNotReady({ errorText: 'Страница еще находится в разработке.', isRedirectButtonVisible: false })
            : ContactDetailsForm,
        isTemplate: false,
        group: 'GENERAL',
        isSubPage: true,
        show: false,
        backButtonText: 'Назад',
        fallbackPrevPage: CONTACT_DETAILS,
    },

    'download-agreements': {
        id: 'download-agreements',
        title: 'Админ панель',
        icon: <FiArrowDownCircle />,
        path: DOWNLOAD_AGREEMENTS_FILES_ROUTE,
        Component: DownloadAdminFilesPage,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',

        isAdmin: true,
    },
    children: {
        id: 'children',
        title: 'Дети и внуки',
        icon: <BsPeople />,
        path: CHILDREN_ROUTE,
        Component: Children,
        color: 'green',
        isTemplate: false,
        group: 'GENERAL',
        hiddenTitle: true,
    },
    'electronic-statements': {
        id: 'electronic-statements',
        title: 'Электронные ведомости',
        icon: <BiIdCard />,
        path: ElECTRONIC_STATEMENTS,
        Component: () => {
            React.useEffect(() => {
                window.location.replace(`${OLD_LK_URL}/stats.php?m=items&act=st_list`)
            }, [])

            return null
        },
        isOldLkPage: true,
        color: 'blue',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
    },
    'project-activity': {
        id: 'project-activity',
        title: 'Проектная деятельность',
        icon: <FaRegLightbulb />,
        path: PROJECT_ACTIVITIES_ROUTE,
        Component: () => {
            React.useEffect(() => {
                window.location.replace(`${OLD_LK_URL}/?p=proj_main`)
            }, [])

            return null
        },
        isOldLkPage: true,
        color: 'orange',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
    },
    payments: {
        id: 'payments',
        title: 'Оплата общежития',
        icon: <BiRuble />,
        path: PAYMENTS_ROUTE,
        Component: PaymentsPage,
        color: 'green',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        keywords: ['оплата'],
    },
    'pps-contest': {
        id: 'pps-contest',
        title: 'Конкурс ППС',
        icon: <BiIdCard />,
        path: PPS_CONTEST_ROUTE,
        Component: () => {
            React.useEffect(() => {
                window.location.replace('https://mospolytech.ru/contest-pps/')
            }, [])

            return null
        },
        isExternalPage: true,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    'kpi-pps': {
        id: 'kpi-pps',
        title: 'Рейтинговая система ППС',
        icon: <FiStar />,
        path: KPI_PPS_ROUTE,
        Component: () => {
            React.useEffect(() => {
                window.location.replace(`${OLD_LK_URL}/?p=${KPI_PPS_ROUTE?.slice(1, KPI_PPS_ROUTE.length)}`)
            }, [])

            return null
        },
        isOldLkPage: true,
        color: 'pink',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
    },
    'kpi-admin': {
        id: 'kpi-admin',
        title: 'Экспертиза рейтинговой системы ППС',
        icon: <FiMonitor />,
        path: KPI_ADMIN_ROUTE,
        Component: () => {
            React.useEffect(() => {
                window.location.replace(`${OLD_LK_URL}/?p=${KPI_ADMIN_ROUTE?.slice(1, KPI_ADMIN_ROUTE.length)}`)
            }, [])

            return null
        },
        isOldLkPage: true,
        color: 'lightBlue',
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
    },
    'sc-news': {
        id: 'sc-news',
        title: 'Анонсы научных мероприятий',
        icon: <RiNotificationBadgeLine />,
        path: SC_NEWS_ROUTE,
        isOldLkPage: true,
        Component: () => PageIsNotReady({ oldVersionUrl: SC_NEWS_ROUTE }),
        color: 'orange',
        isTemplate: false,
        group: 'SCIENCE',
        show: false,
    },
    orders: {
        id: 'orders',
        title: 'Приказы',
        icon: <FiFileText />,
        path: ORDERS_ROUTE,
        isOldLkPage: true,
        Component: () => PageIsNotReady({ oldVersionUrl: ORDERS_ROUTE }),
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        show: false,
    },
    'document-blanks': {
        id: 'document-blanks',
        title: 'Бланки документов',
        icon: <BiGroup />,
        path: DOCUMENT_BLANKS_ROUTE,
        isOldLkPage: true,
        Component: () => PageIsNotReady({ oldVersionUrl: DOCUMENT_BLANKS_ROUTE }),
        color: 'blue',
        isTemplate: false,
        show: false,
        group: 'FINANCES_DOCS',
    },
    doclist: {
        id: 'doclist',
        title: 'Ознакомление с документами',
        icon: <FiFileText />,
        path: DOCLIST_ROUTE,
        Component: PersonalNotificationsPage,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    calendar: {
        id: 'calendar',
        title: 'График отпусков',
        icon: <FiCalendar />,
        path: VACATION_ROUTE,
        Component: VacationSchedule,
        color: 'purple',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    'physical-education': {
        id: 'physical-education',
        title: 'Физическая культура',
        icon: <FiFileText />,
        color: 'lightGreen',
        path: PHYSICAL_EDUCATION,
        pageSize: 'big',
        Component: TeacherPhysicalEducation,
        getIsVisibleForCurrentUser: (peTeacher) => !!peTeacher?.permissions?.length,
        isTemplate: false,
        group: 'LEARNING_ACTIVITIES',
    },
    'physical-education-student': {
        id: 'physical-education-student',
        title: 'Физическая культура',
        icon: <FiFileText />,
        color: 'pink',
        show: false,
        path: PHYSICAL_EDUCATION_STUDENT,
        Component: PhysicalEducationStudent,
        isTemplate: false,
        fallbackPrevPage: PHYSICAL_EDUCATION,
        backButtonText: 'Физическая культура',
        isSubPage: true,
        group: 'LEARNING_ACTIVITIES',
    },
    oop: {
        id: 'oop',
        title: 'Образовательные программы',
        icon: <BiHeadphone />,
        path: OOP_ROUTE,
        isOldLkPage: true,
        Component: () => PageIsNotReady({ oldVersionUrl: OOP_ROUTE }),
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
        show: false,
    },
    centers: {
        id: 'centers',
        title: 'Многофункциональный центр',
        icon: <BiHeadphone />,
        path: CENTERS_ROUTE,
        isOldLkPage: true,
        Component: () => PageIsNotReady({ oldVersionUrl: CENTERS_ROUTE }),
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        show: false,
    },
    info: {
        id: 'info',
        title: 'Полезная информация',
        icon: <FiFileText />,
        path: INFO_ROUTE,
        Component: HelpfulInformation,
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
    },
    applications: {
        id: 'applications',
        title: 'Цифровые сервисы',
        icon: <FiFileText />,
        path: APPLICATIONS_ROUTE,
        Component: TeachersApplicationsPage,
        color: 'red',
        isTemplate: false,
        pageSize: 'big',
        group: 'FINANCES_DOCS',
        keywords: ['заявления', 'справки', 'заявление', 'справка'],
    },
    'hr-applications': {
        id: 'hr-applications',
        title: 'Кадровые заявления',
        icon: <FiFileText />,
        path: HR_APPLICATIONS_ROUTE,
        Component: isProduction
            ? () =>
                  PageIsNotReady({ errorText: 'Страница еще находится в разработке.', isRedirectButtonVisible: false })
            : HrApplicationsPage,
        color: 'green',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    allowances: {
        id: 'allowances',
        title: 'Установление надбавок',
        icon: <FiFileText />,
        path: ALLOWANCES,
        Component: Allowances,
        color: 'orange',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        pageSize: 'big',
        isNew: true,
        show: allowancesRoles.includes('Approver') || allowancesRoles.includes('Initiator'),
    },
    'data-verification': {
        id: 'data-verification',
        title: 'Анкета для сверки данных',
        icon: <FiFileText />,
        color: 'blue',
        path: DATA_VERIFICATION_ROUTE,
        Component: DataVerificationPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        backButtonText: 'Назад к цифровым сервисам',
    },
    'all-staff': {
        id: 'all-staff',
        title: 'Сотрудники',
        icon: <BiBookReader />,
        path: ALL_STAFF_ROUTE,
        Component: AllStaff,
        color: 'orange',
        isTemplate: false,
        group: 'COMMUNICATION',
        keywords: ['преподаватели', 'преподы'],
        pageSize: 'big',
    },
    'publication-activity': {
        id: 'publication-activity',
        title: 'Публикационная активность',
        icon: <FiFileText />,
        path: PUBLICATION_ACTIVITY,
        Component: Science,
        color: 'blue',
        isTemplate: false,
        group: 'SCIENCE',
        isNew: true,
        pageSize: 'large',
        guidsAllowed: [
            '907afd9b-d9c5-11e7-940a-b4b52f5f5349',
            '4e2ee194-82a3-11ec-bba0-f3424449f339',
            'd1c2ab74-f460-11eb-bba0-f3424449f339',
            '0209cb39-9cd3-11e9-9426-b4b52f5f5348',
        ],
    },
    'article-list': {
        id: 'article-list',
        title: 'Список публикаций',
        icon: <FiFileText />,
        path: ARTICLE_LIST,
        Component: ArticleList,
        color: 'blue',
        isTemplate: false,
        group: 'SCIENCE',
        isNew: true,
        pageSize: 'large',
    },
    'open-publication': {
        id: 'open-publication',
        title: 'Открытое публикование',
        icon: <IoNewspaperOutline />,
        path: OPEN_PUBLICATION,
        isExternalPage: true,
        Component: () => {
            React.useEffect(() => {
                window.location.replace('https://e.mospolytech.ru/old/index.php?p=exp_concl')
            }, [])

            return null
        },
        color: 'purple',
        isTemplate: false,
        group: 'SCIENCE',
    },
    'export-control': {
        id: 'export-control',
        title: 'Экспортный контроль',
        icon: <RiPassValidLine />,
        path: EXPORT_CONTROL,
        isExternalPage: true,
        Component: () => {
            React.useEffect(() => {
                window.location.replace('https://e.mospolytech.ru/old/index.php?p=export_control')
            }, [])

            return null
        },
        color: 'orange',
        isTemplate: false,
        group: 'SCIENCE',
    },
    'competence-center': {
        id: 'competence-center',
        title: 'Заявки студентов',
        icon: <RiPassValidLine />,
        path: EXPORT_CONTROL,
        Component: AdminCompetenceCenter,
        color: 'orange',
        isTemplate: false,
        group: 'COMPETENCE_CENTER',
    },
    // 'generate-schedule': {
    //     id: 'generate-schedule',
    //     title: 'Генерация пересдач',
    //     icon: <HiOutlineSparkles />,
    //     path: GENERATE_SCHEDULE,
    //     Component: GenerateSchedule,
    //     color: 'pink',
    //     isTemplate: false,
    //     group: 'OTHER',
    //     isAdmin: true,
    // },
})

export const teachersHiddenRoutes: (params: { allowancesRoles: Role[] }) => IRoutes = ({ allowancesRoles }) => ({
    ...generalHiddenRoutes,
    // remove after mobile version is ready
    // #ASM
    'all-teachers': {
        id: 'all-teachers',
        title: 'Сотрудники',
        icon: <BiBookReader />,
        path: ALL_TEACHERS_ROUTE,
        Component: AllTeachersPage,
        color: 'orange',
        isTemplate: false,
        group: 'COMMUNICATION',
        keywords: ['преподаватели', 'преподы'],
        show: false,
    },
    'doclist-type': {
        id: 'doclist-type',
        title: 'Ознакомление с документами',
        icon: <FiFileText />,
        path: DOCLIST_TYPE,
        Component: PersonalNotificationsPage,
        color: 'blue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    'allowances-role': {
        id: 'allowances-role',
        title: 'Установление надбавок',
        icon: <FiFileText />,
        path: ALLOWANCES_ROLE,
        Component: Allowances,
        color: 'orange',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        pageSize: 'big',
        show: false,
    },
    'allowance-info': {
        id: 'allowance-info',
        title: 'Информация о надбавке',
        icon: <FiFileText />,
        path: ALLOWANCE_INFO,
        Component: AllowanceInfo,
        color: 'orange',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        fallbackPrevPage: ALLOWANCES,
        isSubPage: true,
        show: false,
    },
    'create-allowances': {
        id: 'create-allowances',
        title: 'Служебная записка об установлении ежемесячной надбавки',
        icon: <FiFileText />,
        path: CREATE_ALLOWANCE,
        Component: CreateAllowance,
        color: 'orange',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        fallbackPrevPage: ALLOWANCES,
        hiddenTitle: true,
        isSubPage: true,
        show: !isProduction || allowancesRoles.includes('Initiator'),
        keywords: ['запросить', 'установить', 'надбавку'],
    },
    'pps-vote': {
        id: 'pps-vote',
        title: 'Опрос для проверки уровня цифровой грамотности',
        icon: <BiBookReader />,
        path: PPS_VOTE_ROUTE,
        isOldLkPage: true,
        Component: () => PageIsNotReady({ oldVersionUrl: PPS_VOTE_ROUTE }),
        color: 'blue',
        isTemplate: false,
        group: 'GENERAL',
        show: false,
    },
    'issuance-of-licenses-page': {
        id: 'issuance-of-licenses-page',
        title: 'Выдача лицензий',
        path: ISSUANCE_OF_LICENSES,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : IssuanceOfLicensesPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'buffer-dismissal': {
        id: 'buffer-dismissal',
        title: 'Заявление на увольнение',
        path: BUFFER_DISMISSAL,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : DismissalBufferPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к кадровым заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: HR_APPLICATIONS_ROUTE,
        pageSize: 'large',
    },
    'buffer-holiday-work': {
        id: 'buffer-holiday-work',
        title: 'Заявление о привлечении к работе в выходной день',
        path: BUFFER_HOLIDAY_WORK,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : HolidayWorkBufferPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к кадровым заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: HR_APPLICATIONS_ROUTE,
        pageSize: 'large',
    },
    'buffer-medical-examination': {
        id: 'buffer-medical-examination',
        title: 'Заявление о диспансеризации',
        path: BUFFER_MEDICAL_EXAMINATION,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : MedicalExaminationBufferPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к кадровым заявлениям',
        fallbackPrevPage: HR_APPLICATIONS_ROUTE,
        pageSize: 'large',
    },
    'buffer-holiday-planning': {
        id: 'buffer-holiday-planning',
        title: 'Заявление о предоставлении отпуска',
        path: BUFFER_HOLIDAY_PLANNING,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : HolidayPlanningBufferPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к кадровым заявлениям',
        fallbackPrevPage: HR_APPLICATIONS_ROUTE,
        pageSize: 'large',
        subPageHeaderTitle: 'Заявление на отпуск',
    },
    'buffer-holiday-transfer': {
        id: 'buffer-holiday-transfer',
        title: 'Заявление о переносе отпуска',
        path: BUFFER_HOLIDAY_TRANSFER,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : HolidayTransferBufferPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к кадровым заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: HR_APPLICATIONS_ROUTE,
        pageSize: 'large',
    },
    'buffer-work-transfer': {
        id: 'buffer-work-transfer',
        title: 'Заявление на перевод',
        path: BUFFER_WORK_TRANSFER,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : WorkTransferBufferPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к кадровым заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: HR_APPLICATIONS_ROUTE,
        pageSize: 'large',
    },

    'part-time-employment': {
        id: 'part-time-employment',
        title: 'Заявление на трудоустройство по совместительству',
        path: PARTTIME_EMPLOYMENT,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : PartTimeEmployment,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к кадровым заявлениям',
        subPageHeaderTitle: '',
        fallbackPrevPage: HR_APPLICATIONS_ROUTE,
    },
    'holiday-work': {
        id: 'holiday-work',
        title: 'Заявление о привлечении к работе в выходной день',
        path: HOLIDAY_WORK,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : HolidayWork,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад',
        subPageHeaderTitle: '',
        fallbackPrevPage: BUFFER_HOLIDAY_WORK,
    },
    'medical-examination': {
        id: 'medical-examination',
        title: 'Заявление о диспансеризации',
        path: MEDICAL_EXAMINATION,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : MedicalExamination,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад',
        subPageHeaderTitle: '',
        fallbackPrevPage: BUFFER_MEDICAL_EXAMINATION,
    },
    'holiday-planning': {
        id: 'holiday-planning',
        title: 'Заявление о предоставлении отпуска',
        path: HOLIDAY_PLANNING,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : HolidayPlanning,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад',
        fallbackPrevPage: BUFFER_HOLIDAY_PLANNING,
    },
    'holiday-transfer': {
        id: 'holiday-transfer',
        title: 'Заявление о переносе отпуска',
        path: HOLIDAY_TRANSFER,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : HolidayTransfer,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад',
        fallbackPrevPage: BUFFER_HOLIDAY_TRANSFER,
    },
    'work-transfer': {
        id: 'work-transfer',
        title: 'Заявление на перевод',
        path: WORK_TRANSFER,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : WorkTransfer,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад',
        fallbackPrevPage: BUFFER_WORK_TRANSFER,
    },
    'work-transfer-change-rate': {
        id: 'work-transfer-change-rate',
        title: 'Заявление на изменение ставки',
        path: WORK_TRANSFER_CHANGE_RATE,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : WorkTransferChangeRate,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад',
        fallbackPrevPage: BUFFER_WORK_TRANSFER,
    },
    'extra-holiday-coll': {
        id: 'dismissal',
        title: 'Заявление о предоставлении дополнительного отпуска по коллективному договору',
        path: EXTRA_HOLIDAY_COLL,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : ExtraHolidayColl,
        isTemplate: false,
        group: 'FINANCES_DOCS',
    },
    dismissal: {
        id: 'dismissal',
        title: 'Заявление на увольнение',
        path: DISMISSAL,
        icon: <FiFileText />,
        color: 'blue',
        Component: isProduction ? ApplicationRedirect : Dismissal,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад',
        subPageHeaderTitle: '',
        fallbackPrevPage: BUFFER_DISMISSAL,
    },
    'getting-computer-equipment': {
        id: 'getting-computer-equipment',
        title: 'Получение нового компьютерного оборудования',
        icon: <FiFileText />,
        color: 'blue',
        path: GETTING_COMPUTER_EQUIPMENT,
        Component: GettingComputerEquipmentPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'connecting-computer': {
        id: 'connecting-computer',
        title: 'Подключение компьютера, МФУ, телефона, WiFi',
        icon: <FiFileText />,
        color: 'blue',
        path: CONNECTING_COMPUTER,
        Component: ConnectingComputerPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'printer-maintenance': {
        id: 'printer-maintenance',
        title: 'Обслуживание принтеров, МФУ',
        icon: <FiFileText />,
        color: 'blue',
        path: PRINTER_MAINTENANCE,
        Component: PrinterMaintenancePage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'question-sed': {
        id: 'question-sed',
        title: 'Вопрос по СЭД Directum и 1С',
        icon: <FiFileText />,
        color: 'blue',
        path: QUESTION_SED,
        Component: QuestionSedPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'question-personal-account': {
        id: 'question-personal-account',
        title: 'Вопрос по Личному кабинету',
        icon: <FiFileText />,
        color: 'blue',
        path: QUESTION_PERSONAL_ACCOUNT,
        Component: QuestionPersonalAccountPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'other-it-services': {
        id: 'other-it-services',
        title: 'Прочее ИТ-обслуживание',
        icon: <FiFileText />,
        color: 'blue',
        path: OTHER_IT_SERVICES,
        Component: OtherItServicesPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'certificate-form-place-of-work': {
        id: 'certificate-form-place-of-work',
        title: 'Справка с места работы',
        icon: <FiFileText />,
        color: 'blue',
        path: CERTIFICATE_FROM_PLACE_OF_WORK,
        Component: CertificateFromPlaceOfWorkPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'visa-certificate': {
        id: 'visa-certificate',
        title: 'Справка с места работы для предоставления в визовый центр',
        icon: <FiFileText />,
        color: 'blue',
        path: VISA_CERTIFICATE,
        Component: VisaCertificatePage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'certificate-of-work-experience': {
        id: 'certificate-of-work-experience',
        title: 'Справка о стаже работы',
        icon: <FiFileText />,
        color: 'blue',
        path: CERTIFICATE_OF_WORK_EXPERIENCE,
        Component: isProduction ? ApplicationRedirect : CertificateOfWorkExperiencePage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'number-of-unused-vacation-days': {
        id: 'number-of-unused-vacation-days',
        title: 'Справка о количестве неиспользованных дней отпуска',
        icon: <FiFileText />,
        color: 'blue',
        path: NUMBER_OF_UNUSED_VACATION_DAYS,
        Component: NumberOfUnusedVacationDaysPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'increase-antiplagiat-limits': {
        id: 'increase-antiplagiat-limits',
        title: 'Запрос на увеличение лимита проверок в системе «Антиплагиат»',
        hiddenTitle: true,
        icon: <FiFileText />,
        color: 'blue',
        path: INCREASE_ANTIPLAGIAT_LIMITS,

        Component: isProduction
            ? () => <PageIsNotReady isRedirectButtonVisible={false} errorText={'Сервис находится в разработке'} />
            : IncreaseAntiplagiatLimits,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
        show: !isProduction,
    },
    'edit-phonebook-subdivision': {
        id: 'edit-phonebook-subdivision',
        title: 'Внесение изменений данных подразделения в телефонном справочнике',
        hiddenTitle: true,
        icon: <FiFileText />,
        color: 'blue',
        path: EDIT_PHONEBOOK_SUBDIVISION,
        Component: EditPhonebookSubdivision,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
        keywords: ['изменение данных подразделения в телефонном справочнике'],
    },
    'edit-phonebook-inner-phone': {
        id: 'edit-phonebook-inner-phone',
        hiddenTitle: true,
        title: 'Запрос на изменение внутреннего телефона',
        icon: <FiFileText />,
        color: 'blue',
        path: EDIT_PHONEBOOK_INNER_PHONE,
        Component: EditPhonebookInnerPhone,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'edit-phonebook-email': {
        id: 'edit-phonebook-email',
        hiddenTitle: true,
        title: 'Запрос на изменение корпоративной электронной почты',
        icon: <FiFileText />,
        color: 'blue',
        path: EDIT_PHONEBOOK_EMAIL,
        Component: EditPhonebookEmail,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'copy-of-employment-record': {
        id: 'copy-of-employment-record',
        title: 'Копия трудовой книжки',
        icon: <FiFileText />,
        color: 'blue',
        path: COPY_OF_EMPLOYMENT_RECORD,
        Component: isProduction ? ApplicationRedirect : CopyOfEmploymentRecordPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'copies-of-documents-from-personal-file': {
        id: 'copies-of-documents-from-personal-file',
        title: 'Копии документов из личного дела',
        icon: <FiFileText />,
        color: 'blue',
        path: COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE,
        Component: isProduction ? ApplicationRedirect : CopiesOfDocumentsFromPersonalFilePage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'work-on-terms-of-external-concurrency': {
        id: 'work-on-terms-of-external-concurrency',
        title: 'Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку',
        icon: <FiFileText />,
        color: 'blue',
        path: WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY,
        Component: isProduction ? ApplicationRedirect : WorkOnTermsOfExternalConcurrencyPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'certificate-time-parental-leave': {
        id: 'certificate-time-parental-leave',
        title: 'Справка об отпуске по уходу за ребенком до 1,5 и 3 лет',
        icon: <FiFileText />,
        color: 'blue',
        path: CERTIFICATE_TIME_PARENTAL_LEAVE,
        Component: isProduction ? ApplicationRedirect : CertificateTimeParentalLeavePage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'arbitrary-request': {
        id: 'arbitrary-request',
        title: 'Произвольный запрос',
        icon: <FiFileText />,
        color: 'blue',
        path: ARBITRARY_REQUEST,
        Component: isProduction ? ApplicationRedirect : ArbitraryRequestPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    courier: {
        id: 'courier',
        title: 'Курьер',
        icon: <FiFileText />,
        color: 'blue',
        path: COURIER,
        Component: isProduction ? ApplicationRedirect : CourierPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },

    'personal-income-tax-reference': {
        id: 'personal-income-tax-reference',
        title: 'Справка по форме 2-НДФЛ',
        icon: <FiFileText />,
        color: 'blue',
        path: PERSONA_INCOME_TAX_REFERENCE,
        Component: isProduction ? ApplicationRedirect : PersonaIncomeTaxReferencePage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'payment-of-child-birth-allowance': {
        id: 'payment-of-child-birth-allowance',
        title: 'Справка о выплате (не выплате) единовременного пособия на рождение ребенка',
        icon: <FiFileText />,
        color: 'blue',
        path: PAYMENT_OF_CHILD_BIRTH_ALLOWANCE,
        Component: isProduction ? ApplicationRedirect : PaymentOfChildBirthAllowancePage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'payment-for-child-care': {
        id: 'payment-for-child-care',
        title: 'Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)',
        icon: <FiFileText />,
        color: 'blue',
        path: PAYMENT_FOR_CHILD_CARE,
        Component: isProduction ? ApplicationRedirect : PaymentForChildCarePage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'contact-info-actualization': {
        id: 'contact-info-actualization',
        title: 'Актуализация контактных данных',
        icon: <FiFileText />,
        color: 'blue',
        path: CONTACT_INFO_ACTUALIZATION,
        Component: ContactInfoActualizationPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        show: false,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'data-verification': {
        id: 'data-verification',
        title: 'Анкета для сверки данных',
        icon: <FiFileText />,
        color: 'blue',
        path: DATA_VERIFICATION_ROUTE,
        Component: DataVerificationPage,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },

    'living-in-residential-premises': {
        id: 'living-in-residential-premises',
        title: 'Предоставление права проживания в жилом помещении',
        icon: <FiFileText />,
        color: 'blue',
        path: LIVING_IN_RESIDENTIAL_PREMISES,
        Component: isProduction ? ApplicationRedirect : LivingInResidentialPremises,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'guests-accomodation-on-campus': {
        id: 'guests-accomodation-on-campus',
        title: 'Временное размещение гостей в студгородке',
        icon: <FiFileText />,
        color: 'blue',
        path: GUESTS_ACCOMODATION_ON_CAMPUS,
        Component: isProduction ? ApplicationRedirect : GuestsAccomodationOnCampus,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'guests-passage-to-campus': {
        id: 'guests-passage-to-campus',
        title: 'Проход гостей на территорию студенческого городка',
        icon: <FiFileText />,
        color: 'blue',
        path: GUESTS_PASSAGE_TO_CAMPUS,
        Component: isProduction ? ApplicationRedirect : GuestsPassageToCampus,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    relocation: {
        id: 'relocation',
        title: 'Переселение',
        icon: <FiFileText />,
        color: 'blue',
        path: RELOCATION,
        Component: isProduction ? ApplicationRedirect : Relocation,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'termination-of-agreement': {
        id: 'termination-of-agreement',
        title: 'Расторжение договора найма жилого помещения',
        icon: <FiFileText />,
        color: 'blue',
        path: TERMINATION_OF_AGREEMENT,
        Component: isProduction ? ApplicationRedirect : TerminationOfAgreement,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },

    'issuance-of-pass': {
        id: 'issuance-of-pass',
        title: 'Выдача пропуска (повторная)',
        icon: <FiFileText />,
        color: 'blue',
        path: ISSUANCE_OF_PASS,
        Component: isProduction ? ApplicationRedirect : IssuanceOfPass,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'guest-pass': {
        id: 'guest-pass',
        title: 'Заказ гостевого пропуска',
        icon: <FiFileText />,
        color: 'blue',
        path: GUEST_PASS,
        Component: isProduction ? ApplicationRedirect : GuestPass,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },

    'certification-and-issuance-of-docs': {
        id: 'certification-and-issuance-of-docs',
        title: 'Заверение и выдача копий внутренних документов',
        icon: <FiFileText />,
        color: 'blue',
        path: CERTIFICATION_AND_ISSUANCE_OF_DOCS,
        Component: isProduction ? ApplicationRedirect : CertificationAndIssuanceOfDocs,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },

    'deferment-from-conscription': {
        id: 'deferment-from-conscription',
        title: 'Заполнить личную карточку по воинскому учету для получения отсрочки от призыва на военную службу',
        icon: <FiFileText />,
        color: 'blue',
        path: DEFERMENT_FROM_CONSCRIPTION,
        Component: isProduction ? ApplicationRedirect : DefermentFromConscription,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },
    'certified-copies-of-military-docs': {
        id: 'certified-copies-of-military-docs',
        title: 'Заверенные копии документов по воинскому учету из личного дела',
        icon: <FiFileText />,
        color: 'blue',
        path: CERTIFIED_COPIES_OF_MILITARY_DOCS,
        Component: isProduction ? ApplicationRedirect : CertifiedCopiesOfMilitaryDocs,
        isTemplate: false,
        group: 'FINANCES_DOCS',
        isSubPage: true,
        backButtonText: 'Назад к цифровым сервисам',
        subPageHeaderTitle: '',
        fallbackPrevPage: APPLICATIONS_ROUTE,
    },

    'social-environment': {
        id: 'Социальная среда',
        title: 'Социальная среда',
        color: 'pink',
        Component: () => {
            window.location.href = 'https://profkommospolytech.ru/'

            return <Redirect to={ONBOARDING} />
        },
        icon: <BiGroup />,
        isTemplate: false,
        path: SOICAL_ENVIROMENT,
        backButtonText: 'Новому работнику',
        isSubPage: true,
        fallbackPrevPage: ONBOARDING,
        isExternalPage: true,
    },
    'psychological-help': {
        id: 'Психологическая помощь',
        title: 'Психологическая помощь',
        color: 'green',
        Component: () => {
            window.location.href =
                'https://mospolytech.ru/studencheskaya-zhizn/medical-help/slujba-psihologicheskoy-pomoschi/'

            return <Redirect to={ONBOARDING} />
        },
        icon: <MdPsychology />,
        isTemplate: false,
        path: PSYCHOLOGICAL_HELP,
        backButtonText: 'Новому работнику',
        isSubPage: true,
        fallbackPrevPage: ONBOARDING,
        isExternalPage: true,
    },
    'health-care': {
        id: 'Медицинская помощь',
        title: 'Медицинская помощь',
        color: 'red',
        Component: () => {
            window.location.href = 'https://mospolytech.ru/studencheskaya-zhizn/medical-help/medicinskaya-slujba/'

            return <Redirect to={ONBOARDING} />
        },
        icon: <BiPlusMedical />,
        isTemplate: false,
        path: HEALTH_CARE,
        backButtonText: 'Новому работнику',
        isSubPage: true,
        fallbackPrevPage: ONBOARDING,
        isExternalPage: true,
    },
    'wifi-at-the-university': {
        id: 'WI-FI  в университете',
        title: 'WI-FI  в университете',
        color: 'purple',
        Component: () => {
            window.location.href =
                'https://e.mospolytech.ru/old/storage/files/Instruktsiya_dostupa_k_internetu_v_auditoriyah.pdf'

            return <Redirect to={ONBOARDING} />
        },
        icon: <BiWifi />,
        isTemplate: false,
        path: WIFI_AT_THE_UNIVERSITY,
        backButtonText: 'Новому работнику',
        isSubPage: true,
        fallbackPrevPage: ONBOARDING,
        isExternalPage: true,
    },
    brandbook: {
        id: 'Брендбук',
        title: 'Брендбук',
        color: 'orange',
        Component: () => {
            window.location.href = 'https://mospolytech.ru/ob-universitete/brandbook/'

            return <Redirect to={ONBOARDING} />
        },
        icon: <BiBookOpen />,
        isTemplate: false,
        path: BRANDBOOK,
        backButtonText: 'Новому работнику',
        isSubPage: true,
        fallbackPrevPage: ONBOARDING,
        isExternalPage: true,
    },
    'addresses-and-contacts': {
        id: 'addresses-and-contacts',
        title: 'Адреса и контакты',
        icon: <BiBuildings />,
        path: ADDRESSES_AND_CONTACTS,
        Component: () => {
            window.location.href = 'https://mospolytech.ru/ob-universitete/adresa-i-kontakty/'

            return <Redirect to={ONBOARDING} />
        },
        color: 'darkBlue',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        backButtonText: 'Новому работнику',
        isSubPage: true,
        fallbackPrevPage: ONBOARDING,
        isExternalPage: true,
    },
    'structure-of-the-university': {
        id: 'structure-of-the-university',
        title: 'Структура университета',
        icon: <MdGroups />,
        path: STRUCTURE_OF_THE_UNIVERSITY,
        Component: () => {
            window.location.href =
                'https://mospolytech.ru/ob-universitete/rukovodstvo-i-struktura/strukturnye-podrazdeleniya/'

            return <Redirect to={ONBOARDING} />
        },
        color: 'lightGreen',
        isTemplate: false,
        group: 'FINANCES_DOCS',
        backButtonText: 'Новому работнику',
        isSubPage: true,
        fallbackPrevPage: ONBOARDING,
        isExternalPage: true,
    },
    article: {
        id: 'article',
        title: '',
        icon: <FiFileText />,
        path: ARTICLE,
        Component: Article,
        color: 'blue',
        isTemplate: false,
        group: 'SCIENCE',
        pageSize: 'large',
        show: false,
        isSubPage: true,
        fallbackPrevPage: ARTICLE_LIST,
        backButtonText: 'Список публикаций',
    },
})
