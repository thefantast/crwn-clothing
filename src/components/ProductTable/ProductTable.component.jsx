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
        border: 1px solid #A65EC6;
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
         border-radius: 20px;
         width: 100%;

         border-collapse: collapse;
        border-radius: 10px;
        border-style: hidden; /* hide standard table (collapsed) border */
        
        
        
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Fuji-Bold;
    font-size: 17px;
    color: #1b1b1b;
    width: 100%;
    height: 30px;
    background-color: purple;
    border-radius: 20px;

`;