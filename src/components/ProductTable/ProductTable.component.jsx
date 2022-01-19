import React from 'react'
import styled from 'styled-components';

function ProductTable() {
    
    return (
        <MuiTable>
            <table>

            <tbody>
                <tr>
                    <th>Edition</th>
                    <th>Owned by</th>
                    <th>Last Sale Price</th>
                    <th>Last Sale Time</th>
                    <th>List Price</th>
                    <th></th>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    
                    <td> <Edition>#1500 / 4936</Edition></td>
                    <td><OwnedBy>exist</OwnedBy></td>
                    <td>$450.00</td>
                    <td><DateTable>03.23.2021</DateTable></td>
                    <td>$630.00</td>
                    <td><Button>Buy Now</Button></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td><Edition>#1500 / 4936 </Edition> </td>
                    <td><OwnedBy>exist</OwnedBy></td>
                    <td>$450.00</td>
                    <td><DateTable>03.23.2021</DateTable></td>
                    <td>$630.00</td>
                    <td><Button>Buy Now</Button></td>

                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td> <Edition>#1500 / 4936 </Edition></td>
                    <td><OwnedBy>exist</OwnedBy></td>
                    <td>$450.00</td>
                    <td><DateTable>03.23.2021</DateTable></td>
                    <td>$630.00</td>
                    <td><Button>Buy Now</Button></td>

                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td><Edition>#1500 / 4936 </Edition></td>
                    <td><OwnedBy>exist</OwnedBy></td>
                    <td>$450.00</td>
                    <td><DateTable>03.23.2021</DateTable></td>
                    <td>$630.00</td>
                    <td><Button>Buy Now</Button></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td><Edition>#1500 / 4936</Edition></td>
                    <td><OwnedBy>exist</OwnedBy></td>
                    <td>$450.00</td>
                    <td><DateTable>03.23.2021</DateTable></td>
                    <td>$630.00</td>
                    <td><Button>Buy Now</Button></td>

                </tr>
            </tbody>

            </table>
        </MuiTable>
    )
}

export default ProductTable

export const MuiTable = styled.div`
    width: 70vw;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    

     > table, td, th {
        border-collapse: collapse;
        
     }

     > th, td {
         border-bottom: 1px solid #000;
     }

     > table tr th {
         font-family: MigraExtraBold;
         letter-spacing: 0.1em;
         color: #A65EC6;
     }

     > table tr td {
         color: #fff;
         letter-spacing: 0.1em;
     }

     

     > table {
         border-collapse: collapse;
         border-radius: 5px;
         width: 100%;
        
        border-collapse: collapse;
        border-style: hidden;
        -webkit-box-shadow: 6px 6px 35px 2px #000000; 
        box-shadow: 6px 6px 35px 2px #000000;
        
        
        
     }

    
     > tr, td, th {
         padding: 15px;
         font-size: 22px;
         
         
     }

    


`;

export const Edition = styled.div`
    font-family: Fuji-Light;
    font-size: 20px;
    text-decoration: underline #A65EC6;
    opacity: 0.7;
`;

export const OwnedBy = styled.div`
    font-family: Fuji;
    font-size: 20px;
    opacity: 0.8;
    text-decoration: underline #fff;
`;

export const DateTable = styled.div`
    font-size: 20px;
    font-weight: 300;
    opacity: 0.8;
`;

export const Button = styled.div`
    font-family: Fuji-Light;
    letter-spacing: 0.15em;
    font-size: 20px;
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    padding: 10px;


        :before {

            content: '';
            background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
            position: absolute;
            top: -2px;
            left:-2px;
            background-size: 400%;
            z-index: -1;
            filter: blur(5px);
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            animation: glowing 20s linear infinite;
            opacity: 0;
            transition: opacity .3s ease-in-out;
            border-radius: 10px;
        }

        :active {
            color: #000
        }

        :active:after {
            background: transparent;
        }

        :hover:before {
            opacity: 1;
        }

            :after {
                z-index: -1;
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background: #111;
                left: 0;
                top: 0;
                border-radius: 10px;
            }

            @keyframes glowing {
                0% { background-position: 0 0; }
                50% { background-position: 400% 0; }
                100% { background-position: 0 0; }
            }


            `;