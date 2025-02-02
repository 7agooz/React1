import React from 'react'

export default function Footer() {
  return (
    <footer className='container-fluid text-center text-white  layout-color p-4'>
        <div className="row">
    <div className="col-md-4">
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
    </div>
<div className="col-md-4">
    <h3>AROUND THE WEB</h3>
    <div className="icons d-flex justify-content-center">
    <a href="#" className='text-white m-3'><i className='fa-brands fa-twitter'></i></a>
    <a href="#" className='text-white m-3'><i className='fa-brands fa-facebook'></i></a>
    <a href="#" className='text-white m-3'><i className='fa-brands fa-instagram'></i></a>
    <a href="#" className='text-white m-3'><i className="fa-solid fa-globe"></i></a> 
    </div> 
</div>
<div className="col-md-4">
    <h3>ABOUT FREELANCER</h3>
    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
</div>
</div>
</footer>
  )
}
