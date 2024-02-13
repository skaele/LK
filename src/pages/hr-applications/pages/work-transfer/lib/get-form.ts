import { UserApplication } from '@api/model'
import { getFormattedSubDivisionsWithRate } from '@features/applications/lib/get-subdivisions'
import getDelayInDays from '@pages/hr-applications/lib/get-delay-in-days'
import { getDefaultSubdivision } from '@pages/teachers-applications/lib/get-default-subdivision'
import { IInputArea } from '@ui/input-area/model'
import React from 'react'

const getForm = (
    dataUserApplication: UserApplication,
    employment: any | null,
    setEmployment: React.Dispatch<React.SetStateAction<any | null>>,
    newPost: string | null,
    setNewPost: React.Dispatch<React.SetStateAction<string | null>>,
    newPlaceOfWork: string | null,
    setNewPlaceOfWork: React.Dispatch<React.SetStateAction<string | null>>,
    newRate: any,
    setNewRate: React.Dispatch<React.SetStateAction<any>>,
    transferDate: string | null,
    setTransferDate: React.Dispatch<React.SetStateAction<string | null>>,
    partTimeType: string | null,
    setPartTimeType: React.Dispatch<React.SetStateAction<string | null>>,
    suggestions: any,
    jobTitle: string | null,
    setJobTitle: React.Dispatch<React.SetStateAction<string | null>>,
    jobGuid: string | null,
    setJobGuid: React.Dispatch<React.SetStateAction<string | null>>,
): IInputArea => {
    const { surname, name, patronymic, subdivisions } = dataUserApplication
    const jobGuidData = !!jobGuid ? jobGuid : ''
    const jobTitleData = !!jobTitle ? jobTitle : getDefaultSubdivision(subdivisions)
    return {
        title: 'Заявление на перевод',
        data: [
            {
                title: 'ФИО',
                value: surname + ' ' + name + ' ' + patronymic,
                fieldName: 'fio',
                type: 'simple-text',
                visible: true,
            },
            {
                title: 'Текущее место работы',
                type: 'text-header',
                fieldName: 'post',
                value: '',
                visible: true,
            },
            {
                title: 'Подразделение/должность',
                value: jobTitleData,
                fieldName: 'guid_staff',
                editable: true,
                width: '100',
                required: true,
                type: 'select',
                items: getFormattedSubDivisionsWithRate(subdivisions),
                isSpecificSelect: true,
                onChange: (value) => {
                    setJobTitle(value)
                    setJobGuid(value.id)
                },
            },
            {
                title: '',
                type: 'simple-text',
                value: jobGuidData,
                fieldName: 'jobGuid',
                visible: false,
            },
            {
                title: 'Новое место работы',
                type: 'text-header',
                fieldName: 'post',
                value: '',
                visible: true,
            },
            {
                title: 'Подразделение',
                type: 'auto-complete-input',
                fieldName: 'newPlaceOfWork',
                value: newPlaceOfWork,
                width: '100%',
                suggestions,
                required: true,
                mask: true,
                visible: true,
                placeholder: 'Начните вводить название подразделения',
                onChange: (value) => {
                    setNewPlaceOfWork(value)
                },
            },
            {
                title: 'Должность',
                value: newPost,
                fieldName: 'newPost',
                editable: true,
                mask: true,
                required: true,
                onChange: (value) => {
                    setNewPost(value)
                },
            },
            {
                title: 'Тип занятости',
                type: 'select',
                fieldName: 'employment',
                value: employment,
                editable: true,
                required: true,
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Основное место работы',
                    },
                    {
                        id: 1,
                        title: 'По совместительству',
                    },
                ],
                onChange: (value) => {
                    setEmployment(value)
                    if (value.title == 'По совместительству' && newRate.title == '1') setNewRate(null)
                },
            },

            {
                title: 'Ставка',
                type: 'select',
                fieldName: 'newRate',
                value: newRate,
                editable: true,
                required: true,
                width: '100%',
                items:
                    employment?.title == 'По совместительству'
                        ? [
                              {
                                  id: 1,
                                  title: '0.5',
                              },
                              {
                                  id: 2,
                                  title: '0.25',
                              },
                          ]
                        : [
                              {
                                  id: 0,
                                  title: '1',
                              },
                              {
                                  id: 1,
                                  title: '0.5',
                              },
                              {
                                  id: 2,
                                  title: '0.25',
                              },
                          ],
                onChange: (value) => {
                    setNewRate(value)
                },
            },
            {
                title: 'При устройстве по совместительству ставка не может превышать 0.5',
                type: 'text-warning',
                fieldName: 'PartTime',
                value: null,
                visible: employment?.title == 'По совместительству' ? true : false,
                required: false,
                width: '100%',
            },
            {
                title: 'Тип совместительства',
                type: 'select',
                fieldName: 'parttime_type',
                value: partTimeType,
                editable: true,
                required: employment?.title == 'По совместительству' ? true : false,
                specialType: 'PartTime',
                width: '100%',
                items: [
                    {
                        id: 0,
                        title: 'Внутреннее',
                    },
                    {
                        id: 1,
                        title: 'Внешнее',
                    },
                ],
                onChange: (value) => {
                    setPartTimeType(value)
                },
            },

            {
                title: 'Дата перевода',
                type: 'date',
                value: transferDate,
                fieldName: 'transferDate',
                editable: true,
                mask: true,
                required: true,
                minValueInput: getDelayInDays(0),
                onChange: (value) => {
                    setTransferDate(value)
                },
            },
        ],
        documents: { files: [], fieldName: 'docs', required: false },
    }
}

export default getForm
