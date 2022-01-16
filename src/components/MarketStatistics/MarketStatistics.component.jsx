import React from 'react'
import styled from 'styled-components'

function MarketStatistics() {
    return (
        <MarketStatisticsContainer>
            <GridContainer>
                <GridItem>
                    <SaleProzent>
                        <h3>$657.82</h3>
                        <span>78%</span>
                    </SaleProzent>
                    
                    <h4>Average Sales Price</h4>

                </GridItem>

                <GridItem>
                    
                        <SaleProzent>
                            <h3>$3,564,222.29</h3>
                            
                        </SaleProzent>

                        <h4>Secondary Market <br /> Value</h4>   
                </GridItem>

                <GridItem>
                    <SaleProzent>
                        <h3>5640</h3>
                
                    </SaleProzent>

                    <h4>Secondary Market Sales</h4>
                </GridItem>

                <GridItem>
                    <SaleProzent>
                        <h3>2386</h3>
        
                    </SaleProzent>

                    <h4>Unique Owners</h4>
                </GridItem>

                <GridItem>
                    <SaleProzent>
                        <h3>$540.00</h3>

                    </SaleProzent>

                    <h4>Floor Price</h4>
                </GridItem>

                <GridItem>
                    <SaleProzent>
                        <h3>7.28%</h3>

                    </SaleProzent>

                    <h4>For Sale</h4>
                </GridItem>

                <GridItem>
                    <SaleProzent>
                        <h3>$110,886.36</h3>
                    </SaleProzent>

                    <h4>Volume Last 30 Days</h4>
                </GridItem>

                <GridItem>
                    <SaleProzent>
                        <h3>$333.00</h3>
                    </SaleProzent>

                    <h4>Highest Active Offer</h4>
                </GridItem>
            </GridContainer>
        </MarketStatisticsContainer>
    )
}

export default MarketStatistics

export const MarketStatisticsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 600px;      

`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;


`;

export const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    
    width: 350px;
    height: 150px;
    border-radius: 25px;
    margin: 20px;
    font-size: 30px;
    text-align: center;
    color: #fff;

    -webkit-box-shadow: 7px 15px 37px 5px rgba(0,0,0,0.96); 
box-shadow: 7px 15px 37px 5px rgba(0,0,0,0.96);

    > h4 {
        font-family: Migra;
        letter-spacing: 0.1em;
        font-size: 27px;
        opacity: 0.6;
        padding-left: 30px;
        padding-right: 30px;
        text-align: left;
        color: #A65EC6;
    }

`;

export const SaleProzent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;
    padding-left: 30px;
    

    >h3 {
        font-size: 30px;

    }

    > span {
        font-size: 20px;
        margin-left: 20px;
        opacity: 0.7;
    }

`;
