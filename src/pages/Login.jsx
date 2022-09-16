import React from 'react'
import { MainHero, LoginForm, LoginRegisterBtn } from './../component'

function Home() {
  return (
    <div className='h-100vh d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <MainHero />
          <LoginForm />
        </div>
        <div className="row">
          <LoginRegisterBtn />
        </div>
      </div>
    </div>
  )
}

export default Home