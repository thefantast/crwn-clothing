import React from 'react'
import styled from 'styled-components';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EmailIcon from '@mui/icons-material/Email';


import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

function SideProfileContainer() {
    return (
        <SideSection>
            <ProfilPictureDiv>
                <AccountCircleIcon />
                <h2>Cayan Machana</h2>
                <span>3D Artist and Designer</span>
            </ProfilPictureDiv>

            <LocationDiv>
                <span>
                    <LocationOnIcon />
                    Zürich, Switzerland - Europa
                </span>
            </LocationDiv>

            <FollowButton>
                <OneButton>
                
                <AddCircleIcon />
                    <span>Follow</span>
                </OneButton>

                <OneButton>
                
                <EmailIcon />
                <span>Message</span>
                </OneButton>

            </FollowButton>

            <ViewDiv>

            <ViewContainer><span>Views</span> <span>60.032</span></ViewContainer> 
            <ViewContainer><span>Follower</span> <span>10.023</span></ViewContainer>
            <ViewContainer><span>I Follow</span> <span>448</span></ViewContainer>

            </ViewDiv>

            <SocialMediaDiv>
                <span>On the web</span>
                <div>
                    
                    <SocialContainer><InstagramIcon /> <span>Instagram</span></SocialContainer>
                    <SocialContainer><PinterestIcon /> <span>Pinterest</span></SocialContainer>
                
                </div>
            </SocialMediaDiv>

            <CarrerPathDiv>
                <h5>Experience</h5>
                <span>Univerity of Madrid</span>
                <span>SAE Zürich</span>
            </CarrerPathDiv>

            <AboutDiv>
                <h5>About Me</h5>

                <span>Hi, I`m Cha, an experienced illustrator with more than 150 commercial works in 3D illustration!
                I create magical illustrations for:</span>
            </AboutDiv>

            <MemberSince></MemberSince>

        </SideSection>
    )
}

export default SideProfileContainer

export const SideSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    min-width: 300px;
    height: 1000px;
    background-color: green;
    border-radius: 20px 20px 20px 0px;
    background-color: #FFFFFF;
    position: relative;
    top: -100px;
    margin-left: 30px;
    
`;

export const ProfilPictureDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 200px;
    

    .MuiSvgIcon-root {
        width: 120px;
        height: 120px;
    }

`;

export const LocationDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    

    .MuiSvgIcon-root {
        width: 15px;
        height: 15px;
    }


`;

export const FollowButton = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    

`;

export const OneButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 28px;
    background-color: #A65EC6;
    margin: 4px;
    border-radius: 20px;

    .MuiSvgIcon-root {
        width: 20px;
        height: 25px;
    }

    > span {
        margin: 4px;
        letter-spacing: 0.10em;
    }

`;

export const ViewDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 150px;


`;

export const ViewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30px;

    > span {
        font-size: 17px;
    }

`;

export const SocialMediaDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

    > div {
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        border-radius: 30px;
        
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    border: 1px solid #8D8D8D;
    width: 100%;
    height:30px;
    margin: 10px;

    > span {
        margin-left: 5px;
    }

`;

export const CarrerPathDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        width: 85%;
`;

export const AboutDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        width: 85%;

        > h5 {
            font-size: 15px;
            margin-top: 5px;
            margin-bottom: 5px;
        }
`;


export const MemberSince = styled.div`

`;