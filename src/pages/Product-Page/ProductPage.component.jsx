import React from 'react'
import styled from 'styled-components'

import ProductPageHeader from '../../components/ProductPageHeader/ProductPageHeader.component';
import ProductPictureDescription from '../../components/ProductPictureDescription/ProductPictureDescription.component';
import ProductTable from '../../components/ProductTable/ProductTable.component'
import ProductFilter from '../../components/ProductFilter/ProductFilter.component'
import MarketStatistics from '../../components/MarketStatistics/MarketStatistics.component'

import Footer from '../../components/footer/footer.component'



function ProductPage() {
    return (
        <ProductPageContainer>
            <ProductPageHeader />
            <ProductPictureDescription />
            <TableFilterSection>
            <ProductFilter />
            <ProductTable />
            </TableFilterSection>
            <MarketStatistics />
            <Footer />
        </ProductPageContainer>
    )
}

export default ProductPage

export const ProductPageContainer = styled.div``;

export const TableFilterSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    

`;

