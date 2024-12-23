import { technicalMaintenanceModel } from '@entities/technical-maintenance'
import Select, { SelectPage } from '@features/select'
import BaseApplicationWrapper from '@pages/applications/ui/base-application-wrapper'
import { Input, SubmitButton, TextArea, Title } from '@shared/ui/atoms'
import FormBlockWrapper from '@shared/ui/atoms/form-block'
import FileInput from '@shared/ui/file-input'
import { useUnit } from 'effector-react'
import React, { useEffect } from 'react'

const TechnicalMaintenance = () => {
    const [pageMounted, done, applicationNumber] = useUnit([
        technicalMaintenanceModel.events.pageMounted,
        technicalMaintenanceModel.stores.done,
        technicalMaintenanceModel.stores.applicationNumber,
    ])

    useEffect(() => {
        pageMounted()
    }, [])

    window.location.href = 'https://mospolytech.ksuto.ru/'

    return (
        <BaseApplicationWrapper isDone={done}>
            <FormBlockWrapper noHeader>
                {done ? (
                    <>Спасибо! Ваш номер заявки {applicationNumber}.</>
                ) : (
                    <>
                        <Note />
                        <Name />
                        <Phone />
                        <Email />
                        <Location />
                        <Department />
                        <File />
                        <Submit />
                    </>
                )}
            </FormBlockWrapper>
        </BaseApplicationWrapper>
    )
}

const Note = () => {
    const [value, setValue] = useUnit([technicalMaintenanceModel.stores.note, technicalMaintenanceModel.events.setNote])
    return (
        <TextArea
            placeholder="Опишите проблему и точное местоположение"
            required={true}
            title="Опишите проблему и точное местоположение"
            value={value}
            setValue={setValue}
        ></TextArea>
    )
}

const Name = () => {
    const [value, setValue] = useUnit([technicalMaintenanceModel.stores.name, technicalMaintenanceModel.events.setName])
    return <Input title="ФИО" required={true} value={value} setValue={setValue}></Input>
}

const Phone = () => {
    const [value, setValue] = useUnit([
        technicalMaintenanceModel.stores.phone,
        technicalMaintenanceModel.events.setPhone,
    ])
    return <Input title="Контактный телефон" required={true} value={value} setValue={setValue}></Input>
}

const Email = () => {
    const [value, setValue] = useUnit([
        technicalMaintenanceModel.stores.email,
        technicalMaintenanceModel.events.setEmail,
    ])
    return <Input title="Email для уведомлений" value={value} setValue={setValue}></Input>
}

const Location = () => {
    const [value, setValue] = useUnit([
        technicalMaintenanceModel.stores.location,
        technicalMaintenanceModel.events.setLocation,
    ])
    return (
        <Select
            title="Локация"
            required={true}
            width="100%"
            items={locations}
            selected={value}
            setSelected={setValue}
            withSearch
        ></Select>
    )
}

const Department = () => {
    const [value, setValue] = useUnit([
        technicalMaintenanceModel.stores.stack,
        technicalMaintenanceModel.events.setStack,
    ])
    return (
        <Select
            title="Отдел"
            required={true}
            width="100%"
            items={departments}
            selected={value}
            setSelected={setValue}
            withSearch
        ></Select>
    )
}

const File = () => {
    const [files, setFiles] = useUnit([
        technicalMaintenanceModel.stores.files,
        technicalMaintenanceModel.events.setFiles,
    ])
    return (
        <>
            <Title size={4} align="left" bottomGap="5px">
                Фотография
            </Title>
            <FileInput files={files} setFiles={setFiles} isActive />
        </>
    )
}

const Submit = () => {
    const [sendForm, done, loading, note, name, phone, location, stack] = useUnit([
        technicalMaintenanceModel.events.sendForm,
        technicalMaintenanceModel.stores.done,
        technicalMaintenanceModel.stores.loading,
        technicalMaintenanceModel.stores.note,
        technicalMaintenanceModel.stores.name,
        technicalMaintenanceModel.stores.phone,
        technicalMaintenanceModel.stores.location,
        technicalMaintenanceModel.stores.stack,
    ])
    return (
        <SubmitButton
            text={!done ? 'Отправить' : 'Отправлено'}
            action={sendForm}
            isLoading={loading}
            completed={done}
            setCompleted={() => {}}
            repeatable={false}
            buttonSuccessText="Отправлено"
            isDone={done}
            isActive={Boolean(note) && Boolean(name) && Boolean(phone) && Boolean(location) && Boolean(stack)}
            popUpFailureMessage={'Для отправки формы необходимо, чтобы все поля были заполнены'}
            popUpSuccessMessage="Данные формы успешно отправлены"
        />
    )
}

