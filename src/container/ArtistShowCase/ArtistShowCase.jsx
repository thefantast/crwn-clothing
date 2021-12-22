import React from 'react'
import styled from 'styled-components'

import ArtImage from '../../assets/Background/simon-lee-IEgvy4o3byM-unsplash.jpg'

function ArtistShowCase() {
    return (
        <ArtistShowContainer>
                <ShowCaseDesription>
                    <h3>Artist</h3>
                    <h4>SIMON LEE</h4>
                    <h5>3D Artist and Designer</h5>
                    <p>
                        The Angel’s Share is derived from the
                        legends surrounding the yearly evaporation
                        of the volume from cask whiskey during its
                        creation. Whiskeys are generally aged in
                        wooden barrels with the wood absorbing some
                        of the more unpleasant aspects of distillate 
                        nd in return, imbues the liquid with flavours
                        unique to itself.
                    </p>

                </ShowCaseDesription>

                <PictureContainer>
                

                </PictureContainer>

        
        </ArtistShowContainer>
            
        
    )
}

export default ArtistShowCase

export const ArtistShowContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 700px;
        overflow: hidden;
        
        
`;

export const ShowCaseDesription = styled.div`
        display: flex;
        flex-direction: column;

        width: 30%;
        overflow: hidden;

        > h3 {
                font-family: Migra;
                letter-spacing: 0.2em;
                font-size: 80px;
                color: #A65EC6;
                line-height: 100%;
        }
        
        > h4 {
                font-size: 30px;
                font-family: Fuji-Light;
                letter-spacing: 0.25em;
                color: #fff;
        }

        > h5 {
            font-family: MigraExtraLightItalic;
            letter-spacing: 0.3em;
            font-size: 20px;
            color: #fff;
            opacity: 0.5;
            margin-top: 4px;
        }

        > p {

            font-size: 20px;
            color: #fff;
            opacity: 0.9;
            margin-top: 10px;
            letter-spacing: 0.1em;
            line-height:150%;
            margin-right: 20px;

        }

`;

export const PictureContainer = styled.div`
        width: 30%;
        height: 550px;
        background-color: red;
        border-radius: 20px;
        background-Image: url(${ArtImage});
        background-position: center;
        background-size: contain;
        background-color: transparent;

`;

