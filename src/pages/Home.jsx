import React from 'react'
import { NavBar, ProductCard } from './../component'
import { useQuery } from "react-query";
import { API } from '../config/api';

function Home() {

    let { data: products } = useQuery('productsCache', async () => {
        const response = await API.get('/products')
        return response.data.data.products;
    });

    return (
        <div>
            <NavBar />

            <div className='container d-flex flex-wrap'>
                <h5 className='text-orange w-100'>Product</h5>

                {products?.map((item) => {
                    return (
                        <ProductCard key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} qty={item.qty} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home