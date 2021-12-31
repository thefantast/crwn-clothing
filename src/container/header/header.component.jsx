import React from 'react';

import BackgroundVideo from './background-video/Milky-Way.mp4';
import Hand2 from '../../assets/Background/Hand2.png'

import Header2 from '../../components/header/header.component';

import styled from 'styled-components';

function Header() {
    return (

        <HeaderSection autoPlay loop muted>
            <Header2 />
            <HandTwo />
           <ContainerDiv>
           <h1>Mundi</h1>
           <h2>THE ART GALLERY</h2>
           </ContainerDiv> 
            <video autoPlay="autoplay" loop="loop" muted>
                
                <source src={BackgroundVideo} type="video/mp4" />
                
            </video>          
        </HeaderSection>
    )
}

export default Header


export const HeaderSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
min-height: 400px;
height: 80vh;
width: 100%;

border-radius: 10px;
position: relative;
overflow: hidden;

padding-bottom: 30px;

background: linear-gradient(0deg, rgba(27,27,27,1) 3%, rgba(27,27,27,0.758140756302521) 20%, rgba(0,212,255,0) 100%);



> video {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
    
    
}

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
    margin: 10px;   
    
}

> h2 {
    font-size: 70px;
    font-family: MigraExtraBoldItalic;
    color: #A65EC6;
    letter-spacing: 0.2em;
    line-height: 100%;
    margin-bottom: 30px;  

}
`;

export const HandTwo = styled.div`
    width: 50%;
    height: 700px;
    background-image: url(${Hand2});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    opacity: 0.7;

`;