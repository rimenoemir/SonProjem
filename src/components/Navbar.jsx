import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import bursa from '../assets/bursa.png'



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  nav-pills nav-justified" >
  <div  className="container ">
    <a  className="navbar-brand" href="/"><img src={bursa} width="100px"/></a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse " id="navbarNav">
      <ul  className="navbar-nav ">
         <NavLink className="nav-link" to="/">AnaSayfa</NavLink>
         <NavLink className="nav-link" to="/subeler">Sosyal Tesislerimiz</NavLink>
         
      </ul>

    </div>
  </div>
</nav>
  )
}

export default Navbar