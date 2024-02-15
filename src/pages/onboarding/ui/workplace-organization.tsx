import { BoldText } from '@shared/ui/atoms/BoldText'
import { Email } from '@shared/ui/email'
import { Telephone } from '@shared/ui/telephone'
import React from 'react'
import { Contacts } from './contacts'

export const WorkplaceOrganization = () => (
    <>
        <p>
            Для получения доступа к внутренним системам Московского Политеха направьте письмо на электронный адрес{' '}
            <Email email="help@mospolytech.ru" /> c указанием следующей информации:
            <br />
            <BoldText>Тема письма:</BoldText> Доступ к внутренним системам университета
            <br />
            <BoldText>Содержание:</BoldText> Указать необходимые системы, ФИО, должность, подразделение
        </p>
        <p>
            При осуществлении внутренней и внешней переписки посредством электронной почты, связанной с деятельностью
            университета, все работники обязаны использовать корпоративную электронную почту.
        </p>
        <Contacts>
            По всем дополнительным вопросам, связанным с обеспечением технической поддержки на рабочем месте, обращаться
            по телефону <Telephone tel="+74952230523,1111">+7 (495) 223-05-23 доб. 1111</Telephone> или на адрес
            электронной почты <Email email="help@mospolytech.ru" />.
        </Contacts>
    </>
)
