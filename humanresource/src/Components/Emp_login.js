import React from 'react'
import '../Components/Emp_login.css'

function Emp_login() {
  return (
    <div className='bg' >
        <div className='emplog'>
          <h2 className='emp_login_head'>EMPLOYEE LOGIN</h2>
        </div>
        <div className='emp_loginbox'>
          <div className='details_emp'>
            <form>
              <div> <input type="text" placeholder="Enter email"></input> </div>
              <div> <input type="password" placeholder="Enter password"></input>
                <span style={{ marginLeft: '100px', }}>Don't have an account?
                  <a href="#">Signup</a>
                </span>
              </div>
              <input type="button" class="button" value="Login"></input>
              <a href="#" style={{ marginLeft: '100px', }}>Forgot password?</a>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Emp_login