import React from 'react'
import styled from 'styled-components'
import Background from '../../assets/Background/a-o-GfQEdpIkkuw-unsplash.jpg';

function Promotion() {
    return (
        <PromotionContainer>
            <ContainerPicture />
            <ContainerText>
                <h1>NFT's</h1>
                <h4>NFT</h4>
                <h2>Find your inspiration here</h2>
                <h3>Here is the place for Artists.</h3>
            
            </ContainerText>
        </PromotionContainer>
    )
}

export default Promotion

export const PromotionContainer = styled.div`
  
    width: 90vw;
    min-height: 800px;
    min-width: 400px;
    margin: 40px;
    

    display: flex;
    justify-content: center;
    

`;

export const ContainerPicture = styled.div`
        width: 50%;
        height: 800px;
        background-image: url(${Background});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 30px;
        margin-right: 10px;


        
`;

export const ContainerText = styled.div`
    width: 50%;
    height: 800px;
    background-color: black;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
    

    >h1 {
        font-family: Fuji-Regular;
        
        font-size: 100px;
        font-style: italic;
        letter-spacing: 0.2em;
        
    }

    >h4 {
        font-family: Migra Extrabold;
        font-weight: 900;
        font-size: 170px;
        font-style: Extrabold;
        color: #cd8af9;
        letter-spacing: 0.5em;
        align-items: center;
    }

    > h2 {
        font-family: Migra regular;
        font-size: 50px;
        font-weight: 100;
        color: #fff;

    }

    > h3 {
        font-family: Migra light;
        font-weight: 100;
    }
`;