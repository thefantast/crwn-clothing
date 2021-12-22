import React from 'react'
import styled from 'styled-components';

import Header from '../header/header.component';
import HeadPicture from '../../assets/Background/cash-macanaya-4OLy06seaH4-unsplash.jpg';

function HeadProfile() {
    return (
        <HeaderContainer>
            <Header />
            <h1>Test</h1>
        </HeaderContainer>
    )
}

export default HeadProfile;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 300px;
    background-image: url(${HeadPicture});
    background-position: 50% 25%;

    > h1 {
        font-family: Fuji-Regular;
        font-weight: 900;
        letter-spacing: 0.15em;
        font-size: 70px;
        color: #fff;
        margin-top: 30px;

    }
    

`;


