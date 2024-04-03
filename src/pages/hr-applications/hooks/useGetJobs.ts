import { applicationsModel } from '@entities/applications'
import { SelectPage } from '@features/select'
import { useEffect, useState } from 'react'

export const useGetJobs = () => {
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const [jobs, setJobs] = useState<SelectPage[]>([])

    useEffect(() => {
        if (!!dataUserApplication?.subdivisions)
            setJobs(
                dataUserApplication?.subdivisions.map((subdivision) => ({
                    id: subdivision.guid_staff,
                    title: subdivision.post,
                })),
            )
    }, [dataUserApplication])

    return jobs
}
