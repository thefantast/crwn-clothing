import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import Background from '../../assets/Background/micha-frank-3.jpg';

function Promotion3() {
    return (
    <Promotion3Section>
        <Promotion3Container>
            <Promotion3Div>
                <h4> Find <br />
                    real digital Art.</h4>
                    <Link to='/shop'>
                    <Promotion3Button> 
                            <span>View marketplace</span>
                    </Promotion3Button>
                    </Link>
                    <span>Art by Micha Frank</span>
                </Promotion3Div>
        </Promotion3Container>
    </Promotion3Section>
    )
}


export default Promotion3;

export const Promotion3Section = styled.div`
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

export const Promotion3Container = styled.div`
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

export const Promotion3Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    > Link {
        color: #fff;
    }

    > h4 {
        font-family: 'Fuji-Bold';
        font-size: 60px;
        letter-spacing:0.05em;
    }

`;



export const Promotion3Button = styled.div`
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
