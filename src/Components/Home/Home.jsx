import React from 'react'
import logo from '../../assets/logo.svg'

export default function Home() {
  return (
    <div className='vh-100 my-bg d-flex justify-content-center align-items-center flex-column head'>
      <div className="image text-center">
      <img src={logo} className='w-75' alt="" />
      </div>
     <h1 className='text-white fw-bolder'>START FRAMEWORK</h1> 
    <span> <i className="fa-solid fa-star text-white"></i></span>
     <p className='text-white '>Graphic Artist - Web Designer - Illustrator</p>
      </div>
  )
}
