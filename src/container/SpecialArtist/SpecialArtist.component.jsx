import React, { useRef } from 'react'
import styled from 'styled-components';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import ArtistPicture from '../../assets/Background/cash-macanaya-zgMZo1Bkzg0-unsplash.jpg'



import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";



const Scene = () => {
    const scene = useRef();
    useFrame(() => {
      scene.current.rotation.y += 0.001;
      scene.current.rotation.x += 0.001;
      
    });
    return (
      <group ref={scene}>
        <Box>
          <meshLambertMaterial attach="material" color="white" />
        </Box>
      </group>
    );
  };


function SpecialArtist() {


    return (
        <SpecialArtistContainer>
                <ContainerObject>
                    <Canvas> <directionalLight intensity={0.5} />
                    <Scene />
                    </Canvas>
                </ContainerObject>
                <ContainerText>
                
                <h1>Special Artist of <br />
                the week</h1>
                <h2>CASH <br /> MACANAYA</h2>
                <SentimentVeryDissatisfiedOutlinedIcon/>
               
                
                </ContainerText>
                
        </SpecialArtistContainer>
    )
}

export default SpecialArtist




export const SpecialArtistContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 80vw;
    height: 1000px;

    

    background-image: url(${ArtistPicture});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    


`;

export const ContainerObject = styled.div`
    width: 50vw;
    height: 1000px;
    background-color: transparent;
    
`;

export const ContainerText = styled.div`
    width: 50vw;
    height: 1000px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    > h1 {
        font-family: Migra regular;
        font-size: 40px;
        color: #A65EC6;
        text-align: center;
        text-align: end;
        
    }

    > h2 {
        font-family: MigraExtraBold;
        font-size: 80px;
        color: #fff;
        letter-spacing: 0.2em;
        text-align: center;
        text-align: end;
        
    }

    > .MuiSvgIcon-root {
        font-size: 60px;
        color: #fff;
    }
    
`;



