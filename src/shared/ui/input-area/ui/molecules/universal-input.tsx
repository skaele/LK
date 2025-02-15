import React, { useState } from 'react'

import { Input, TextArea } from '@shared/ui/atoms'
import AutocompleteInput from '@shared/ui/atoms/auto-complete-input'
import HrCheckbox from '@shared/ui/atoms/hr-checkbox'
import Checkbox from '@shared/ui/checkbox'
import {
    CheckboxDocs,
    IComplexInputAreaData,
    IInputArea,
    IInputAreaData,
    IInputAreaFiles,
} from '@shared/ui/input-area/model'
import { DateInterval } from '@shared/ui/molecules'
import SimpleText from '@shared/ui/molecules/simple-text'
import TextHeader from '@shared/ui/molecules/text-header'
import TextWarning from '@shared/ui/molecules/text-warning'
import { CheckboxDocumentList, RadioButtonList } from '@shared/ui/organisms'
import { RadioButton } from '@shared/ui/organisms/radio-button-list'
import Select, { SelectPage } from '@shared/ui/select'

import { SpecialFieldsNameConfig } from '../../types'

type Props = IInputAreaData & {
    documents?: IInputAreaFiles
    changeInputArea: boolean
    setData: React.Dispatch<React.SetStateAction<IInputArea>>
    indexI: number
    indexJ?: number
    onChange?: (value: any) => void
    onKeyPress?: (value: any) => void
    onBlur?: (value: any) => void
    onKeyDown?: (value: any) => void
    onKeyUp?: (value: any) => void
    onFocus?: (value: any) => void
    specialFieldsNameConfig?: SpecialFieldsNameConfig
}

const UniversalInput = (props: Props) => {
    const {
        value,
        required,
        width,
        indexI,
        indexJ,
        type,
        suggestions,
        items,
        title,
        documents,
        changeInputArea,
        setData,
        mask,
        customMask,
        editable,
        placeholder,
        autocomplete,
        isSpecificRadio,
        specialType,
        specialFieldsNameConfig,
        minValueInput,
        maxValueInput,
        minValueLength,
        maxValueLength,
        diff,
        visible = true,
        onChange,
        onKeyPress,
        onBlur,
        onKeyDown,
        onKeyUp,
        onFocus,
    } = props

    const isActive = editable ?? (changeInputArea && !documents)
    const [validDates, setValidDates] = useState(true)

    const handleChangeValue = (value: string | boolean, i: number, j?: number) => {
        onChange?.(value)
        setData((area) => {
            if (Array.isArray(area.data[0])) {
                ;(area.data as IComplexInputAreaData)[i][j ?? 0].value = value
            } else {
                if ((area.data[i] as IInputAreaData).type === 'checkbox-docs') {
                    ;((area.data[i] as IInputAreaData).items as CheckboxDocs[])[j ?? 0].value = !!value
                    ;(area.data[i] as IInputAreaData).value = true
                } else {
                    ;(area.data[i] as IInputAreaData).value = value
                }
            }

            return { ...area }
        })
    }

    const handleChangeSelect = (page: SelectPage | SelectPage[], i: number, j?: number) => {
        onChange?.(page)
        setData((area) => {
            if (Array.isArray(area.data[0])) {
                ;(area.data as IComplexInputAreaData)[i][j ?? 0].value = page
            } else {
                ;(area.data[i] as IInputAreaData).value = page
            }

            return { ...area }
        })
    }

    const handleLoadFiles = (files: File[], i: number, j?: number) => {
        setData((area) => {
            ;((area.data[i] as IInputAreaData).items as CheckboxDocs[])[j ?? 0].files = files

            return { ...area }
        })
    }

    const handleRadio = (button: RadioButton | null) => {
        onChange?.(button)
        setData((area) => {
            ;(area.data[indexI] as IInputAreaData).value = button

            return { ...area }
        })
    }

    const handleDates = (dates: string[]) => {
        onChange?.(dates)
        onKeyPress?.(dates)
        onBlur?.(dates)
        onKeyDown?.(dates)
        onKeyUp?.(dates)
        onFocus?.(dates)
        setData((area) => {
            ;(area.data[indexI] as IInputAreaData).value = dates

            return { ...area }
        })
    }

    if (!!specialFieldsNameConfig && !!specialType && !Object.values(specialFieldsNameConfig).includes(specialType)) {
        return null
    }

    return (type !== 'select' && type !== 'multiselect') || !items ? (
        type === 'checkbox' ? (
            <Checkbox
                text={title}
                isActive={isActive}
                checked={value as boolean}
                setChecked={(value) => handleChangeValue(value, indexI, indexJ)}
            />
        ) : type === 'hr-checkbox' ? (
            <HrCheckbox
                text={title}
                isActive={isActive}
                checked={value as boolean}
                setChecked={(value) => handleChangeValue(value, indexI, indexJ)}
            />
        ) : type === 'auto-complete-input' ? (
            <AutocompleteInput
                title={title}
                suggestions={suggestions ?? []}
                required={required}
                value={value as string}
                placeholder={placeholder ?? title}
                setValue={(value) => handleChangeValue(value, indexI, indexJ)}
            />
        ) : type === 'textarea' ? (
            <TextArea
                value={value as string}
                title={title}
                setValue={(value) => handleChangeValue(value, indexI, indexJ)}
                isActive={isActive}
                textAreaAppearance={isActive}
                placeholder={placeholder ?? title}
                required={required}
                width={width}
            />
        ) : type === 'checkbox-docs' ? (
            <CheckboxDocumentList
                title={title}
                items={items as CheckboxDocs[]}
                setChecked={(value, j?: number) => handleChangeValue(!value, indexI, j)}
                setFiles={(files, j?: number) => handleLoadFiles(files, indexI, j)}
            />
        ) : type === 'date-interval' ? (
            visible ? (
                <DateInterval
                    title={title}
                    required={required}
                    dates={value as string[]}
                    setDates={(dates: string[]) => handleDates(dates)}
                    valid={validDates}
                    setValid={setValidDates}
                    minValue={minValueInput}
                    diff={diff}
                />
            ) : null
        ) : type === 'simple-text' ? (
            <SimpleText title={title} value={value as string} visible={visible} />
        ) : type === 'text-warning' ? (
            <TextWarning title={title} visible={visible} />
        ) : type === 'text-header' ? (
            <TextHeader title={title} visible={visible} />
        ) : type === 'radio' ? (
            <RadioButtonList
                buttons={items as RadioButton[]}
                title={title}
                required={required}
                current={value as RadioButton}
                setCurrent={handleRadio}
                isSpecificRadio={isSpecificRadio}
            />
        ) : visible ? (
            <Input
                value={value as string}
                title={title}
                minValue={minValueInput}
                maxValue={maxValueInput}
                minLength={minValueLength}
                maxLength={maxValueLength}
                customMask={customMask}
                setValue={(value) => handleChangeValue(value, indexI, indexJ)}
                type={type}
                isActive={isActive}
                inputAppearance={isActive}
                hideCross={!isActive}
                placeholder={placeholder ?? title}
                required={required}
                mask={mask}
                width={width}
                autocomplete={autocomplete}
            />
        ) : null
    ) : visible ? (
        <Select
            items={items as SelectPage[]}
            setSelected={(value: any) => handleChangeSelect(value as SelectPage | SelectPage[], indexI, indexJ)}
            selected={value as SelectPage}
            isActive={isActive}
            title={title}
            width={width}
            multiple={type === 'multiselect'}
            required={required}
        />
    ) : null
}

export default UniversalInput
