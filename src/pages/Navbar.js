import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    {/* <ul class="navbar-nav mr-auto"> */}
    <ul class="nav nav-tabs  tabs" role="tablist">
      <li class="nav-item active">
        <Link className="nav-link active show" to ="/home">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active show" to="/aboutus">about us</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active show" to="/contactus">Contact us</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active show" to="/contactus/1">Contact us detail</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active show" to="/simpleform">form</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active show" to="/addData">AddData</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link active show" to="/signup">Signup</Link>
      </li>
      
    </ul>
  </div>
</nav>
  )
}