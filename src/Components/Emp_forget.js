import React from 'react'
import '../Components/Emp_forget.css'
import Emp_login from './Emp_login'

function Emp_forget() {
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
                <div class="app-title forgettitle">
                  <span>FORGOT PASSWORD</span>
                </div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input class="app-form-control forgetinput" placeholder="NAME"></input>
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control forgetinput" type="password" placeholder="PASSWORD"></input>
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button forgetbut" href="Emp_login"> CANCEL</button>
                    <button class="app-form-button forgetbut">UPDATE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Emp_forget