import React from 'react'
import { ExpandableItem, ExpandableItemType } from './expandable-item'
import Flex from '@shared/ui/flex'

const subdivs: ExpandableItemType = {
    'Проректор по цифровому развитию и делопроизводству': {
        'Центр развития технологий в цифровом образовании': {
            'Отдел внутренней разработки ': {},
            'Отдел внедрения и обеспечения технологий цифрового образования': {},
        },
        'Центр управления делами': {},
    },
    '222': {
        '333': {},
    },
}

export const Subdivisions = ({ chosen, setChosen }: { chosen: string; setChosen: (value: string) => void }) => {
    return (
        <Flex d="column">
            {Object.keys(subdivs).map((subdivision) => (
                <React.Fragment key={subdivision}>
                    <ExpandableItem
                        item={{ [subdivision]: subdivs[subdivision] }}
                        chosen={chosen}
                        setChosen={(title) => setChosen(title)}
                        layer={1}
                    />
                </React.Fragment>
            ))}
        </Flex>
    )
}
