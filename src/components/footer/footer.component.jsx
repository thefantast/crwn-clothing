import React from 'react'
import styled from 'styled-components';

// icons

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';


function Footer() {
    return (
        <FooterContainer>

        <hr />

            <FooterLinksSection>

                <UnderFooter>
                    <h4>Company</h4>
                    <p>About us</p>
                    <p>How it works</p>
                    <p>Create an NFT</p>
                    <p>What is an NFT?</p>
                </UnderFooter>

                <UnderFooter>
                    <h4>Nifty</h4>
                    <p>Displaying NFT's</p>
                    <p>Report Security Issue</p>
                    <p>Career</p>
                </UnderFooter>

                <UnderFooter>
                    <h4>Other</h4>
                    <p>Get Help</p>
                    <p>API Documentation</p>
                    <p>Term of Use</p>
                </UnderFooter>
            </FooterLinksSection>

            <hr />

            <IconSection>
                <Icons>
                    <InstagramIcon />
                    <PinterestIcon />
                    <TwitterIcon />
                </Icons>

                <CompanyName>
                Mundi All Rights Reserved
                </CompanyName>

            
            </IconSection>

            

        </FooterContainer>
    )
}

export default Footer;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    width: 100vw;
    height: 500px;
    overflow: hidden;

    > hr {
        display: flex;
        color: #fff;
        border: 1px solid;
        width: 70vw;

        opacity:0.4;

    }

`;



export const FooterLinksSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const UnderFooter = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 25vw;
        height: 300px;
        margin: 20px 10px;

        > h4 {
            font-family: Migra;
            font-size:30px;
            color: #A65EC6;
            margin: 10px;
        }

        > p {
            color: #fff;
            font-size: 25px;
            letter-spacing: 0.05em;
            margin: 10px;
        }
`;

export const IconSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center


`;

export const Icons = styled.div`

    .MuiSvgIcon-root {
        color: #fff;
        width: 40px;
        height: 40px;
        margin-left: 20px;
        margin-top: 10px;
    }


`;

export const CompanyName = styled.div`
        color: #fff;
        margin: 20px;
`;