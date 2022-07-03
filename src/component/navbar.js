import React from 'react'
import Logo from './../assets/img/logo.png'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="" width="70" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto fw-bolder">
                        <li className="nav-item">
                            <a className="nav-link link-white" aria-current="page" href="#">Complain</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-white" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-white" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar