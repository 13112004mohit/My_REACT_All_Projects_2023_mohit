import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
   content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width:'28rem',
    height:'23rem',
    overflow:'hidden',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const VideoModal = ({ videoUrl, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <iframe
        src={videoUrl}
        width="100%"
        height="97%"
        frameBorder="0"
        allowFullScreen
      />
      <button style={{backgroundColor:'red',color:'white',padding:'2px 5px',border:'none',outline:'none',borderRadius:'.2rem'}} onClick={onClose}
      >
       close
      </button>
    </Modal>
  );
};

export default VideoModal;
