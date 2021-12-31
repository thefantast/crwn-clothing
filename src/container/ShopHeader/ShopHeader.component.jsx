import React from 'react'
import styled from 'styled-components';

import Header2 from '../../components/header/header.component';

import HeaderImg from './ShopHeader.png'

function ShopHeader() {
    return (
        
        <HeaderSection>
            <BackgroundImg>
            <Header2 />
           <ContainerDiv>
           <h1>Marketplace</h1>
           
           </ContainerDiv> 
           </BackgroundImg> 
        </HeaderSection>
        
    )
}

export default ShopHeader



export const HeaderSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
min-height: 400px;
height: 60vh;
width: 100%;
overflow: hidden;

border-radius: 10px;
position: relative;
overflow: hidden;



background-image: url(${HeaderImg});
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 20%;


`;

export const BackgroundImg = styled.div`
    background: linear-gradient(0deg, rgba(27,27,27,1) 2%, rgba(0,0,0,0.5760679271708684) 19%, rgba(0,212,255,0) 80%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    min-height: 400px;
    height: 60vh;
    width: 100%;
    overflow: hidden;
`;

export const ContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 100px;
    border-radius: 10px;
    

    > h1 {
    font-size: 70px;
    font-family: MigraExtraBold;
    color: white;
    letter-spacing: 0.2em;
    line-height: 100%;
    margin-bottom: 30vh;
    
    
    
}

`;