import React, { useState }  from 'react'
import styled from 'styled-components'

import Modal from './PopUpModal.component';


export default function PopUpArtist() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <PopUpContainer>
        
        
            <ButtonWrapperStyles onClick={() => console.log('clicked')}>
            <ButtonVision onClick={() => setIsOpen(true)}>Vision</ButtonVision>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            Fancy Modal
        
            </Modal>
            </ButtonWrapperStyles>
        
        
        

        </PopUpContainer>
    )
}


export const PopUpContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 30px;
    -webkit-box-shadow: 1px 1px 40px 1px #000000; 
    box-shadow: 1px 1px 40px 1px #000000;
    border-radius: 8px;
    text-align: center;
    background-color: transparent;
    transition: all 0.5s ease-in-out;

    :hover {
      background-color: #fff;


    }


`;

export const PopUpDiv = styled.div`

`;

export const ButtonWrapperStyles = styled.div`
  position: relative;
  z-index: 1;

`;

export const OtherContentStyles = styled.div`
  position: relative;
  z-index: 2;
  background-color: red;
  padding: 10px;
`;

export const ButtonVision = styled.div`
    width: 70px;
    line-height: 1.5em;
    text-align: center;
    border-radius: 8px;
    letter-spacing: 0.1em;
    color: #A65EC6;
    transition: all 0.5s ease-in-out;


`;