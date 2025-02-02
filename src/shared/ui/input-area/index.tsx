import React from 'react'
import { FiAlertCircle, FiInfo, FiMinusCircle, FiPlusCircle } from 'react-icons/fi'

import { Colors, FileFormats } from '@shared/consts'
import { Button, Divider, FileLink, Message } from '@shared/ui/atoms'
import Checkbox from '@shared/ui/checkbox'
import FileInput from '@shared/ui/file-input'

import useInputArea from './lib/use-input-area'
import { IComplexInputAreaData, IInputArea, IInputAreaData } from './model'
import { LoadedState } from './types'
import { AreaTitle, InputAreaWrapper, UniversalInput } from './ui'
import Buttons from './ui/organisms/buttons'

type SetData = ((data: IInputArea | null) => void) | ((data: IInputArea) => void)

//TODO: Should be rewritten as HOC, inputs should be children props
const InputArea = ({
    title,
    hint,
    alert,
    data,
    optionalCheckbox,
    documents,
    setData,
    confirmed,
    optional = false,
    addNew = false,
    divider,
    collapsed,
    links,
    specialFieldsNameConfig,
    defaultOpenArea = true,
}: IInputArea & { setData: SetData; divider?: boolean; defaultOpenArea?: boolean }) => {
    //TODO: rewrite, this hook binds the inputs and their wrapper too much, so I can't quickly rewrite
    const {
        openArea,
        changeInputArea,
        included,
        setOpenArea,
        setIncluded,
        setChangeInputArea,
        handleRemove,
        handleAddNew,
        handleLoadFiles,
        handleConfirm,
        handleCheckbox,
    } = useInputArea({
        documents,
        optionalCheckbox,
        data: (data as IInputAreaData[]).filter(Boolean),
        setData: setData as React.Dispatch<React.SetStateAction<IInputArea>>,
        optional,
        collapsed,
        confirmed,
        defaultOpenArea,
    })
    return (
        <>
            <InputAreaWrapper openArea={openArea}>
                <AreaTitle
                    title={title}
                    included={included}
                    optional={optional}
                    confirmed={confirmed}
                    setOpenArea={setOpenArea}
                    setIncluded={setIncluded}
                    collapsed={collapsed}
                />
                <div className="inputs">
                    <Message type="alert" visible={!!alert} icon={<FiAlertCircle />}>
                        {alert}
                    </Message>
                    <Message
                        type="info"
                        visible={!!hint && (changeInputArea || confirmed === undefined)}
                        title={'Как заполнить'}
                        icon={<FiInfo />}
                    >
                        {hint}
                    </Message>
                    {!Array.isArray(data[0])
                        ? (data as IInputAreaData[]).map((attr, index) => {
                              // TODO: Remove UniversalInput, inputs performing different tasks should be different components
                              return (
                                  <UniversalInput
                                      key={index}
                                      documents={documents}
                                      changeInputArea={changeInputArea && !optionalCheckbox?.value}
                                      setData={setData as LoadedState}
                                      indexI={index}
                                      specialFieldsNameConfig={specialFieldsNameConfig}
                                      {...attr}
                                  />
                              )
                          })
                        : (data as IComplexInputAreaData).map((el, i) => {
                              return (
                                  <div className="data-line" key={i}>
                                      {el.map((attr, j) => {
                                          return (
                                              <UniversalInput
                                                  key={j}
                                                  documents={documents}
                                                  changeInputArea={changeInputArea && !optionalCheckbox?.value}
                                                  setData={setData as LoadedState}
                                                  indexI={i}
                                                  indexJ={j}
                                                  specialFieldsNameConfig={specialFieldsNameConfig}
                                                  {...attr}
                                              />
                                          )
                                      })}

                                      {changeInputArea && addNew && (
                                          <Button
                                              icon={<FiMinusCircle />}
                                              textColor={Colors.red.main}
                                              onClick={() => handleRemove(i)}
                                              background="transparent"
                                              isActive={!optionalCheckbox?.value}
                                          />
                                      )}
                                  </div>
                              )
                          })}
                    {addNew && changeInputArea && (
                        <Button
                            icon={<FiPlusCircle />}
                            text="Добавить"
                            onClick={handleAddNew}
                            background="transparent"
                            isActive={!optionalCheckbox?.value}
                        />
                    )}
                    {!!documents && changeInputArea && documents.visible !== false && (
                        <FileInput
                            files={documents.files}
                            setFiles={(files: File[]) => handleLoadFiles(files)}
                            maxFileSizeInMegaBytes={documents.maxFileSizeInMegaBytes}
                            maxFiles={documents.maxFiles}
                            formats={documents.allowedTypes as FileFormats}
                            isActive={
                                documents.checkboxCondition
                                    ? documents.checkboxCondition === 'straight'
                                        ? !!optionalCheckbox?.value
                                        : !optionalCheckbox?.value
                                    : true
                            }
                        />
                    )}
                    {links?.length &&
                        links.map((link) => {
                            return <FileLink {...link} key={link.title} />
                        })}
                    <Checkbox
                        visible={!!optionalCheckbox && (optionalCheckbox.visible ?? true)}
                        text={optionalCheckbox?.title}
                        isActive={optionalCheckbox?.editable || changeInputArea}
                        checked={optionalCheckbox?.value ?? false}
                        setChecked={handleCheckbox}
                    />
                    <Buttons
                        confirmed={confirmed}
                        changeInputArea={changeInputArea}
                        setData={setData as LoadedState}
                        setChangeInputArea={setChangeInputArea}
                        handleConfirm={handleConfirm}
                    />
                </div>
            </InputAreaWrapper>
            {divider && <Divider />}
        </>
    )
}

export default InputArea
