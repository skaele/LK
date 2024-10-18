import { applicationsModel } from '@entities/applications'
import { vacationScheduleModel } from '@entities/vacation-schedule'
import { Wrapper } from '@shared/ui/atoms'
import React from 'react'
import { findVacationByJobGuid } from './lib/findVacationByJobGuid'
import Table from '@shared/ui/table'
import { formFooterField } from '@features/vacation-schedule/ui/organism/vacation'
import { IndexedProperties } from '@shared/models/indexed-properties'
import localizeDate from '@shared/lib/dates/localize-date'
import getCorrectWordForm from '@shared/lib/get-correct-word-form'

export const VacationList = ({ jobGuid }: { jobGuid: string | null }) => {
    const {
        data: { dataUserApplication },
    } = applicationsModel.selectors.useApplications()
    const { data, error } = vacationScheduleModel.selectors.useData()

    if (!jobGuid) return <p>Выберите должность</p>

    const vacation = data ? findVacationByJobGuid(data, jobGuid, dataUserApplication) || data[0] : null

    return (
        <Wrapper load={vacationScheduleModel.effects.getFx} error={error} data={data}>
            {/* <Flex d="column">{!!data && <Vacation {...vacation} />}</Flex> */}
            {vacation && (
                <Table
                    columns={[
                        {
                            title: 'Плановые периоды отпуска',
                            field: 'plannedVacationPeriods',
                            render: (_, data) => {
                                const planFrom = localizeDate(data?.from, 'numeric')
                                const planTo = localizeDate(data?.to, 'numeric')
                                return `${planFrom} - ${planTo} (${data.numdays} ${getCorrectWordForm(
                                    Number(data.numdays) || 0,
                                    {
                                        fiveToNine: 'дней',
                                        one: 'день',
                                        twoToFour: 'дня',
                                        zero: 'дней',
                                    },
                                )})`
                            },
                            showFull: true,
                        },
                    ]}
                    data={vacation.plan}
                    footer={() => {
                        const footer = {
                            allPlannedVacationPeriods: formFooterField(
                                vacation.plan.reduce<number>((acc, { numdays }) => {
                                    acc += +numdays

                                    return acc
                                }, 0),
                            ),
                        } as IndexedProperties

                        return footer
                    }}
                />
            )}
        </Wrapper>
    )
}
