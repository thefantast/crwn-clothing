import React from 'react';
import styled from 'styled-components';

import ProfileArtistItem from '../ProfileArtistItem/ProfileArtistItem.component';


class ProfileContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'Mo',
                title2: 'Pool Time',
                edition: '1 Edition',
                imageUrl: 'images/CollectionArtImg/mo-1.jpg',
                id: 1
            },
            {
                title: 'Mo',
                title2: 'The Dining Table',
                edition: '12 Edition',
                imageUrl: 'images/CollectionArtImg/mo-2.jpg',
                id: 2
            },
            {
                title: 'Mo',
                title2: 'Relaxing Area in the Pink',
                edition: '3 Edition',
                imageUrl: 'images/CollectionArtImg/mo-3.jpg',
                id: 3
            },
            {
                title: 'Mo',
                title2: 'Relaxing Area in the Pink',
                edition: '3 Edition',
                imageUrl: 'images/CollectionArtImg/mo-4.jpg',
                id: 4
            }
        ]
        }
    }
    render () {
        return(
        <ProfileDiv>
            <ProfilGrid>

                {
                    this.state.sections.map(({title, title2, edition, imageUrl, id}) => (
                        <ProfileArtistItem key={id} title={title} title2={title2} edition={edition} imageUrl={imageUrl}/> 
                    ))
                }
                
            </ProfilGrid>
        </ProfileDiv>
        )
    }
}

export default ProfileContainer

export const ProfileDiv = styled.div`
    width: 75vw;
    display: flex;
    justify-content: center;
    align-items: center;
    

`;

export const ProfilGrid = styled.div`
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    height: 1000px;
    margin-left: 40px;
    margin-top: 30px;

`;

