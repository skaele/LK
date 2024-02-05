import { applicationsModel } from '@entities/applications'
import createApplicationSearch from '@features/applications/lib/create-application-search'
import { getTeachersHRSectionLinks } from '@features/applications/lib/get-teachers-section-links'
import { LinkItem } from '@shared/ui/link-item'
import PageBlock from '@shared/ui/page-block'
import { Message, Title, Wrapper } from '@ui/atoms'
import { Error } from '@ui/error'
import { LocalSearch } from '@ui/molecules'
import React, { useState } from 'react'
import { HiOutlineDocument } from 'react-icons/hi'
import { CreateApplicationListWrapper, LinksList } from './styles'
import Flex from '@shared/ui/flex'
import { Section } from '@features/applications/ui/molecules/create-application-list'

interface Props {
    isTeachers: boolean
}

const TeachersHrApplicationsPage = ({}: Props) => {
    const {
        data: { listApplication },
        error,
    } = applicationsModel.selectors.useApplications()
    const sections = getTeachersHRSectionLinks()
    const [search, setSearch] = useState<string>('')

    const [foundSections, setFoundSections] = useState<Section[] | null>(sections)
    return (
        <Wrapper
            load={() => applicationsModel.effects.getApplicationsFx()}
            loading={!listApplication}
            error={error}
            data={listApplication}
        >
            <PageBlock>
                <Message type="info" lineHeight="1.4rem" fontSize="0.85rem">
                    Данный сервис создан для упрощения оборота кадровых документов внутри Университета.
                </Message>

                <CreateApplicationListWrapper>
                    <Title size={4} align="left" bottomGap>
                        Создать заявление
                    </Title>

                    <LocalSearch
                        whereToSearch={sections}
                        searchEngine={createApplicationSearch}
                        setResult={setFoundSections}
                        placeholder="Поиск заявления"
                        setExternalValue={setSearch}
                    />
                    <LinksList>
                        {(foundSections ?? sections).map((section) => {
                            if (section.disabled) return

                            return (
                                <Flex gap="4px" d="column" key={section.title}>
                                    {section.links.map((link) => (
                                        <LinkItem
                                            key={link.link}
                                            title={link.title}
                                            path={link.link}
                                            id={link.title + link.link}
                                            color={link.color ?? 'blue'}
                                            showMore={false}
                                            icon={link.icon ?? <HiOutlineDocument />}
                                        />
                                    ))}
                                </Flex>
                            )
                        })}
                        {!foundSections?.length && search.length > 0 && (
                            <Error text={`По запросу ${search} ничего не найдено`} />
                        )}
                    </LinksList>
                </CreateApplicationListWrapper>
            </PageBlock>
        </Wrapper>
    )
}

export default TeachersHrApplicationsPage
