import { Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import HandImg from '../../assets/Background/Hand.png';

function Promotion2() {
    return (
        <Promotion2Container>
            <ContainerHand>
                <h1>CASH</h1>  <br/>
                <h2>MACANAYA </h2>
            </ContainerHand>
            <ContainerDescription>
                <h1>WHAT IS SPECIAL <br />ABOUT MACANAYA</h1>
                <h2>Master in create new illusions</h2>
                <hr />
                <p> Whatever your favorite cuisine is, <br />
                    this collection has a piece for you! Don't <br />
                    be afraid to try something new either, <br />
                    you never know what dish you'll absolute love! <br />
                </p>
                <Button>Learn More</Button>
            </ContainerDescription>
        </Promotion2Container>
    )
}

export default Promotion2

export const Promotion2Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 100%;
        height: 700px;
        overflow: hidden;
        
`;

export const ContainerHand = styled.div`
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction:column;
        width: 60%;
        height: 700px;
        background-image: url(${HandImg});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        

        > h1 {
            font-family: Fuji-Light;
            font-size:110px;
            color: #cd8af9;
            text-align: start;
            letter-spacing:0.25em;
            padding: 50px;
            line-height: 40%;
            
            

        }

        > h2 {
            font-family: MigraExtraBold;
            color: #cd8af9;
            font-size:170px;
            text-align: start;
            padding: 50px;
            line-height: 40%;
        }
        

`;

export const ContainerDescription = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    

    > h1 {
        padding-bottom: 5px;
        font-family: Fuji;
        font-weight: 500;
        font-size: 60px;
        letter-spacing: 0.05em;

        color: #fff;

    }

    > h2 {
        padding-bottom: 10px;
        font-family: MigraExtraLight;
        font-size: 18px;
        letter-spacing: 0.15em;
        color: #cd8af9;
    }

    > p {
        padding-top: 5px;
        
        font-size: 22px;
        letter-spacing: 0.05em;
        line-height: 140%;
        color: #EFEFEF;
    }

    > hr {
        
        width: 60%;
        height: 2px;
    }

`;

