import React from 'react'
import '../style/faculties_cart.css'

import {
        Button,
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalFooter,
        ModalBody,
        useDisclosure,
        ModalCloseButton,
      } from '@chakra-ui/react'
import {FaFacebookF,FaWhatsapp,FaInstagram} from 'react-icons/fa';

const FacultiesCart = (props) => {

        const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure()

        return (
                <>

                 <div class="swiper-slide card">
                    <div class="card-content">
                        <div class="image">
                            <img src={props.image} alt="display" />
                        </div>

                            <div class="media-icons">
                              <a href=""> <FaWhatsapp  id='faculti_socal_icon' /></a>
                              <a href=""> <FaFacebookF id='faculti_socal_icon' /></a>
                              <a href=""> <FaInstagram id='faculti_socal_icon' /></a>
                            </div>

                            <div class="name-profession">
                             <span class="name">{props.name}</span>
                             <span class="profession">{props.profession}</span>
                             <span className="degree">{props.degree}</span>
                            </div> 

                         <div class="button">
                         <button  onClick={onOpen1} class="hireMe">About me</button>                   
                       

                               <Modal   onClose={onClose1} isOpen={isOpen1} isCentered>
                                 <ModalOverlay />
                                 <ModalContent>
                                   <ModalHeader>{props.name}</ModalHeader>
                                   <ModalCloseButton />
                                   <ModalBody>
                                       <p>{props.content}</p>
                                   </ModalBody>
                                   <ModalFooter>
                                    <Button onClick={onClose1}>Close</Button>
                                   </ModalFooter>
                                 </ModalContent>
                               </Modal>
                            <button class="hireMe">hireMe</button>
                         </div>
                    </div>
                </div>
    
    </>
  )
}

export default FacultiesCart