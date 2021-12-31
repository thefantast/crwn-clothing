import React from 'react'
import styled from 'styled-components';

import HeadProfile from '../../components/HeadProfile/HeadProfile.component';
import SideProfileContainer from '../../components/SideProfileContainer/SideProfileContainer';
import ProfileContainer from '../../components/ProfileContainer/ProfileContainer.component';
import PopUpArtist from '../../components/PopUpArtist/PopUpArtist.component';

import Footer from '../../components/footer/footer.component';

function ProfileArtist() {
    return (
        <ProfileArtistContainer>
            <HeadProfile />
                <ProfileArtistSection>
                    <SideProfileContainer />
                    <ProfileContainer />
                </ProfileArtistSection>

                <PopUpArtist />

            <Footer />
        </ProfileArtistContainer>
    )
}

export default ProfileArtist

export const ProfileArtistContainer = styled.div`
    
`;

export const ProfileArtistSection = styled.div`
    display: flex;
    flex-direction: row;
`;
