import React, { useState }  from 'react'
import styled from 'styled-components'

import Modal from './PopUpModal.component';

export default function PopUpArtist() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <PopUpContainer>
        <PopUpDiv>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
        
        </Modal>

        </PopUpDiv>


        </PopUpContainer>
    )
}


export const PopUpContainer = styled.div`

`;

export const PopUpDiv = styled.div`

`;
