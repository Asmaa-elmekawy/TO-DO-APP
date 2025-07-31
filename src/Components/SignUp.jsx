import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>
    <div data-aos="fade-up" className='signsection col-md-6 col-lg-4 container py-3'>
  <h1 className='text-center mb-4'>Sign-Up</h1>

  <section className="sectionSign mx-auto row justify-content-center" data-aos="fade-up">
    <div className=' col-lg-10 col-md-6'>

      <input required className='col-md-4 form-control my-4' type="text" name="FirstName" placeholder="First Name" />
      <input required className='form-control mb-3' type="text" name="LastName" placeholder="Last Name" />
      <input required className='form-control mb-3' type="email" name="gmail" placeholder="Email" />
      <input required className='form-control mb-4' type="password" name="password" placeholder="Password" />

      <div className='d-flex justify-content-center mb-3'>
        <button className='btn btn-primary'><Link to='/' className='text-white buttonsign'>Sign-Up</Link></button>
      </div>

      <p className='text-center'>
        Have an account? <Link to='/login'>Log-In</Link>
      </p>

    </div>
  </section>
</div>

    
    
    </>
  )
}

export default SignUp