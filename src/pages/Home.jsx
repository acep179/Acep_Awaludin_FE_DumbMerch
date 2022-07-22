import React from 'react'
import { NavBar, ProductCard } from './../component'
import { useQuery } from "react-query";
import { API } from '../config/api';

function Home() {

    let { data: products } = useQuery('productsCache', async () => {
        const response = await API.get('/products')
        return response.data.data.products;
    });

    console.log(products)


    return (
        <div>
            <NavBar />

            <h5 className='text-orange container'>Product</h5>

            {products.map((item) => {
                return (
                    <div className='d-flex'>
                        <ProductCard image={item.image} name={item.name} price={item.price} qty={item.qty} />
                    </div>
                )
            })}
        </div>
    )
}

export default Home