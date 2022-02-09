import React from 'react'
import ReactDom from 'react-dom'
import styled from 'styled-components';

import VisionHeaderBackground from '../../assets/Background/cash-lambo.jpg';
import VisionBackground1 from '../../assets/Background/cash-car.jpg';
import VisionBackground2 from '../../assets/Background/cash-greencarjpg.jpg'

export default function Modal({ open, onClose }) {
    if(!open) return null
    return ReactDom.createPortal(
        
          <OverLayStyles>
          <Headbutton onClick={onClose}>Close</Headbutton>
            <ModalStyles>
                
                <HeaderVision>
                  <h2>My Vision about my Story</h2>
                  <h4>The inspiration for this project</h4>
                </HeaderVision>

                <VisionDescription>
                  <VisionDescriptionDiv>
                      <h5>
                          Digital Art is always a big part of my life.
                          Most people wake up to the inspiration of their favorite
                          Artist and go to bed thinking about to their favorit Artist.
                      </h5>
                  </VisionDescriptionDiv>

                  <VisionDescriptionDivTwo>
                        <span>
                          It is with the concept of a space formed by what goes on, <br />
                          and by who goes through it. I wanna show some new spaces in the art. <br />
                          Get more to think about this topics and do something.

                        </span>

                  </VisionDescriptionDivTwo>


                </VisionDescription>

                <VisionBackground />
                <SecondBackground />

              <FooterVision>
                  <FooterToolsDiv>
                    <h5>Tools</h5>

                    <span>Illustrator</span>
                    <span>InDesign</span>
                    <span>Cinema4D</span>
                    <span>Blender</span>
                  
                  </FooterToolsDiv>

                  <ButtonPop onClick={onClose}>Close</ButtonPop>
              
              </FooterVision>


            </ModalStyles>
          </OverLayStyles>,
        
        document.getElementById('portal')
      )
}

export const OverLayStyles = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .9);
      z-Index: 1000;

      
      
  
`;

export const ModalStyles = styled.div`
    position: fixed;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 90vw;
    height: 1000px;
    left: 50%;
    left: 50%;
    transform: translate(-50%, -50%);    
    margin-top: 600px;
    border-radius: 10px;

    background-color: #1b1b1b;
    padding: 15px;
    z-Index: 1000;
`;

export const HeaderVision = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    background-image: url(${VisionHeaderBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.7;


    > h2 {
      letter-spacing: 0.1em;
      color: #fff;
      line-height: 1.5em;
      font-size: 45px;
      opacity: 1;
      

    }

    > h4 {
      font-family: MigraExtraBold;
      letter-spacing: 0.07em;
      color: yellow;

    }
`;

export const VisionBackground = styled.div`
    width: 100%;
    height: 800px;
    background-image: url(${VisionBackground1});
    background-position: center;
    background-size: contain;

`;


export const VisionDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 450px;

    color: #fff;
    background-color: #808000;


`;

export const VisionDescriptionDiv = styled.div`
    width: 50%;
    padding: 10px;
    padding-right: 20px;

    

    > h5 {
      font-size: 40px;
    }

`;

export const VisionDescriptionDivTwo = styled.div`

    width: 50%;
    padding-left: 20px;
    padding: 40px;
    font-size: 22px;
    letter-spacing: 0.12em;

    color: yellow;

`;

export const SecondBackground = styled.div`
    width: 100%;
    height: 900px;
    background-image: url(${VisionBackground2});
    background-position: center;
    background-size: cover;


`;

export const FooterVision = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 500px;
    background-color: black;

`;

export const FooterToolsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 300px;
    color: #fff;
    font-size: 25px;
    letter-spacing: 0.15em;
    font-family: Fuji-Bold;
    line-height: 1.5em;
    

    > h5 {
          font-family: MigraExtraBold;
          font-size: 40px;
          color: #cd8af9;
          letter-spacing: 0.2em;

    }


`;

export const ButtonPop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: MigraExtraBold;
    letter-spacing: 0.2em;
    width: 300px;
    height: 40px;
    color: #fff;
    cursor: pointer;
    border: 2px solid #cd8af9;
    border-radius: 20px;

    text-align: center;
    transition: all 0.5s ease-in-out;    




    :hover {
        background-color: #cd8af9;
        border-color: #fff;
        color: #000;


    }

`;

export const Headbutton = styled.div`
    position: absolute;
    margin-top: 50px;
    margin-left: 10vw;
    color: red;

    display: flex;
    justify-content: center;
    align-items: center;
    font-family: MigraExtraBold;
    font-size: 20px;
    letter-spacing: 0.15em;
    width: 300px;
    height: 40px;
    color: #fff;
    cursor: pointer;
    border: 2px solid #cd8af9;
    border-radius: 20px;
    background-color: #000;
    transition: all 0.5s ease-in-out;

    :hover {
        background-color: #cd8af9;
        border-color: #fff;
        color: #000;


    }



`;
