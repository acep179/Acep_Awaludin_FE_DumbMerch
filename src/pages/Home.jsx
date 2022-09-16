import React from 'react'
import { NavBar, ProductCard } from './../component'
import { useQuery } from "react-query";
import { API } from '../config/api';

function Home() {

    let { data: products } = useQuery('productsCache', async () => {
        const response = await API.get('/products')
        return response.data.products;
    });

    return (
        <div>
            <NavBar />

            <div className='container d-flex flex-wrap justify-content-between'>
                <h5 className='text-orange w-100'>Product</h5>

                {products?.length > 0 ? products?.map((item) => {
                    return (
                        <ProductCard key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} qty={item.qty} />
                    )
                }) : (<h3 className='text-center w-100'>Sorry, no products yet</h3>)}
            </div>
        </div>
    )
}

export default Home