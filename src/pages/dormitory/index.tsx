import { LinkItem } from '@shared/ui/link-item'
import PageBlock from '@shared/ui/page-block'
import { CenterPage, Message } from '@ui/atoms'
import React from 'react'
import { HiOutlineDocumentText } from 'react-icons/hi'

const DormitoryPage = () => {
    return (
        <CenterPage padding="10px">
            <PageBlock>
                <Message title="Уважаемые студенты!" type="info" lineHeight="1.4rem" fontSize="0.85rem">
                    В данном разделе представлен порядок предоставления мест в студенческом городке Московского Политеха
                    с указанием актуального списка нуждающихся в общежитии.
                </Message>
                <LinkItem
                    title="Актуальный список"
                    path="https://vk.com/away.php?to=https%3A%2F%2Fe.mospolytech.ru%2Fold%2Fstorage%2Ffiles%2FDormitory_actual_list.pdf&cc_key="
                    id="https://vk.com/away.php?to=https%3A%2F%2Fe.mospolytech.ru%2Fold%2Fstorage%2Ffiles%2FDormitory_actual_list.pdf&cc_key="
                    color="grey"
                    isExternalPage
                    icon={<HiOutlineDocumentText />}
                    showMore={false}
                />
            </PageBlock>
        </CenterPage>
    )
}

export default DormitoryPage
