import React from 'react'
import styled from 'styled-components'

import ProductPageHeader from '../../components/ProductPageHeader/ProductPageHeader.component';
import ProductPictureDescription from '../../components/ProductPictureDescription/ProductPictureDescription.component';
import ProductTable from '../../components/ProductTable/ProductTable.component'
import ProductFilter from '../../components/ProductFilter/ProductFilter.component'
import MarketStatistics from '../../components/MarketStatistics/MarketStatistics.component'
import ProductStory from '../../components/ProductStory/ProductStory.component';

import Footer from '../../components/footer/footer.component'



function ProductPage() {
    return (
        <ProductPageContainer>
            <ProductPageHeader />
            <ProductPictureDescription />
            <ProductStory />
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
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #1F1F1F;
    

`;

