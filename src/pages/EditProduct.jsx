import React from 'react'
import { NavBar } from './../component'
import { useQuery } from "react-query";
import { API } from '../config/api';
import { useParams } from 'react-router-dom';

function EditProduct() {

    const { id } = useParams()

    let { data: product } = useQuery('productCache', async () => {
        const response = await API.get(`/product/${id}`)
        return response.data.data.product;
    });

    return (
        <div>
            <NavBar />
            <div className="container">
                <h5>Edit Product</h5>
                <form>
                    <input type="file" className='mb-3' />
                    <input type="text" class="form-control bg-grey-700 mb-3" id="inputName" aria-describedby="inputName" placeholder={product.name} />
                    <textarea class="form-control bg-grey-700 mb-3" id="formControlTextarea1" rows="3" placeholder={product.desc}></textarea>
                    <input type="number" class="form-control bg-grey-700 mb-3" id="inputPrice" aria-describedby="inputPrice" placeholder={product.price} />
                    <input type="number" class="form-control bg-grey-700 mb-5" id="inputQty" aria-describedby="inputQty" placeholder={product.qty} />
                    <button type='button' className='btn btn-success w-100'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default EditProduct