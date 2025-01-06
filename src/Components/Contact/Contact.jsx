import React from 'react'

export default function Contact() {
  document.title = 'Contact'  
  return (<>
    <div className='vh-100  head2 container  '>
      <div className="text-center flex-column">
     <h2 className='fw-bolder h1'>CONATCT SECTION</h2> 
     <span> <i className="fa-solid fa-star "></i></span>
     </div>
     <form action="" className='m-5'>
        <input type="text" className='form-control  my-3 ' placeholder='userName' />
        <input type="number" className='form-control  my-3 ' placeholder='userAge' />
        <input type="email" className='form-control  my-3 ' placeholder='userEmail' />
        <input type="password" className='form-control  my-3 ' placeholder='userPassword' />
        <button className='btn btn-primary'>Send Message</button>
      </form>
      </div>
      
      </>
  )
}
