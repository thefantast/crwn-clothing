import React from 'react'
import styled from 'styled-components';

import Header from '../header/header.component';

import ProductImg from '../../assets/ProductPictures/mo-nm8b-BUnzuk-unsplash.jpg';

function ProductPageHeader() {
    return (
        <ProductPageHeaderContainer>
            <Header />

            <PictureTitle>
                    <h1>The pink Island</h1>
                    <h4>Mojino Moto</h4>
            </PictureTitle>

            <PictureContainer>
                    
                    <Picture />
            </PictureContainer>

        </ProductPageHeaderContainer>
    )
}

export default ProductPageHeader

export const ProductPageHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 900px;
    
    overflow: hidden;

`;

export const PictureTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80vw;
    height: 12%;
    min-height: 80px;
    

    > h1 {
        font-family: MigraExtraBold;
        font-size: 30px;
        color: #fff;
        letter-spacing: 0.12em;
    }

    > h4 {
        font-family: Fuji-Light;
        letter-spacing: 0.1em;
        font-size: 20px;
        color: #A65EC6;
    }

`;

export const PictureContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 80%;
    

`;

export const Picture = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${ProductImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

`


