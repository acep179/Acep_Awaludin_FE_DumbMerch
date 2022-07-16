import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query';
import { API } from '../config/api';


function RegisterForm() {

    let navigate = useNavigate()
    const [message, setMessage] = useState(null);

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = form;

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

            const response = await API.post('/register', body, config);

            navigate('/login')

        } catch (error) {
            const alert = (
                <div class="alert alert-danger" role="alert">
                    Failed
                </div>
            );
            setMessage(alert);
            console.log(error);
        }
    });

    return (
        <div className='col-5 d-flex align-items-center'>
            <div className="card bg-grey-800 p-3">
                <h2 className='mb-3'>Register</h2>
                <form onSubmit={(e) => handleSubmit.mutate(e)}>
                    <div className='input-group input-group-lg mb-3'>
                        <input
                            type="text"
                            className='form-control bg-grey-700'
                            placeholder='Name'
                            name='name'
                            value={name}
                            onChange={handleChange} />
                    </div>
                    <div className='input-group input-group-lg mb-3'>
                        <input
                            type="email"
                            className='form-control bg-grey-700'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={handleChange} />
                    </div>
                    <div className='input-group input-group-lg mb-3'>
                        <input
                            type="password"
                            className='form-control bg-grey-700' placeholder='Password'
                            name='password'
                            value={password}
                            onChange={handleChange} />
                    </div>
                    <button className='btn btn-orange w-100' type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm