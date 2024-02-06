import reactLazyWithRetry from '@fatso83/retry-dynamic-import/react-lazy'

export const CertificateFromPlaceOfWorkPage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/certificate-from-the-place-of-work'),
)
export const CopiesOfDocumentsFromPersonalFilePage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/copies-of-documents-from-the-personal-file'),
)
export const ContactInfoActualizationPage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/contact-info-actualization'),
)
export const DataVerificationPage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/data-verification'),
)
export const DownloadAdminFilesPage = reactLazyWithRetry(() => import('@pages/download-admin-files'))
export const PersonalNotificationsPage = reactLazyWithRetry(() => import('@pages/personal-notifications'))
export const TeachersApplicationsPage = reactLazyWithRetry(() => import('@pages/teachers-applications'))
export const ArbitraryRequestPage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/arbitrary-request'),
)
export const CertificateOfWorkExperiencePage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/certificate-of-work-experience'),
)
export const CertificateTimeParentalLeavePage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/certificate-time-parental-leave'),
)
export const ConnectingComputerPage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/connecting-computer'),
)
export const CopyOfEmploymentRecordPage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/copy-of-the-employment-record'),
)
export const CourierPage = reactLazyWithRetry(() => import('@pages/teachers-applications/pages/courier'))
export const TeacherPhysicalEducation = reactLazyWithRetry(() => import('@pages/teacher-physical-education'))
export const PhysicalEducationStudent = reactLazyWithRetry(() => import('@pages/pe-student'))
export const GettingComputerEquipmentPage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/getting-computer-equipment'),
)
export const IssuanceOfLicensesPage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/issuance-of-licenses'),
)
export const NumberOfUnusedVacationDaysPage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/number-of-unused-vacation-days'),
)
export const OtherItServicesPage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/other-it-services'),
)
export const PaymentForChildCarePage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/payment-for-child-care'),
)
export const PaymentOfChildBirthAllowancePage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/payment-of-child-birth-allowance'),
)
export const PersonaIncomeTaxReferencePage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/persona-income-tax-reference'),
)
export const PrinterMaintenancePage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/printer-maintenance'),
)
export const QuestionPersonalAccountPage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/question-personal-account'),
)
export const QuestionSedPage = reactLazyWithRetry(() => import('@pages/teachers-applications/pages/question-sed'))
export const VisaCertificatePage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/visa-certificate'),
)
export const WorkOnTermsOfExternalConcurrencyPage = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/work-on-the-terms-of-external-concurrency'),
)

export const LivingInResidentialPremises = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/campus-office/living-in-residential-premises'),
)
export const GuestsAccomodationOnCampus = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/campus-office/guests-accomodation-on-campus'),
)
export const GuestsPassageToCampus = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/campus-office/guests-passage-to-campus'),
)
export const Relocation = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/campus-office/relocation'),
)
export const TerminationOfAgreement = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/campus-office/termination-of-agreement'),
)

export const IssuanceOfPass = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/pass-office/issuance-of-pass'),
)
export const GuestPass = reactLazyWithRetry(() => import('@pages/teachers-applications/pages/pass-office/guest-pass'))

export const CertificationAndIssuanceOfDocs = reactLazyWithRetry(
    () =>
        import(
            '@pages/teachers-applications/pages/control-and-records-management-office/certification-and-issuance-of-docs'
        ),
)

export const DefermentFromConscription = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/mobilization-department/deferment-from-conscription'),
)
export const CertifiedCopiesOfMilitaryDocs = reactLazyWithRetry(
    () => import('@pages/teachers-applications/pages/mobilization-department/certified-copies-of-military-docs'),
)

export const VacationSchedule = reactLazyWithRetry(() => import('@pages/vacation-schedule'))

export const AllTeachersPage = reactLazyWithRetry(() => import('@pages/all-teachers'))
export const HelpfulInformation = reactLazyWithRetry(() => import('@pages/helpful-information'))
export const HrApplicationsPage = reactLazyWithRetry(() => import('@pages/hr-applications'))
export const PartTimeEmployment = reactLazyWithRetry(() => import('@pages/hr-applications/pages/part-time-employment'))
export const Dismissal = reactLazyWithRetry(() => import('@pages/hr-applications/pages/dismissal'))
export const ExtraHolidayColl = reactLazyWithRetry(() => import('@pages/hr-applications/pages/extra-holiday-coll'))
export const HolidayWork = reactLazyWithRetry(() => import('@pages/hr-applications/pages/holiday-work'))
export const MedicalExamination = reactLazyWithRetry(() => import('@pages/hr-applications/pages/medical-examination'))
export const HolidayPlanning = reactLazyWithRetry(() => import('@pages/hr-applications/pages/holiday-planning'))
export const HolidayTransfer = reactLazyWithRetry(() => import('@pages/hr-applications/pages/holiday-transfer'))
export const WorkTransfer = reactLazyWithRetry(() => import('@pages/hr-applications/pages/work-transfer'))
export const WorkTransferChangeRate = reactLazyWithRetry(
    () => import('@pages/hr-applications/pages/work-transfer-change-rate'),
)
export const DismissalBufferPage = reactLazyWithRetry(() => import('@pages/hr-applications/pages/buffer-dismissal'))
export const Onboarding = reactLazyWithRetry(() => import('@pages/onboarding'))
