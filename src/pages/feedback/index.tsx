import React from 'react'

import { ContentPage } from '@features/feedback/ui'
import { Wrapper } from '@ui/atoms'

const FeedbackPage = () => {
    return (
        <Wrapper data={[]} load={() => {}} error={null} loading={false}>
            <ContentPage />
        </Wrapper>
    )
}

export default FeedbackPage
