import React from 'react'
import { Link } from 'react-router-dom'

function LoginRegisterBtn() {
    return (
        <div>
            <Link to="/login">
                <button className='btn btn-orange'>Login</button>
            </Link>
            <Link to="/register">
                <button className='btn btn-dark'>Register</button>
            </Link>
        </div>
    )
}

export default LoginRegisterBtn