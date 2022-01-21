import React from 'react'
import styled from 'styled-components'

import ProfileIcon from '../../assets/ProfilePicture/ProductProfile.png';

import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ProductStory() {
    return (
    <ProductStorySection>
        
        <EditionContainer>
            <EditionContainerHash>
                <h6>EDITION#</h6>
                <span>336650</span>
            </EditionContainerHash>
            <EditionContainerEdition>
                <h6>EDITIONS</h6>
                <span>1 of 1</span>
            </EditionContainerEdition>
            <EditionContainerAvailable>
                <h6>AVAILABLE</h6>
                <span>0</span>
            </EditionContainerAvailable>
        </EditionContainer>

        <ProductStoryContainer>
           <ProductStoryTitle>
            <h4>
                Description
            </h4>

            <h6> The story about the picture.</h6>

            <TheLine />    

            <p>
                The Mudjadji presents a confusing
                case of life imitating myth imitating life.
                They are said to be the embodiment of a tribal rain
                goddess so powerful that even her state of mind can
                change the weather. She can send storms to punish enemies
                or gentle rain to nurture friends. Every year, the Queen ex.
            </p>
           
           </ProductStoryTitle>

           <Separation />

           <ArtistProfile>
                <h2>About the Creator</h2>
                <ProfileIconContainer />
                <ArtistName>Mojino Moto</ArtistName>
                <TheLine />

                <AboutArtist>
                        Some of the stories I’ve heard from time to time about the deep connections
                        people have had with my work are remarkable, yet I suspect that there are a thousand
                        more stories that are less dramatic, but important nonetheless.
                </AboutArtist>
                <TheLine />
                <Experience>
                    <h3>Experience</h3>
                            <span>
                                BScS in Architecture in Arizona
                                Artschool Manhatten.
                            </span>
                    <h3>Location</h3>
                            <span>Cittier</span>
                </Experience>

           </ArtistProfile>


        </ProductStoryContainer>

        <ViewsandLinks>
            <ShareIconDiv><ShareIcon /> </ShareIconDiv> <VisibilityDiv><VisibilityIcon /> <span>120</span></VisibilityDiv>  <FavoriteDiv><FavoriteIcon /> <span>23</span></FavoriteDiv>
        </ViewsandLinks>

    </ProductStorySection>

    )
}

export default ProductStory

export const ProductStorySection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 1000px;
    

    background-color: #262626;
`;

export const EditionContainer = styled.div`
    width: 80vw;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    
`;

export const EditionContainerHash = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    padding-right: 20px;
    font-size: 20px;

    > h6 {
    font-family: Fuji-Light;
    font-size: 20px;
    
    letter-spacing: 0.1em;
    line-height: 1.7em;
    margin-bottom: 5px;
    }


`;

export const EditionContainerEdition = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #fff;
    padding-right: 20px;
    font-size: 20px;

    > h6 {
    font-family: Fuji-Light;
    font-size: 20px;
    padding-right: 10px;
    letter-spacing: 0.1em;
    line-height: 1.7em;
    margin-bottom: 5px;

    }
    
    > span {
        color: #fff;
        padding-right: 10px;
        font-size: 20px; 
    }
`;

export const EditionContainerAvailable = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #fff;
    padding-right: 20px;
    font-size: 20px;

    > h6 {
    font-family: Fuji-Light;
    font-size: 20px;
    padding-right: 10px;
    letter-spacing: 0.1em;
    line-height: 1.7em;
    margin-bottom: 5px;

    }
    
    > span {
        color: #fff;
        padding-right: 10px;
        font-size: 20px; 
    }
`;



export const ProductStoryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85vw;
    height: 700px;
    background-color: #101010;
    border-radius: 10px;

    -webkit-box-shadow: 6px 6px 35px 2px #000000; 
    box-shadow: 6px 6px 35px 2px #000000;

`;

export const ViewsandLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 50vw;
    height: 100px;
    color: #fff;
    
    

    .MuiSvgIcon-root {
        
        color: #fff;
    }
`;

export const ShareIconDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
`;

export const VisibilityDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;

    font-family: 'Fuji-Light';
    font-size: 17px;

    .MuiSvgIcon-root {

        margin-right: 5px;
        color: #fff;
    }
    
`;

export const FavoriteDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    
    .MuiSvgIcon-root {
        
        margin-right: 5px;
        color: #fff;

    }
`;

export const ProductStoryTitle = styled.div`
    width: 40%;
    height: 100%;
    
    
    > h4 {
        font-family: MigraExtraBold;
        letter-spacing: 0.15em;
        font-size: 30px;
        color: #fff;

        margin-top: 40px;
    }

    > h6 {
        font-family: Fuji-Light;
        font-size: 15px;
        letter-spacing: 0.17em;
        color: #A65EC6;
        opacity: 0.9;
    }

    > hr {
        color: #fff;
        
    }

    > p {
        font-family: Fuji-Light;
        font-size: 20px;
        color: #fff;
        letter-spacing: 0.1em;
        line-height: 1.4em;
        padding-right: 15px;
        padding-top: 15px;       

    }
`;

export const TheLine = styled.div`
    width: 50%;
    height: 1px;
    background-color: #fff;

    margin-top: 4px;
    margin-bottom: 10px;

`;

export const Separation = styled.div`
    width: 2px;
    height: 80%;
    background-color: #fff;
`;

export const ArtistProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 40%;
    height: 100%;
    
    
    margin-top: 50px;

    > h2 {
        font-family: MigraExtraBold;
        font-size: 30px;
        letter-spacing: 0.15em;
        color: #fff;
        padding-top: 40px;
        padding-bottom: 30px;
    }

`;

export const ArtistName = styled.div`
    font-family: Fuji-Bold;
    font-size: 25px;
    letter-spacing: 0.1em;
    color: #fff;
    padding-top: 20px;


`;

export const AboutArtist = styled.div`
    width: 70%;
    height: 200px;
    color: #fff;
    font-size: 17px;
    padding: 10px 50px;
    letter-spacing: 0.1em;
    line-height: 1.3em;

`;

export const ProfileIconContainer = styled.div`
    width: 110px;
    height: 100px;
    background-image: url(${ProfileIcon});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

export const Experience = styled.div`
    width: 70%;
    height: 200px;
    color: #fff;
    padding: 10px 50px;

    > h3 {
        font-size: 18px;
        letter-spacing: 0.1em;
        padding-top: 7px;
        padding-bottom: 8px;
        color: #A65EC6;
    }

`;