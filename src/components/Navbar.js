import React from 'react'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <nav classname="navbar navbar-expand-lg bg-body-tertiary">
  <div classname="container-fluid">
    <a classname="navbar-brand" href="#">Navbar</a>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon"></span>
    </button>
    <div classname="collapse navbar-collapse" id="navbarNavDropdown">
      <ul classname="navbar-nav">
        <li classname="nav-item">
          <a classname="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="#">Features</a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="#">Pricing</a>
        </li>
        <li classname="nav-item dropdown">
          <a classname="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul classname="dropdown-menu">
            <li><a classname="dropdown-item" href="#">Action</a></li>
            <li><a classname="dropdown-item" href="#">Another action</a></li>
            <li><a classname="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
