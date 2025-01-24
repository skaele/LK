import { OnboardingTopic } from '../types/onboarding'
import { Documents } from '../ui/documents'
import { HRDocumentFlow } from '../ui/hr-document-flow'
import { Nutrition } from '../ui/nutrition'
import { PassRegistration } from '../ui/pass-registration'
import { SalaryPayment } from '../ui/salary-payment'
import { WorkplaceOrganization } from '../ui/workplace-organization'

export const topics: OnboardingTopic = [
    {
        title: 'Оформление пропуска',
        content: PassRegistration,
    },
    {
        title: 'Организация рабочего места',
        content: WorkplaceOrganization,
    },
    {
        title: 'Питание',
        content: Nutrition,
    },
    {
        title: 'Выплата заработной платы',
        content: SalaryPayment,
    },
    {
        title: 'Кадровый документооборот',
        content: HRDocumentFlow,
    },
    {
        title: 'Документы',
        content: Documents,
    },
]
