import React from 'react'

function LoginForm() {
  return (
    <div className='col-5 d-flex align-items-center'>
      <div className="card bg-grey-800 p-3">
        <h2>Login</h2>
        <form>
          <div className='input-group input-group-lg'>
            <input type="text" className='form-control bg-grey-700' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Email' />
          </div>
          <div className='input-group input-group-lg'>
            <input type="password" className='form-control bg-grey-700' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Password' />
          </div>
          <button className='btn btn-orange w-100' type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm