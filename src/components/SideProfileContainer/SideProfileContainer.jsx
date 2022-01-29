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
    border-radius: 20px 20px 20px 0px;
    
    background-color: transparent;
    position: relative;
    top: -100px;
    margin-left: 30px;

    -webkit-box-shadow: 0px 9px 25px 11px rgba(3,3,3,0.86); 
    box-shadow: 0px 9px 25px 11px rgba(3,3,3,0.86);
    
`;

export const ProfilPictureDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 200px;
    color: #fff;
    

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
    color: #fff;
    margin-bottom: 10px;
    

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
    height: 35px;
    background-color: transparent;
    border: 1px solid #A65EC6;
    margin: 4px;
    border-radius: 20px;

    .MuiSvgIcon-root {
        width: 20px;
        height: 25px;
        color: #fff;
    }

    > span {
        margin: 4px;
        letter-spacing: 0.10em;
        color: #fff;
    }

`;

export const ViewDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 150px;
    color: #fff;


`;

export const ViewContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    color: #fff;

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
    color: #fff;

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
    border: 1px solid #A65EC6;
    width: 100%;
    height:35px;
    margin: 5px;
    

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
        color: #fff;

        > h5{
            font-size: 17px;
            color: #A65EC6;
            margin-top: 10px;
            margin-bottom: 10px;
        }
`;

export const AboutDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        width: 85%;
        color: #fff;

        > h5 {
            font-size: 17px;
            color: #A65EC6;
            margin-top: 10px;
            margin-bottom: 10px;
            
        }
`;


export const MemberSince = styled.div`

`;