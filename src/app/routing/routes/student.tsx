import React from 'react'

import AllTeachersPage from '@pages/all-teachers'
import FullTimePartTimeFormPage from '@pages/applications/pages/campus-management/full-time-part-time-form'
import ApplicationExitAcademicLeave from '@pages/applications/pages/multifunctional-center/exit-academic-leave'
import MedicalCertificate from '@pages/medical-certificate'
import PageIsNotReady from '@pages/page-is-not-ready'
import PaymentsPage from '@pages/payments'

import { User } from '@shared/api/model'
import { isProduction } from '@shared/consts'
import { PageComponent, PageRoute } from '@shared/routing'

import {
    AcadPerformance,
    AcademicLeaveAccommodationPage,
    AccommodationCorrespondenceFormPage,
    AccommodationForGraduatesPage,
    ApplicationExtensionAttestation,
    ApplicationForCertificateOfAttendance,
    ApplicationForFinancialAssistance,
    ApplicationForSocialScrollarship,
    ApplicationForSuperiorRoom,
    ApplicationHolidaysAfterTraining,
    ApplicationIndependentlyDeduction,
    ApplicationPaperCall,
    ApplicationProvisionAcademicLeave,
    ApplicationSocialAgencies,
    ApplicationsPage,
    ArbitraryRequestPage,
    ChangingPersonalData,
    ClarificationOfPassportDataApplication,
    DormitoryPage,
    FamilyRoomPage,
    FinancialSupport,
    HelpfulInformation,
    IncreasedStateAcademicScholarship,
    MedicalCertificates086,
    MilitaryCopies,
    MilitaryForm4,
    MilitaryForm5,
    MilitaryRegistration,
    MilitaryRegistrationDocuments,
    ParentContacts,
    PaymentRecipient,
    PhysicalEducationStudent,
    PreferentialAccommodationPage,
    ProjectActivitiesPage,
    RegularAccommodationPage,
    RelocationInsideHostelPage,
    RelocationToAnotherHostelPage,
    RestoringTheMagneticPass,
    RetakeForDiploma,
    StateAccreditation,
    StudentEmploymentPage,
    StudentStatus,
    TerminationOfEmploymentContractPage,
} from './pages'
import { generalHiddenRoutes, generalRoutes } from './private'

const ApplicationRedirect = () => PageIsNotReady({ oldVersionUrl: '' })

export const privateRoutes: () => Record<string, PageComponent> = () => ({
    // On this position just to make necessary order
    applications: ApplicationsPage,
    ...generalRoutes,
    payments: PaymentsPage,
    dormitory: DormitoryPage,
    softskills: () => {
        React.useEffect(() => {
            window.location.replace('https://softskills.rsv.ru/')
        }, [])

        return null
    },
    'acad-performance': AcadPerformance,
    'physical-education': PhysicalEducationStudent,
    'project-activity': ProjectActivitiesPage,

    'helpful-information': HelpfulInformation,
    'application-for-superior-room': ApplicationForSuperiorRoom,
    'all-teachers': AllTeachersPage,
})

export const hiddenRoutes: (user: User | null) => PageRoute = (user) => ({
    ...generalHiddenRoutes,
    'clarification-of-passport-data': ClarificationOfPassportDataApplication,
    'arbitrary-request': ArbitraryRequestPage,
    'student-employment': isProduction ? ApplicationRedirect : StudentEmploymentPage,
    'social-scollarship': isProduction ? ApplicationRedirect : ApplicationForSocialScrollarship,
    'certificate-of-attendance': ApplicationForCertificateOfAttendance,
    'social-agencies': ApplicationSocialAgencies,
    'paper-call': ApplicationPaperCall,
    'medical-certificate': MedicalCertificate,
    'regular-accommodation': RegularAccommodationPage,
    'full-time-part-time-form': FullTimePartTimeFormPage,
    'accommodation-correspondence-form': AccommodationCorrespondenceFormPage,
    'academic-leave-accommodation': AcademicLeaveAccommodationPage,
    'preferential-accommodation': PreferentialAccommodationPage,
    'family-room': FamilyRoomPage,
    'termination-of-employment-contract': TerminationOfEmploymentContractPage,
    'relocation-inside-hostel': RelocationInsideHostelPage,
    'relocation-to-another-hostel': RelocationToAnotherHostelPage,
    'accommodation-for-graduates':
        ['4', '5', '6'].includes(user?.course ?? '') ||
        user?.status?.toLocaleLowerCase()?.includes('окончил') ||
        (user?.degreeLevel?.toLocaleLowerCase() === 'магистратура' && user?.course === '2')
            ? AccommodationForGraduatesPage
            : () => (
                  <PageIsNotReady
                      isRedirectButtonVisible={false}
                      errorText={'Сервис доступен только выпускникам университета, проживающих в общежитии'}
                  />
              ),
    'payment-recipient': PaymentRecipient,
    'restoring-the-magnetic-pass': RestoringTheMagneticPass,
    'military-registration-documents': MilitaryRegistrationDocuments,
    'military-registration': MilitaryRegistration,
    'military-form-4': MilitaryForm4,
    'military-form-5': MilitaryForm5,
    'military-copies': MilitaryCopies,
    'retake-for-diploma': RetakeForDiploma,
    'increased-state-academic-scholarship': IncreasedStateAcademicScholarship,
    'financial-support': isProduction ? ApplicationRedirect : FinancialSupport,
    'financial-assistance': isProduction ? ApplicationRedirect : ApplicationForFinancialAssistance,
    'changing-personal-data': ChangingPersonalData,
    'student-status': StudentStatus,
    'family-contacts': ParentContacts,
    'medical-certificates-086': MedicalCertificates086,
    'state-accreditation': StateAccreditation,
    'holidays-after-training': ApplicationHolidaysAfterTraining,
    'provision-academic-leave': ApplicationProvisionAcademicLeave,
    'exit-academic-leave': ApplicationExitAcademicLeave,
    'independently-deducted': ApplicationIndependentlyDeduction,
    'extension-attestation': ApplicationExtensionAttestation,
})
