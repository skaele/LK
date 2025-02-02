import { employeeHiddenRoutes, employeeRoutes } from './employee'
import { generalHiddenRoutes, generalRoutes } from './private'
import { studentHiddenRoutes, studentRoutes } from './student'

export * from './private'
export * from './student'
export * from './employee'

export const allRoutes = {
    ...generalRoutes,
    ...generalHiddenRoutes,
    ...studentRoutes,
    ...studentHiddenRoutes,
    ...employeeRoutes,
    ...employeeHiddenRoutes,
}
