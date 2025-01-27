import React from 'react'

import { topics } from '../config/paragraph-config'
import TextWrapper from './text-wrapper'

export const TextFields = () => {
    return (
        <>
            {topics.map(({ title, content: Content }, index) => (
                <TextWrapper key={title} title={title} collapsed={index !== 0}>
                    <Content />
                </TextWrapper>
            ))}
        </>
    )
}
