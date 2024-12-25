import PageBlock from '@shared/ui/page-block'
import { CenterPage, FileLink, Message } from '@ui/atoms'
import React from 'react'

const DormitoryPage = () => {
    return (
        <CenterPage padding="10px">
            <PageBlock>
                <Message title="Уважаемые студенты!" type="info">
                    <p>
                        В данном разделе представлен порядок предоставления мест в студенческом городке Московского
                        городке Московского Политеха с указанием актуального списка нуждающихся в общежитии.
                    </p>
                </Message>
                <FileLink
                    type="document"
                    link="https://e.mospolytech.ru/old//storage/files/Ochered_na_zaselenie_obuchjuschihsya_po_napravleniju_bakalavriat_i_spetsialitet.docx"
                    title="Очередь на заселение обучающихся по направлению бакалавриат и специалитет"
                />
                <FileLink
                    type="document"
                    link="https://e.mospolytech.ru/old//storage/files/Ochered_na_zaselenie_obuchjuschihsya_po_napravleniju_magistratura_i_aspirantura_.docx"
                    title="Очередь на заселение обучающихся по направлению магистратуры и аспирантуры"
                />
            </PageBlock>
        </CenterPage>
    )
}

export default DormitoryPage
