import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query';
import { NavBar } from '../../component'
import { API } from '../../config/api';

function AddCategory() {

    let navigate = useNavigate()
    const [message, setMessage] = useState(null);

    const [form, setForm] = useState({
        name: '',
    });

    const { name } = form;

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

            await API.post('/category', body, config);

            navigate('/category')

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
        <div>
            <NavBar />
            <div className='container' >
                <h5>Add Category </h5>
                {message && message}
                <form onSubmit={(e) => handleSubmit.mutate(e)}>
                    <input
                        className='w-100 bg-grey-700 border border-white my-5'
                        type="text"
                        name='name'
                        value={name}
                        onChange={handleChange}
                        placeholder='Add Category Here'
                    />
                    <button className='btn btn-success w-100' > Save </button>
                </form>
            </div>
        </div>
    )
}

export default AddCategory