import { Wrapper } from '@pages/pe-student/styled'
import { Loader } from '@shared/ui/atoms/loader'
import PageBlock from '@shared/ui/page-block'
import React from 'react'
import { Subdivisions } from './subdivisions'
import { Staff } from './staff'
import { Grid } from './styled/grid'
import Flex from '@shared/ui/flex'
import { useUnit } from 'effector-react'
import { phonebookModel } from '@entities/phonebook'
import useCurrentDevice from '@shared/lib/hooks/use-current-device'
import { SearchBar } from './ui/search'
import { MobileSearch } from './ui/mobile-search'

const AllStaff = () => {
    const [subdivisions, error, subdivisionsLoading] = useUnit([
        phonebookModel.stores.subdivisions,
        phonebookModel.stores.error,
        phonebookModel.stores.pedningGetSubdividions,
    ])

    const { isMobile } = useCurrentDevice()

    return (
        <Wrapper>
            <PageBlock>
                <Flex d="column" gap="15px">
                    <Grid columns={isMobile ? '1fr' : '4fr 7fr'} rows="1fr" columnGap="20px">
                        {isMobile ? <MobileSearch /> : <SearchBar />}
                    </Grid>
                    <Loader
                        data={subdivisions}
                        error={error}
                        load={() => {
                            phonebookModel.events.getSubdivisions()
                        }}
                        loading={subdivisionsLoading}
                        couldBeReloaded
                    >
                        <Grid columns={isMobile ? '1fr' : '4fr 7fr'} rows="1fr" columnGap="20px">
                            {!isMobile && <Subdivisions />}
                            <Staff />
                        </Grid>
                    </Loader>
                </Flex>
            </PageBlock>
        </Wrapper>
    )
}

export default AllStaff
