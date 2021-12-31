import React from 'react'
import styled from 'styled-components';

import Background1 from '../../assets/Background/simon-lee-hbFKxsIqclc-unsplash.jpg'

const ProfileArtistItem = ({ title, title2, edition, imageUrl}) => {
    
    return (
        <ProfileArtistItemDiv>
            <ProfileArtistItemPicture style={{backgroundImage: `url(${imageUrl})` }}/>
            <ProfileArtistItemData>
                <h6>{title}</h6>
                <h4>{title2}</h4>
                <span>{edition}</span>
            </ProfileArtistItemData>
        </ProfileArtistItemDiv>
    )
}

export default ProfileArtistItem

export const ProfileArtistItemDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 325px;
        height: 400px;
        
        
        border-radius: 10px;
        
        :hover {
            border: 3px solid #A65EC6;
            transition: 600ms;
        }
    


`;

export const ProfileArtistItemPicture = styled.div`
    width: 320px;
    height: 300px;

        
        background-position: center;
        background-size: 320px 300px;
        background-repeat: no-repeat;
        border-radius: 27px;



`;

export const ProfileArtistItemData = styled.div`
        margin-left: 10px;

    > h6 {
        font-family: Fuji-Light;
        font-size: 15px;
        letter-spacing: 0.1em;
        color: #A65EC6;
        opacity: 0.7;
        margin-top: 5px;
    }

    > h4 {
        color: #fff;
        font-size: 20px;
        letter-spacing: 0.1em;

        margin-top: 5px;
        margin-bottom: 3px;

    }

    > span {
        font-family: MigraExtraBold;
        letter-spacing: 0.07em;
        opacity: 0.7;
        color: #fff;
        font-size: 15px;

    }

`;
