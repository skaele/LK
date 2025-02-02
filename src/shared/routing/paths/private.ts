export const APPLICATIONS_ROUTE = '/applications'

export const DOCLIST_ROUTE = '/doclist'
export const DOCLIST_TYPE = '/doclist/:type'

export const TECHNICAL_MAINTENANCE = APPLICATIONS_ROUTE + '/technical-maintenance'

export const MEDICAL_CERTIFICATE = '/medical-certificate'
export const VACCINATION = '/vaccination'

export const ALL_ROUTE = '/all'
export const HOME_ROUTE = '/home'
export const PROFILE_ROUTE = '/profile'
export const CHAT_ROUTE = '/chat'
export const OLD_CHAT_ROUTE = '/messages'
export const TEMPLATE_CHAT_ROUTE = CHAT_ROUTE + '/:chatId'
export const ELECTRONIC_INTERACTION_AGREEMENT_ROUTE = '/electronic-interaction-agreement'
export const PAYMENTS_ROUTE = '/payments'
export const SCHEDULE_ROUTE = '/schedule'

export const ALL_STUDENTS_ROUTE = '/all-students'
export const FILTERED_ALL_STUDENTS_ROUTE = '/all-students/:filter'
export const ALL_TEACHERS_ROUTE = '/all-teachers'
export const FILTERED_ALL_TEACHERS_ROUTE = '/all-teachers/:filter'
export const DECREIS_DIRECTIVES = '/decreis-directives'

export const SETTINGS_ROUTE = '/configurations'
export const TEMPLATE_SETTINGS_ROUTE = SETTINGS_ROUTE + '/:id'
export const SETTINGS_APPEARANCE_ROUTE = SETTINGS_ROUTE + '/settings-appearance'
export const SETTINGS_PERSONAl_ROUTE = SETTINGS_ROUTE + '/settings-personal'
export const SETTINGS_HOME_PAGE_ROUTE = SETTINGS_ROUTE + '/settings-home-page'
export const SETTINGS_CUSTOMIZE_MENU_PAGE_ROUTE = SETTINGS_ROUTE + '/settings-customize-menu'
export const SETTINGS_NOTIFICATIONS = SETTINGS_ROUTE + '/settings-notifications'
export const SETTINGS_TUTORIAL = SETTINGS_ROUTE + '/settings-tutorial'

export const INSTRUCTIONS_ROUTE = '/instructions'
export const PROJECT_ACTIVITIES_ROUTE = '/project-activity'
export const SOFTSKILLS_ROUTE = '/softskills'
export const ALERTS_ROUTE = '/alerts'
export const LK_NOTIFICATIONS_ROUTE = '/lk-notifications'

export const USEFUL_INFO_ROUTE = '/helpful-information'
export const SAFETY_INFORMATION = '/safety-information'

// hidden
export const SCHEDULE_FILTER_ROUTE = SCHEDULE_ROUTE + '/:page/:filter'
export const SCHEDULE_CURRENT_ROUTE = SCHEDULE_ROUTE + '/current'
export const SCHEDULE_SEMESTR_ROUTE = SCHEDULE_ROUTE + '/semestr'
export const SCHEDULE_SESSION_ROUTE = SCHEDULE_ROUTE + '/session'
export const SCHEDULE_RETAKE_ROUTE = SCHEDULE_ROUTE + '/retake'
export const TEMPLATE_USEFUL_INFO_ROUTE = USEFUL_INFO_ROUTE + '/:infoType'

export const ELECTRONIC_INTERACTION_TYPE = ELECTRONIC_INTERACTION_AGREEMENT_ROUTE + '/:type'
export const PERSONAL_ELECTRONIC_INTERACTION = ELECTRONIC_INTERACTION_AGREEMENT_ROUTE + '/personal'
export const THIRD_PARTY_ELECTRONIC_INTERACTION = ELECTRONIC_INTERACTION_AGREEMENT_ROUTE + '/third-party'
