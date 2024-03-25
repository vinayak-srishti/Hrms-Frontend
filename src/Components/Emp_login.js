import React from 'react'
import '../Components/Emp_login.css'

function Emp_login() {
  return (
    <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>EMPLOYEE LOGIN</span>
                </div>
                <div class="app-signup">Don't have an account? <a className='signuplink' href="Emp_signup">Sign up</a> </div>
                <a className='forgetlink' href="Emp_forget">Forget password?</a>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="NAME"></input>
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" type="password" placeholder="PASSWORD"></input>
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button">CANCEL</button>
                    <button class="app-form-button">LOGIN</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Emp_login