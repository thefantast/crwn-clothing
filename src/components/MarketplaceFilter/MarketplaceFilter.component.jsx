import React from 'react';
import styled from 'styled-components';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function MarketplaceFilter() {

  return <MarketplaceFilterSection>
            <MarketplaceFilterContainer>
                <TitleDiv>
                    <h3>Discover digital artworks by talented artists.</h3>
                </TitleDiv>
                <FilterDiv>
                    <input type="text"  placeholder="search" />

                    <DropdownContainer>
                        <DropdownDiv>
                            All <ArrowDropDownIcon />
                        </DropdownDiv>
                        <DropdownDiv>
                         Latest <ArrowDropDownIcon />
                        </DropdownDiv>
                    </DropdownContainer>
                 </FilterDiv>
                
            </MarketplaceFilterContainer>
    
        </MarketplaceFilterSection>;
}

export default MarketplaceFilter;

export const MarketplaceFilterSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 150px;
    
`;

export const MarketplaceFilterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    

`;

export const TitleDiv = styled.div`
    width: 100%;
    color: #fff;
    margin-bottom: 15px;
    font-size: 20px;

`;

export const FilterDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fff;

    > input {
        width: 300px;
        border-radius: 7px;
        border: 1px solid #cd8af9;
        background-color: transparent;
        font-family: 'Fuji';
        color: #fff;
        padding-left: 10px;
       
    }

`;

export const DropdownContainer = styled.div`
    display: flex;
    flex-direction: row;

`;

export const DropdownDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    width: 150px;
    border: 1px solid #fff;
    color: #fff;
    margin-left: 17px;

`;