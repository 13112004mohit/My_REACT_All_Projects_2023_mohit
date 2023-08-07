import React from 'react'
import '../style/packages.css';
import {RiBookmark3Fill} from 'react-icons/ri'
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


const TourCart = (props) => {
        const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure()
  return (
    <>
         <div className="p_m_box">
                   <div className="p_F_box_con">
                     <img src={props.image} alt="the kashi tour" />
                   </div>
                   <div className="p_S_box_con">
                       <h1 className="P_S_h1">{props.heading}</h1>
                       <p className="P_S_p1"> {(props.content).slice(0,155)}...
                       <Button colorScheme='twitter' variant='link'  onClick={onOpen1}><p>Read More</p></Button>                        
                       </p>

                       <Modal   onClose={onClose1} isOpen={isOpen1} isCentered>
                         <ModalOverlay />
                         <ModalContent>
                           <ModalHeader>{props.heading}</ModalHeader>
                           <ModalCloseButton />
                           <ModalBody>
                               <p>{props.content}</p>
                           </ModalBody>
                           <ModalFooter>
                            <Button onClick={onClose1}>Close</Button>
                           </ModalFooter>
                         </ModalContent>
                       </Modal>
                       <div className="P_S_data">
                        <p><b>Duration : </b>{props.duration} year</p>
                        <p><b>College Time : </b>Winter-{props.wintertime} / Summer-{props.summertime}</p>
                        <p><b>Extra Classes fee : </b> {props.additionalpprice}/- <b>INR</b></p>
                        <p><b>Services : </b>{props.services}</p>
                       </div>
                   </div>
                   <div className="p_T_box_con">
                     <h1 className="p_T_price">{props.price}/-INR <br /> <p className='prson'>pre Courses</p> </h1>
                    
                     <a  href="tel:9839136949" >
                         <button class="animated-button" style={{border:'none',backgroundColor:'transparent'}}>
                            <span className="animated-button_white">Learn More<RiBookmark3Fill id='forward_icon'/></span>
                         </button>
                      </a>
                   </div>
               </div>
    </>
  )
}

export default TourCart