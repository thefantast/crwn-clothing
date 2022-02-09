import React from 'react'
import styled from 'styled-components';

import PopUpArtist from '../PopUpArtist/PopUpArtist.component'


const ProfileArtistItem = ({ title, title2, edition, imageUrl}) => {
    
    return (
        <ProfileArtistItemDiv>
            <ProfileArtistItemPicture style={{backgroundImage: `url(${imageUrl})` }}/>
            <ProfileArtistItemData>
                <h6>{title}</h6>
                <h4>{title2}</h4>
                <span>{edition}</span>
                <PopUpArtistContainer><PopUpArtist /></PopUpArtistContainer>
            </ProfileArtistItemData>
        </ProfileArtistItemDiv>
    )
}

export default ProfileArtistItem

export const ProfileArtistItemDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 335px;
        height: 500px;
        border: 3px solid transparent;
        border-radius: 3px;
        
        -webkit-box-shadow: 0px 9px 25px 11px rgba(3,3,3,0.86); 
        box-shadow: 0px 9px 25px 11px rgba(3,3,3,0.86);
        
        :hover {
            border: 3px solid #cd8af9;
            transition: 1900ms;
        }
    


`;

export const ProfileArtistItemPicture = styled.div`
    width: 320px;
    height: 300px;

        
        background-position: center;
        background-size: 320px 300px;
        background-repeat: no-repeat;
        border-radius: 3px;



`;

export const ProfileArtistItemData = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    margin-left: 10px;
    
    
        

    > h6 {
        font-family: Fuji-Light;
        font-size: 17px;
        letter-spacing: 0.15em;
        color: #fff;
        opacity: 0.7;
        margin-top: 15px;
    }

    > h4 {
        color: #fff;
        font-size: 20px;
        letter-spacing: 0.1em;
        margin-top: 5px;
        margin-bottom: 3px;

    }

    > span {
        font-family: Fuji-Bold;
        letter-spacing: 0.1em;
        opacity: 0.7;
        color: #fff;
        font-size: 15px;
        line-height: 1.7em;
        margin-bottom: 10px;

    }

`;

export const PopUpArtistContainer = styled.div`
        display: flex;
        justify-content: center;
        margin-top: 15px;
`;