import React, { ReactNode, useEffect, useRef, useState } from 'react'

import Flex from '@shared/ui/flex'
import List from '@shared/ui/list'
import { Title } from '@shared/ui/title'

const HH_SCRIPT =
    'https://api.hh.ru/widgets/vacancies/search?count=6&locale=RU&links_color=1f1f1f&border_color=c7c7c7&area=1&area=2019&professional_role=10&professional_role=105&professional_role=106&professional_role=121&professional_role=53&professional_role=54&professional_role=6&professional_role=71&professional_role=172&professional_role=67&professional_role=104&professional_role=107&professional_role=112&professional_role=113&professional_role=114&professional_role=116&professional_role=12&professional_role=124&professional_role=125&professional_role=126&professional_role=148&professional_role=150&professional_role=156&professional_role=157&professional_role=160&professional_role=164&professional_role=165&professional_role=25&professional_role=34&professional_role=36&professional_role=73&professional_role=96&professional_role=117&professional_role=118&professional_role=171&professional_role=38&professional_role=69&professional_role=119&professional_role=66&professional_role=120&professional_role=111&professional_role=128&professional_role=85&professional_role=86&professional_role=108&professional_role=30&professional_role=45&professional_role=46&professional_role=47&professional_role=48&professional_role=79&professional_role=41&professional_role=55&professional_role=98&professional_role=135&professional_role=170&professional_role=26&professional_role=37&professional_role=80&professional_role=87&professional_role=134&professional_role=136&professional_role=137&professional_role=142&professional_role=16&professional_role=18&professional_role=75&professional_role=110&professional_role=33&professional_role=84&professional_role=163&professional_role=2&professional_role=3&professional_role=68&professional_role=144&professional_role=149&professional_role=152&professional_role=162&professional_role=169&professional_role=174&professional_role=44&professional_role=49&experience=noExperience&employment=full&employment=part&employment=probation&schedule=fullDay&schedule=shift&schedule=flexible&schedule=remote&label=with_address&label=accredited_it&label=internship'

export const Employment = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [scriptError, setScriptError] = useState(false)

    useEffect(() => {
        const hhDiv = containerRef.current
        if (hhDiv) {
            const script = document.createElement('script')
            script.className = 'hh-script'
            script.src = HH_SCRIPT
            script.async = true

            script.onerror = () => {
                setScriptError(true)
            }
            hhDiv.appendChild(script)

            return () => {
                if (hhDiv) {
                    if (Object.prototype.hasOwnProperty.call(window, 'hhScriptCounter')) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        delete window.hhScriptCounter
                    }
                    hhDiv.removeChild(script)
                }
            }
        }
    }, [])

    return (
        <Flex d="column" gap="1.5rem" ai="flex-start" p="1rem 0">
            <Block title="Трудоустройство выпускников">
                <a href="https://forms.gle/45EVREys1DD2wKGL8" target="_blank" rel="noreferrer">
                    Анкета выпускника
                </a>
            </Block>
            <Block title="Все события, вакансии и стажировки в сообществе Центра карьеры:">
                <List gap={8}>
                    <div>
                        Телеграм:{' '}
                        <a href="https://t.me/mospolywork" target="_blank" rel="noreferrer">
                            https://t.me/mospolywork
                        </a>
                    </div>
                    <div>
                        Вконтакте:{' '}
                        <a href="https://vk.com/mospolywork" target="_blank" rel="noreferrer">
                            https://vk.com/mospolywork
                        </a>
                    </div>
                </List>
            </Block>
            <Block title="Вакансии и стажировки на HH.ru">
                <div ref={containerRef}>
                    {scriptError && 'Виджет недоступен. Попробуйте выключить блокировщик рекламы'}
                </div>
            </Block>
        </Flex>
    )
}

const Block = ({ title, children }: { title: string; children: ReactNode }) => {
    return (
        <Flex d="column" gap="0.5rem" ai="flex-start">
            <Title align="left" size={4}>
                {title}
            </Title>
            {children}
        </Flex>
    )
}
