import { useUnit } from 'effector-react'
import React from 'react'
import { TemplateHrApplications } from 'widgets'
import { hasKEDO } from './model/divisions'
import { KedoError } from './ui/kedo-error-wrapper'

const HrApplicationsPage = () => {
    const hasAccess = useUnit(hasKEDO)
    if (!hasAccess) return <KedoError />
    return <TemplateHrApplications isTeachers={true} />
}

export default HrApplicationsPage
