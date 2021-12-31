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
            <ProfilContainer>

                {
                    this.state.sections.map(({title, title2, edition, imageUrl, id}) => (
                        <ProfileArtistItem key={id} title={title} title2={title2} edition={edition} imageUrl={imageUrl}/> 
                    ))
                }
                
            </ProfilContainer>
        )
    }
}

export default ProfileContainer

export const ProfilContainer = styled.div`
    display: grid;
    grid-template: 325px / auto auto auto;
    grid-row-gap: 100px;
    grid-column-gap: 10px;
    width: 70vw;
    height: 1000px;
    margin-left: 40px;
    margin-top: 30px;

    

`;

