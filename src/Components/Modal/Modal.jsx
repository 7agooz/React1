import React from 'react';

export default function Modal({ image, onClose }) {

  const handleClose = (e) => {
    
    if (e.target == e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="vh-100 position-fixed d-flex justify-content-center align-items-center text-center bg-dark bg-opacity-75 w-100 z-1 modal"
      onClick={handleClose}
    >
      <div className="position-relative">
        <img src={image}/>
      </div>
    </div>
  );
}
