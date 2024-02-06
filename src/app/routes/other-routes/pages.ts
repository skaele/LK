import reactLazyWithRetry from '@fatso83/retry-dynamic-import/react-lazy'

export const ApplicationForSuperiorRoom = reactLazyWithRetry(() => import('@pages/application-for-superior-room'))
export const AcadPerformance = reactLazyWithRetry(() => import('@pages/acad-performance'))
export const DormitoryPage = reactLazyWithRetry(() => import('@pages/dormitory'))
export const ClarificationOfPassportDataApplication = reactLazyWithRetry(
    () => import('@pages/applications/pages/multifunctional-center/clarification-of-passport-data'),
)
export const ApplicationForSocialScrollarship = reactLazyWithRetry(
    () => import('@pages/applications/pages/trade-union-organization/social-scollarship'),
)
export const PhysicalEducationStudent = reactLazyWithRetry(() => import('@pages/pe-student'))

export const ApplicationForCertificateOfAttendance = reactLazyWithRetry(
    () => import('@pages/applications/pages/multifunctional-center/certificate-of-attendance'),
)

export const ApplicationSocialAgencies = reactLazyWithRetry(
    () => import('@pages/applications/pages/multifunctional-center/social-agencies'),
)

export const ApplicationPaperCall = reactLazyWithRetry(
    () => import('@pages/applications/pages/multifunctional-center/paper-call'),
)

export const RegularAccommodationPage = reactLazyWithRetry(
    () => import('@pages/applications/pages/campus-management/regular-accommodation'),
)

export const ApplicationsPage = reactLazyWithRetry(() => import('@pages/applications'))

export const ProjectActivitiesPage = reactLazyWithRetry(() => import('@pages/project-activities'))

export const AcademicLeaveAccommodationPage = reactLazyWithRetry(
    () => import('@pages/applications/pages/campus-management/academic-leave-accommodation'),
)

export const PreferentialAccommodationPage = reactLazyWithRetry(
    () => import('@pages/applications/pages/campus-management/preferential-accommodation'),
)

export const TerminationOfEmploymentContractPage = reactLazyWithRetry(
    () => import('@pages/applications/pages/campus-management/termination-of-employment-contract'),
)

export const RelocationInsideHostelPage = reactLazyWithRetry(
    () => import('@pages/applications/pages/campus-management/relocation-inside-hostel'),
)

export const AccommodationForGraduatesPage = reactLazyWithRetry(
    () => import('@pages/applications/pages/campus-management/accommodation-for-graduates'),
)

export const RelocationToAnotherHostelPage = reactLazyWithRetry(
    () => import('@pages/applications/pages/campus-management/relocation-to-another-hostel'),
)

export const PaymentRecipient = reactLazyWithRetry(
    () => import('@pages/applications/pages/department-of-paid-services/paymnet-recipient'),
)

export const RestoringTheMagneticPass = reactLazyWithRetry(
    () => import('@pages/applications/pages/multifunctional-center/restoring-the-magnetic-pass'),
)

export const IncreasedStateAcademicScholarship = reactLazyWithRetry(
    () => import('@pages/applications/pages/trade-union-organization/increased-state-academic-scholarship'),
)

export const RetakeForDiploma = reactLazyWithRetry(
    () => import('@pages/applications/pages/multifunctional-center/retake-for-diploma'),
)

export const MilitaryRegistrationDocuments = reactLazyWithRetry(
    () => import('@pages/applications/pages/mobilization-department/military-registration-documents'),
)

export const MilitaryRegistration = reactLazyWithRetry(
    () => import('@pages/applications/pages/mobilization-department/military-registration'),
)

export const FinancialSupport = reactLazyWithRetry(
    () => import('@pages/applications/pages/trade-union-organization/financial-support'),
)

export const ApplicationForFinancialAssistance = reactLazyWithRetry(
    () => import('@pages/applications/pages/trade-union-organization/financial-assistance'),
)

export const ChangingPersonalData = reactLazyWithRetry(
    () => import('@pages/applications/pages/multifunctional-center/changing-personal-data'),
)

export const StudentStatus = reactLazyWithRetry(
    () => import('@pages/applications/pages/multifunctional-center/student-status'),
)

export const StateAccreditation = reactLazyWithRetry(
    () => import('@pages/applications/pages/multifunctional-center/state-accreditation'),
)

export const ApplicationHolidaysAfterTraining = reactLazyWithRetry(
    () => import('@pages/applications/pages/multifunctional-center/holidays-after-training'),
)

export const ApplicationProvisionAcademicLeave = reactLazyWithRetry(
    () => import('@pages/applications/pages/multifunctional-center/provision-academic-leave'),
)

export const ExitAcademicLeave = reactLazyWithRetry(
    () => import('@pages/applications/pages/multifunctional-center/exit-academic-leave'),
)

export const ApplicationIndependentlyDeduction = reactLazyWithRetry(
    () => import('@pages/applications/pages/multifunctional-center/independently-deducted'),
)

export const ApplicationExtensionAttestation = reactLazyWithRetry(
    () => import('@pages/applications/pages/multifunctional-center/extension-attestation'),
)

export const MilitaryRegistrationCard = reactLazyWithRetry(
    () => import('@pages/applications/pages/mobilization-department/military-registration-card'),
)

export const AccommodationCorrespondenceFormPage = reactLazyWithRetry(
    () => import('@pages/applications/pages/campus-management/accommodation-correspondence-form'),
)

export const FamilyRoomPage = reactLazyWithRetry(
    () => import('@pages/applications/pages/campus-management/family-room'),
)

export const ArbitraryRequestPage = reactLazyWithRetry(
    () => import('@pages/applications/pages/other/arbitrary-request'),
)
export const StudentEmploymentPage = reactLazyWithRetry(
    () => import('@pages/applications/pages/other/student-employment'),
)
