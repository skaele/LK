import { AcadPerformance as IAcadPerformance } from '@api/model/acad-performance'
import { acadPerformanceModel } from '@entities/acad-performance'
import { getCurrentData, PreparedAcadPerformanceData, prepareData } from '@entities/acad-performance/lib/prepare'
import { userModel } from '@entities/user'
import createSelectItems from '@features/acad-performance/lib/create-select-items'
import search from '@features/acad-performance/lib/search'
import { SubjectList } from '@features/acad-performance/ui/organisms'
import Select, { SelectPage } from '@features/select'
import PageBlock from '@shared/ui/page-block'
import { Error, Wrapper } from '@ui/atoms'
import { LocalSearch } from '@ui/molecules'
import findSemestr from '@utils/find-semestr'
import React, { useEffect, useMemo, useState } from 'react'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import GradeGraph from './ui/grade-graph'
import PerformanceMessage from './ui/performance-message'
import Flex from '@shared/ui/flex'

const AcadPerformance = () => {
    const { data, loading, error } = acadPerformanceModel.selectors.useData()
    const {
        data: { user },
    } = userModel.selectors.useUser()
    const items = useMemo(() => createSelectItems(user?.course ?? 0), [user])

    const [selected, setSelected] = useState<SelectPage | null>({
        id: findSemestr(new Date().toString(), user?.course ?? 1),
        title: findSemestr(new Date().toString(), user?.course ?? 1).toString() + ' семестр',
    })
    const [foundSubjects, setFoundSubjects] = useState<PreparedAcadPerformanceData | null>(null)
    const notFoundError = foundSubjects && !Object.keys(foundSubjects ?? {}).find((el) => el?.length !== 0) && !loading

    const loadSemestrFilter = `${selected?.id !== -1 ? selected?.id : ''}`

    const loadFunc = (page?: SelectPage) => {
        acadPerformanceModel.effects.getFx({
            semestr: page ? `${page?.id !== -1 ? page?.id : ''}` : loadSemestrFilter,
        })
    }
    const [currentUserData, setCurrentUserData] = useState<IAcadPerformance[] | null>(null)
    const [preparedData, setPreparedData] = useState<PreparedAcadPerformanceData | null>(null)
    useEffect(() => {
        if (user && data) {
            const selectedSemestr = Number(selected?.id)
            const enterYear = Number(user?.enterYear.split('/')[0])
            const currentData = getCurrentData(data, enterYear, selectedSemestr)
            setCurrentUserData(currentData)
            setPreparedData(prepareData(currentData))
        }
    }, [data])
    const noDataError = currentUserData?.length === 0 && !loading

    return (
        <Wrapper loading={loading} load={loadFunc} error={error} data={currentUserData}>
            <PageBlock
                topRightCornerElement={
                    !!user?.id && (
                        <Select
                            onClick={loadFunc}
                            width="150px"
                            items={items}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    )
                }
            >
                {noDataError || !currentUserData ? (
                    <Error text={'Данных за этот семестр нет, попробуйте другой!'} />
                ) : (
                    <>
                        {!foundSubjects && !loading && <PerformanceMessage data={currentUserData} />}
                        <LocalSearch<IAcadPerformance[], PreparedAcadPerformanceData>
                            whereToSearch={currentUserData}
                            searchEngine={search}
                            setResult={setFoundSubjects}
                            placeholder={'Поиск предметов'}
                            loadingOnType
                        />
                        {notFoundError && (
                            <Error text={'По данному запросу ничего не найдено'} image={<HiOutlineEmojiSad />} />
                        )}
                        {!notFoundError && (
                            <Flex d="column" gap="40px">
                                <GradeGraph data={currentUserData} loading={loading} />
                                <SubjectList items={foundSubjects ?? preparedData} loading={loading} />
                            </Flex>
                        )}
                    </>
                )}
            </PageBlock>
        </Wrapper>
    )
}

export default AcadPerformance
