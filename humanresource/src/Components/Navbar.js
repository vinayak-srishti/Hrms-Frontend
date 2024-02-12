import React from 'react'
import '../Components/Navbar.css'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand col-10" href="#" >HRMS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav" >
                <li class="nav-item" >
                  <a class="nav-link active " aria-current="page" href="#" >HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active d-inlineblock" href="#">ABOUT</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">CAREER</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">LOGIN</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
        </div>
  )
}

export default Navbar