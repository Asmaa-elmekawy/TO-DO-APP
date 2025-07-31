import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
   <section data-aos="fade-up" className="container mainlogin ">
  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-4">
      <div className="text-center mb-4" data-aos="fade-up">
        <h1>Log-in</h1>
      </div>

      <div className="mainsec3 card p-4 shadow-sm" data-aos="fade-up">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Email</label>
            <input required type="email" name="email" id="email" className="form-control" placeholder="Email" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">Password</label>
            <input required type="password" name="password" id="password" className="form-control" placeholder="Password" />
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary"><Link className='buttonlogin text-white' to='/' >Submit</Link></button>
          </div>

          <p className="text-center">
            Don't have an account? <Link  to="/signup">Sign-Up</Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

     
    
    </>
  )
}

export default Login