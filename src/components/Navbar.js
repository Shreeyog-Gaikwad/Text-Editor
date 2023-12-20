import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className ={`navbar navbar-expand-lg bg-${props.mode} border-bottom border-body rounded-bottom-4`} data-bs-theme={`${props.mode}`}>
      <div className ="container-fluid">
        <a className ="navbar-brand mx-3 fs-3 fw-bold" href="/">{props.title}</a>
        {/*<button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className ="navbar-toggler-icon"></span>
        </button>
        <div className ="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
            <li className ="nav-item">
              <a className ="nav-link active mx-2" aria-current="page" href="#">Home</a>
            </li>
            <li className ="nav-item">
              <Link className ="nav-link active mx-2" to="/about">{props.aboutText}</Link>
            </li>
            </ul>
        </div>*/}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <label className= "form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='dark'?'Dark Mode':'Light Mode'}</label>
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        </div>
      </div> 
    </nav>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title : "Set Title Here",
  aboutText : "Set About Here"
} 