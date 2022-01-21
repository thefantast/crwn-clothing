import React from 'react'
import styled from 'styled-components'



function ProductFilter() {
    return (
        <ProductFilterContainer>

                <FilterHeader>
                    <h5>Filters</h5>
                    <hr />
                </FilterHeader>

                <Status>
                    <h5>Status</h5>

                    <StatusContainer>
                    
                    <input type="checkbox" id="huey" name="drone" value="huey" />
                    <label htmlFor="huey">on sale</label>
                    </StatusContainer>

                    <StatusContainer>
                    <input type="checkbox" id="huey" name="drone" value="huey" />
                    <label htmlFor="huey">accepting offers</label>
                    </StatusContainer>

                </Status>

                <Price>

                <h5>Price(USD)</h5>
                <hr />

                <PriceDiv>
                <label htmlFor="fname"></label><br />
                <input type="text" id="fname" name="fname" placeholder="Min" />

                <label htmlFor="Sname"></label><br />
                <input type="text" id="Sname" name="Sname" placeholder="Max" />

                </PriceDiv>

                </Price>
            
            
            
        </ProductFilterContainer>
    )
}

export default ProductFilter

export const ProductFilterContainer = styled.div`
    width: 400px;
    min-width: 250px;
    height: 400px;
    min-height: 300px;
    border: 1px solid transparent;

    border-radius: 7px;
    margin-right: 40px;

    -webkit-box-shadow: 6px 6px 35px 2px #000000; 
    box-shadow: 6px 6px 35px 2px #000000;


`;

export const FilterHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 17%;
    width: 100%;
    color:  #fff;

    > h5{
        font-family: MigraExtraBold;
        font-size: 25px;
        letter-spacing: 0.05em;
        margin-left: 10px;
        margin-bottom: 5px;

    }

    > hr {
        width: 80%;
    }
`;

export const Status = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #fff;
    padding-left: 40px;

    > h5 {
        font-family: MigraExtraBold;
        letter-spacing: 0.05em;
        font-size: 25px;
        color: #A65EC6;
    }

`;

export const StatusContainer = styled.div`
    display: block;
    position: relative;
    padding-left: 10px;
    cursor: pointer;

    > input:checked {
        background-color: #A65EC6;
    }

    

    > label {
        font-size: 25px;
        letter-spacing: 0.02em;
        padding-left: 10px;
    }

`;



export const Price = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 20px;

        > h5{
        font-family: MigraExtraBold;
        font-size: 24px;
        letter-spacing: 0.1em;
        margin-left: 10px;
        margin-bottom: 5px;
        color: #fff;

    }

        > hr {
        width: 80%;
        margin-bottom: 20px;
    }
`;

export const PriceDiv = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        > input {
            height: 40px;
            margin-left: 5px;
            border-radius: 10px;
            background-color: transparent;
            border: 1px solid #fff;
            

            
            
        }

        
`;




