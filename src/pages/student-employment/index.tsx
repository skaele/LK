import React from 'react'
import { useHistory, useParams } from 'react-router'

import SliderPage from '@features/slider-page'
import { STUDENT_EMPLOYMENT_ROUTE } from '@shared/routing'
import { CenterPage } from '@shared/ui/atoms'
import PageBlock from '@shared/ui/page-block'
import { Employment, Internship } from '@widgets/student-employment'

const StudentEmployment = () => {
    const history = useHistory()
    const { type } = useParams<{ type: string }>()

    return (
        <CenterPage padding="10px">
            <PageBlock>
                <SliderPage
                    pages={[
                        {
                            id: 'internship',
                            title: 'Практика',
                            content: <Internship />,
                        },
                        {
                            id: 'employment',
                            title: 'Трудоустройство',
                            content: <Employment />,
                        },
                    ]}
                    appearance={false}
                    currentPage={type === 'employment' ? 1 : 0}
                    onChangePage={(id) => history.push(STUDENT_EMPLOYMENT_ROUTE + `/${id}`)}
                />
            </PageBlock>
        </CenterPage>
    )
}

export default StudentEmployment