const locations: SelectPage[] = [
    { id: '1679', title: 'Б. Семеновская 38; Корпус А' },
    { id: '1680', title: 'Б. Семеновская 38; Корпус Б' },
    { id: '1681', title: 'Б. Семеновская 38; Корпус В' },
    { id: '1682', title: 'Б. Семеновская 38; Корпус Н' },
    { id: '1683', title: 'Б. Семеновская 38; Корпус НД' },
    { id: '1684', title: 'М. Семеновская 12; Общежитие №1' },
    { id: '1685', title: '7-я Парковая 9/26; Общежитие №2' },
    { id: '1686', title: '11-я Парковая 36 стр.2; Спорт зал' },
    { id: '1865', title: 'ул. Большая Семеновская 38' },
    { id: '1866', title: 'ул. Малая Семеновская 12 стр.2' },
    { id: '1867', title: 'ул. 7-я Парковая 9/26' },
    { id: '1868', title: 'ул. 11-я Парковая 36 стр.2' },
    { id: '1869', title: 'ул. Лефортовский вал 26' },
    { id: '1870', title: 'ул. Лефортовский вал 26; Учебный корпус' },
    { id: '1873', title: 'ул. Садовая - Спасская 4, стр.1' },
    { id: '1875', title: 'ул. Садовая - Спасская 4, стр.3' },
    { id: '1877', title: 'ул. Садовая - Спасская 4, стр.4' },
    { id: '1879', title: 'ул. Садовая - Спасская 4, стр.5' },
    { id: '1881', title: 'ул. Бориса Галушкина 9' },
    { id: '1882', title: 'ул. Бориса Галушкина 9; Общежитие №6' },
    { id: '1885', title: 'ул. Рижский проезд 15, к.2' },
    { id: '1888', title: 'ул. Прянишникова, 2А, к.1' },
    { id: '1889', title: 'ул. Прянишникова, 2А, к.1; Учебный корпус' },
    { id: '1890', title: 'ул. Прянишникова, 2А, к.2' },
    { id: '1891', title: 'ул. Прянишникова, 2А, к.2; Учебный корпус' },
    { id: '1892', title: 'ул. Прянишникова, 2А, к.3' },
    { id: '1893', title: 'ул. Прянишникова, 2А, к.3; Учебный корпус' },
    { id: '1894', title: 'ул. Михалковская, 7, стр. 4' },
    { id: '1895', title: 'ул. Михалковская, 7, стр. 4; Учебный корпус' },
    { id: '1896', title: 'ул. Михалковская, 7, стр. 2' },
    { id: '1897', title: 'ул. Михалковская, 7, стр. 2; Учебный корпус' },
    { id: '1898', title: 'ул. Михалковская, 7, стр. 3' },
    { id: '1899', title: 'ул. Михалковская, 7, к.3' },
    { id: '1900', title: 'ул. 800-летия Москвы, 28, к.1' },
    { id: '1901', title: 'ул. 800-летия Москвы, 28, к.1; Общежитие № 4' },
    { id: '1902', title: 'ул. 1-й Балтийский переулок, 6/21, к.3' },
    { id: '1903', title: 'ул. 1-й Балтийский переулок, 6/21, к.3; Общежитие № 10' },
    { id: '1907', title: 'ул. Автозаводская, д.16, стр.2 (2-х этаж. пристр.)' },
    { id: '1908', title: 'ул. Автозаводская, д.16, стр.4 (корп3)' },
    { id: '1909', title: 'ул. Автозаводская, д.16, стр.5 (корп4)' },
    { id: '1910', title: 'ул. 1-ая Дубровская, д.16А, стр.1' },
    { id: '1911', title: 'ул. 1-ая Дубровская, д.16А, стр.1; Учебный корпус' },
    { id: '1912', title: 'ул. 1-ая Дубровская, д.16А, стр. 2' },
    { id: '1913', title: 'ул. 1-ая Дубровская, д.16А, стр. 2; Учебный корпус' },
    { id: '5084', title: 'ул. Прянишникова 2А' },
    { id: '5085', title: 'ул. Михалковская, 7' },
    { id: '5095', title: 'ул. Павла Корчагина 22 стр.1, 2, 3' },
    { id: '5101', title: 'ул. Павла Корчагина 22 стр.2' },
    { id: '5102', title: 'ул. Павла Корчагина 22 стр.1' },
    { id: '5103', title: 'ул. Павла Корчагина 22 стр.3' },
    { id: '5104', title: 'ул. Павла Корчагина 22 стр.5' },
    { id: '5105', title: 'ул. Павла Корчагина 22 стр.6' },
    { id: '5106', title: 'ул. Павла Корчагина 20а, к.3 Общежитие №7' },
    { id: '5107', title: 'ул. Садовая - Спасская 4, стр.2; Учебный корпус' },
    { id: '5108', title: 'ул. Садовая - Спасская 4, стр.6' },
    { id: '5109', title: 'ул. Садовая - Спасская 4, стр.8' },
    { id: '5110', title: 'ул. Садовая - Спасская 6, стр.1' },
    { id: '5111', title: 'ул. Рижский проезд 15, к.1' },
    { id: '5857', title: 'ул. Автозаводская 16 (корп.1,2)' },
    { id: '5858', title: 'ул. Автозаводская 16 стр 1 (корп5)' },
    { id: '5863', title: 'ул. Павла Корчагина 22а, к.2, общежитие №11' },
]
const departments: SelectPage[] = [
    { id: '348', title: 'Сантехника' },
    { id: '349', title: 'Электрика' },
    { id: '350', title: 'Плотники' },
    { id: '378', title: 'Лифты' },
    { id: '379', title: 'Уборка' },
    { id: '481', title: 'Техническая поддержка' },
    { id: '488', title: 'Диспетчер' },
    { id: '489', title: 'Охрана' },
]
export default TechnicalMaintenance
