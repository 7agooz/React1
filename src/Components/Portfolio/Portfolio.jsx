import React, { useState } from 'react';
import pic1 from '../../assets/port1.png';
import pic2 from '../../assets/port2.png';
import pic3 from '../../assets/port3.png';
import Modal from '../Modal/Modal';

const pics = [pic1, pic2, pic3, pic1, pic2, pic3];

export default function Portfolio() {
  const [selectedPic, setSelectedPic] = useState(0);

  const handleImageClick = (pic) => {
    setSelectedPic(pic);
  }

  return (
    <>
      {selectedPic && <Modal image={selectedPic} onClose={() => setSelectedPic(0)} />}
      <div className="container">
        <div className="text-center flex-column head2">
          <h2 className="fw-bolder h1">CONTACT SECTION</h2>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
        </div>
      </div>
      <div className="container my-5 vh-100">
        <div className="row g-3">
          {pics.map((pic, index) => (
            <div className="col-md-4 port" key={index}>
              <div
                className="image position-relative"
                onClick={() => handleImageClick(pic)}
              >
                <img src={pic} className="w-100 h-100" />
                <div className="layer w-100 h-100 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus text-white fs-1 fw-bolder"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
