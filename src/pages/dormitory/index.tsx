import React from 'react'

import PageBlock from '@shared/ui/page-block'
import { CenterPage, FileLink, Message } from '@ui/atoms'

const DormitoryPage = () => {
    return (
        <CenterPage padding="10px">
            <PageBlock>
                <Message title="Уважаемые студенты!" type="info">
                    <p>
                        В данном разделе представлены списки обучающихся, нуждающихся в общежитии. Заселение проводится
                        в порядке очереди. Здесь вы можете узнать свой номер в списке.
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
