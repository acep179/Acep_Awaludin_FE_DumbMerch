import React from 'react'
import { MainHero, RegisterForm, LoginRegisterBtn } from './../component'

function Register() {
    return (
        <div className='h-100vh d-flex align-items-center'>
            <div className='container'>
                <div className='row'>
                    <MainHero />
                    <RegisterForm />
                </div>
                <div className="row">
                    <LoginRegisterBtn />
                </div>
            </div>
        </div>
    )
}

export default Register