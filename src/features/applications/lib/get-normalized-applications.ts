import { Application, ApplicationFilterType } from '@shared/api/model'
import transformStatusApplication from './transform-status-application'

/**
 * Функция для нормализации данных о заявлениях с бэка
 * @param {Application[] | null} applicationsList список заявлений / справок / запросов
 * @returns {ApplicationFilterType[] | null} возвращает нормализованный список заявлений для передачи в таблицу
 */
export const getNormalizedApplications = (applicationsList: Application[] | null): ApplicationFilterType[] | null => {
    if (!applicationsList) {
        return null
    }

    return applicationsList.map((applicationInfo: Application) => {
        return { ...applicationInfo, status: transformStatusApplication(applicationInfo.status) }
    })
}
