import React from 'react';
import styled from 'styled-components';

import ProfileArtistItem from '../ProfileArtistItem/ProfileArtistItem.component';


function ProfileContainer() {
    
    return (
        <ProfilContainer>
            <ProfileArtistItem  /> 
        </ProfilContainer>
    )
}

export default ProfileContainer

export const ProfilContainer = styled.div`
    width: 70vw;
    height: 1000px;
    margin-left: 40px;
    margin-top: 30px;

    

`;

