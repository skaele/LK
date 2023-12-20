import { lazy } from 'react'

export const CertificateFromPlaceOfWorkPage = lazy(
    () => import('@pages/teachers-applications/pages/certificate-from-the-place-of-work'),
)
export const CopiesOfDocumentsFromPersonalFilePage = lazy(
    () => import('@pages/teachers-applications/pages/copies-of-documents-from-the-personal-file'),
)
export const ContactInfoActualizationPage = lazy(
    () => import('@pages/teachers-applications/pages/contact-info-actualization'),
)
export const PhonebookPage = lazy(() => import('@pages/teachers-applications/pages/phonebook'))
export const DataVerificationPage = lazy(() => import('@pages/teachers-applications/pages/data-verification'))
export const DownloadAdminFilesPage = lazy(() => import('@pages/download-admin-files'))
export const PersonalNotificationsPage = lazy(() => import('@pages/personal-notifications'))
export const TeachersApplicationsPage = lazy(() => import('@pages/teachers-applications'))
export const ArbitraryRequestPage = lazy(() => import('@pages/teachers-applications/pages/arbitrary-request'))
export const CertificateOfWorkExperiencePage = lazy(
    () => import('@pages/teachers-applications/pages/certificate-of-work-experience'),
)
export const CertificateTimeParentalLeavePage = lazy(
    () => import('@pages/teachers-applications/pages/certificate-time-parental-leave'),
)
export const ConnectingComputerPage = lazy(() => import('@pages/teachers-applications/pages/connecting-computer'))
export const CopyOfEmploymentRecordPage = lazy(
    () => import('@pages/teachers-applications/pages/copy-of-the-employment-record'),
)
export const CourierPage = lazy(() => import('@pages/teachers-applications/pages/courier'))
export const TeacherPhysicalEducation = lazy(() => import('@pages/teacher-physical-education'))
export const PhysicalEducationStudent = lazy(() => import('@pages/pe-student'))
export const GettingComputerEquipmentPage = lazy(
    () => import('@pages/teachers-applications/pages/getting-computer-equipment'),
)
export const IssuanceOfLicensesPage = lazy(() => import('@pages/teachers-applications/pages/issuance-of-licenses'))
export const NumberOfUnusedVacationDaysPage = lazy(
    () => import('@pages/teachers-applications/pages/number-of-unused-vacation-days'),
)
export const OtherItServicesPage = lazy(() => import('@pages/teachers-applications/pages/other-it-services'))
export const PaymentForChildCarePage = lazy(() => import('@pages/teachers-applications/pages/payment-for-child-care'))
export const PaymentOfChildBirthAllowancePage = lazy(
    () => import('@pages/teachers-applications/pages/payment-of-child-birth-allowance'),
)
export const PersonaIncomeTaxReferencePage = lazy(
    () => import('@pages/teachers-applications/pages/persona-income-tax-reference'),
)
export const PrinterMaintenancePage = lazy(() => import('@pages/teachers-applications/pages/printer-maintenance'))
export const QuestionPersonalAccountPage = lazy(
    () => import('@pages/teachers-applications/pages/question-personal-account'),
)
export const QuestionSedPage = lazy(() => import('@pages/teachers-applications/pages/question-sed'))
export const VisaCertificatePage = lazy(() => import('@pages/teachers-applications/pages/visa-certificate'))
export const WorkOnTermsOfExternalConcurrencyPage = lazy(
    () => import('@pages/teachers-applications/pages/work-on-the-terms-of-external-concurrency'),
)

export const LivingInResidentialPremises = lazy(
    () => import('@pages/teachers-applications/pages/campus-office/living-in-residential-premises'),
)
export const GuestsAccomodationOnCampus = lazy(
    () => import('@pages/teachers-applications/pages/campus-office/guests-accomodation-on-campus'),
)
export const GuestsPassageToCampus = lazy(
    () => import('@pages/teachers-applications/pages/campus-office/guests-passage-to-campus'),
)
export const Relocation = lazy(() => import('@pages/teachers-applications/pages/campus-office/relocation'))
export const TerminationOfAgreement = lazy(
    () => import('@pages/teachers-applications/pages/campus-office/termination-of-agreement'),
)

export const IssuanceOfPass = lazy(() => import('@pages/teachers-applications/pages/pass-office/issuance-of-pass'))
export const GuestPass = lazy(() => import('@pages/teachers-applications/pages/pass-office/guest-pass'))

export const CertificationAndIssuanceOfDocs = lazy(
    () =>
        import(
            '@pages/teachers-applications/pages/control-and-records-management-office/certification-and-issuance-of-docs'
        ),
)

export const DefermentFromConscription = lazy(
    () => import('@pages/teachers-applications/pages/mobilization-department/deferment-from-conscription'),
)
export const CertifiedCopiesOfMilitaryDocs = lazy(
    () => import('@pages/teachers-applications/pages/mobilization-department/certified-copies-of-military-docs'),
)

export const VacationSchedule = lazy(() => import('@pages/vacation-schedule'))

export const AllTeachersPage = lazy(() => import('@pages/all-teachers'))
export const HelpfulInformation = lazy(() => import('@pages/helpful-information'))
export const HrApplicationsPage = lazy(() => import('@pages/hr-applications'))
export const PartTimeEmployment = lazy(() => import('@pages/hr-applications/pages/part-time-employment'))
export const Dismissal = lazy(() => import('@pages/hr-applications/pages/dismissal'))
export const ExtraHolidayColl = lazy(() => import('@pages/hr-applications/pages/extra-holiday-coll'))
export const HolidayWork = lazy(() => import('@pages/hr-applications/pages/holiday-work'))
export const MedicalExamination = lazy(() => import('@pages/hr-applications/pages/medical-examination'))
export const HolidayPlanning = lazy(() => import('@pages/hr-applications/pages/holiday-planning'))
export const HolidayTransfer = lazy(() => import('@pages/hr-applications/pages/holiday-transfer'))
export const WorkTransfer = lazy(() => import('@pages/hr-applications/pages/work-transfer'))
export const WorkTransferChangeRate = lazy(() => import('@pages/hr-applications/pages/work-transfer-change-rate'))
export const DismissalBufferPage = lazy(() => import('@pages/hr-applications/pages/buffer-dismissal'))
export const Onboarding = lazy(() => import('@pages/onboarding'))
