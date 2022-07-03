import React from 'react'
import logo from './../assets/img/logo.png'

function MainHero() {
  return (
    <div className='col-7'>
      <img src={logo} alt='Logo DumbMerch' width={264} />
      <h1>Easy, Fast and Reliable</h1>
      <p className='text-secondary w-75'>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in <strong>Indonesia</strong></p>
    </div>
  )
}

export default MainHero