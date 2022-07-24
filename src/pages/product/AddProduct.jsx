import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { NavBar } from './../../component'
import { API } from '../../config/api';

function AddProduct() {

    const navigate = useNavigate()
    const { token } = localStorage

    const [categories, setCategories] = useState([])
    const [categoryId, setCategoryId] = useState([])
    const [preview, setPreview] = useState(null)
    const [form, setForm] = useState({
        name: '',
        desc: '',
        image: '',
        price: '',
        qty: ''
    })

    const getCategories = async () => {
        try {
            const response = await API.get('/categories');
            setCategories(response.data.data.categories);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChangeCategoryId = (e) => {
        const id = e.target.value;
        const checked = e.target.checked;

        if (checked) {

            setCategoryId([...categoryId, parseInt(id)]);
            // Jika dicentang, maka categoryId akan disimpan

        } else {

            let newCategoryId = categoryId.filter((categoryIdItem) => {
                return categoryIdItem !== id;
                // Jika tidak dicentang maka categoryId nya akan dihapus

            });
            setCategoryId(newCategoryId);
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
                e.target.type === 'file' ? e.target.files : e.target.value,
        });

        // Create image url for preview
        if (e.target.type === 'file') {
            let url = URL.createObjectURL(e.target.files[0]);
            // URL digunakan untuk membuat URL dari gambar yang di-upload
            setPreview(url);
        }
    };

    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            // Configuration
            const config = {
                headers: {
                    'Content-type': 'multipart/form-data',
                    token
                },
            };

            // Store data with FormData as object
            const formData = new FormData();
            formData.set('image', form.image[0], form.image[0].name);
            formData.set('name', form.name);
            formData.set('desc', form.desc);
            formData.set('price', form.price);
            formData.set('qty', form.qty);
            formData.set('categoryId', categoryId);
            // categoryId didapatkan dari handleChangeCategory

            console.log(form);

            // Insert product data
            const response = await API.post('/product', formData, config);
            console.log(response);

            navigate('/product');
        } catch (error) {
            console.log(error);
        }
    });

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div>
            <NavBar />

            <div className="container">
                <h5>Add Product</h5>
                <form onSubmit={(e) => handleSubmit.mutate(e)}>
                    {preview && (
                        <div className='mb-2'>
                            <img
                                src={preview}
                                style={{
                                    maxWidth: '150px',
                                    maxHeight: '150px',
                                    objectFit: 'cover',
                                }}
                                alt={preview}
                            />
                        </div>
                    )}
                    <input
                        className='mb-3'
                        type="file"
                        id='upload'
                        name='image'
                        onChange={handleChange}
                    />
                    <input
                        className="form-control bg-grey-700 mb-3"
                        type="text"
                        name='name'
                        onChange={handleChange}
                        aria-describedby="inputName"
                        placeholder='Product Name'
                    />
                    <textarea
                        className="form-control bg-grey-700 mb-3"
                        name='desc'
                        onChange={handleChange}
                        rows="3"
                        placeholder='Product Description'
                    >
                    </textarea>
                    <input
                        className="form-control bg-grey-700 mb-3"
                        type="number"
                        name='price'
                        onChange={handleChange}
                        aria-describedby="inputPrice"
                        placeholder='Product Price'
                    />
                    <input
                        type="number"
                        class="form-control bg-grey-700 mb-3"
                        name='qty'
                        onChange={handleChange}
                        aria-describedby="inputQty"
                        placeholder='Product Quantity'
                    />
                    <div className="card-form-input mb-5">
                        <div
                            className="text-secondary mb-1"
                            style={{ fontSize: '15px' }}
                        >
                            Category
                        </div>
                        {categories.map((item, index) => (
                            <label className="checkbox-inline me-4" key={index}>
                                <input
                                    type="checkbox"
                                    value={item.id}
                                    onClick={handleChangeCategoryId}
                                />{' '}
                                {item.name}
                            </label>
                        ))}
                    </div>

                    <button className='btn btn-success w-100'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct