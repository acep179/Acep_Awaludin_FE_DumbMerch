import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './../assets/img/logo.png'

function User() {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link link-white" to="/profile">Profile</Link>
            </li>
        </>
    )
}

function Admin() {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link link-white" to="/category">Category</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link link-white" to="/product">Product</Link>
            </li>
        </>
    )
}

function NavBar() {

    const [isUser, setIsUser] = useState(true)


    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="" width="70" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto fw-bolder">
                        <li className="nav-item">
                            <Link className="nav-link link-white" aria-current="page" to="/complain">Complain</Link>
                        </li>
                        {isUser ? <User /> : <Admin />}
                        <li className="nav-item">
                            <Link className="nav-link link-white" to="/login">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar