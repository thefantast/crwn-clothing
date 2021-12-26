import React from 'react'
import styled from 'styled-components'

function ProductPictureDescription() {
    return (
        <ProductPictureContainer>
            <ProductDiv>
                <h1>The pink Island</h1>
                <h4>3290 Editions</h4>

               <ProductDesContainer>

                    <span>Created by:</span> <Link><span>Mojino Moto</span></Link>
                    
                </ProductDesContainer>
                
               <ProductDesContainer>

                    <span>Collection:</span> <Link>Iridescent Open Edition by Moto</Link>

               </ProductDesContainer>
               <ProductDesContainer>

                    <span>Released:</span> <Link>Oktober 06, 2021</Link>

               </ProductDesContainer>
               <ProductDesContainer>

                    <span>Original listing:</span> <Link>$333.00</Link>

               </ProductDesContainer>
               <ProductDesContainer>

                    <span>Last sold:</span> <Link>$600.00</Link>

               </ProductDesContainer>
               <ProductDesContainer>

                    <span>Lowest ask:</span> <Link>$615.00</Link>
                    
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
    height: 600px;
    overflow: hidden;

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
        font-family: Fuji-Light;
        letter-spacing:0.13em;
        font-size: 30px;
        color: #A65EC6;

    }

    


`;

export const Link = styled.div`
    font-size: 34px;
    color: #fff;
    letter-spacing: 0.05em;
    opacity: 0.7;

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
    border: 2px solid #A65EC6;

    font-family: MigraExtraBold;
    font-size: 20px;
    letter-spacing: 0.1em;

`;

