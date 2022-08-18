import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query';
import { API } from '../config/api';
import { UserContext } from '../context/userContext';


function LoginForm() {

  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const body = JSON.stringify(form);
      const response = await API.post('/login', body, config);

      if (response?.status === 200) {

        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data.data,
        });

        if (response.data.data.status === 'customer') {
          navigate('/');
        } else {
          navigate('/');
        }

        const alert = (
          <div class="alert alert-danger" role="alert">
            Failed
          </div>
        );

        setMessage(alert);
      }

    } catch (error) {
      const alert = (
        <div class="alert alert-danger" role="alert">
          Login failed
        </div>
      );
      setMessage(alert);
      console.log(error);
    }
  });


  return (
    <div className='col-5 d-flex align-items-center'>
      <div className="card bg-grey-800 p-3">
        <h2>Login</h2>
        {message && message}
        <form onSubmit={(e) => handleSubmit.mutate(e)}>
          <div className='input-group input-group-lg mt-3'>
            <input
              type="email"
              className='form-control bg-grey-700'
              placeholder='Email'
              value={email}
              onChange={handleChange}
              name='email'
            />
          </div>
          <div className='input-group input-group-lg mt-3'>
            <input
              type="password"
              className='form-control bg-grey-700'
              placeholder='Password'
              value={password}
              onChange={handleChange}
              name='password'
            />
          </div>
          <button className='btn btn-orange w-100 mt-3' type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm