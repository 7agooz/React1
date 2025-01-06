import React from 'react'

export default function About() {
  document.title = 'About'
  return (
    <div className='vh-100 my-bg d-flex justify-content-center align-items-center flex-column head text-white'>
      <h2 className='fw-bolder'>ABOUT COMPONENT</h2>
      <span> <i className="fa-solid fa-star "></i></span>
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <article>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</article>
          </div>
          <div className="col-md-6 ">
            <article>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</article>
          </div>
        </div>
      </div>
    </div>
  )
}
