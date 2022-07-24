import React from 'react'
import { ListProductTable, NavBar } from '../../component'
import { useQuery } from "react-query";
import { API } from '../../config/api';
import { Link } from 'react-router-dom';

function Product() {

    let { data: products } = useQuery('productsCache', async () => {
        const response = await API.get('/products')
        return response.data.products;
    });

    console.log(products)

    return (
        <div>
            <NavBar />
            <div className='container d-flex flex-column'>
                <p className='fs-5 fw-bold'>List Product</p>
                <Link className='btn btn-light mb-2 ms-auto' to={'/add-product'}>Add Product</Link>
                <table className='table-dark-striped w-100'>
                    <tr>
                        <th className='ps-2'>No</th>
                        <th className='p-2'>Photo</th>
                        <th className='p-2'>Product Name</th>
                        <th className='p-2'>Product Desc</th>
                        <th className='p-2'>Price</th>
                        <th className='p-2'>Qty</th>
                        <th className='p-2'>Action</th>
                    </tr>
                    {products?.map((item) => {
                        return (
                            <ListProductTable key={item.id} id={item.id} image={item.image} name={item.name} desc={item.desc} price={item.price} qty={item.qty} />
                        )
                    })}
                </table>
            </div >
        </div >
    )
}

export default Product