import React from 'react'
import styled from 'styled-components'

import ProductPageHeader from '../../components/ProductPageHeader/ProductPageHeader.component';
import ProductPictureDescription from '../../components/ProductPictureDescription/ProductPictureDescription.component';
import ProductTable from '../../components/ProductTable/ProductTable.component'


function ProductPage() {
    return (
        <ProductPageContainer>
            <ProductPageHeader />
            <ProductPictureDescription />
            <ProductTable />
        </ProductPageContainer>
    )
}

export default ProductPage

export const ProductPageContainer = styled.div``;
