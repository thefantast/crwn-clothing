import React from 'react'
import styled from 'styled-components'

import PopUpArtist from '../PopUpArtist/PopUpArtist.component';
import { Link } from 'react-router-dom';

function ProductPictureDescription() {
    return (
        <ProductPictureContainer>

            <ProductDiv>
                <PopUpArtist />
                
                <h4>3290 Editions</h4>

               <ProductDesContainer>

                    <span>Created by</span> <Link to='/profileArtist'> <Links><span>Mojino Moto</span></Links> </Link>
                    
                </ProductDesContainer>
                
               <ProductDesContainer>

                    <span>Collection</span> <Links>Iridescent Open Edition by Moto</Links>

               </ProductDesContainer>
               <ProductDesContainer>

                    <span>Released</span> <Links>Oktober 06, 2021</Links>

               </ProductDesContainer>
               <ProductDesContainer>

                    <span>Original listing</span> <Links>$333.00</Links>

               </ProductDesContainer>
               <ProductDesContainer>

                    <span>Last sold</span> <Links>$600.00</Links>

               </ProductDesContainer>
               <ProductDesContainer>

                    <span>Lowest ask</span> <Links>$615.00</Links>
                    
               </ProductDesContainer>

            </ProductDiv>

            <DescriptionButton>
                    <Button>Make Offer</Button>
                    <Button>Get Price Alert</Button>
            </DescriptionButton>
            
        </ProductPictureContainer>
    )
}

export default ProductPictureDescription

export const ProductPictureContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 650px;
    overflow: hidden;  

`;

export const ExperienceButton = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 70px;
        border: 2px solid transparent;
        border-radius: 20px;
        margin-top: 15px;
        margin-bottom: 17px;
        
        font-family: Fuji-Bold;
        letter-spacing: 0.05em;
        font-size: 20px;
        color: #fff;

        -webkit-box-shadow: -3px 9px 24px 3px rgba(3,3,3,0.6); 
        box-shadow: -3px 9px 24px 3px rgba(3,3,3,0.6);

        cursor: pointer;

        transition: all 0.5s ease-in-out;

        :hover {
            background-color: #DEDEDE;
            color: #000;

        }
`;

export const ProductDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;

    >h1 {
        color: #A65EC6;
        margin: 10px;

    }

    >h4 {
        color:#fff;
        margin-top: 20px;
    }
           

`;


export const ProductDesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    min-width: 800px;
    
    margin-top: 25px;

    > span {
        font-family: Fuji;
        font-weight: 900;
        letter-spacing:0.05em;
        font-size: 24px;
        color: #fff;
    }

`;

export const Links = styled.div`
    font-family: Fuji-Light;
    font-size: 25px;
    color: #fff;
    letter-spacing: 0.08em;
    opacity: 0.8;

    > span {
        text-decoration: underline #A65EC6;
        
    }


`;

export const DescriptionButton = styled.div`
    display: flex;
    flex-direction: row;
    color: #fff;   

`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    margin: 10px;
    border-radius: 20px;
    border: 2px solid transparent;
    cursor: pointer;

    margin-bottom: 40px;

    font-family: Fuji-Bold;
    font-size: 20px;
    letter-spacing: 0.1em;

    -webkit-box-shadow: 1px 10px 33px -4px rgba(0,0,0,0.89); 
    box-shadow: 1px 10px 33px -4px rgba(0,0,0,0.89);

    transition: all 0.5s ease-in-out;
    

    :hover {
      
        background: #FFFF;
        color: #000;
    }

`;

 

