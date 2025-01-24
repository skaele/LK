import React from 'react'

import { Wrapper } from '@ui/atoms'

import { ContentPage } from '@features/feedback/ui'

const FeedbackPage = () => {
    return (
        <Wrapper data={[]} load={() => {}} error={null} loading={false}>
            <ContentPage />
        </Wrapper>
    )
}

export default FeedbackPage
