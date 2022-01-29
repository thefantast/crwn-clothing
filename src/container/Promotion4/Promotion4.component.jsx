import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import Background from '../../assets/Background/cash-car.jpg';

function Promotion4() {
    return (
    <Promotion4Section>
        <Promotion4Container>
            <Promotion4Div>
                <h4> View the Artwork from Cash-Guy.</h4>
                    <Link to='/shop'>
                    <Promotion4Button> 
                            <span>View marketplace</span>
                    </Promotion4Button>
                    </Link>
                    <span>Art by Cash Guy</span>
                </Promotion4Div>
        </Promotion4Container>
    </Promotion4Section>
    )
}


export default Promotion4;

export const Promotion4Section = styled.div`
    width: 100vw;
    height: 800px;
    background: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    justify-content: flex-start;
    align-items: center;

`;

export const Promotion4Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40vw;
    min-width: 500px;
    height: 100%;
    color: #fff;

    > h4 {
        font-family: 'Fuji-Bold';
        font-size: 60px;
        letter-spacing:0.05em;
    }

`;

export const Promotion4Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 170px;
    
    > Link {
        color: #fff;
    }

    > h4 {
        font-family: 'Fuji-Bold';
        font-size: 60px;
        letter-spacing:0.05em;
    }

`;



export const Promotion4Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 200px;
    height: 40px;
    border: 1px solid #fff;
    margin-top: 20px;
    margin-bottom: 20px;
    opacity: 0.8;
    color: #fff;
    letter-spacing: 0.02em;
    
`;
