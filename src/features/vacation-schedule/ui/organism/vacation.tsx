import { Vacation as VacationType, VacationSchedule } from '@api/model/vacation-schedule'
import { ColumnProps } from '@ui/table/types'
import KeyValue from '@ui/atoms/key-value'
import List from '@ui/list'
import Table from '@ui/table'
import { IndexedProperties } from '@utility-types/indexed-properties'
import getCorrectWordForm, { Rules } from '@utils/get-correct-word-form'
import React from 'react'
import localizeDate from '@shared/lib/dates/localize-date'

const RULES: Rules = {
    fiveToNine: 'дней',
    one: 'день',
    twoToFour: 'дня',
    zero: 'дней',
}

const tableColumns: ColumnProps[] = [
    {
        title: 'Плановые периоды отпуска',
        field: 'plannedVacationPeriods',
        showFull: true,
    },
    {
        title: 'Фактические периоды отпуска',
        field: 'actualVacationPeriods',
        showFull: true,
    },
    {
        title: 'Остаток отпуска',
        field: 'unusedVacationPeriods',
        showFull: true,
    },
]

export type OldVacationChedule = {
    division: string
    post: string
    vacations?: {
        plannedVacationPeriods?: string
        actualVacationPeriods?: string
        unusedVacationPeriods?: string
    }[]
    allPlannedVacationPeriods?: number
    allActualVacationPeriods?: number
    allUnusedVacationPeriods?: number
    oldAllVacationRest?: number
}

const Vacation = (props: VacationSchedule) => {
    const { division, post, vacations, allActualVacationPeriods, allPlannedVacationPeriods, allUnusedVacationPeriods } =
        mapper(props)

    return (
        <>
            <List>
                <KeyValue keyStr="Подразделение" value={division} />
                <KeyValue keyStr="Должность" value={post} />
            </List>
            <Table
                columns={tableColumns}
                data={vacations}
                footer={() => {
                    const footer = {
                        allPlannedVacationPeriods: formFooterField(allPlannedVacationPeriods),
                        allActualVacationPeriods: formFooterField(allActualVacationPeriods),
                        allUnusedVacationPeriods: formFooterField(allUnusedVacationPeriods),
                    } as IndexedProperties

                    return footer
                }}
            />
        </>
    )
}

export default Vacation

function formFooterField(field?: number) {
    return `Всего: ${field} ${getCorrectWordForm(Math.trunc(field || 0), RULES)}`
}

function mapper(newVacation: VacationSchedule): OldVacationChedule {
    const { fact, plan, unused, division, post } = newVacation

    return {
        division,
        post,
        vacations: getVacations(fact, plan, unused),
        allActualVacationPeriods: fact.reduce<number>((acc, { numdays }) => {
            acc += +numdays

            return acc
        }, 0),
        allPlannedVacationPeriods: plan.reduce<number>((acc, { numdays }) => {
            acc += +numdays

            return acc
        }, 0),
        allUnusedVacationPeriods: unused.reduce<number>((acc, { numdays }) => {
            acc += +numdays

            return acc
        }, 0),
    }
}

function getVacations(fact: VacationType[], plan: VacationType[], unused: VacationType[]) {
    const maxVacationLength = Math.max(fact.length, plan.length, unused.length)
    const vacations = []

    for (let i = 0; i < maxVacationLength; i++) {
        const factVacation = fact[i]
        const planVacation = plan[i]
        const unusedVacation = unused[i]
        const vacation = { actualVacationPeriods: '', plannedVacationPeriods: '', unusedVacationPeriods: '' }
        const factFrom = localizeDate(factVacation?.from, 'numeric')
        const factTo = localizeDate(factVacation?.to, 'numeric')
        const planFrom = localizeDate(planVacation?.from, 'numeric')
        const planTo = localizeDate(planVacation?.to, 'numeric')
        const unusedFrom = localizeDate(unusedVacation?.from, 'numeric')
        const unusedTo = localizeDate(unusedVacation?.to, 'numeric')

        if (factVacation) {
            vacation.actualVacationPeriods = `${factFrom} - ${factTo} (${factVacation.numdays} ${getCorrectWordForm(
                Number(factVacation.numdays) || 0,
                RULES,
            )})`
        }

        if (planVacation) {
            vacation.plannedVacationPeriods = `${planFrom} - ${planTo} (${planVacation.numdays} ${getCorrectWordForm(
                Number(planVacation.numdays) || 0,
                RULES,
            )})`
        }

        if (unusedVacation) {
            vacation.unusedVacationPeriods = `${unusedFrom} - ${unusedTo} (${
                unusedVacation.numdays
            } ${getCorrectWordForm(Math.trunc(Number(unusedVacation.numdays)) || 0, RULES)})`
        }

        vacations.push(vacation)
    }

    return vacations
}
