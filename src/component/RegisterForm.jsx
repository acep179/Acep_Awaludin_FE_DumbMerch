import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from 'react-query';
import { API } from '../config/api';


function RegisterForm() {
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

        } catch (error) {
            const alert = (
                <div class="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
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
                <form>
                    <div className='input-group input-group-lg mb-3'>
                        <input type="text" className='form-control bg-grey-700' placeholder='Name' name='name' />
                    </div>
                    <div className='input-group input-group-lg mb-3'>
                        <input type="email" className='form-control bg-grey-700' placeholder='Email' name='email' />
                    </div>
                    <div className='input-group input-group-lg mb-3'>
                        <input type="password" className='form-control bg-grey-700' placeholder='Password' name='password' />
                    </div>
                    <Link to="/login">
                        <button className='btn btn-orange w-100' type="submit">Register</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm